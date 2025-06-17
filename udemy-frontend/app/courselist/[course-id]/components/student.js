import React from "react";

const courses = [
  {
    image: "/images/student1.jpg",
    title: "The Complete Python Bootcamp From Zero to Hero in Python",
    hours: "22 total hours",
    updated: "7/2023",
    rating: 4.6,
    students: "2,046,064",
    price: 399,
    originalPrice: 3099,
    premium: true 
  },
  {
    image: "/images/student2.jpg",
    title: "Learn Python Programming - Beginner to Master",
    hours: "61.5 total hours",
    updated: "5/2025",
    rating: 4.6,
    students: "42,568",
    price: 399,
    originalPrice: 799,
    premium: true 
  },
  {
    image: "/images/student3.webp",
    title: "The Complete Python Developer",
    hours: "31 total hours",
    updated: "2/2025",
    rating: 4.6,
    students: "228,399",
    price: 449,
    originalPrice: 9999,
    premium: false
  },
  {
    image: "/images/student4.jpg",
    title: "Automate the Boring Stuff with Python Programming",
    hours: "9.5 total hours",
    updated: "2/2023",
    rating: 4.6,
    students: "1,145,192",
    price: 449,
    originalPrice: 3999,
    premium: true 
  },
  {
    image: "/images/student5.webp",
    title: "Automate the Boring Stuff with Python Programming",
    hours: "9.5 total hours",
    updated: "2/2023",
    rating: 4.6,
    students: "1,145,192",
    price: 519,
    originalPrice: 3999,
    premium: true 
  },
  {
    image:"/images/student6.webp",
    title: "Automate the Boring Stuff with Python Programming",
    hours: "9.5 total hours",
    updated: "2/2023",
    rating: 4.6,
    students: "1,145,192",
    price: 519,
    originalPrice: 3999,
    premium: true 
  }
  
  
];

const Student = () => {
  return (
    <div className="max-w-6xl mx-auto px-7 ">
    <div className="p-4  w-full max-w-[700px]">
    
      <h2 className="text-2xl font-bold mb-4">Students also bought</h2>
      <div className="space-y-4">
        {courses.map((course, index) => (
          <div key={index} className="flex items-center gap-6 bg-white border-b border-gray-200 pb-5">
            <img src={course.image} alt="Course" className="w-16 h-16 border border-gray-300" />
            <div className="flex-1">
              <h3 className="font-semibold text-gray-800 pl-0">{course.title}</h3>
              <div className="flex gap-2">
              
              <p className="text-sm text-green-600 font-semibold">{course.hours}</p>
              <p className="text-xs text-gray-500">.Updated {course.updated}</p>
              </div>
            </div>
            <div className="text-right">
              <p className="text-yellow-500 font-semibold mb-10">{course.rating} ★</p>
            </div>
            <div>
              <p className="text-xs text-gray-500  mb-10">👥 {course.students}</p>
             
              </div>
              <div className="mb-5">
              <p className="text-lg font-bold text-gray-800">₹{course.price}</p>
              <p className="text-xs text-gray-400 line-through">₹{course.originalPrice}</p>
            </div>
            
            <div className='w-10 h-10 border border-violet-400 flex items-center justify-center rounded-full mb-5'>
            <img className='w-5 h-5' src="/images/wishlisted.png" alt="wishlist" />
           </div>
          </div>
        ))}
      </div>
      <button className="border">showMore</button>
    </div>
    </div>
  );
};

export default Student;
