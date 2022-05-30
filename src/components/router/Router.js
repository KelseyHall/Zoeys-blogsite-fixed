import React from 'react';
import { Routes, Route } from 'react-router-dom';
import AboutMe from '../pages/aboutme';
import BlogPage from '../pages/blog';
import HomePage from '../pages/home';

const RouterSwitch = () => {
  return (
    <Routes>
      <Route exact path="/" element={<HomePage />}></Route>
      <Route path="/blog" element={<BlogPage />}></Route>
      <Route path="/aboutme" element={<AboutMe />}></Route>
    </Routes>
  );
};

export default RouterSwitch;
