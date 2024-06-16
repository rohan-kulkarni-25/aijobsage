// import React from "react";
// import { Link } from "react-router-dom";

// const HomePage = () => {
//   return (
//     <div className="bg-gray-100 min-h-screen">
//       {/* Hero Section */}
//       <div className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-500 to-indigo-600 text-white">
//         <div className="max-w-3xl mx-auto text-center">
//           <h1 className="text-4xl sm:text-5xl font-bold leading-tight mb-4">
//             Elevate Your Job Search with AIJobSage
//           </h1>
//           <p className="text-lg mb-8">
//             Craft personalized job application messages powered by AI insights.
//           </p>
//           <Link to={"/onboarding"}>
//             <button className="bg-white text-blue-500 hover:bg-blue-600 font-bold py-3 px-6 rounded-lg shadow-md transition duration-300">
//               Get Started
//             </button>
//           </Link>
//         </div>
//       </div>

//       {/* Features Section */}
//       <div className="py-16 px-4 sm:px-6 lg:px-8">
//         <div className="max-w-5xl mx-auto">
//           <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 text-center mb-12">
//             Features of AIJobSage
//           </h2>
//           <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
//             {/* Feature 1: Personalized Messages */}
//             <div className="bg-white rounded-lg shadow-md p-6">
//               <h3 className="text-xl font-semibold text-gray-800 mb-2">
//                 Personalized Messages
//               </h3>
//               <p className="text-gray-600">
//                 Craft tailored job application messages based on job
//                 descriptions and your bio.
//               </p>
//             </div>

//             {/* Feature 2: AI-Generated Insights */}
//             <div className="bg-white rounded-lg shadow-md p-6">
//               <h3 className="text-xl font-semibold text-gray-800 mb-2">
//                 AI-Generated Insights
//               </h3>
//               <p className="text-gray-600">
//                 Gain insights into how to improve your resume and cover letter
//                 for specific job roles.
//               </p>
//             </div>

//             {/* Feature 3: Job Description Analyzer */}
//             <div className="bg-white rounded-lg shadow-md p-6">
//               <h3 className="text-xl font-semibold text-gray-800 mb-2">
//                 Job Description Analyzer
//               </h3>
//               <p className="text-gray-600">
//                 Analyze job descriptions to understand key skills and tailor
//                 your application accordingly.
//               </p>
//             </div>

//             {/* Feature 4: Social Media Integration */}
//             <div className="bg-white rounded-lg shadow-md p-6">
//               <h3 className="text-xl font-semibold text-gray-800 mb-2">
//                 Social Media Integration
//               </h3>
//               <p className="text-gray-600">
//                 Generate personalized LinkedIn notes and Twitter DMs for
//                 networking.
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Testimonials Section */}
//       <div className="bg-gray-200 py-16 px-4 sm:px-6 lg:px-8">
//         <div className="max-w-5xl mx-auto text-center">
//           <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-8">
//             What Users Are Saying
//           </h2>
//           <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
//             {/* Testimonial 1 */}
//             <div className="bg-white rounded-lg shadow-md p-6">
//               <p className="text-gray-600 mb-4">
//                 "AIJobSage helped me craft personalized messages that stood out
//                 in my job applications."
//               </p>
//               <p className="font-semibold">John Doe</p>
//             </div>

//             {/* Testimonial 2 */}
//             <div className="bg-white rounded-lg shadow-md p-6">
//               <p className="text-gray-600 mb-4">
//                 "The AI insights provided by AIJobSage were invaluable in
//                 optimizing my resume."
//               </p>
//               <p className="font-semibold">Jane Smith</p>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Call to Action */}
//       <div className="bg-gradient-to-r from-blue-500 to-indigo-600 py-16 px-4 sm:px-6 lg:px-8 text-white">
//         <div className="max-w-3xl mx-auto text-center">
//           <h2 className="text-3xl sm:text-4xl font-bold mb-4">
//             Ready to Get Started?
//           </h2>
//           <p className="text-lg mb-8">
//             Join thousands of job seekers who have enhanced their job search
//             with AIJobSage.
//           </p>

//           <Link to={"/sign-up"}>
//             <button className="bg-white text-blue-500 hover:bg-blue-600 font-bold py-3 px-6 rounded-lg shadow-md transition duration-300">
//               Sign Up Now
//             </button>
//           </Link>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default HomePage;

import React from "react";
import { Link } from "react-router-dom";
import { RiFileCopyLine, RiRocketLine } from "react-icons/ri"; // Icons
import HeroComponent from "../components/HomePage/HeroComponent";
import Features from "../components/HomePage/Features";

const HomePage = () => {
  return (
    <div className="bg-gradient-to-r from-blue-600 to-violet-600  min-h-screen overy">
      {/* Hero Section */}
      <HeroComponent />
      {/* Features Section */}
      <Features />
      {/* Testimonials Section */}

      {/* Call to Action Section */}
      <div className="bg-gradient-to-r from-blue-600 to-violet-600  py-16 px-4 sm:px-6 lg:px-8 text-white">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4">
            Ready to Launch Your Dream Career?
          </h2>
          <p className="text-lg mb-8">
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
      <footer className="bg-gray-800 py-8 px-4 sm:px-6 lg:px-8 text-white text-center">
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
      </footer>
    </div>
  );
};

export default HomePage;
