import React from 'react';

const courses = [
  {
    instructor: 'Jose Portilla',
    courses: [
      {
        title: 'The Complete Python Bootcamp From Zero to Hero',
        rating: 4.6,
        reviews: 536054,
        hours: 22,
        lectures: 156,
        level: 'All Levels',
        price: 399,
        originalPrice: 3109,
        image: '/images/python-2.jpg'
      },
      {
        title: 'Python for Data Science and Machine Learning Bootcamp',
        rating: 4.6,
        reviews: 150950,
        hours: 25,
        lectures: 165,
        level: 'All Levels',
        price: 519,
        originalPrice: 4699,
        image: '/images/python-3.webp'
      },
      {
        title: 'Python for Machine Learning & Data Science Masterclass',
        rating: 4.6,
        reviews: 17365,
        hours: 44,
        lectures: 231,
        level: 'All Levels',
        price: 429,
        originalPrice: 3889,
        image:'/images/python4.webp'
      }
    ]
  },
  {
    instructor: 'Pierian Training',
    courses: [
      {
        title: 'JavaScript Basics for Beginners',
        rating: 4.7,
        reviews: 84523,
        hours: 15,
        lectures: 120,
        level: 'Beginner',
        price: 299,
        originalPrice: 2799,
        image: '/images/python-2.jpg'
      },
      {
        title: 'Python for Data Science and Machine Learning Bootcamp',
        rating: 4.8,
        reviews: 125654,
        hours: 30,
        lectures: 220,
        level: 'Intermediate',
        price: 579,
        originalPrice: 5199,
        image: '/images/python-3.webp'
      },
      {
        title: 'Python for Machine Learning & Data Science Masterclass',
        rating: 4.5,
        reviews: 63214,
        hours: 20,
        lectures: 170,
        level: 'Advanced',
        price: 399,
        originalPrice: 3599,
        image: '/images/python4.webp'
      }
    ]
  }
];

const More = () => {
  return (
    <div className="max-w-6xl mx-auto px-5 py-8">
      <div className="pl-5 w-full max-w-[710px]">
        {courses.map((section, index) => (
          <div key={index} className="mb-12">
            <div className='flex gap-2'>
            <h2 className="text-2xl font-semibold mb-6">More Courses by</h2>
            <h2 className="text-2xl font-semibold text-purple-600 mb-6">{section.instructor}</h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {section.courses.map((course, idx) => (
                <div key={idx} className="bg-white flex flex-col items-start">
                  <div className="w-full h-32 overflow-hidden mb-4 border border-gray-300">
                    <img src={course.image} alt={course.title} className="w-full h-full object-cover" />
                  </div>
                 
                  <h3 className="text-medium font-bold mb-2 line-clamp-2">{course.title}</h3>
                  <p className="text-sm text-gray-500 mb-1">{section.instructor}</p>
                  <div className="flex items-center mb-2">
                    <span className="text-amber-600 mr-2">⭐⭐⭐⭐⭐ {course.rating}</span>
                    
                  </div>
                  <p className="text-sm text-gray-600 mb-2">{course.hours} hrs • {course.lectures} lectures • {course.level}</p>
                  <div className="flex gap-3 items-center w-full">
                    <span className="text-lg font-bold text-green-600">₹{course.price}</span>
                    <span className="text-sm text-gray-400 line-through">₹{course.originalPrice}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default More;