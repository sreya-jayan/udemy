"use client";


import React, { useEffect, useState } from "react";
import axios from 'axios';
import Link from 'next/link';

function Page() {
    const [courses, setCourses] = useState([]);

    useEffect(() => {
      const fetchMyCourses = async () => {
        try {
          const token = localStorage.getItem("access");
          const response = await axios.get('http://localhost:8000/api/v1/courses/learnings/', {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });
          setCourses(response.data.data);
        } catch (error) {
          console.error("Failed to fetch enrolled courses", error);
        }
      };
  
      fetchMyCourses();
    }, []);
  
  
  return (
    <div className='min-h-screen'>
        <section className='bg-black'>
            <div className='max-w-7xl mx-auto pt-10 px-5'>
                <h1 className='text-left text-5xl font-serif font-semibold text-white pb-10'>My learning</h1>
                <p className='text-white font-semibold pb-4 hover:border-b-2  w-fit cursor-pointer'>All courses</p>
            </div>
        </section>

        <div className='bg-white max-w-7xl mx-auto px-5'>
        
        <div className="flex flex-wrap gap-15 pt-15 ml-0 ">
     {courses.map((purchase) => (
       <Link href={`/courselist/${purchase.course.id}`} key={purchase.id}>
              
                
              <div className="w-full sm:w-[200px] lg:w-[250px] bg-white overflow-hidden hover:shadow-lg transition-shadow duration-300">
                  <div className=" relative">
                 
                    <img className='w-full cursor-pointer' src={`http://localhost:8000${purchase.course.featured_image}`} alt="image"  />
                 
                  </div>
                  <div className="p-4">
                    <h3 className="font-bold text-base mb-2 line-clamp-2 cursor-pointer">{purchase.course.title}</h3>
                    <p className="text-xs text-gray-500 mb-2">{purchase.course.author_name}</p>
                    <div className="flex items-center mb-2">
                      <span className="text-amber-700 font-bold mr-1">{purchase.course.rating}</span>
                      <div className="flex text-amber-400">★★★★☆</div>
                      <span className="text-gray-500 text-sm ml-1">(46,930)</span>
                    </div>
                    <div className="flex items-center">
                      <span className="font-bold text-base mr-2">{purchase.course.price}</span>
                      <span className="text-gray-500 line-through text-sm">₹2,999</span>
                    </div>
                    <div className="flex gap-2 mt-2">
                      <span className="text-xs px-2 py-1 rounded bg-purple-100 text-purple-700">Premium</span>
                      <span className="text-xs px-2 py-1 rounded bg-teal-100 text-teal-700">Bestseller</span>
                    </div>
                  </div>
                </div>
                </Link>
             ))}
            </div>
          
        </div>
    </div>
   
   
  )
}

export default Page;
