import React from 'react'

const contentData = [
  {
    "day": "Day 3",
    "level": "Beginner",
    "title": "Control Flow and Logical Operators",
    "lectures": 10,
    "duration": "1hr 15min"
  },
  {
    "day": "Day 4",
    "level": "Beginner",
    "title": "Randomisation and Python Lists",
    "lectures": 7,
    "duration": "1hr 4min"
  },
  {
    "day": "Day 5",
    "level": "Beginner",
    "title": "Python Loops",
    "lectures": 6,
    "duration": "41min"
  },
  {
    "day": "Day 6",
    "level": "Beginner",
    "title": "Python Functions & Karel",
    "lectures": 9,
    "duration": "1hr 23min"
  },
  {
    "day": "Day 7",
    "level": "Beginner",
    "title": "Hangman",
    "lectures": 8,
    "duration": "58min"
  },
  {
    "day": "Day 8",
    "level": "Beginner",
    "title": "Function Parameters & Caesar Cipher",
    "lectures": 7,
    "duration": "1hr 5min"
  },
  {
    "day": "Day 9",
    "level": "Beginner",
    "title": "Dictionaries, Nesting and the Secret Auction",
    "lectures": 5,
    "duration": "50min"
  },
  {
    "day": "Day 9",
    "level": "Beginner",
    "title": "Dictionaries, Nesting and the Secret Auction",
    "lectures": 5,
    "duration": "50min"
  },
  {
    "day": "Day 9",
    "level": "Beginner",
    "title": "Dictionaries, Nesting and the Secret Auction",
    "lectures": 5,
    "duration": "50min"
  },{
    "day": "Day 9",
    "level": "Beginner",
    "title": "Dictionaries, Nesting and the Secret Auction",
    "lectures": 5,
    "duration": "50min"
  }
]

function CourseContent() {
  return (
    <div className="max-w-6xl mx-auto px-7 ">
    <div className="p-4  w-full max-w-[700px]">
    <h1 className="text-2xl font-bold mb-4">Course Content</h1>
    <div className='flex justify-between'>
      <p className='text-sm'>101 sections • 592 lectures • 56h 21m total length</p>
      <button className='font-semibold text-sm  text-purple-800'>Expend all sections</button>
    </div>
    <div className="bg-white border border-gray-300 p-4">
      {contentData.map((item, index) => (
        <div key={index} className="mb-2 border-b border-gray-200 pb-2 -mx-4">
          <div className="flex justify-between p-2">
            <span className="font-semibold">{item.day} - {item.level} - {item.title}</span>
            <span>{item.lectures} lectures • {item.duration}</span>
          </div>
        </div>
      ))}
    </div>
  </div>
  </div>

  )
}

export default CourseContent;
