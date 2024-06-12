import React from 'react';

function Navbar() {
  return (
    <nav className="navbar border-b">
      <div className="navbar-content w-full h-10 flex justify-between">
        <div className="navbar-left flex justify-between items-center">
          <div className="">
            <p className="navbar-logo">AI.GEN</p>
          </div>
          <div className="navbar-links flex gap-8">
            <p>Features</p>
            <p>Roadmap</p>
            <p>Tokenomics</p>
          </div>
        </div>
        <div className="navbar-right flex gap-3 items-center">
          <button className="btn border border-black rounded-md px-4 py-2">Whitepaper</button>
          <button className="btn border border-black rounded-md px-4 py-2">Get Started</button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
