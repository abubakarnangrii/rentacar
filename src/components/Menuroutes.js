import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import About from '../pages/About';
import Rates from '../pages/Rates';
import Drivers from '../pages/Drivers';
import Services from '../pages/Services';
import Home from '../pages/Home';
import Fleet from '../pages/Fleet';
import Contactus from '../pages/Contactus';
import Login from '../pages/Login_Register';
import ForgetPassword from '../pages/ForgetPassword';
import Blog from '../pages/Blog';
import Single_post from '../pages/Single_post';
import Blog_Masonry from '../pages/Blog_Masonry';
import Fleet_Second from '../pages/Fleet_Second';
import Details from '../pages/Details';
import Services_post from '../pages/Services_post';


export default function Menuroutes() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/rates" element={<Rates />} />
        <Route path="/drivers" element={<Drivers />} />
        <Route path="/services" element={<Services />} />
        <Route path="/fleets" element={<Fleet />} />
        <Route path="/contactus" element={<Contactus />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/register" element={<Login />} />
        <Route path='/forget-password' element={<ForgetPassword />} />
        <Route path='/single-post' element={<Single_post />} />
        <Route path='/blog-mansonry' element={<Blog_Masonry />} />
        <Route path='/fleet-second' element={<Fleet_Second />} />
        <Route path='/details' element={<Details />} />
        <Route path='/services-post' element={<Services_post />} />
      </Routes>
    </Router>
  );
}
