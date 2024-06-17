import React from "react";
import { Link } from "react-router-dom";
import { RiFileCopyLine, RiRocketLine } from "react-icons/ri"; // Icons
import HeroComponent from "../components/HomePage/HeroComponent";
import Features from "../components/HomePage/Features";

const HomePage = () => {
  return (
    <div className="bg-gradient-to-r from-blue-600 to-violet-600  min-h-screen overy sm:px-8 sm:flex sm:flex-col sm:justify-center sm:items-center">
      {/* Hero Section */}
      <HeroComponent />
      {/* Features Section */}
      <Features />
      {/* Testimonials Section */}

      {/* Call to Action Section */}
      <div className="bg-gradient-to-r from-blue-600 to-violet-600  py-16  px-4 sm:px-0 lg:px-8 text-white">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4 sm:text-4xl">
            Ready to Launch Your Dream Career?
          </h2>
          <p className="text-lg mb-8 sm:text-xs">
            Join thousands of successful job seekers using AIJobSage.
          </p>
          <Link to={"/sign-up"}>
            <button className="bg-white hover:bg-gray-100 text-indigo-500 font-bold py-3 px-6 rounded-lg shadow-md transition duration-300">
              Sign Up Now
            </button>
          </Link>
        </div>
      </div>

      {/* Footer */}
      {/* <footer className="bg-gray-800 py-8 px-4 sm:px-6 lg:px-8 text-white text-center">
        <div className="max-w-5xl mx-auto flex justify-between items-center">
          <p>&copy; 2024 AIJobSage. All rights reserved.</p>
          <div className="flex space-x-4">
            <Link to={"/privacy-policy"} className="hover:underline">
              Privacy Policy
            </Link>
            <Link to={"/terms-of-service"} className="hover:underline">
              Terms of Service
            </Link>
            <Link to={"/contact-us"} className="hover:underline">
              Contact Us
            </Link>
          </div>
        </div>
      </footer> */}
    </div>
  );
};

export default HomePage;
