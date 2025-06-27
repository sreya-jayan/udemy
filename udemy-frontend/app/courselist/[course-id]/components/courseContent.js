"use client"

import React, { useEffect, useState } from 'react';

function CourseContent({ course }) {
  const [Contents, setContents] = useState([]);

  useEffect(() => {
    if (course && course.contents) {
      setContents(course.contents);
    }
  }, [course]);

  return (
    <div className="max-w-6xl mx-auto px-7 ">
    <div className="p-4  w-full max-w-[700px]">
    <h1 className="text-2xl font-bold mb-4">Course Content</h1>
    <div className='flex justify-between'>
      <p className='text-sm'>{Contents.length} sections</p>
      <button className='font-semibold text-sm  text-purple-800'>Expend all sections</button>
    </div>
    <div className="bg-white border border-gray-300 p-4">
      {Contents.map((item, index) => (
        <div key={index} className="mb-2 border-b border-gray-200 pb-2 -mx-4">
          <div className="flex justify-between p-2">
            <span className="font-semibold">{item.day} - {item.level} - {item.title}</span>
            <span>{item.lectures} lectures • {item.duration}</span>
          </div>
        </div>
      ))}
    </div>
  </div>
  </div>

  )
}

export default CourseContent;
