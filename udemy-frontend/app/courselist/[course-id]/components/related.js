"use client";

import { useState } from "react";

function Related() {
  const [showMore, setShowMore] = useState(false);

  const toggleShowMore = () => setShowMore(!showMore);

  return (
    <div className="w-fit mx-45 border border-gray-300 mt-20 mb-8 p-4">
      <h2 className="font-bold text-lg mb-4 ml-3">What you'll learn</h2>

      
      <div className="flex gap-8">
       
        <div>
          <div className="flex mb-4 ml-3">
            <img className="inline-block w-3 h-4 mr-2" src="/images/check.svg" alt="check" />
            <p className="text-sm text-gray-800 ml-3">
              Become an advanced, confident, and <br /> modern JavaScript developer from scratch
            </p>
          </div>

          <div className="flex mb-4 ml-3">
            <img className="inline-block w-3 h-4 mr-2" src="/images/check.svg" alt="check" />
            <p className="text-sm text-gray-800 ml-3">
              Become job-ready by understanding how <br />JavaScript really works behind the scenes
            </p>
          </div>

          <div className="flex mb-4 ml-3">
            <img className="inline-block w-3 h-4 mr-2" src="/images/check.svg" alt="check" />
            <p className="text-sm text-gray-800 ml-3">
              JavaScript fundamentals: variables, if/else, <br /> operators, boolean logic, functions, arrays,<br /> objects, loops, strings, etc.
            </p>
          </div>

          <div className="flex mb-4 ml-3">
            <img className="inline-block w-3 h-4 mr-2" src="/images/check.svg" alt="check" />
            <p className="text-sm text-gray-800 ml-3">
              Modern OOP: Classes, constructors, <br /> prototypal inheritance, encapsulation, etc.
            </p>
          </div>

          {showMore && (
            <>
              <div className="flex mb-4 ml-3">
                <img className="inline-block w-3 h-4 mr-2" src="/images/check.svg" alt="check" />
                <p className="text-sm text-gray-800 ml-3">
                  Asynchronous JavaScript: Event loop, <br /> promises, async/await, AJAX calls and APIs
                </p>
              </div>

              <div className="flex mb-4 ml-3">
                <img className="inline-block w-3 h-4 mr-2" src="/images/check.svg" alt="check" />
                <p className="text-sm text-gray-800 ml-3">
                  Modern tools for 2022 and beyond: NPM,<br /> Parcel, Babel and ES6 modules
                </p>
              </div>

              <div className="flex mb-4 ml-3">
                <img className="inline-block w-3 h-4 mr-2" src="/images/check.svg" alt="check" />
                <p className="text-sm text-gray-800 ml-3">
                Get fast and friendly support in the Q&A area
                </p>
              </div>
            </>
          )}
        </div>

       
        <div>
          <div className="flex mb-4 ml-3">
            <img className="inline-block w-3 h-4 mr-2" src="/images/check.svg" alt="check" />
            <p className="text-sm text-gray-800 ml-3">
              Build 6 beautiful real-world projects for your <br /> portfolio (not boring toy apps)
            </p>
          </div>

          <div className="flex mb-4 ml-3">
            <img className="inline-block w-3 h-4 mr-2" src="/images/check.svg" alt="check" />
            <p className="text-sm text-gray-800 ml-3">
              How to think and work like a developer: <br /> problem-solving, researching, workflows
            </p>
          </div>

          <div className="flex mb-4 ml-3">
            <img className="inline-block w-3 h-4 mr-2" src="/images/check.svg" alt="check" />
            <p className="text-sm text-gray-800 ml-3">
              Modern ES6+ from the beginning: arrow <br /> functions, destructuring, spread operator, <br /> optional chaining (ES2020), etc.
            </p>
          </div>

          <div className="flex mb-4 ml-3">
            <img className="inline-block w-3 h-4 mr-2" src="/images/check.svg" alt="check" />
            <p className="text-sm text-gray-800 ml-3">
              Complex concepts like the 'this' keyword,<br /> higher-order functions, closures, etc.
            </p>
          </div>

          {showMore && (
            <>
              <div className="flex mb-4 ml-3">
                <img className="inline-block w-3 h-4 mr-2" src="/images/check.svg" alt="check" />
                <p className="text-sm text-gray-800 ml-3">
                How to architect your code using flowcharts <br /> and common patterns
                </p>
              </div>

              <div className="flex mb-4 ml-3">
                <img className="inline-block w-3 h-4 mr-2" src="/images/check.svg" alt="check" />
                <p className="text-sm text-gray-800 ml-3">
                Practice your skills with 50+ challenges and <br /> assignments (solutions included)
                </p>
              </div>

              <div className="flex mb-4 ml-3">
                <img className="inline-block w-3 h-4 mr-2" src="/images/check.svg" alt="check" />
                <p className="text-sm text-gray-800 ml-3">
                Course pathways: design your unique <br /> learning path according to your goals!
                </p>
              </div>
            </>
          )}
        </div>
      </div>

     
      <div className="mt-6 flex justify-left">
        <button
          onClick={toggleShowMore}
          className="text-sm text-purple-600 py-2 px-4 rounded-sm bg-purple-100 hover:bg-purple-200"
        >
          {showMore ? "Show less" : "Show more"}
        </button>
      </div>
    </div>
  );
}

export default Related;
