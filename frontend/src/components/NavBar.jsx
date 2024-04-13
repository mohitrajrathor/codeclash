import React from 'react';


const Navbar = () => {
      return (
          <nav className="bg-black text-white p-5 flex justify-between items-center">
              <div className="flex items-center">
                  <a href="#" className="text-white mr-6">
                      <img src="Logo.png" alt="Logo" />
                  </a>
                  <a href="#" className="text-white px-3 py-2 rounded-md text-sm font-medium hover:bg-zinc-700">Problems</a>
                  <a href="#" className="text-white px-3 py-2 rounded-md text-sm font-medium hover:bg-zinc-700">Competitions</a>
                  <a href="#" className="text-white px-3 py-2 rounded-md text-sm font-medium hover:bg-zinc-700">Resources</a>
                  <a href="#" className="text-white px-3 py-2 rounded-md text-sm font-medium hover:bg-zinc-700">Blog</a>
                  <a href="#" className="text-white px-3 py-2 rounded-md text-sm font-medium hover:bg-zinc-700">About Us</a>
              </div>
              <div className="flex items-center">
                  <a href="#" className="text-white px-3 py-2 rounded-md text-sm font-medium hover:bg-zinc-700 mr-4">Sign in</a>
                  <a href="#" className="bg-blue-500 text-white px-3 py-2 rounded-md text-sm font-medium hover:bg-blue-600">Register</a>
              </div>
          </nav>
      )
  }


export default Navbar;
