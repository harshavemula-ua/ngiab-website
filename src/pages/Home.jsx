import React, { useRef, useEffect } from 'react';
import { HashLink } from 'react-router-hash-link';
import waterVideo from "/assets/video/water-video.mp4";
import AOS from 'aos';
import 'aos/dist/aos.css';

import Team from '../components/home/team';
import Impact from '../components/home/impact';
import Documentation from '../components/home/documentation';
import About from '../components/home/about';
import Hero from '../components/home/hero';
import Tools from '../components/home/tools';
import Partner from '../components/home/partner';
import Contact from '../components/home/contact';
import Blog from '../components/home/blog';

const Home = () => {


  return (
    <div>
      {/* Hero Section (Landing page with the water video background) */}
      <Hero />

      {/* About Section */}
      <About />

      {/* Tools Section (Six tools linked to their respective repositories) */}
      <Tools />

      {/* Documentation & Resources Section (has DocuHub and NGIAB 101 training module) */}
      <Documentation />

      {/* Docker Pull Counter Section (gives real time Docker pull count using Vercel api) */}
      <Impact />

      {/* Our Team Section with images */}
      <Team />

      {/* Partners Logo Carousel */}
      <Partner />

      {/* Blog Section */}
      <Blog />

      {/* Contact + Resources Section */}
      <Contact />

    </div>
  );
};

export default Home; 