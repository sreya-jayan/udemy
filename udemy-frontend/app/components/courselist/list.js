"use client"

import React, { useEffect, useState } from "react";
import axios from "axios";
import { useRouter, useSearchParams } from "next/navigation";
import Wrapper from '../wrapper'

function List() {
  const [courses, setCourses] = useState([]);
  const searchParams = useSearchParams();
  const searchQuery = searchParams.get("q") || "";

  const router = useRouter();


  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const token = localStorage.getItem("access");
        const res = await axios.get('http://localhost:8000/api/v1/courses/?page_size=10', {
          params: {
            q: searchQuery, 
            page_size: 10
          },
          headers: {
            Authorization: `Bearer ${token}`, 
          },
        });
        console.log("API response data:", res.data); 
        setCourses(res.data.data || []);
      } catch (error) {
        console.error("Error fetching courses:", error);
      }
    };
    fetchCourses();
  }, [searchQuery]);

  const handleCourseClick = (id) => {
    router.push(`/courselist/${id}`);
  };

  return (
    
   <Wrapper>
     <div className='pt-30'>
     <h2 className='text-left text-3xl sm:text-4xl font-serif font-semibold'>What to learn next</h2>
     <p  className='text-left text-xl sm:text-2xl font-semibold pt-6'>Recommended for you</p>
     </div>
     <div className="flex flex-wrap gap-3 pt-5 ml-0 ">
     {courses.slice(0, 5).map((course) => (

                <div key={course.id}
                 onClick={() => handleCourseClick(course.id)}
                 className="w-full sm:w-[200px] lg:w-[250px] bg-white overflow-hidden hover:shadow-lg transition-shadow duration-300">

                  <div className=" relative">
                    <img className='w-full cursor-pointer' src={course.featured_image} alt="AI Guide"  />
                  </div>
                  <div className="p-4">
                    <h3 className="font-bold text-base mb-2 line-clamp-2 cursor-pointer">
                    {course.title}
                   </h3>
                  
                    <p className="text-xs text-gray-500 mb-2">{course.author_name}</p>
                    <div className="flex items-center mb-2">
                      <span className="text-amber-700 font-bold mr-1">{course.rating}</span>
                      <div className="flex text-amber-400">★★★★☆</div>
                      <span className="text-gray-500 text-sm ml-1">(46,930)</span>
                    </div>
                    <div className="flex items-center">
                      <span className="font-bold text-base mr-2">{course.price}</span>
                      <span className="text-gray-500 line-through text-sm">₹2,999</span>
                    </div>
                    <div className="flex gap-2 mt-2">
                      <span className="text-xs px-2 py-1 rounded bg-purple-100 text-purple-700">Premium</span>
                      <span className="text-xs px-2 py-1 rounded bg-teal-100 text-teal-700">Bestseller</span>
                    </div>
                  </div>
                </div>
             ))}
            </div>

            {/* Section 2 - Trending Now */}
    <div className='pt-20'>
      <p className='text-left text-2xl font-semibold pt-6'>Personalized course recommendations</p>
    </div>
    <div className="flex flex-wrap gap-3 pt-5 ml-0 ">
      {courses.slice(5, 10).map((course) => (
        <div key={course.id}
          onClick={() => handleCourseClick(course.id)}
          className="w-full sm:w-[200px] lg:w-[250px] bg-white overflow-hidden hover:shadow-lg transition-shadow duration-300">
          <div className="relative">
            <img className='w-full cursor-pointer' src={course.featured_image} alt="AI Guide" />
          </div>
          <div className="p-4">
            <h3 className="font-bold text-base mb-2 line-clamp-2 cursor-pointer">
            {course.title}
            </h3>
            <p className="text-xs text-gray-500 mb-2">{course.author_name}</p>
            <div className="flex items-center mb-2">
              <span className="text-amber-700 font-bold mr-1">{course.rating}</span>
              <div className="flex text-amber-400">★★★★☆</div>
              <span className="text-gray-500 text-sm ml-1">(46,930)</span>
            </div>
            <div className="flex items-center">
              <span className="font-bold text-base mr-2">{course.price}</span>
              <span className="text-gray-500 line-through text-sm">₹2,999</span>
            </div>
            <div className="flex gap-2 mt-2">
              <span className="text-xs px-2 py-1 rounded bg-purple-100 text-purple-700">Premium</span>
              <span className="text-xs px-2 py-1 rounded bg-teal-100 text-teal-700">Bestseller</span>
            </div>
          </div>
        </div>
      ))}
    </div>
    </Wrapper>
                 
                
  )
}

export default List;