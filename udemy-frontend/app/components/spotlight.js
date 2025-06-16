"use client";

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

function Spotlight() {
  return (
  <div className='max-w-8xl mx-auto'>
   
    
       
      
    
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={0}
        slidesPerView={1}
        navigation={{
          nextEl: ".custom-swiper-button-next",
          prevEl: ".custom-swiper-button-prev",
        }}
        pagination={{ clickable: true }}
      
        
      >

       
        <SwiperSlide>
        <div className='flex flex-col sm:flex-row sm:justify-center sm:relative'>
            <img className='' src="/images/spotlight-1.jpg" alt="spotlight" />
            <div className="sm:absolute sm:top-18 sm:left-30  md:top-5 md:left-10 xl:top-18 xl:left-30 bg-white shadow-md rounded-sm  p-4 sm:p-7  mt-2 sm:mt-0">
              <h1 className='text-xl sm:text-2xl font-serif font-semibold'>In-demand skills. <br /> Available on demand.</h1>
              <p className='text-sm sm:text-base md:text-xs lg:text-sm xl:text-base  pt-3'>Get the top skills that others are using to advance their <br /> careers.</p>
              <div className='flex flex-wrap gap-5 mt-5'>
                <button className='p-3 rounded-sm text-sm sm:text-base bg-violet-700 text-gray-100 font-bold w-full sm:w-auto md:w-full xl:w-auto'>Learn Python</button>
                <button className='hidden sm:inline-block p-3 border border-violet-700 rounded-sm text-base font-bold text-violet-700 md:hidden xl:block'>Learn Excel</button>
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
        <div className='flex flex-col sm:flex-row sm:justify-center sm:relative'>
            <img className='' src="/images/spotlight-2.jpg" alt="spotlight" />
            <div className="sm:absolute sm:top-18 sm:left-30 md:top-5 md:left-10 xl:top-18 xl:left-30 bg-white shadow-md rounded-sm  p-4 sm:p-7  mt-2 sm:mt-0">
              <h1 className='text-xl sm:text-2xl lg:text-3xl font-serif font-semibold'>Build your career</h1>
              <p className='text-sm sm:text-base md:text-xs lg:text-sm xl:text-base pt-3'>Learn in-demand skills with courses, certificates, <br /> and degrees from world-class universities.</p>
                <button className='p-3 rounded-sm mt-5 text-base bg-violet-700 text-gray-100 font-bold  w-full sm:w-auto md:w-full xl:w-auto'>Start Learning</button>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className='flex flex-col sm:flex-row sm:justify-center sm:relative'>
            <img className='' src="/images/hero3.jpg" alt="hero" />
            <div className="sm:absolute sm:top-18 sm:left-30 md:top-5 md:left-10 xl:top-18 xl:left-30 bg-white shadow-md rounded-sm p-4 sm:p-7  mt-2 sm:mt-0">
              <h1 className='text-xl sm:text-2xl lg:text-3xl font-serif font-semibold'>Learn from anywhere</h1>
              <p className='text-sm sm:text-base md:text-xs lg:text-sm xl:text-base pt-3'>On the couch, from the backyard, or on your commute.</p>
              <div className='flex gap-2 mt-5'>
              <a href="#" className='text-sm sm:text-base md:text-xs lg:text-sm xl:text-base underline text-violet-700'>Our app</a>
              <a href="#" className='text-sm sm:text-base md:text-xs lg:text-sm xl:text-base text-violet-700'>lets you decide.</a>
              </div>
            </div>
          </div>
        </SwiperSlide>

      </Swiper>

      <div className="custom-swiper-button-prev absolute top-1/2 left-2 sm:left-2  md:left-0 lg:left-17 transform -translate-y-1/2 z-50 w-10 h-10  bg-white rounded-full shadow-md flex items-center justify-center cursor-pointer -mt-10">
      <svg className="w-6 h-6 text-black" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
      </svg>
     </div>

      <div className="custom-swiper-button-next absolute top-1/2 right-2 sm:right-2 md:right-0 lg:right-17  transform -translate-y-1/2 z-50 w-10 h-10 bg-white rounded-full shadow-md flex items-center justify-center cursor-pointer -mt-10">
      <svg className="w-6 h-6 text-black" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
      </svg>
      </div>

   </div>
   
  );
}

export default Spotlight;