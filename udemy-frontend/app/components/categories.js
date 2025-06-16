"use client";

import React, { useEffect, useState, } from 'react';
import axios from 'axios';


import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

function Categories() {
  const [categories, setCategories] = useState([]);

 
  useEffect(() => {
    const fetchCategories = async () => {
      try {
      const res = await axios.get('http://localhost:8000/api/v1/courses/categories/');
      console.log("API response data:", res.data); 
      setCategories(res.data.data || []);
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };
    fetchCategories();
  }, []);

  

  return (
    
    <div className="relative max-w-7xl mx-auto px-6 ">
      <h3 className="text-2xl sm:text-4xl font-serif font-semibold mb-4">Learn from popular categories in India</h3>

       <Swiper
              modules={[Navigation, Pagination, Autoplay]}
              spaceBetween={20}
              slidesPerView={5}
              breakpoints={{
                0: { slidesPerView: 1.3 },
                480: { slidesPerView: 2 },
                640: { slidesPerView: 3 },
                768: { slidesPerView: 4 },
                1024: { slidesPerView: 5 },
              }}
              navigation={{
                nextEl: ".custom-swiper-button-next",
                prevEl: ".custom-swiper-button-prev",
              }}
              pagination={{ clickable: true }}
              
            >

      
      {categories.map((category) => (
        <SwiperSlide  key={category.id}>
          <div className='h-43 bg-gray-100 overflow-hidden flex flex-col justify-center'>
            <img className='max-w-full max-h-full object-contain p-6' src={category.image} alt="development" />
          </div>
          <h4 className='text-center mt-2 font-bold'>{category.title}</h4>
          <small className='block text-center'>10M learners</small>
          </SwiperSlide>
      ))}
       
        
       </Swiper>
       <div className="absolute left-0 top-1/2 md:top-[60%] transform -translate-y-1/2 z-10 custom-swiper-button-prev bg-white rounded-full w-10 h-10 shadow-md flex items-center justify-center cursor-pointer">
           <svg className="w-6 h-6 text-black" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
           <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
           </svg>
        </div>

        <div className="absolute right-0 top-1/2 md:top-[60%] transform -translate-y-1/2 z-10 custom-swiper-button-next bg-white rounded-full w-10 h-10 shadow-md flex items-center justify-center cursor-pointer">
            <svg className="w-6 h-6 text-black" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
           </svg>
        </div>
    </div>
    
    
  )
}

export default Categories;
