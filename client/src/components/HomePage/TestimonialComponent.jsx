import React from "react";

const TestimonialComponent = () => {
  return (
    <div className="bg-gray-100 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-8">
          What Our Users Are Saying
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Testimonial 1 */}
          <div className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center space-y-4">
            <img
              className="w-16 h-16 rounded-full mx-auto mb-4"
              src="https://picsum.photos/id/237/200/200" // Replace with user image
              alt="User avatar"
            />
            <p className="text-gray-600 text-center">
              "AIJobSage helped me land my dream job as a software engineer. The
              personalized messages and insights were invaluable!"
            </p>
            <p className="font-semibold text-gray-800">
              Sarah Lee, Software Engineer
            </p>
          </div>

          {/* Testimonial 2 */}
          <div className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center space-y-4">
            <img
              className="w-16 h-16 rounded-full mx-auto mb-4"
              src="https://picsum.photos/id/1025/200/200" // Replace with user image
              alt="User avatar"
            />
            <p className="text-gray-600 text-center">
              "AIJobSage made the job search process so much easier. The Job Fit
              Score helped me focus on the most relevant opportunities."
            </p>
            <p className="font-semibold text-gray-800">
              David Kim, Marketing Manager
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialComponent;
