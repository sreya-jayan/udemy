"use client";
import React from 'react';

const Card = () => {
  return (
    <div className="bg-[#F8F9FB] py-10">
      <div className="max-w-7xl mx-auto px-4">
        <div className="mb-10">
          <h2 className="text-2xl sm:text-4xl md:text-2xl lg:text-4xl font-serif font-semibold mb-4">
            Accelerate growth – for you or your organization
          </h2>
          <p className="text-base text-gray-600">
            Reach goals faster with one of our plans or programs. Try one free today or contact sales to learn more.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-6">
  
          <div className="bg-white border-t-4 border-purple-600 rounded-lg p-6 w-full">
            <h3 className="text-xl font-bold text-gray-900 mb-1">Personal Plan</h3>
            <p className="text-sm text-gray-600 mb-1">For you</p>
            <p className="text-sm text-gray-600 mb-3">👤 Individual</p>
            <p className="font-semibold text-gray-900 mb-1">Starting at ₹850 per month</p>
            <p className="text-sm text-gray-500 mb-4">Billed monthly or annually. Cancel anytime.</p>
            <button className="bg-purple-600 text-white px-4 py-2 rounded w-full font-medium mb-4">
              Start subscription →
            </button>
            <ul className="text-sm text-gray-700 space-y-2">
              <li>✓ Access to 12,000+ top courses</li>
              <li>✓ Certification prep</li>
              <li>✓ Goal-focused recommendations</li>
              <li>✓ AI-powered coding exercises</li>
            </ul>
          </div>

        
          <div className="bg-white border-t-4 border-purple-600 rounded-lg p-6 w-full">
            <h3 className="text-xl font-bold text-gray-900 mb-1">Team Plan</h3>
            <p className="text-sm text-gray-600 mb-1">For your team</p>
            <p className="text-sm text-gray-600 mb-3">👥 2 to 20 people</p>
            <p className="font-semibold text-gray-900 mb-1">₹2,000 a month per user</p>
            <p className="text-sm text-gray-500 mb-4">Billed annually. Cancel anytime.</p>
            <button className="bg-purple-600 text-white px-4 py-2 rounded w-full font-medium mb-4">
              Start subscription →
            </button>
            <ul className="text-sm text-gray-700 space-y-2">
              <li>✓ Access to 12,000+ top courses</li>
              <li>✓ Certification prep</li>
              <li>✓ Goal-focused recommendations</li>
              <li>✓ AI-powered coding exercises</li>
              <li>✓ Analytics and adoption reports</li>
            </ul>
          </div>

          
          <div className="bg-white border-t-4 border-purple-600 rounded-lg p-6 w-full">
            <h3 className="text-xl font-bold text-gray-900 mb-1">Enterprise Plan</h3>
            <p className="text-sm text-gray-600 mb-1">For your whole organization</p>
            <p className="text-sm text-gray-600 mb-3">👥 More than 20 people</p>
            <p className="font-semibold text-gray-900 mb-4">Contact sales for pricing</p>
            <button className="bg-purple-600 text-white px-4 py-2 rounded w-full font-medium mb-4">
              Request a demo →
            </button>
            <ul className="text-sm text-gray-700 space-y-2">
              <li>✓ Access to 27,000+ top courses</li>
              <li>✓ Certification prep</li>
              <li>✓ Goal-focused recommendations</li>
              <li>✓ AI-powered coding exercises</li>
              <li>✓ Advanced analytics and insights</li>
              <li>✓ Dedicated customer success team</li>
              <li>✓ International course collection featuring 15 languages</li>
              <li>✓ Customizable content</li>
              <li>✓ Hands-on tech training with add-on</li>
              <li>✓ Strategic implementation services with add-on</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;