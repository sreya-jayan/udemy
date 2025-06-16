import React from "react";

const courses = [
  {
    image: "/images/javasript.jpg",
    title: "The Complete Python Bootcamp From Zero <br/>to Hero in Python",
    instructor: "Dr. Angela Yu",
    rating: 4.7,
    reviews: 368291,
    price: 399,
    originalPrice: 3279,
    premium: true,
    bestseller: true
  },
  {
    image: "/images/javasript.jpg",
    title: "Python Data Science and Machine <br/> Learning Bootcamp",
    instructor: "Ardit Sulce",
    rating: 4.7,
    reviews: 70424,
    price: 519,
    originalPrice: 4699,
    premium: true,
    bestseller: false
  },
  {
    image: "/images/javasript.jpg",
    title: "Automate the Boring Stuff with Python <br/> Programming",
    instructor: "Jose Portilla",
    rating: 4.6,
    reviews: 17360,
    price: 429,
    originalPrice: 3889,
    premium: true,
    bestseller: false
  }
];

const Frequently = () => {
  return (
    <div className="w-full sm:w-fit mx-auto sm:mx-44 border border-gray-300 mt-20 mb-8 p-4">
      <h2 className="text-2xl font-bold mb-4">Frequently Bought Together</h2>
      <div className="space-y-4">
        {courses.map((course, index) => (
          <div key={index} className="flex items-center gap-4 mb-4">
            <div className="relative w-52 h-29">
              <img src={course.image} alt="Course" className="w-full h-full object-cover " />
              {index < courses.length - 1 && (
                 <div className="absolute left-1/2 transform -translate-x-1/2 top-30 -translate-y-1/2 w-10 h-10 bg-white border border-gray-300 rounded-full flex items-center justify-center z-10">
                 <span className="text-lg font-bold">+</span>
               </div>
              )}
            </div>
            <div className="flex-1">
              <h3 className="font-semibold text-gray-800" dangerouslySetInnerHTML={{ __html: course.title }}></h3>
              <p className="text-sm text-gray-500">{course.instructor}</p>
              <div className="flex items-center gap-2 mt-1">
                <p className="text-yellow-500 font-semibold">{course.rating} ★</p>
                <p className="text-sm text-gray-500">({course.reviews})</p>
                {course.premium && <span className="text-xs px-2 py-1 bg-purple-100 text-purple-700 rounded">Premium</span>}
                {course.bestseller && <span className="text-xs px-2 py-1 bg-green-100 text-green-700 rounded">Bestseller</span>}
              </div>
            </div>
            <div className="text-right pl-8 mb-10">
              <p className="text-lg font-bold text-gray-800">₹{course.price}</p>
              <p className="text-sm text-gray-400 line-through">₹{course.originalPrice}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-between items-center mt-4">
        <p className="text-lg font-bold text-gray-800">Total: ₹1347 <span className="text-sm text-gray-400 line-through">₹11867</span></p>
        <button className="bg-purple-600 text-white px-4 py-2 rounded-lg">Add all to cart</button>
      </div>
    </div>
  );
};

export default Frequently;
