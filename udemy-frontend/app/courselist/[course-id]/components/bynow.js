"use client"

import React from 'react'

function Bynow({ course }) {
  const handleEnroll = async () => {
    const token = localStorage.getItem("access");

    try {
      const response = await fetch(`http://localhost:8000/api/v1/courses/purchase/${course.id}/`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      });

      const data = await response.json();

      if (response.ok) {
        
        window.location.href = '/my-learnings';
      } else {
        console.error('Enrollment failed:', data.message);
        alert('Enrollment failed: ' + data.message);
      }
    } catch (error) {
      console.error('Error during enrollment:', error);
      alert('Something went wrong. Please try again.');
    }
  };


  return (
    <div className="fixed top-25  right-10 sm:right-20 w-[40%] sm:w-[350px] bg-white shadow-lg p-4 overflow-y-auto rounded-sm">
     
     
        <div className="relative w-full h-36 bg-gray-200 mb-4 overflow-hidden rounded-lg">
          <video  className="w-full h-full object-cover" controls muted>
           <source src="https://videos.pexels.com/video-files/4974884/4974884-hd_1920_1080_25fps.mp4" type="video/mp4" />
          </video>
        </div>
        <div className="flex justify-between border-b border-gray-300 pb-2 mb-2">
          <span className="font-semibold">Personal</span>
          <span className="text-gray-500">Teams</span>
        </div>
        <div className="mb-2 text-sm text-gray-500">
          <span>🚀 This Premium course is included in plans</span>
        </div>
        <div className="mb-4">
          <span className="text-2xl font-bold">{course.price}</span> 
          <span className="pl-2 line-through text-gray-400">₹4,229</span> 
          <span className=" pl-2 text-green-600">89% off</span>
        </div>
        <button onClick={handleEnroll} className="w-full border border-purple-600 text-purple-600 py-2 rounded-md mb-4 font-semibold hover:bg-purple-600 hover:text-white ">Enroll</button>

</div>
    
  );
}

export default Bynow;
