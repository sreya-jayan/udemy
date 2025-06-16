import React from 'react'

function Instructor() {
  return (
    <div className="w-fit mx-45 border border-gray-300 mt-20 mb-8 p-4">
    <h2 className="text-2xl font-semibold mb-4">Instructors</h2>
    <h3 className='text-violet-800 underline font-semibold text-lg'>Jose Portilla</h3>
    <p>Head of Data Science at Pierian Training</p>
    <div className='flex items-center gap-4'>
        <img className='w-28 h-28 rounded-full mt-2' src="/images/testimonial-img.jpg" alt="" />
        <div className='space-y-2'>
        <div className='flex gap-4'>
            <img className='w-4 h-4' src="/images/star-filled.png" alt="" />
            <small>4.6 Instructor Rating</small>
        </div>
        <div className='flex gap-4'>
            <img  className='w-4 h-4' src="/images/certificates.png" alt="" />
            <small>1,265,234 Reviews</small>
        </div>
        <div className='flex gap-4'>
            <img  className='w-4 h-4' src="/images/group.png" alt="" />
            <small>4,241,883 Students</small>
        </div>
        <div className='flex gap-4'>
            <img  className='w-4 h-4' src="/images/play-button.png" alt="" />
            <small>87 Courses</small>
        </div>
        </div>
    </div>
    <p className='text-sm pt-4 pb-6'>Jose Marcial Portilla has a BS and MS in Mechanical Engineering from Santa Clara University and years <br /> of experience as a professional instructor and trainer for Data Science, Machine Learning and Python <br /> Programming. He has publications and patents in various fields such as microfluidics, materials science, and <br /> data science. Over the course of his career he has developed a skill set in analyzing data and he hopes to use his <br /> experience in teaching and data science to help other people learn the power of programming, the ability to <br /> analyze data, and the skills needed to present the data in clear and beautiful visualizations. Currently he works <br /> as the Head of Data Science for Pierian Training and provides in-person data science and python programming</p>
    
     <button className='text-sm font-semibold text-violet-600 py-2 px-4 rounded-sm hover:bg-purple-200 mt-3 -ml-3'>show more</button>
  
  <div className='pt-6'>
  <h3 className='text-violet-800 underline font-semibold text-lg'>Pierian Training</h3>
    <p>Data Science and Machine Learning Training</p>
    <div className='flex items-center gap-4'>
        <img className='w-28 h-28 rounded-full' src="/images/testimonial3.webp" alt="" />
        <div className='space-y-2'>
        <div className='flex gap-4'>
            <img className='w-4 h-4' src="/images/star-filled.png" alt="" />
            <small>4.6 Instructor Rating</small>
        </div>
        <div className='flex gap-4'>
            <img  className='w-4 h-4' src="/images/certificates.png" alt="" />
            <small>1,273,430 Reviews</small>
        </div>
        <div className='flex gap-4'>
            <img  className='w-4 h-4' src="/images/group.png" alt="" />
            <small>4,174,616 Students</small>
        </div>
        <div className='flex gap-4'>
            <img  className='w-4 h-4' src="/images/play-button.png" alt="" />
            <small>94 Courses</small>
        </div>
        </div>
    </div>
    <p className='text-sm pt-4'>Pierian Training stands as a premier provider in the realms of Data Science and Machine Learning education,<br /> offering both in-person and virtual instructor-led training tailored for enterprises. Explore our comprehensive <br /> profile to discover a wide range of courses designed to enhance your professional skills and organizational <br />
     capabilities. Feel free to contact us if you have any questions in the link on our profile!</p>
    
  

  </div>
</div>
  )
}

export default Instructor;
