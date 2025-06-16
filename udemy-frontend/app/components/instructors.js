"use client";
import React from 'react';
import Wrapper from "../components/wrapper";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

function Instructors() {
  const instructors = [
    {
      name: "Dr. Angela Yu",
      title: "Full-Stack Developer & Lead Instructor",
      image: "https://img-c.udemycdn.com/user/750x750/43947420_3cb5_2.jpg",
      students: "1.5M+",
      courses: 12,
      rating: 4.8
    },
    {
      name: "Jose Portilla",
      title: "Data Scientist & Python Expert",
      image: "https://img-c.udemycdn.com/user/750x750/9685726_67e7_4.jpg",
      students: "2M+",
      courses: 15,
      rating: 4.7
    },
    {
      name: "Maximilian Schwarzmüller",
      title: "Professional Web Developer & Instructor",
      image: "https://img-c.udemycdn.com/user/750x750/8257794_4e3b_2.jpg",
      students: "1.2M+",
      courses: 18,
      rating: 4.8
    },
    {
      name: "Kirill Eremenko",
      title: "Data Scientist & Machine Learning Expert",
      image: "https://img-c.udemycdn.com/user/750x750/7549226_7691_2.jpg",
      students: "1.8M+",
      courses: 20,
      rating: 4.7
    },
    {
      name: "Jonas Schmedtmann",
      title: "Web Developer, Designer & Teacher",
      image: "https://img-c.udemycdn.com/user/750x750/2648172_7691_2.jpg",
      students: "1.3M+",
      courses: 14,
      rating: 4.8
    },
    {
      name: "Stephane Maarek",
      title: "AWS Certified Solutions Architect",
      image: "https://img-c.udemycdn.com/user/750x750/9967278_4e3b_2.jpg",
      students: "900K+",
      courses: 10,
      rating: 4.9
    }
  ];

  return (
    <Wrapper>
      <div className="py-12">
        <h3 className="text-4xl font-serif font-semibold mb-4">Featured instructors</h3>
        <p className="text-gray-600 mb-8">Learn from the best instructors in the industry</p>
        
        <div className="mb-12">
          <div className="flex items-center justify-between mb-6">
            <h4 className="text-xl font-bold">Top instructors</h4>
            <div className="flex gap-2">
              <button className="p-2 rounded-full bg-gray-100 hover:bg-gray-200">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </button>
              <button className="p-2 rounded-full bg-gray-100 hover:bg-gray-200">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                </svg>
              </button>
            </div>
          </div>
          
          <Swiper
            modules={[Navigation, Autoplay]}
            spaceBetween={20}
            slidesPerView={4}
            navigation={false}
            autoplay={{ delay: 3000 }}
            className="w-full"
          >
            {instructors.map((instructor, index) => (
              <SwiperSlide key={index}>
                <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
                  <div className="p-4">
                    <div className="flex items-center mb-4">
                      <img 
                        src={instructor.image} 
                        alt={instructor.name} 
                        className="w-16 h-16 rounded-full object-cover mr-4"
                      />
                      <div>
                        <h5 className="font-semibold text-lg">{instructor.name}</h5>
                        <p className="text-gray-600 text-sm">{instructor.title}</p>
                      </div>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <div>
                        <span className="text-gray-600">{instructor.students} students</span>
                      </div>
                      <div>
                        <span className="text-yellow-400">★</span>
                        <span className="ml-1">{instructor.rating}</span>
                      </div>
                    </div>
                    <div className="mt-4">
                      <button className="w-full bg-black text-white py-2 rounded hover:bg-gray-800 transition-colors duration-300">
                        View Courses
                      </button>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </Wrapper>
  );
}

export default Instructors; 