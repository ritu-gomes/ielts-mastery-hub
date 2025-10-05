import React from 'react';
import heroImage from '../../assets/IELTS-Exams.jpg';

const Hero = () => {
  return (
    <div className="hero min-h-[60vh] sm:min-h-[70vh] bg-white text-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 flex flex-col lg:flex-row-reverse items-center justify-between gap-6">
        <div className="w-full lg:w-1/2">
          <img
            src={heroImage}
            className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg mx-auto rounded-lg shadow-xl transform hover:scale-105 transition-transform duration-300"
            alt="IELTS Mastery Hub"
          />
        </div>
        <div className="w-full lg:w-1/2 text-center lg:text-left">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 text-blue-600">
            Master Your IELTS with Confidence!
          </h1>
          <p className="text-base sm:text-lg lg:text-xl mb-6 max-w-md mx-auto lg:mx-0 text-gray-600">
            Unlock your potential with our AI-powered tools for speaking practice, mock tests, and personalized band score analysis.
          </p>
          <button className="btn btn-primary bg-red-500 hover:bg-red-600 border-none text-white px-6 py-3 text-lg">
            Start Your Journey
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;