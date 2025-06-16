"use client";

import React, { useEffect, useState } from 'react';
import axios from "axios";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

function Hero() {
  const [name, setName] = useState("");

  useEffect(() => {
    const fetchUserDetails = async () => {
      const token = localStorage.getItem("access");
      if (!token) return;

      try {
        const response = await axios.get("http://localhost:8000/api/v1/auth/user/", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
       
        setName(response.data.name || response.data.username || "");
      } catch (error) {
        console.error("Error fetching user details:", error);
      }
    };

    fetchUserDetails();
  }, []);


  return (
  <div>
    <div className="flex items-left gap-4 px-20 py-8 ">
      <div className="w-16 h-16 rounded-full bg-black text-white flex items-center justify-center font-bold text-2xl">{name ? name.charAt(0).toUpperCase() : 'S'}</div>
        <div>
            <h2 className="text-2xl font-bold">{name  ? `Welcome back, ${name }` : "Welcome back,"}</h2>
        <a href="#" className="text-[#6c2bd7] font-medium underline text-base">Add occupation and interests</a>
        </div>
    </div>
       
      
    
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
            <img className='' src="/images/hero.jpg" alt="hero" />
            <div className="sm:absolute sm:top-18 sm:left-30  md:top-5 md:left-10 xl:top-18 xl:left-30 bg-white shadow-md rounded-sm  p-4 sm:p-7  mt-2 sm:mt-0">
              <h1 className='text-xl sm:text-2xl font-serif font-semibold'>Subscribe to the best of <br />Udemy</h1>
              <p className='text-sm sm:text-base md:text-xs lg:text-sm xl:text-base  pt-3'>With Personal Plan, you get access to 11,000+ of our <br /> top-rated courses in tech, business, and more.</p>
              <div className='flex flex-wrap gap-5 mt-5'>
                <button className='p-3 rounded-sm text-sm sm:text-base bg-violet-700 text-gray-100 font-bold w-full sm:w-auto md:w-full xl:w-auto'>Learn more</button>
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className='flex flex-col sm:flex-row sm:justify-center sm:relative'>
            <img className='' src="/images/hero2.jpg" alt="hero" />
            <div className="sm:absolute sm:top-18 sm:left-30  md:top-5 md:left-10 xl:top-18 xl:left-30 bg-white shadow-md rounded-sm  p-4 sm:p-7  mt-2 sm:mt-0">
              <h1 className='text-xl sm:text-2xl font-serif font-semibold'>Code your future</h1>
              <p className='text-sm sm:text-base md:text-xs lg:text-sm xl:text-base  pt-3'>Take control of your career. Learn the latest skills in</p>
              <div className='flex flex-wrap gap-5 mt-5'>
              <a href="" className='text-sm sm:text-base md:text-xs lg:text-sm xl:text-base underline text-violet-700'>Web development</a>
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className='flex flex-col sm:flex-row sm:justify-center sm:relative'>
            <img className='' src="/images/hero3.jpg" alt="hero" />
            <div className="sm:absolute sm:top-18 sm:left-30  md:top-5 md:left-10 xl:top-18 xl:left-30 bg-white shadow-md rounded-sm  p-4 sm:p-7  mt-2 sm:mt-0">
              <h1 className='text-xl sm:text-2xl font-serif font-semibold'>Learn from anywhere</h1>
              <p className='text-sm sm:text-base md:text-xs lg:text-sm xl:text-base  pt-3'>On the couch, from the backyard, or on your commute.</p>
              <div className='flex flex-wrap gap-5 mt-5'>
              <a href="" className='text-sm sm:text-base md:text-xs lg:text-sm xl:text-base underline text-violet-700'>Our app</a>
              <a href="" className='text-sm sm:text-base md:text-xs lg:text-sm xl:text-base text-violet-700'>lets you decide.</a>
              </div>
            </div>
          </div>
        </SwiperSlide>

      </Swiper>

      <div className="custom-swiper-button-prev absolute top-1/2 left-17 transform -translate-y-1/2 z-50 w-10 h-10 bg-white  rounded-full shadow-md flex items-center justify-center cursor-pointer mt-25">
      <svg className="w-6 h-6 text-black" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
      </svg>
     </div>

      <div className="custom-swiper-button-next absolute top-1/2 right-17 transform -translate-y-1/2 z-50 w-10 h-10 bg-white rounded-full shadow-md flex items-center justify-center cursor-pointer mt-25 ">
      <svg className="w-6 h-6 text-black" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
      </svg>
      </div>

   </div>
   
  );
}

export default Hero;