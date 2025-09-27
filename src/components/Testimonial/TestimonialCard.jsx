import React from 'react';

const TestimonialCard = ({ name, review, role, avatarPlaceholder }) => {
  return (
    <div className="card bg-white shadow-xl hover:shadow-2xl transition-shadow duration-300 border border-gray-200">
      <div className="card-body text-center">
        <div className="text-3xl mb-4 text-red-500">
            <div className="avatar">
                <div className="w-13">
                <img src={avatarPlaceholder} />
            </div>
  </div>
        </div>
        <p className="text-gray-600 italic">{review}</p>
        <div className="mt-6">
          <h4 className="font-semibold text-blue-600">{name}</h4>
          <p className="text-sm text-gray-500">{role}</p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;