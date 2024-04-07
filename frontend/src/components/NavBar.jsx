import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            {/* Logo */}
            <a href="#" className="text-white font-bold text-xl">CodeClash</a>
          </div>
          <div className="hidden md:block">
            {/* Navigation links */}
            <ul className="flex space-x-4">
              <li><a href="#" className="text-white">Home</a></li>
              <li><a href="#" className="text-white">Problem</a></li>
              <li><a href="#" className="text-white">Competition</a></li>
              <li><a href="#" className="text-white">profile</a></li>
            </ul>
          </div>
          {/* Hamburger menu for mobile */}
          <div className="md:hidden">
            <button className="text-white">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
              </svg>
            </button>

          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
