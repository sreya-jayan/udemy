"use client";
import React from 'react';
import Wrapper from './wrapper';

function Focus() {
  return (
    
      <div className='bg-gray-100 pb-10'>
      <Wrapper>
      <h2 className='pt-10 pb-5 text-2xl sm:text-4xl font-serif font-semibold mb-4'>Learning focused on your goals</h2>
      <div className='flex flex-col lg:flex-row gap-10 lg:gap-40'>
        <div className=" space-y-5">
          
          <div className=" w-130 flex items-start gap-4 p-6 bg-white rounded-lg border border-gray-300">
            <div className="w-25 h-25">
              <img className="w-full h-full object-contain" src="/images/hands-on.webp" alt="Hands-on training icon" />
            </div>
            <div>
              <h2 className="text-large font-black text-gray-900 mt-5 ">Hands-on training</h2>
              <p className="text-gray-600">
                Upskill effectively with AI-powered coding exercises, practice tests, and quizzes.
              </p>
            </div>
          </div>

          
          <div className="flex items-start  w-130 gap-4 p-6 bg-white rounded-lg border border-gray-300">
            <div className="w-25 h-25">
              <img className="w-full h-full object-contain pt-10" src="/images/certificate.webp" alt="Certification icon" />
            </div>
            <div>
              <h2 className="text-large font-black text-gray-900 mb-2">Certification prep</h2>
              <p className="text-gray-600">
                Prep for industry-recognized certifications by solving real-world challenges and earn badges along the way.
              </p>
              <a href="#" className="inline-block mt-4 text-purple-600 font-medium hover:underline">
                Explore courses →
              </a>
            </div>
          </div>

         
          <div className="flex items-start  w-130 gap-4 p-6 bg-white rounded-lg border border-gray-300">
            <div className="w-25 h-25">
              <img className="w-full h-full object-contain pt-10" src="/images/empty-state.webp" alt="Certification icon" />
            </div>
            <div>
              <h2 className="text-large font-black text-gray-900 mb-2">Insights and analytics</h2>
              <p className="text-gray-600 text-base">
              Fast-track goals with advanced insights plus a dedicated customer success team to help drive effective learning.
              </p>
              <a href="#" className="inline-block mt-4 text-purple-600 font-medium hover:underline">
                Find out more →
              </a>
            </div>
          </div>

          <div className="flex items-start  w-130 gap-4 p-6 bg-white rounded-lg border border-gray-300">
            <div className="w-25 h-25 ">
              <img className="w-full h-full object-contain pt-10" src="/images/organizations.webp" alt="Certification icon" />
            </div>
            <div>
              <h2 className="text-large font-black text-gray-900 mb-2">Customizable content</h2>
              <p className="text-gray-600 text-base">
              Create tailored learning paths for team and organization goals and even host your own content and resources.
              </p>
              <a href="#" className="inline-block mt-4 text-purple-600 font-medium hover:underline">
              Find out more →
              </a>
            </div>
          </div>
        </div>
        <div className="">
          <img className=" object-cover" src="/images/desktop-jpg.webp" alt="Learning assessment results" />
        </div>
      </div>
      
    </Wrapper>
    </div>
  );
}

export default Focus; 