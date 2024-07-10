import React from 'react';

const FAQ = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-pink-200 to-orange-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-4xl">
        <h2 className="text-2xl font-bold text-center mb-6 text-pink-700">Frequently Asked Questions</h2>
        <div className="mb-4">
          <h3 className="text-lg font-semibold text-gray-700">What is FitFinder?</h3>
          <p className="text-gray-700">FitFinder is an AI-powered fashion recommendation app to help you find the best outfits tailored to your style and preferences.</p>
        </div>
        <div className="mb-4">
          <h3 className="text-lg font-semibold text-gray-700">How does it work?</h3>
          <p className="text-gray-700">Simply sign up, provide your preferences, and get personalized outfit recommendations instantly.</p>
        </div>
        <div className="mb-4">
          <h3 className="text-lg font-semibold text-gray-700">Is it free?</h3>
          <p className="text-gray-700">Yes, FitFinder is completely free to use.</p>
        </div>
      </div>
    </div>
  );
};

export default FAQ;

