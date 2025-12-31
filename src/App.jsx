import React from 'react';
import { motion } from 'framer-motion';
import Navbar from './components/helper/Navbar';
import HeroSection from './components/HeroSection';
import Features from './components/Features';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
// import SplashCursor from './components/SplashCursor';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Reviews from './components/Reviews';

const sectionVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const App = () => {
  return (
    <div className="bg-white   text-white">
      <Navbar />
      
      <motion.section 
        id="home" 
        initial="hidden" 
        whileInView="visible" 
        viewport={{ once: true }} 
        variants={sectionVariants}
      >
        <HeroSection />
      </motion.section>

      <motion.section 
        id="features" 
        initial="hidden" 
        whileInView="visible" 
        viewport={{ once: true }} 
        variants={sectionVariants}
      >
        <Features />
      </motion.section>

      <motion.section 
        id="skills" 
        initial="hidden" 
        whileInView="visible" 
        viewport={{ once: true }} 
        variants={sectionVariants}
      >
        <Skills />
      </motion.section> 

      <motion.section 
        id="portfolio" 
        initial="hidden" 
        whileInView="visible" 
        viewport={{ once: true }} 
        variants={sectionVariants}
      >
        <Portfolio />
      </motion.section>

      <motion.section 
        id="projects" 
        initial="hidden" 
        whileInView="visible" 
        viewport={{ once: true }} 
        variants={sectionVariants}
      >
        <Projects />
      </motion.section>

      <motion.section 
        id="reviews" 
        initial="hidden" 
        whileInView="visible" 
        viewport={{ once: true }} 
        variants={sectionVariants}
      >
        <Reviews />
      </motion.section>

      <motion.section 
        id="contact" 
        initial="hidden" 
        whileInView="visible" 
        viewport={{ once: true }} 
        variants={sectionVariants}
      >
        <Contact />
      </motion.section>

      {/* <section id="cursor">
        <SplashCursor />
      </section>  */}
    </div>
  );
};

export default App;
