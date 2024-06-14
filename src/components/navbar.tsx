import React from "react";
import { CiMenuFries } from "react-icons/ci";
function Navbar() {
  return (
    <nav className="navbar bg-opacity-20 border-b">
      <div className="navbar-content z-10 w-full md:w-auto h-10 flex justify-between">
        <div className="navbar-left flex justify-between items-center">
          <div className="">
            <p className="navbar-logo">AI.GEN</p>
          </div>
          <div className="navbar-links hidden lg:flex gap-8">
            <p>Features</p>
            <p>Roadmap</p>
            <p>Tokenomics</p>
          </div>
        </div>
        <div className="navbar-right flex gap-3 items-right sm:hidden">
          <div className="flex-grow"></div>
          <div className="bg-gray-600 w-12 h-12 flex items-center justify-center rounded-full">
            <CiMenuFries size={30} className="text-white"/>
          </div>
        </div>
        <div className="navbar-right flex z-10 gap-3  items-center hidden sm:flex">
          <button className="btn border border-white rounded-md px-4 py-2">
            Whitepaper
          </button>
          <button className="btn border border-white rounded-md px-4 py-2 text-nowrap">
            Get Started
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
