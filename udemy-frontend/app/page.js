import React from 'react';
import Course from './components/course';
import Spotlight from './components/spotlight';
import Categories from './components/categories';
import Views from './components/views';
import Focus from './components/focus';
import Card from './components/card';
import Trends from './components/trends';
import TrendingNow from './components/trendingNow';
import Career from './components/career';
import Logo from './components/logo';

export default function Home() {
  return (
    <div>
      <Spotlight />
      <Career />
      <Categories />
      <Course />
      <Logo />
      <Views />
      <Focus />
      <Card />
      <Trends />
      <TrendingNow />
     
    </div>
  );
}