import React from 'react';

import Hero from '../components/courselist/hero';
import Start from '../components/courselist/start';
import List from '../components/courselist/list';
import Recomment  from '../components/courselist/recomment';

function Page() {
  return (
    <div>
    <div className='max-w-8xl mx-auto py-4 shadow-md hidden lg:block'>
        <ul className='hidden lg:flex flex-wrap justify-center gap-5 text-sm'>
            <li><a href="">Development</a></li>
            <li><a href="">Business</a></li>
            <li><a href="">Finance & Accounting</a></li>
            <li><a href="">IT & Software</a></li>
            <li><a href="">Office Productivity</a></li>
            <li><a href="">Personal Development</a></li>
            <li><a href="">Design</a></li>
            <li><a href="">Marketing</a></li>
            <li><a href="">Health & Fitness</a></li>
            <li><a href="">Music</a></li>
        </ul>
      
    </div>
    
    <Hero />
    <Start />
    <List />
    <Recomment />
    </div>
  )
}

export default Page;  