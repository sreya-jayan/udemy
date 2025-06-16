import React from 'react'
import Wrapper from '../wrapper'

function start() {
  return (
    <Wrapper>
    <div className="bg-white py-10 px-4">
    <div className="">
      {/* Header and My Learning Link */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-semibold">Let's start learning</h1>
        <a href="#" className="text-purple-700 font-semibold underline text-sm">My learning</a>
      </div>

      {/* Course Collection Box */}
      <div className="border border-gray-300 p-6 mb-6">
        <h2 className="text-lg font-bold mb-1">Explore our course collection</h2>
        <p className="text-gray-600 mb-4">
          Choose from a vast selection of courses on the latest in-demand skills to achieve your goals.
        </p>
        <button className="bg-purple-700 hover:bg-purple-800 text-white font-semibold px-4 py-2 rounded">
          Explore courses
        </button>
      </div>

      {/* Business Banner */}
      <div className=" mt-12 bg-black text-white px-6 py-4 rounded-2xl flex flex-col sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm font-semibold">
          <span className="font-bold">Training 2 or more people?</span> Get your team access to Udemy's top 27,000+ courses
        </p>
        <div className="mt-3 sm:mt-0 flex gap-3">
          <button className="bg-white text-black font-semibold px-4 py-2 rounded">Get Udemy Business</button>
          <button className="border border-white px-4 py-2 rounded">Dismiss</button>
        </div>
      </div>
    </div>
  </div>
  </Wrapper>
  )
}

export default start;
