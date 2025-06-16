import React from 'react';
import Wrapper from "../components/wrapper";
import Image from 'next/image';

function Career() {
  const careers = [
    {
      title: "Full Stack Web Developer",
      salary: "$127,005",
      openRoles: "16,500",
      rating: 4.7,
      totalRatings: "440K",
      hours: 87,
      image: "/images/career-card.webp",
      bgColor: "bg-orange-100"
    },
    {
      title: "Digital Marketer",
      salary: "$61,126",
      openRoles: "36,600",
      rating: 4.6,
      totalRatings: "3.2K",
      hours: 28.4,
      image: "/images/career-digitalmarketer.webp",
      bgColor: "bg-purple-600"
    },
    {
      title: "Data Scientist",
      salary: "$126,629",
      openRoles: "20,800",
      rating: 4.6,
      totalRatings: "215K",
      hours: 46.8,
      image: "/images/career-data-scientist.webp",
      bgColor: "bg-pink-500"
    }
  ];

  return (
    <Wrapper>
      <div className="py-16">
        <div className="container mx-auto px-4">
          <div className="mb-12">
            <h2 className="text-2xl sm:text-3xl font-serif font-semibold text-gray-900 mb-2 sm:mb-4">Ready to reimagine your career?</h2>
            <p className="text-base sm:text-lg text-gray-500 max-w-3xl">
              Get the skills and real-world experience employers want with Career Accelerators.
            </p>
          </div>
          
          <div className="flex flex-wrap gap-8">
            {careers.map((career, index) => (
              <div key={index} className="flex-1 w-full bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden border border-gray-200">
                <div className={`h-[200px] ${career.bgColor} relative overflow-hidden`}>
                  <Image 
                    src={career.image} 
                    alt={career.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-large font-bold text-gray-900 mb-2">{career.title}</h3>
                  <p className="text-gray-600 mb-4 text-xs">
                    {career.salary} average salary (US) • {career.openRoles} open roles (US)
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <div className="inline-flex items-center bg-gray-100 px-2 py-1 rounded text-xs">
                      <span className="text-yellow-500 mr-1">★</span>
                      {career.rating}
                    </div>
                    <div className="bg-gray-100 px-2 py-1 rounded text-xs">
                      {career.totalRatings} ratings
                    </div>
                    <div className="bg-gray-100 px-2 py-1 rounded text-xs">
                      {career.hours} total hours
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Wrapper>
  );
}

export default Career; 