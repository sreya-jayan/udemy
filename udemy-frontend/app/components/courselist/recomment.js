"use client";

import React from 'react'
import Wrapper from '../wrapper'

function Recomment() {
  const topics = [
    "Python", "Data Science", "Machine Learning", "Flask", "Web Scraping",
    "JavaScript", "Web Development", "Node.Js", "MongoDB", "CSS"
  ];

  return (
    <Wrapper>
      <div className="bg-white py-10 px-4">
        <h2 className="text-xl font-semibold mb-6">Topics recommended for you</h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {topics.map((topic, index) => (
            <div
              key={index}
              className="border border-gray-300 rounded py-4 px-2 text-center font-semibold text-gray-800 hover:shadow"
            >
              {topic}
            </div>
          ))}
        </div>
      </div>
    </Wrapper>
  );
}

export default Recomment;