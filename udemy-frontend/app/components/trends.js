"use client";
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Trends = () => {
  return (
    <div className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
         
          <div className="lg:w-1/3">
            <h2 className="text-3xl sm:text-4xl  md:text-3xl lg:text-4xl font-serif text-gray-900 mb-6">
              Top trends for the future of work
            </h2>
            <p className="text-lg md:text-base text-gray-600 mb-8">
              Our 2025 Global Learning & Skills Trends Report is out now! Find out how to build the skills to keep pace with change.
            </p>
            <Link 
              href="/report"
              className="inline-flex items-center text-purple-700 font-medium hover:text-purple-800 transition-colors duration-150"
            >
              Get the report →
              
            </Link>
          </div>

         
          <div className="lg:w-2/3 relative">
            <div className="relative w-full ">
            <img className='object-cover rounded-lg' src="/images/Onsite_Desktop.webp" alt="" />
             
          </div>
           
          </div>
        </div>
      </div>
    </div>
  );
};

export default Trends; 