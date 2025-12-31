import React, { useState } from "react";
import { HeroSectionData, Socialicons } from "../../DynamicData/HeroSection";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleScroll = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Toggle menu open/close
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-[#212428] text-white p-4 fixed w-full top-0 z-10 shadow-lg">
      <div className="max-w-full 2xl:px-24 mx-auto flex justify-between items-center">
        <div
          className="cursor-pointer flex items-center gap-3"
          onClick={() => handleScroll("home")}
        >
          {/* Logo wrapper */}
          <div className="w-14 h-14 rounded-full border border-gray-600 flex items-center justify-center">
            <img
              src="./../../public/images/right_image.png"
              alt="user image"
              className="w-12 h-12 rounded-full object-cover"
            />
          </div>

          {/* Brand text */}
          <span className="text-[#C5D0DE] font-medium tracking-wide">
            INBIO
          </span>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6">
          <li>
            <button
              onClick={() => handleScroll("home")}
              className="hover:text-yellow-500 text-[#C5D0DE] text-sm cursor-pointer uppercase"
            >
              Home
            </button>
          </li>
          <li>
            <button
              onClick={() => handleScroll("features")}
              className="hover:text-yellow-500 text-[#C5D0DE] text-sm  cursor-pointer uppercase"
            >
              Features
            </button>
          </li>
          <li>
            <button
              onClick={() => handleScroll("skills")}
              className="hover:text-yellow-500 text-[#C5D0DE] text-sm cursor-pointer uppercase"
            >
              SKILLS
            </button>
          </li>
          <li>
            <button
              onClick={() => handleScroll("portfolio")}
              className="hover:text-yellow-500 text-[#C5D0DE] text-sm cursor-pointer uppercase"
            >
              Portfolio
            </button>
          </li>
          <li>
            <button
              onClick={() => handleScroll("projects")}
              className="hover:text-yellow-500 text-[#C5D0DE] text-sm cursor-pointer uppercase"
            >
              Projects
            </button>
          </li>
          <li>
            <button
              onClick={() => handleScroll("reviews")}
              className="hover:text-yellow-500 text-[#C5D0DE] text-sm cursor-pointer uppercase"
            >
              REVIEWS
            </button>
          </li>
          <li>
            <button
              onClick={() => handleScroll("contact")}
              className="hover:text-yellow-500 text-[#C5D0DE] text-sm cursor-pointer uppercase"
            >
              Contact
            </button>
          </li>
        </ul>
        <button className="bg-[#212428] border border-gray-800 hover:text-yellow-500 hidden md:block shadow-[0_2px_1px_0px_rgba(255,255,255,0.1)] p-4 rounded-lg transition-transform duration-300 transform hover:translate-y-[-3px] px-8 py-2 text-yellow-500 text-sm">
          Buy Now
        </button>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <button
            onClick={toggleMenu}
            className="text-yellow-500 p-4 rounded-lg transition-transform duration-300 transform hover:translate-y-[-3px] text-2xl"
          >
            ☰ {/* Hamburger Menu Icon */}
          </button>
        </div>
      </div>

      {/* Sliding Mobile Menu */}
      <div
        className={`fixed top-0 left-0 w-full h-full bg-[#212428] text-white  p-4 overflow-auto transform transition-all duration-500 ease-in-out 
          ${isMenuOpen ? "translate-x-0" : "-translate-x-full"} md:hidden`}
      >
        <div className="flex justify-between items-start  ">
          <div className="">
            <div className="">
              <img
                src="https://ca.slack-edge.com/TT3EFSV60-U07BZK05QV8-e097688c51db-512"
                alt="user image"
                className="w-16 h-16 rounded-full border-2 border-gray-500 shadow-[0_4px_6px_rgba(0,0,0,0.1)]"
              />
            </div>

            <p className="py-2 text-lg text-gray-400 ">
              inbio is a personal portfolio template. You can customize all.
            </p>
          </div>
          <button onClick={toggleMenu} className="text-yellow-500 text-3xl">
            ×
          </button>
        </div>
        <div className="mt-6 h-[0.5px] bg-gray-600"></div>

        <ul className="flex flex-col items-start  space-y-6 text-lg  text-yellow-500 mt-10">
          <li>
            <button
              onClick={() => handleScroll("home", setIsMenuOpen(false))}
              className="hover:text-yellow-500  text-[#C5D0DE]  cursor-pointer text-sm uppercase"
            >
              Home
            </button>
          </li>
          <li>
            <button
              onClick={() => handleScroll("features", setIsMenuOpen(false))}
              className="hover:text-yellow-500  text-[#C5D0DE]  cursor-pointer text-sm uppercase"
            >
              Features
            </button>
          </li>
          <li>
            <button
              onClick={() => handleScroll("skills", setIsMenuOpen(false))}
              className="hover:text-yellow-500  text-[#C5D0DE]  cursor-pointer text-sm uppercase"
            >
              SKILLS
            </button>
          </li>
          <li>
            <button
              onClick={() => handleScroll("portfolio", setIsMenuOpen(false))}
              className="hover:text-yellow-500  text-[#C5D0DE]  cursor-pointer text-sm uppercase"
            >
              Portfolio
            </button>
          </li>
          <li>
            <button
              onClick={() => handleScroll("projects", setIsMenuOpen(false))}
              className="hover:text-yellow-500  text-[#C5D0DE]  cursor-pointer text-sm uppercase"
            >
              PROJECTS
            </button>
          </li>
          <li>
            <button
              onClick={() => handleScroll("reviews", setIsMenuOpen(false))}
              className="hover:text-yellow-500  text-[#C5D0DE]  cursor-pointer text-sm uppercase"
            >
              REVIEWS
            </button>
          </li>
          <li>
            <button
              onClick={() => handleScroll("contact", setIsMenuOpen(false))}
              className="hover:text-yellow-500  text-[#C5D0DE]  cursor-pointer text-sm uppercase"
            >
              Contact
            </button>
          </li>
        </ul>
        <div className="mt-12 h-[0.5px] bg-gray-600"></div>
        <div className="py-12">
          <p className="text-gray-400 text-lg  text-start mb-12">
            {HeroSectionData.facebookicon}
          </p>
          <div className="flex md:gap-6 gap-12">
            {Socialicons.map((icon) => (
              <Link
                key={icon.id}
                target="_blank"
                to={icon.to}
                className="bg-[#212428] border border-gray-800 hover:text-yellow-500 text-[#C5D0DE] shadow-[0_4px_6px_0px_rgba(255,255,255,0.1)] p-3 rounded-lg transition-transform duration-300 transform hover:translate-y-[-3px]"
              >
                {icon.svg}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

// import React from 'react';
// import { Link } from 'react-router-dom';

// const Navbar = () => {
//   return (
//     <nav className="bg-[#212428] text-white p-4 fixed w-full top-0 z-10 shadow-lg">
//       <div className="max-w-7xl mx-auto flex justify-between items-center">
//         <div className="text-xl font-bold">
//           <Link to="/">INBIO</Link>
//         </div>
//         <ul className="hidden md:flex space-x-6">
//           <li><Link to="/" className="hover:text-yellow-500 text-[#C5D0DE] relative after:block after:h-[1px] after:w-0 after:bg-yellow-500 after:transition-all after:duration-300 after:ease-in-out hover:after:w-full">Home</Link></li>
//           <li><Link to="/features" className="hover:text-yellow-500 text-[#C5D0DE] relative after:block after:h-[1px] after:w-0 after:bg-yellow-500 after:transition-all after:duration-300 after:ease-in-out hover:after:w-full">Features</Link></li>
//           <li><Link to="/portfolio" className="hover:text-yellow-500 text-[#C5D0DE] relative after:block after:h-[1px] after:w-0 after:bg-yellow-500 after:transition-all after:duration-300 after:ease-in-out hover:after:w-full">Portfolio</Link></li>
//           <li><Link to="/resume" className="hover:text-yellow-500 text-[#C5D0DE] relative after:block after:h-[1px] after:w-0 after:bg-yellow-500 after:transition-all after:duration-300 after:ease-in-out hover:after:w-full">Resume</Link></li>
//         </ul>
//         <button className="bg-[#212428] border border-gray-800 hover:text-yellow-500 text-[#C5D0DE] shadow-[0_2px_1px_0px_rgba(255,255,255,0.1)] p-4 rounded-lg transition-transform duration-300 transform hover:translate-y-[-3px] px-8 py-2 text-yellow-500 text-sm">
//           Buy Now
//         </button>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;
