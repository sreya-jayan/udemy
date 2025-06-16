"use client";
import React from 'react';
import Wrapper from "../components/wrapper";

function Topics() {
  const topics = [
    {
      name: "Python",
      image: "https://img-c.udemycdn.com/course/750x422/567828_67d0.jpg",
      courses: "3,500+",
      description: "Learn Python programming from scratch to advanced concepts"
    },
    {
      name: "Web Development",
      image: "https://img-c.udemycdn.com/course/750x422/762616_7693_3.jpg",
      courses: "4,200+",
      description: "Master HTML, CSS, JavaScript and modern web frameworks"
    },
    {
      name: "Data Science",
      image: "https://img-c.udemycdn.com/course/750x422/950390_270f_3.jpg",
      courses: "2,800+",
      description: "Learn data analysis, visualization and machine learning"
    },
    {
      name: "AWS",
      image: "https://img-c.udemycdn.com/course/750x422/859712_7693_3.jpg",
      courses: "1,900+",
      description: "Master cloud computing with Amazon Web Services"
    },
    {
      name: "React",
      image: "https://img-c.udemycdn.com/course/750x422/705264_caa9_2.jpg",
      courses: "2,300+",
      description: "Build modern user interfaces with React.js"
    },
    {
      name: "JavaScript",
      image: "https://img-c.udemycdn.com/course/750x422/851712_fc61_6.jpg",
      courses: "3,100+",
      description: "Learn JavaScript from basics to advanced concepts"
    }
  ];

  return (
    <Wrapper>
      <div className="py-12">
        <h3 className="text-4xl font-serif font-semibold mb-4">Featured topics</h3>
        <p className="text-gray-600 mb-8">Explore our most popular learning topics</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {topics.map((topic, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <div className="relative h-48">
                <img 
                  src={topic.image} 
                  alt={topic.name} 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                  <h4 className="text-white text-2xl font-bold">{topic.name}</h4>
                </div>
              </div>
              <div className="p-4">
                <p className="text-gray-600 mb-2">{topic.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">{topic.courses} courses</span>
                  <button className="text-violet-700 font-medium hover:text-violet-800">
                    Explore
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Wrapper>
  );
}

export default Topics; 