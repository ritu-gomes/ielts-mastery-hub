import React from 'react';
import TestimonialCard from './TestimonialCard';

const testimonialsData = [
  {
    name: 'Alex Johnson',
    review: 'IELTS Mastery Hub transformed my preparation! The AI feedback on speaking practice was spot on and helped me achieve a band 8.',
    role: 'Student, UK',
    avatarPlaceholder: "https://img.freepik.com/premium-vector/male-face-avatar-icon-set-flat-design-social-media-profiles_1281173-3806.jpg",
  },
  {
    name: 'Maria Gonzalez',
    review: 'The mock tests are incredibly realistic. I improved my score by 1.5 bands in just two weeks. Highly recommended!',
    role: 'Professional, Spain',
    avatarPlaceholder: "https://static.vecteezy.com/system/resources/previews/004/899/680/non_2x/beautiful-blonde-woman-with-makeup-avatar-for-a-beauty-salon-illustration-in-the-cartoon-style-vector.jpg",
  },
  {
    name: 'Raj Patel',
    review: 'Personalized band score analysis gave me clear insights on my weaknesses. This platform is a game-changer for IELTS aspirants.',
    role: 'Engineer, India',
    avatarPlaceholder: "https://static.vecteezy.com/system/resources/previews/024/183/502/non_2x/male-avatar-portrait-of-a-young-man-with-a-beard-illustration-of-male-character-in-modern-color-style-vector.jpg",
  },
];

const Testimonials = () => {
  return (
    <div className="py-16 ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-600">What Our Students Say</h2>
          <p className="mt-4 text-lg text-gray-600">Hear from those who have achieved success with IELTS Mastery Hub.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonialsData.map((testimonial, index) => (
            <TestimonialCard
              key={index}
              name={testimonial.name}
              review={testimonial.review}
              role={testimonial.role}
              avatarPlaceholder={testimonial.avatarPlaceholder}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;