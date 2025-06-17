import React from "react";


function Featured() {
  

  return (
      <div className="w-fit mx-45 border border-gray-300 mt-20 mb-8 p-4">
        <h2 className="text-2xl font-semibold mb-4">Featured review</h2>
        <div className='flex items-center gap-2'>
          <img className='w-14 h-14 rounded-full' src="/images/instructor-image.webp" alt="instructor" />
          <div>
            <h2 className='font-semibold'>Vishal R.</h2>
            <p className="text-sm">30 courses <br /> 2 reviews</p>
          </div>
        </div>
        <div className='flex pt-2'>
          <img src="/images/Star 1.svg" alt="star" />
          <img src="/images/Star 1.svg" alt="star" />
          <img src="/images/Star 1.svg" alt="star" />
          <img src="/images/Star 1.svg" alt="star" />
          <img src="/images/Star 1.svg" alt="star" />
          <small className='pl-2'>4 years ago</small>
        </div>
        <p className='text-sm pt-3 pb-6'>I had some development experience before (backend) and I wanted to really learn JavaScript and I must <br />tell you, this is the best JavaScript course on the internet period. It has everything you need to get you up <br /> to speed and more!!! Apart from innovative challenges and awesome projects, what I personally really <br /> admired was the fact that Jonas really took a lot of effort in explaining "How JS works under the hood" <br /> and that is the most precious thing in this course, and just what I wanted.</p>
        <small>Was this review helpful?</small>
        <div className='flex gap-2 pt-2'>
          <div className='w-10 h-10 border border-violet-400 flex items-center justify-center rounded-full'>
            <img className='w-5 h-5' src="/images/thumbs-up.png" alt="" />
          </div>
          <div className='w-10 h-10 border border-violet-400 flex items-center justify-center rounded-full'>
            <img className='w-5 h-5' src="/images/thumbs-down.png" alt="thumbs-down" />
          </div>
          <div className='mt-2'>
            <a className='rounded-sm hover:bg-purple-200 text-sm' href="">Report</a>
          </div>
        </div>
      </div>

     
  );
}

export default Featured;
