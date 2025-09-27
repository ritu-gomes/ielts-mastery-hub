import React from 'react';
import FeatureCard from './FeatureCard';

const featuresData = [
  {
    title: 'Speaking Practice',
    description: 'Practice your speaking skills with AI-powered feedback to improve fluency and confidence.',
    icon: '🗣️',
  },
  {
    title: 'Mock Tests',
    description: 'Simulate real IELTS exams with our comprehensive mock tests to gauge your readiness.',
    icon: '📝',
  },
  {
    title: 'AI Band Score',
    description: 'Get personalized band score analysis with detailed insights to boost your performance.',
    icon: '📊',
  },
  {
    title: 'Progress Tracking',
    description: 'Monitor your improvement with detailed analytics and tailored recommendations.',
    icon: '📈',
  },
];

const Features = () => {
  return (
    <div className="py-16 bg-gradient-to-r from-blue-300 to-red-200 bg-opacity-70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-600">Why Choose IELTS Mastery Hub?</h2>
          <p className="mt-4 text-lg text-gray-600">Discover powerful tools to excel in your IELTS preparation.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuresData.map((feature, index) => (
            <FeatureCard
              key={index}
              title={feature.title}
              description={feature.description}
              icon={feature.icon}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Features;