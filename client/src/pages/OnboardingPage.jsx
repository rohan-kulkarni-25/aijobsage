import React from "react";
import { Link } from "react-router-dom";

const OnboardingPage = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl w-full space-y-8">
        <div className="text-center">
          <h2 className="text-4xl font-extrabold text-gray-900">
            Welcome to AIJobSage
          </h2>
          <p className="mt-4 text-gray-600">
            Your personalized AI job assistant. We prioritize your data privacy
            and ensure your information is secure.
          </p>
        </div>
        <div className="flex flex-col lg:flex-row lg:space-x-6">
          <div className="flex-1 bg-white shadow sm:rounded-lg p-6 mb-6 lg:mb-0">
            <h3 className="text-xl font-medium text-gray-900">Sign In</h3>
            <p className="mt-2 text-sm text-gray-600">
              Already have an account? Sign in to continue your journey with
              AIJobSage.
            </p>
            <div className="mt-4">
              <Link to="/sign-in">
                <button className="w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                  Sign In
                </button>
              </Link>
            </div>
          </div>
          <div className="flex-1 bg-white shadow sm:rounded-lg p-6">
            <h3 className="text-xl font-medium text-gray-900">Sign Up</h3>
            <p className="mt-2 text-sm text-gray-600">
              New to AIJobSage? Create an account to start leveraging our
              AI-powered job search assistance.
            </p>
            <div className="mt-4">
              <Link to="/sign-up">
                <button className="w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                  Sign Up
                </button>
              </Link>
            </div>
          </div>
        </div>
        <div className="bg-white shadow sm:rounded-lg p-6 mt-8">
          <h3 className="text-xl font-medium text-gray-900">
            Your Data Privacy
          </h3>
          <p className="mt-2 text-sm text-gray-600">
            At AIJobSage, we take your privacy seriously. Here are some key
            points about how we protect your data:
          </p>
          <ul className="mt-4 list-disc list-inside text-sm text-gray-600">
            <li>
              We do not share your personal information with third parties
              without your consent.
            </li>
            <li>All data is stored securely with encryption.</li>
            <li>
              You have full control over your data and can request its deletion
              at any time.
            </li>
            <li>We comply with all relevant data protection regulations.</li>
            <li>Our privacy policy is transparent and accessible.</li>
          </ul>
          <p className="mt-4 text-sm text-gray-600">
            For more information, please read our{" "}
            <a href="#" className="text-indigo-600 hover:text-indigo-500">
              Privacy Policy
            </a>
            .
          </p>
        </div>
      </div>
    </div>
  );
};

export default OnboardingPage;
