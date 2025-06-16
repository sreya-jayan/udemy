"use client";
import Wrapper from "../components/wrapper";


import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

function Course() {

  const skills = [
    { title: "ChatGPT",
      learners: "7M+ learners" 
    },
    { title: "Data Science", 
      learners: "7M+ learners" 
    },
    { title: "Python",
      learners: "48.8M+ learners" 
    },
    { title: "Excel",
       learners: "20M+ learners" 
    },
    { title: "Web Development",
      learners: "15M+ learners" 
    },
    { title: "Machine Learning", 
      learners: "10M+ learners"
    },
    { title: "Cybersecurity",
       learners: "5M+ learners" 
    }
    
   
  ];

  return (
    <Wrapper>
      <div className="py-16">
        <div className="container mx-auto sm:px-4">
          <h1 className="text-2xl sm:text-4xl font-serif font-bold text-gray-900 mb-4">
            All the skills you need in one place
          </h1>
          <p className="text-md text-gray-500 mb-8">
            From critical skills to technical topics, Udemy supports your professional development.
          </p>

          
          <div className="flex overflow-x-auto  space-x-6 sm:space-x-8 mb-8 pb-2">
          <button className="pb-4 px-1 hover:border-b-2  font-medium  text-md text-gray-600 hover:border-black hover:text-gray-700">
            Data Science
           </button>
           <button className="pb-4 px-1 hover:border-b-2  font-medium  text-md text-gray-600  hover:border-black hover:text-gray-700">
           IT Certifications
           </button>
           <button className="pb-4 px-1 hover:border-b-2  font-medium text-md text-gray-600  hover:border-black hover:text-gray-700">
           Leadership
           </button>
           <button className="pb-4 px-1 hover:border-b-2 font-medium text-md text-gray-600  hover:border-black hover:text-gray-700">
           Web Development
           </button>
           <button className="pb-4 px-1 hover:border-b-2 font-medium text-md text-gray-600  hover:border-black hover:text-gray-700">
           Communication
           </button>
           <button className="pb-4 px-1 hover:border-b-2  font-medium text-md text-gray-600  hover:border-black hover:text-gray-700">
           Business Analytics & Intelligence
           </button>
          </div>

         


        <div className="relative mb-12">
        <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={20}
        slidesPerView={5}
        breakpoints={{
            0: { slidesPerView: 2 },
            480: { slidesPerView: 3 },
            768: { slidesPerView: 4 },
            1024: { slidesPerView: 5 },
          }}
        navigation={{
          nextEl: ".custom-swiper-button-next",
          prevEl: ".custom-swiper-button-prev",
        }}
        pagination={{ clickable: true }}
        
        
      >
      
      {skills.map((skill, index) => (
          <SwiperSlide key={index}>
          <div className="bg-gray-100 rounded-full px-6 py-4 text-center">
           <div className="font-bold text-gray-800 text-sm">{skill.title}</div>
            <div className="text-gray-500 text-xs sm:text-sm md:text-xs xl:text-sm">{skill.learners}</div>
          </div>
          </SwiperSlide>
       ))}
       </Swiper>
      
          <div className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 custom-swiper-button-prev bg-white rounded-full w-10 h-10 shadow-md flex items-center justify-center cursor-pointer">
              <svg className="w-6 h-6 text-black" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
              </svg>
           </div>

        <div className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 custom-swiper-button-next bg-white rounded-full w-10 h-10 shadow-md flex items-center justify-center cursor-pointer">
            <svg className="w-6 h-6 text-black" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
           </svg>
        </div>
    </div>
    
          
          <div className="flex flex-wrap gap-6">
           
            <div className="w-full sm:w-[calc(50%-12px)] lg:w-[calc(25%-18px)] bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <div className="relative">
                <img src="/images/AI.Webp" alt="AI" className="object-cover w-full h-full" />
              </div>
              <div className="p-4">
                <h3 className="font-bold text-base mb-2 line-clamp-2">
                  The Complete AI Guide: Learn ChatGPT, Generative AI & More
                </h3>
                <p className="text-sm text-gray-500 mb-2">Julian Melanson, Benza Maman, Leap Learning</p>
                <div className="flex items-center mb-2">
                  <span className="text-amber-700 font-bold mr-1">4.5</span>
                  <div className="flex text-amber-400">★★★★☆</div>
                  <span className="text-gray-500 text-sm ml-1">(46,930)</span>
                </div>
                <div className="flex items-center">
                  <span className="font-bold text-base mr-2">₹639</span>
                  <span className="text-gray-500 line-through text-sm">₹2,999</span>
                </div>
                <div className="flex gap-2 mt-2">
                  <span className="text-xs px-2 py-1 rounded bg-purple-100 text-purple-700">Premium</span>
                  <span className="text-xs px-2 py-1 rounded bg-teal-100 text-teal-700">Bestseller</span>
                </div>
              </div>
            </div>

           
            <div className="w-full sm:w-[calc(50%-12px)] lg:w-[calc(25%-18px)] bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <div className="relative">
                <img src="/images/AI-1.Webp" alt="AI" className="object-cover w-full h-full" />
              </div>
              <div className="p-4">
                <h3 className="font-bold text-base mb-2 line-clamp-2">
                  The Complete AI-Powered Copywriting Course & ChatGPT Marketing
                </h3>
                <p className="text-sm text-gray-500 mb-2">Ing. Tomas Moravek, Learn Digital Marketing</p>
                <div className="flex items-center mb-2">
                  <span className="text-amber-700 font-bold mr-1">4.2</span>
                  <div className="flex text-amber-400">★★★★☆</div>
                  <span className="text-gray-500 text-sm ml-1">(1,848)</span>
                </div>
                <div className="flex items-center">
                  <span className="font-bold text-base mr-2">₹639</span>
                  <span className="text-gray-500 line-through text-sm">₹3,569</span>
                </div>
                <div className="flex gap-2 mt-2">
                  <span className="text-xs px-2 py-1 rounded bg-purple-100 text-purple-700">Premium</span>
                </div>
              </div>
            </div>

            
            <div className="w-full sm:w-[calc(50%-12px)] lg:w-[calc(25%-18px)] bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <div className="relative">
                <img src="/images/AI-2.Webp" alt="AI" className="object-cover w-full h-full" />
              </div>
              <div className="p-4">
                <h3 className="font-bold text-base mb-2 line-clamp-2">
                  ChatGPT, DeepSeek, Grok and 30+ More AI Marketing Assistants
                </h3>
                <p className="text-sm text-gray-500 mb-2">Anton Voroniuk, Anton Voroniuk Support</p>
                <div className="flex items-center mb-2">
                  <span className="text-amber-700 font-bold mr-1">4.5</span>
                  <div className="flex text-amber-400">★★★★☆</div>
                  <span className="text-gray-500 text-sm ml-1">(554)</span>
                </div>
                <div className="flex items-center">
                  <span className="font-bold text-base mr-2">₹699</span>
                  <span className="text-gray-500 line-through text-sm">₹939</span>
                </div>
                <div className="flex gap-2 mt-2">
                  <span className="text-xs px-2 py-1 rounded bg-purple-100 text-purple-700">Premium</span>
                </div>
              </div>
            </div>

           
            <div className="w-full sm:w-[calc(50%-12px)] lg:w-[calc(25%-18px)] bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <div className="relative">
                <img src="/images/data science.jpg" alt="AI"  className="object-cover w-full h-full" />
              </div>
              <div className="p-4">
                <h3 className="font-bold text-base mb-2 line-clamp-2">
                  Mastering SEO With ChatGPT: Ultimate Beginner's Guide
                </h3>
                <p className="text-sm text-gray-500 mb-2">Anton Voroniuk, Anton Voroniuk Support</p>
                <div className="flex items-center mb-2">
                  <span className="text-amber-700 font-bold mr-1">4.5</span>
                  <div className="flex text-amber-400">★★★★☆</div>
                  <span className="text-gray-500 text-sm ml-1">(301)</span>
                </div>
                <div className="flex items-center">
                  <span className="font-bold text-base mr-2">₹619</span>
                  <span className="text-gray-500 line-through text-sm">₹929</span>
                </div>
                <div className="flex gap-2 mt-2">
                  <span className="text-xs px-2 py-1 rounded bg-purple-100 text-purple-700">Premium</span>
                  <span className="text-xs px-2 py-1 rounded bg-teal-100 text-teal-700">Bestseller</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </Wrapper>
  );
}

export default Course;