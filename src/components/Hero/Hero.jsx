import React from 'react';
import heroImage from '../../assets/IELTS-Exams.jpg';

const Hero = () => {
  return (
    <div className="hero min-h-[80vh] bg-white text-gray-800">
      <div className="hero-content flex-col lg:flex-row-reverse max-w-7xl mx-auto px-4">
        <img
          src={heroImage}
          className="max-w-md md:max-w-lg rounded-lg shadow-2xl lg:ml-8 transform hover:scale-105 transition-transform duration-300"
          alt="IELTS Mastery Hub"
        />
        <div className="text-center lg:text-left">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-blue-600">
            Master Your IELTS with Confidence!
          </h1>
          <p className="py-4 text-lg md:text-xl max-w-lg text-gray-600">
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