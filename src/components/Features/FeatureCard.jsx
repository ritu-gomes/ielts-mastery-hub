import React from 'react';

const FeatureCard = ({ title, description, icon }) => {
  return (
    <div className="card bg-base-100 shadow-xl hover:shadow-2xl transition-shadow duration-300 border-t-4 border-blue-600 hover:border-red-500">
      <div className="card-body text-center">
        <div className="text-4xl mb-4 bg-blue-100 text-blue-600 rounded-full w-16 h-16 flex items-center justify-center mx-auto">{icon}</div>
        <h3 className="card-title text-xl font-semibold text-blue-600 justify-center">{title}</h3>
        <p className="text-gray-600">{description}</p>
        <div className="card-actions justify-center mt-4">
          <button className="btn btn-sm btn-outline border-red-500 text-red-500 hover:bg-red-500 hover:text-white">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
};

export default FeatureCard;