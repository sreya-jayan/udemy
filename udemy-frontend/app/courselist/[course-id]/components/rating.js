"use client";

import { useState } from "react";


const Rating = () => {
   const [showMore, setShowMore] = useState(false);
  
    const toggleShowMore = () => setShowMore(!showMore);
    return (
        <div className="max-w-6xl mx-auto px-7 ">
      <div className="p-4  w-full max-w-[700px]">
        <div className="flex items-center mb-6">
          <span className="text-xl font-semibold">⭐ 4.7 course rating</span>
          <span className="ml-2 text-xl font-semibold">· 232K ratings</span>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="p-4 border-b border-b-gray-300">
            <div className="flex items-center mb-2">
              <div className="bg-black w-10 h-10 rounded-full flex items-center justify-center font-bold mr-3">
                <span className="text-white">PP</span>
              </div>
              <div>
                <p className="font-semibold">Prateek P.</p>
                <p className="text-gray-500 text-sm">2 weeks ago</p>
              </div>
            </div>
            <div className="flex items-center mb-2">
            <img src="/images/Star 1.svg" alt="star" className="w-4 h-4 mr-1" />
              <img src="/images/Star 1.svg" alt="star" className="w-4 h-4 mr-1" />
              <img src="/images/Star 1.svg" alt="star" className="w-4 h-4 mr-1" />
              <img src="/images/Star 1.svg" alt="star" className="w-4 h-4 mr-1" />
              <img src="/images/Star 1.svg" alt="star" className="w-4 h-4" />
            </div>
            <p className="text-gray-700 text-medium pb-2">great SQL boot camp highly recommended. The course is well structured, making it ideal for beginners while still covering more advanced topics like joins.</p>
            <a className="text-sm underline decoration-violet-500 font-semibold" href="">Show more</a>
            <div className="flex gap-3 mt-8">
                <small className="text-gray-500">Helpful?</small>
                <img className="w-5 h-5" src="/images/like.png" alt="like" />
                <img className="w-5 h-5" src="/images/dislike.png" alt="dislike" />
            </div>
          </div>
  
          <div className="p-4 border-b border-b-gray-300">
            <div className="flex items-center mb-2">
            <div className="bg-black w-10 h-10 rounded-full flex items-center justify-center font-bold mr-3">
                <span className="text-white">LA</span>
              </div>
              <div>
                <p className="font-semibold">Luis Fernando Nascimento A.</p>
                <p className="text-gray-500 text-sm">4 weeks ago</p>
              </div>
            </div>
            <div className="flex items-center mb-2">
            <img src="/images/Star 1.svg" alt="star" className="w-4 h-4 mr-1" />
              <img src="/images/Star 1.svg" alt="star" className="w-4 h-4 mr-1" />
              <img src="/images/Star 1.svg" alt="star" className="w-4 h-4 mr-1" />
              <img src="/images/Star 1.svg" alt="star" className="w-4 h-4 mr-1" />
              <img src="/images/Star 1.svg" alt="star" className="w-4 h-4" />
            </div>
            <p className="text-gray-700 text-medium">Melhor professor que já tive! A didática do Jose é sensacional, curso completo e direto ao ponto.</p>
            <div className="flex gap-3 mt-8">
                <small className="text-gray-500">Helpful?</small>
                <img className="w-5 h-5" src="/images/like.png" alt="like" />
                <img className="w-5 h-5" src="/images/dislike.png" alt="dislike" />
            </div>
    
          </div>

          <div className="p-4 border-b border-b-gray-300">
            <div className="flex items-center mb-2">
            <div className="bg-black w-10 h-10 rounded-full flex items-center justify-center font-bold mr-3">
                <span className="text-white">AK</span>
              </div>
              <div>
                <p className="font-semibold">Luis Fernando Nascimento A.</p>
                <p className="text-gray-500 text-sm">4 weeks ago</p>
              </div>
            </div>
            <div className="flex items-center mb-2">
              <img src="/images/Star 1.svg" alt="star" className="w-4 h-4 mr-1" />
              <img src="/images/Star 1.svg" alt="star" className="w-4 h-4 mr-1" />
              <img src="/images/Star 1.svg" alt="star" className="w-4 h-4 mr-1" />
              <img src="/images/Star 1.svg" alt="star" className="w-4 h-4 mr-1" />
              <img src="/images/Star 1.svg" alt="star" className="w-4 h-4" />
            </div>
            <p className="text-gray-700 text-medium">Easy and understandable explanation. Well prepared syllables</p>
            <div className="flex gap-3 mt-8">
                <small className="text-gray-500">Helpful?</small>
                <img className="w-5 h-5" src="/images/like.png" alt="like" />
                <img className="w-5 h-5" src="/images/dislike.png" alt="dislike" />
            </div>
          </div>

          <div className="p-4 border-b border-b-gray-300">
            <div className="flex items-center mb-2">
            <div className="bg-black w-10 h-10 rounded-full flex items-center justify-center font-bold mr-3">
                <span className="text-white">GS</span>
              </div>
              <div>
                <p className="font-semibold">Luis Fernando Nascimento A.</p>
                <p className="text-gray-500 text-sm">4 weeks ago</p>
              </div>
            </div>
            <div className="flex items-center mb-2">
            <img src="/images/Star 1.svg" alt="star" className="w-4 h-4 mr-1" />
              <img src="/images/Star 1.svg" alt="star" className="w-4 h-4 mr-1" />
              <img src="/images/Star 1.svg" alt="star" className="w-4 h-4 mr-1" />
              <img src="/images/Star 1.svg" alt="star" className="w-4 h-4 mr-1" />
              <img src="/images/Star 1.svg" alt="star" className="w-4 h-4" />
            </div>
            <p className="text-gray-700 text-medium">As I had a limited knowledge and access to SQL and that I specialise in municipal finance analysis, this lecture as set me on the desired trajectory. I will definitely explore some other courses in this regard.</p>
            <div className="flex gap-3 mt-8">
                <small className="text-gray-500">Helpful?</small>
                <img className="w-5 h-5" src="/images/like.png" alt="like" />
                <img className="w-5 h-5" src="/images/dislike.png" alt="dislike" />
            </div>
          </div>
        </div>
        {showMore && (
       
           <div className="p-4 border-b border-b-gray-300">
           <div className="flex items-center mb-2">
           <div className="bg-black w-10 h-10 rounded-full flex items-center justify-center font-bold mr-3">
               <span className="text-white">AK</span>
             </div>
             <div>
               <p className="font-semibold">Luis Fernando Nascimento A.</p>
               <p className="text-gray-500 text-sm">4 weeks ago</p>
             </div>
           </div>
           <div className="flex items-center mb-2">
             <img src="/images/Star 1.svg" alt="star" className="w-4 h-4 mr-1" />
             <img src="/images/Star 1.svg" alt="star" className="w-4 h-4 mr-1" />
             <img src="/images/Star 1.svg" alt="star" className="w-4 h-4 mr-1" />
             <img src="/images/Star 1.svg" alt="star" className="w-4 h-4 mr-1" />
             <img src="/images/Star 1.svg" alt="star" className="w-4 h-4" />
           </div>
           <p className="text-gray-700 text-medium">Easy and understandable explanation. Well prepared syllables</p>
           <div className="flex gap-3 mt-8">
               <small className="text-gray-500">Helpful?</small>
               <img className="w-5 h-5" src="/images/like.png" alt="like" />
               <img className="w-5 h-5" src="/images/dislike.png" alt="dislike" />
           </div>
         </div>
       
        )}
        
        <button  onClick={toggleShowMore}className="text-sm font-semibold text-violet-600 py-2 px-4 rounded-sm hover:bg-purple-200 mt-3">{showMore ? "Show less" : "Show more"}</button>
      
        </div>
      </div>
    );
  };
  
  export default Rating;
  