import React from 'react';

const Navbar = () => {
  return (
    <div className="navbar bg-gradient-to-r from-red-600 to-blue-600 shadow-lg">
      {/* Navbar Start: Logo */}
      <div className="navbar-start">
        <div className="dropdown">
          {/* Hamburger Menu for Mobile */}
          <div tabIndex={0} role="button" className="btn btn-ghost text-white lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </div>
          {/* Mobile Dropdown Menu */}
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-white text-gray-800 rounded-box z-10 mt-3 w-52 p-2 shadow-lg"
          >
            <li><a href="#home">Home</a></li>
            <li><a href="#features">Features</a></li>
            <li><a href="#testimonials">Testimonials</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>
        {/* Logo */}
        <a className="btn btn-ghost text-2xl font-bold text-white" href="#home">
          IELTS Mastery Hub
        </a>
      </div>

      {/* Navbar Center: Menu Links (Desktop) */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 text-white font-medium">
          <li><a href="#home">Home</a></li>
          <li><a href="#features">Features</a></li>
          <li><a href="#testimonials">Testimonials</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </div>

      {/* Navbar End: CTA Button */}
      <div className="navbar-end">
        <a className="btn bg-white text-red-600 hover:bg-red-100 font-semibold">
          Get Started
        </a>
      </div>
    </div>
  );
};

export default Navbar;