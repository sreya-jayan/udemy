"use client";

import { useState } from "react";
function Content() {
  const [showMore, setShowMore] = useState(false);

  const toggleShowMore = () => setShowMore(!showMore);

  return (
    <div className="max-w-6xl mx-auto px-7 ">
         <div className="pt-6  w-full max-w-[700px]">    
             
             <div>
             <h2 className="pt-6 text-2xl font-semibold mb-4">Requirements</h2>  
             <ul  className="list-disc space-y-2 pl-5 text-sm marker:text-base">
              <li>No coding experience is necessary to take this course! I take you from beginner to expert!</li>
              <li>Any computer and OS will work — Windows, macOS or Linux. We will set up your text editor the course.</li>
              <li>A basic understanding of HTML and CSS is a plus, but not a must! The course includes an HTML and CSS <br /> crash course.
              </li>
             </ul>
             </div>

             <div>
             <h2 className="pt-8 text-2xl font-semibold mb-4">Description</h2>  
             <p className="italic text-sm">
              <strong>The #1 bestselling JavaScript course on Udemy!</strong>
             </p>
             <p className="italic text-sm pt-2">
              <strong>Just updated with ES2024 and ES2025!</strong>
             </p>
             <p className="italic text-sm pt-2">"Really, really well made course. Super in-depth, with great challenges and projects that will solidify your <br /> Javascript understanding. I found the lectures were paced perfectly -- Jonas doesn't skip over anything that <br /> might be useful to a JS developer" — Carson Bartholomew</p>
             </div>
             {showMore && (

             <div>
              <p className='text-sm pt-8'>JavaScript is the most popular programming language in the world. It powers the entire modern web. It provides <br /> millions of high-paying jobs all over the world.</p>
              <p className='text-sm pt-2'>That's why you want to learn JavaScript too. And you came to the right place!</p>
              <p className='text-sm pt-8'><strong>Why is this the right JavaScript course for you?</strong></p>
              <p className='italic text-sm pt-2'>This is the most complete and in-depth JavaScript course on Udemy (and maybe the entire internet!). It's an all- <br />in-one package that will take you from the very fundamentals of JavaScript, all the way to building modern and <br /> complex applications.</p>
              <p className='text-sm pt-2'>You will learn modern JavaScript from the very beginning, step-by-step. I will guide you through <strong>practical and <br /> fun code examples, important theory </strong>  about how JavaScript works behind the scenes, and <strong>beautiful and <br /> complete projects.</strong></p>
              <p className='text-sm pt-2'>You will become ready to continue learning advanced <strong>front-end frameworks</strong> like React, Vue, Angular, or Svelte.</p>
              <p className='text-sm pt-2'>You will also learn how to think like a developer, how to plan application features, how to architect your code, <br /> how to debug code, and a lot of other real-world skills that you will need in your developer job.</p>
              <p className='text-sm pt-2'>And unlike other courses, this one actually contains beginner, intermediate, advanced, and even expert topics,<br />
               so <strong>you don't have to buy any other course in order to master JavaScript</strong> from the ground up!</p>
              <p className='text-sm pt-2'>But... You don't have to go into all these topics. This is a huge course, because, after all, it's "The Complete <br />JavaScript Course". In fact, it's like many courses in one! <strong> But you can become an excellent developer by <br /> watching only parts of the course.</strong> That's why I built this course in a very modular way, and designed pathways <br /> that will take you through the course faster.</p>
              <p  className="italic text-sm pt-2">By the end of the course, you will have the knowledge and confidence that you need in order to ace your job <br /> interviews and become a professional developer.</p>

              <p className='text-sm pt-8'><strong>Why am I the right JavaScript teacher for you?</strong></p>
              <p className='text-sm pt-2'>I know how students learn JavaScript and what they need in order to master it. And with that knowledge, I <br /> designed the ideal course curriculum. <strong> It's a unique blend of real-world projects, deep explanations, theory <br /> lectures, and challenges,</strong> that will take you from zero to an expert and confident JavaScript developer in just a <br />couple of weeks.</p>

              
              <p className='text-sm pt-8'><strong>So what exactly is covered in the course?</strong></p>
              <ul className='list-disc pl-5 text-sm marker:text-base pt-2'>
                <li>Build 5 beautiful real-world projects for your portfolio! In these projects, you will learn how to plan and <br />architect your applications using flowcharts and common JavaScript patterns</li>
                <li>Master the JavaScript fundamentals: variables, if/else, operators, boolean logic, functions, arrays, objects,<br /> loops, strings, and more</li>
                <li>Learn modern JavaScript (ES6+) from the beginning: arrow functions, destructuring, spread operator,<br /> default arguments, optional chaining, and more</li>
              </ul>

              
              <p className='text-sm pt-8'><strong>This is what's also included in the package:</strong></p>
              <ul  className='list-disc pl-5 text-sm marker:text-base pt-2'>
                <li>Up-to-date HD-quality videos, that are easy to search and reference <strong>(great for Udemy Business learners)</strong></li>
                <li>Professional English captions (not the auto-generated ones)</li>
                <li>Downloadable starter code and final code for each section</li>
              </ul>

              <p className='text-sm pt-8'><strong>Does any of these look like you? If so, then start this adventure today, and join me and 850,000+ other <br />developers in the only JavaScript course that you will ever need!</strong></p>
            

             <h2 className="text-2xl font-semibold pt-8">Who this course is for:</h2>
             <ul className='list-disc pl-5 text-sm marker:text-base pt-2'>
              <li>Take this course if you want to gain a true and deep understanding of JavaScript</li>
              <li>Take this course if you have been trying to learn JavaScript but: 1) still don't really understand JavaScript, or <br /> 2) still don't feel confident to code real apps</li>
              <li>Take this course if you're interested in using a library/framework like React, Angular, Vue or Node in the <br /> future</li>
             </ul>
          
             </div>
              )}
             <button  onClick={toggleShowMore}className="text-sm font-semibold text-violet-600 py-2 px-4 rounded-sm hover:bg-purple-200 mt-3">{showMore ? "Show less" : "Show more"}</button>
     
        </div>
    </div>
  )
}

export default Content;
