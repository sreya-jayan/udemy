import React from 'react'
import Wrapper from './wrapper'

function Views() {
  return (
    
   <Wrapper>
     <div className='pt-30'>
     <h2 className='text-2xl sm:text-4xl font-serif font-semibold mb-4'>Learners are viewing</h2>
     </div>
     <div className="flex flex-wrap gap-6">
               
                <div className="w-full sm:w-[calc(50%-12px)] lg:w-[calc(25%-18px)] bg-white  overflow-hidden hover:shadow-lg transition-shadow duration-300">
                  <div className="relative">
                    <img src="/images/view-1.jpg" alt="AI Guide" className="object-cover w-full h-full"  />
                  </div>
                  <div className="p-4">
                    <h3 className="font-bold text-base mb-2 line-clamp-2">
                      The Complete AI Guide: Learn ChatGPT, Generative AI & More
                    </h3>
                    <p className="text-sm text-gray-500 mb-2">Julian Melanson, Benza Maman, Leap Learning</p>
                    <div className="flex items-center mb-2">
                      <span className="text-amber-700 font-bold mr-1">4.5</span>
                      <div className="flex text-amber-400">★★★★☆</div>
                      <span className="text-gray-500 text-sm ml-1">(46,930)</span>
                    </div>
                    <div className="flex items-center">
                      <span className="font-bold text-base mr-2">₹639</span>
                      <span className="text-gray-500 line-through text-sm">₹2,999</span>
                    </div>
                    <div className="flex gap-2 mt-2">
                      <span className="text-xs px-2 py-1 rounded bg-purple-100 text-purple-700">Premium</span>
                      <span className="text-xs px-2 py-1 rounded bg-teal-100 text-teal-700">Bestseller</span>
                    </div>
                  </div>
                </div>
    
                
                <div className="w-full sm:w-[calc(50%-12px)] lg:w-[calc(25%-18px)] bg-white overflow-hidden hover:shadow-lg transition-shadow duration-300">
                  <div className="relative">
                    <img src="/images/view-2.jpg" alt="Copywriting Course" className="object-cover w-full h-full"  />
                  </div>
                  <div className="p-4">
                    <h3 className="font-bold text-base mb-2 line-clamp-2">
                      The Complete AI-Powered Copywriting Course & ChatGPT Marketing
                    </h3>
                    <p className="text-sm text-gray-500 mb-2">Ing. Tomas Moravek, Learn Digital Marketing</p>
                    <div className="flex items-center mb-2">
                      <span className="text-amber-700 font-bold mr-1">4.2</span>
                      <div className="flex text-amber-400">★★★★☆</div>
                      <span className="text-gray-500 text-sm ml-1">(1,848)</span>
                    </div>
                    <div className="flex items-center">
                      <span className="font-bold text-base mr-2">₹639</span>
                      <span className="text-gray-500 line-through text-sm">₹3,569</span>
                    </div>
                    <div className="flex gap-2 mt-2">
                      <span className="text-xs px-2 py-1 rounded bg-purple-100 text-purple-700">Premium</span>
                    </div>
                  </div>
                </div>
    
                
                <div className="w-full sm:w-[calc(50%-12px)] lg:w-[calc(25%-18px)] bg-white overflow-hidden hover:shadow-lg transition-shadow duration-300">
                  <div className="relative">
                    <img src="/images/view-3.jpg" alt="AI Marketing Assistants" className="object-cover w-full h-full"  />
                  </div>
                  <div className="p-4">
                    <h3 className="font-bold text-base mb-2 line-clamp-2">
                      ChatGPT, DeepSeek, Grok and 30+ More AI Marketing Assistants
                    </h3>
                    <p className="text-sm text-gray-500 mb-2">Anton Voroniuk, Anton Voroniuk Support</p>
                    <div className="flex items-center mb-2">
                      <span className="text-amber-700 font-bold mr-1">4.5</span>
                      <div className="flex text-amber-400">★★★★☆</div>
                      <span className="text-gray-500 text-sm ml-1">(554)</span>
                    </div>
                    <div className="flex items-center">
                      <span className="font-bold text-base mr-2">₹699</span>
                      <span className="text-gray-500 line-through text-sm">₹939</span>
                    </div>
                    <div className="flex gap-2 mt-2">
                      <span className="text-xs px-2 py-1 rounded bg-purple-100 text-purple-700">Premium</span>
                    </div>
                  </div>
                </div>
    
               
                <div className="w-full sm:w-[calc(50%-12px)] lg:w-[calc(25%-18px)] bg-white overflow-hidden hover:shadow-lg transition-shadow duration-300">
                  <div className="relative">
                    <img src="/images/view-4.jpg" alt="SEO With ChatGPT"  className="object-cover w-full h-full"  />
                  </div>
                  <div className="p-4">
                    <h3 className="font-bold text-base mb-2 line-clamp-2">
                      Mastering SEO With ChatGPT: Ultimate Beginner's Guide
                    </h3>
                    <p className="text-sm text-gray-500 mb-2">Anton Voroniuk, Anton Voroniuk Support</p>
                    <div className="flex items-center mb-2">
                      <span className="text-amber-700 font-bold mr-1">4.5</span>
                      <div className="flex text-amber-400">★★★★☆</div>
                      <span className="text-gray-500 text-sm ml-1">(301)</span>
                    </div>
                    <div className="flex items-center">
                      <span className="font-bold text-base mr-2">₹619</span>
                      <span className="text-gray-500 line-through text-sm">₹929</span>
                    </div>
                    <div className="flex gap-2 mt-2">
                      <span className="text-xs px-2 py-1 rounded bg-purple-100 text-purple-700">Premium</span>
                      <span className="text-xs px-2 py-1 rounded bg-teal-100 text-teal-700">Bestseller</span>
                    </div>
                  </div>
                  </div>
                  </div>
                </Wrapper>
                 
                
  )
}

export default Views;
