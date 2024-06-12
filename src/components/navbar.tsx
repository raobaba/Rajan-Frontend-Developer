import React from "react";

function Navbar() {
  return (
    <nav className="navbar border-b">
      <div className="navbar-content w-full md:w-auto h-10 flex justify-between">
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
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 mt-2 cursor-pointer"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </div>
        <div className="navbar-right flex gap-3 items-center hidden sm:flex"> 
          <button className="btn border border-black rounded-md px-4 py-2">
            Whitepaper
          </button>
          <button className="btn border border-black rounded-md px-4 py-2 text-nowrap">
            Get Started
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
