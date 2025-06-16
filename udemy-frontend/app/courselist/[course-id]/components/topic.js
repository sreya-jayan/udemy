import React from 'react'

function Topic() {
  return (
    

    <div className="max-w-6xl mx-auto px-7">
    <div className=" mb-6">
      <h2 className="text-2xl font-semibold mb-4">Explore related topics</h2>
      <div className="flex gap-2">
        <button className="border border-gray-400 rounded-sm px-3 py-1 text-gray-700 font-semibold text-sm hover:bg-gray-100">
          JavaScript
        </button>
        <button className="border border-gray-400 rounded-sm px-3 py-1 text-gray-700 font-semibold text-sm hover:bg-gray-100">
          Web Development
        </button>
        <button className="border border-gray-400 rounded-sm px-3 py-1 text-gray-700 font-semibold text-sm hover:bg-gray-100">
          Development
        </button>
      </div>
    </div>

    <div className="pt-6  w-full max-w-[700px]">
      <h2 className="text-2xl font-semibold mb-4">This course includes:</h2>
      <div className="grid grid-cols-2 gap-2">
        
        <div className="flex items-center gap-4">
         <img className="h-5 w-5" src="/images/video-icon.png" alt="video-icon" />
          <p>71 hours on-demand video</p>
        </div>

        <div className="flex items-center gap-4">
        <img className="h-5 w-5" src="/images/file-download.png" alt="file-download" />
        <p>20 downloadable resources</p>
        </div>

        <div className="flex items-center gap-4">
        <img className="h-5 w-5" src="/images/code-icon.png" alt="code-icon" />
        <p>8 coding exercises</p>
        </div>

        <div className="flex items-center gap-4">
          <img className="h-5 w-5" src="/images/phone.png" alt="phone" />
        <p>Access on mobile and TV</p>
        </div>

        <div className="flex items-center gap-4">
        <img className="h-5 w-5" src="/images/articles.png" alt="articles" />
        <p>25 articles</p>
        </div>

        <div className="flex items-center gap-4">
          <img className="h-5 w-5" src="/images/trophy-icon.png" alt="trophy" />
          <p>Certificate of completion</p>
        </div>
      </div>
    </div>

   
   
    <div className="flex flex-wrap gap-4 mt-10 p-6 bg-gray-100 w-full max-w-[700px] ">
      <div className="pr-6 pt-9">
        <h2 className="text-2xl font-semibold mb-4">Coding Exercises</h2>
        <p className="text-sm text-gray-700 mb-10">This course includes our updated <br /> coding exercises so you can <br /> practice your skills as you learn.</p>
        <a href="#" className="text-purple-600 text-sm underline">See a demo</a>
        </div>
       
        <div>
           <img className="h-60 w-100" src="/images/coding-desktop.png" alt="" />
         
        </div>
        </div>
      </div>
    
    
 
  )
}

export default Topic;
