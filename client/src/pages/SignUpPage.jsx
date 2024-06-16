import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const SignUpPage = () => {
  const [formData, setFormData] = useState({
    email: "x@y.com",
    password: "rohan@25",
    fullName: "r",
    role: "r",
    tagline: "r",
    bio: "r",
    githubProfile: "https://rohankulkarni.dev",
    linkedInProfile: "https://rohankulkarni.dev",
    twitterProfile: "https://rohankulkarni.dev",
  });

  // Function to handle form input changes
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Function to handle file upload for resume

  // Function to handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    // Implement your signup logic here

    try {
      const response = await axios({
        method: "post",
        url: "http://localhost:8080/api/v1/users/createUser",
        data: { ...formData },
      });
      console.log(response);
    } catch (error) {
      console.log(error);
    }

    // console.log("Form data submitted:", formData);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <h2 className="mt-6 text-center text-4xl font-extrabold text-gray-900">
            Sign Up for AIJobSage
          </h2>
          <p className="mt-2 text-center text-sm text-gray-600">
            Or{" "}
            <Link
              to="/sign-in"
              className="font-medium text-indigo-600 hover:text-indigo-500"
            >
              sign in to your account
            </Link>
          </p>
          <p className="mt-2 text-center text-sm text-gray-600">
            <Link
              to="/"
              className="font-medium text-indigo-600 hover:text-indigo-500"
            >
              Back to Home
            </Link>
          </p>
        </div>
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <div className="rounded-md shadow-sm space-y-4">
            {/* Email */}
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email address
              </label>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Email address"
                value={formData.email}
                onChange={handleChange}
              />
            </div>

            {/* Password */}
            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700"
              >
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Password"
                value={formData.password}
                onChange={handleChange}
              />
            </div>

            {/* Full Name */}
            <div>
              <label
                htmlFor="fullName"
                className="block text-sm font-medium text-gray-700"
              >
                Full Name
              </label>
              <input
                id="fullName"
                name="fullName"
                type="text"
                autoComplete="name"
                required
                className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Full Name"
                value={formData.fullName}
                onChange={handleChange}
              />
            </div>

            {/* Role */}
            <div>
              <label
                htmlFor="role"
                className="block text-sm font-medium text-gray-700"
              >
                Role
              </label>
              <input
                id="role"
                name="role"
                type="text"
                autoComplete="role"
                required
                className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Role"
                value={formData.role}
                onChange={handleChange}
              />
            </div>

            {/* Tagline */}
            <div>
              <label
                htmlFor="tagline"
                className="block text-sm font-medium text-gray-700"
              >
                Tagline
              </label>
              <input
                id="tagline"
                name="tagline"
                type="text"
                autoComplete="tagline"
                required
                className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Tagline"
                value={formData.tagline}
                onChange={handleChange}
              />
            </div>

            {/* Bio */}
            <div>
              <label
                htmlFor="bio"
                className="block text-sm font-medium text-gray-700"
              >
                Bio
              </label>
              <textarea
                id="bio"
                name="bio"
                autoComplete="bio"
                required
                className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Bio"
                value={formData.bio}
                onChange={handleChange}
              />
            </div>

            {/* GitHub Profile */}
            <div>
              <label
                htmlFor="githubProfile"
                className="block text-sm font-medium text-gray-700"
              >
                GitHub Profile
              </label>
              <input
                id="githubProfile"
                name="githubProfile"
                type="url"
                autoComplete="github"
                required
                className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="GitHub Profile"
                value={formData.githubProfile}
                onChange={handleChange}
              />
            </div>

            {/* LinkedIn Profile */}
            <div>
              <label
                htmlFor="linkedInProfile"
                className="block text-sm font-medium text-gray-700"
              >
                LinkedIn Profile
              </label>
              <input
                id="linkedInProfile"
                name="linkedInProfile"
                type="url"
                autoComplete="linkedin"
                required
                className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="LinkedIn Profile"
                value={formData.linkedInProfile}
                onChange={handleChange}
              />
            </div>

            {/* Twitter Profile */}
            <div>
              <label
                htmlFor="twitterProfile"
                className="block text-sm font-medium text-gray-700"
              >
                Twitter Profile
              </label>
              <input
                id="twitterProfile"
                name="twitterProfile"
                type="url"
                autoComplete="twitter"
                required
                className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Twitter Profile"
                value={formData.twitterProfile}
                onChange={handleChange}
              />
            </div>
          </div>

          {/* Submit Button */}
          <div>
            <button
              type="submit"
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg
              indigo-600 bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Sign Up
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUpPage;
