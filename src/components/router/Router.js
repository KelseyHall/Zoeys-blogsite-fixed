import React from 'react';
import { Routes, Route } from 'react-router-dom';
import AboutMe from '../pages/aboutme';
import BlogPage from '../pages/blog';
import HomePage from '../pages/home';

const RouterSwitch = ({ blogEntryData }) => {
  return (
    <Routes>
      <Route
        exact
        path="/"
        element={<HomePage blogEntryData={blogEntryData} />}
      ></Route>
      <Route
        path="/blog"
        element={<BlogPage blogEntryData={blogEntryData} />}
      ></Route>
      <Route path="/aboutme" element={<AboutMe />}></Route>
    </Routes>
  );
};

export default RouterSwitch;
