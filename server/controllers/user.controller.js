import User from "../models/user.model.js";
import { APIError } from "../utils/APIError.js";
import { APIResponse } from "../utils/APIResponse.js";
import { OpenAI } from "openai";
import { asyncHandler } from "../utils/asyncHandler.js";
import fs from "fs";
import PDFParser from "pdf2json";

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
      fullname,
      email,
      password,
      twitterProfile,
      githubProfile,
      linkedInProfile,
      bio,
      tagline,
      role,
    } = req.body;

    // Check if any required fields are missing or empty
    if (
      [fullname, email, password].some((field) => !field || field.trim() === "")
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
      name: fullname,
      email,
      password,
      twitterProfile,
      githubProfile,
      linkedInProfile,
      resumeUrl,
      resumeText, // Add extracted text to user document
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

  if (!email) {
    throw new APIError(400, "username and userType is required");
  }

  const user = await User.findOne({
    $or: [{ email }],
  });

  if (!user) {
    throw new APIError(404, "User does not exist");
  }

  const isPasswordValid = await user.isPasswordCorrect(password);

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

const openai = new OpenAI({
  apiKey: "",
});
const generateContent = asyncHandler(async (req, res) => {
  try {
    let { profile } = req.body;

    // openai.apiKey = process.env.OPENAI_KEY;

    const prompt = `
    Generate content based on the following profile:
    
    Profile:
    - Full Name: ${profile.fullName}
    - Email: ${profile.email}
    - GitHub Profile: ${profile.githubProfile}
    - LinkedIn Profile: ${profile.linkedInProfile}
    - Twitter Profile: ${profile.twitterProfile}
    - Resume: ${profile.resume}
    - Bio: ${profile.bio}
    - Tagline: ${profile.tagline}
    - Role: ${profile.role}
    - Message For: ${profile.messageFor}
    
    Fit Percentage ( The percantage of the individual is fit for this job )
    Resume Suggestions ( Based on Job Description Analyse the Resume and give suggestions )
    Summary ( Summary of Job Description what they are looking for )
    LinkedIn Message ( Message to Draft for ${profile.messageFor} on linkedin under 200 chars. Professional but personalised.)
    Twitter Message ( Messaage to Draft for ${profile.messageFor} on Twitter Dm )
    Cold Email ( EMail which can be sent to ${profile.messageFor} to increase changes of shortlisting give HTML)
    
    Please generate suitable json response considering the profile provided above. Ensure that the content is clear, professional, and tailored to the individual's profile, role, and the intended message recipient (${profile.messageFor}).
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
    console.log(response.choices[0].message.content);
    return res.status(200).send(response.choices[0].message.content);
  } catch (error) {
    console.log(error);
  }
});

export { createUser, generateContent, loginUser };
