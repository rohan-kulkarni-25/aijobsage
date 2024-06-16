import User from "../models/user.model.js";
import { APIError } from "../utils/APIError.js";
import { APIResponse } from "../utils/APIResponse.js";
import { OpenAI } from "openai";

import { asyncHandler } from "../utils/asyncHandler.js";
import fs from "fs";
import PDFParser from "pdf2json";
import { log } from "console";

const pdfParser = new PDFParser();

const generateAccessAndRefereshTokens = async (userId) => {
  try {
    const user = await User.findById(userId);
    const accessToken = await user.generateAccessToken();
    const refreshToken = await user.generateRefreshToken();

    user.refreshToken = refreshToken;
    await user.save({ validateBeforeSave: false });

    return { accessToken, refreshToken };
  } catch (error) {
    console.log(error);
    throw new APIError(
      500,
      "Something went wrong while generating referesh and access token"
    );
  }
};

const createUser = asyncHandler(async (req, res) => {
  try {
    // Destructure data from request body
    const {
      fullName,
      email,
      password,
      twitterProfile,
      githubProfile,
      linkedInProfile,
      bio,
      tagline,
      role,
    } = req.body;
    console.log(req.body);
    // Check if any required fields are missing or empty
    if (
      [fullName, email, password].some((field) => !field || field.trim() === "")
    ) {
      throw new APIError(
        400,
        "Name, Email, and Password are required to create an account."
      );
    }

    // Check if user already exists with the given email
    const existingUser = await User.findOne({ email });

    if (existingUser) {
      throw new APIError(400, "Email already registered. Please login.");
    }

    // Create user in MongoDB including resumeUrl and resumeText
    const user = await User.create({
      name: fullName,
      email,
      password,
      twitterProfile,
      githubProfile,
      linkedInProfile,
      bio,
      tagline,
      role,
    });

    // Remove sensitive fields from user object before sending in response
    const createdUser = await User.findById(user._id).select(
      "-password -refreshToken"
    );

    if (!createdUser) {
      throw new APIError(500, "Failed to create user.");
    }

    // Return success response with created user
    return res.status(201).json({
      status: 201,
      data: createdUser,
      message: "User created successfully.",
    });
  } catch (error) {
    // Handle errors and return appropriate API error response
    console.error("Error creating user:", error);
    throw new APIError(400, error.message || "Failed to create user.");
  }
});

const loginUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  console.log(email, password);

  if (!email) {
    throw new APIError(400, "username and userType is required");
  }

  const user = await User.findOne({ email });

  if (!user) {
    throw new APIError(404, "User does not exist");
  }

  const isPasswordValid = await user.comparePassword(password);

  if (!isPasswordValid) {
    throw new APIError(401, "Invalid user credentials");
  }

  const { accessToken, refreshToken } = await generateAccessAndRefereshTokens(
    user._id
  );

  const loggedInUser = await User.findById(user._id).select(
    "-password -refreshToken"
  );

  const options = {
    httpOnly: true,
    secure: true,
  };

  return res
    .status(200)
    .cookie("accessToken", accessToken, options)
    .cookie("refreshToken", refreshToken, options)
    .json(
      new APIResponse(
        200,
        {
          user: loggedInUser,
          accessToken,
          refreshToken,
        },
        "User logged In Successfully"
      )
    );
});

const generateContent = asyncHandler(async (req, res) => {
  const openai = new OpenAI({
    apiKey: `${process.env.APIKEY}`,
  });
  try {
    let { jobDescription, messageFor } = req.body;

    // openai.apiKey = process.env.OPENAI_KEY;

    const profile = await User.findOne({ email: "rohank2502@gmail.com" });
    console.log(profile);
    const prompt = `

        Generate content based on the following profile:

        Profile:
        - Full Name: ${profile.name}
        - Email: ${profile.email}
        - GitHub Profile: ${profile.githubProfile}
        - LinkedIn Profile: ${profile.linkedInProfile}
        - Twitter Profile: ${profile.twitterProfile}
        - Bio: ${profile.bio}
        - Tagline: ${profile.tagline}
        - Role: ${profile.role}
        - Message For: ${messageFor}

        This is job Description - ${jobDescription}

        To generate the response keep the following points in mind:
        - Firsly Analyse the Job Description and Bio of the person. If the person is not suitable for this job then give the proper fit percentage and reason for low score. This should be analysed very strictly. In range of 0 to 100. If the domain for which the company is hiring is not in the Bio then the candidate is not fit. He need to learn new skills
        - In the Messages of LinkedIn, Twitter and Email. You have to write the message for ${messageFor} of the compoany. which can help in get shortlisted. All of them must be generated.
        - Give all messages with proper spacing and format which can be rendered
        - Also Githubprofile TwitterProfile and LInkedin are provided if possible take some information about candidate from there

        fit_percentage 
    reason_fit 
        summary ( Summary of job descrption what they are looking for )
        linkedIn_Message 
        twitter_Message 
        cold_email

        Please generate suitable parsable json response considering the profile provided above. Ensure that the content is clear, professional, and tailored to the individual's profile, role, and the intended message recipient (${profile.messageFor}).
        `;

    let response = await openai.chat.completions.create({
      model: "gpt-3.5-turbo", // Use the appropriate engine
      messages: [
        {
          role: "user",
          content: prompt,
        },
      ],
    });
    // console.log(response.choices[0].message.content);
    // return res.status(200).send(response.choices[0].message.content);
    console.log(response.choices[0].message.content);
    return res.status(201).json({
      status: 200,
      data: JSON.parse(response.choices[0].message.content),
      message: "Content Generated Sucessfully",
    });
  } catch (error) {
    console.log(error);
    return res.status(400).json({
      status: 400,
      message: "Something went wrong",
    });
  }
});

export { createUser, generateContent, loginUser };
