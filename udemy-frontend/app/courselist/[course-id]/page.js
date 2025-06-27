"use client";

import React, { useEffect, useState } from 'react'
import { useParams } from 'next/navigation';
import axios from "axios";

import Related from './components/related';
import Topic from './components/topic';
import Content from './components/content';
import Featured from './components/featured';
import Frequently from './components/frequently';
import CourseContent from './components/courseContent';
import Student from './components/student';
import More from './components/more';
import Rating from './components/rating';
import Instructor from './components/instructor';
import Bynow from './components/bynow';


function Page() {
  const { "course-id": id } = useParams(); 

  const [course, setCourse] = useState(null);

  useEffect(() => {
    if (!id) return;
    
    const fetchCourse = async () => {
      try {
        const response = await axios.get(`http://localhost:8000/api/v1/courses/view/${id}/`);
        setCourse(response.data.data);
      } catch (error) {
        console.error("Error fetching course:", error);
      }
    };

    fetchCourse();
  }, [id]);

  if (!course) return null;

  return (
   
    <div>
    <div className="bg-gray-900 text-white pt-6 pb-13 relative">
      <div className="max-w-6xl mx-auto rounded-xl p-6 ">
        <div className="text-sm text-purple-300">
          <span>{course.category} &gt; Web Development &gt; JavaScript</span>
        </div>
        <h1 className="text-3xl font-bold mt-4 whitespace-pre-line">{course.title.replace(/\\n/g, "\n")}</h1>
        <p className="text-lg mt-2">{course.description.replace(/\\n/g, "\\n")}</p>
        <button className="mt-4 inline-block text-gray-500 bg-green-200 text-xs px-2 py-1 rounded-sm">Bestseller</button>
        <p className="text-sm mt-4">Created by <span className="text-purple-200 border-b">{course.author_name}</span></p>
        <div className='flex gap-3 mt-4'>
        <img className='w-5 h-5 mt-1' src="/images/update.png" alt="" />
        <p className="text-sm mt-1 text-gray-400">Last updated 04/2025 </p>
        <img className='w-5 h-5' src="/images/language-2.webp" alt="" />
          <p>English</p> 
          <img src="/images/subtitles-icon.png" alt="" /> 
          <p> English,Arabic[Auto],</p>
          <a className='underline text-purple-200' href=""> 27 more</a> 
          </div> 

        <div className="absolute bottom-[-50px] left-[36%] transform -translate-x-1/2 bg-white rounded-lg shadow-lg flex items-center gap-4 w-[48%] border border-gray-200 hidden  xl:flex">
         
          <div className="bg-purple-700 text-white font-bold w-[100px] h-[100px]  rounded-l-md ">
            <img src="/images/verified-icon.png" alt="verified" className="w-6 h-6 mb-1 ml-9 mt-5" />
            <small className="text-sm ml-5">Premium</small>
          </div>

          <div className="text-sm border-r border-gray-300">
            <p className="font-medium text-gray-800 pr-7">Access this top-rated course, plus <br /> 12,000+ more top-rated courses, with a <br /> Udemy plan. <span className='border-b text-blue-600 cursor-pointer'>See Plans & Pricing</span></p>
          </div>
            <div className="text-amber-400 mt-2 border-r border-gray-300 pr-7 pl-5">
              <span className="text-gray-800 pl-5">{course.rating}</span>
              <div className='flex'>
              <img src="/images/Star 1.svg" alt="" className="w-4 h-4" />
              <img src="/images/Star 1.svg" alt="" className="w-4 h-4" />
              <img src="/images/Star 1.svg" alt="" className="w-4 h-4" />
              <img src="/images/Star 1.svg" alt="" className="w-4 h-4" />
              <img src="/images/Star 5.svg" alt="" className="w-4 h-4" />
              </div>
              <small className=" block text-gray-600 underline">222,731 ratings</small>
              
            
          </div>

          <div className="text-sm  py-2 pl-7">
            <img src="/images/group.png" alt="" className="w-5 h-5 mb-1 ml-4" />
            <span className="text-gray-600">984,052 <br /> learners</span>
          </div>
        </div>
        
    </div>

    </div>

   

    
   
    <Bynow course={course} />
    <Related />
    <Topic />
    <CourseContent course={course} />
    <Content />
    <Featured />
    <Student />
    <Frequently />
    <Instructor />
    <Rating />
    <More />
    
   

   
    </div>
   


  );
}

export default Page;
