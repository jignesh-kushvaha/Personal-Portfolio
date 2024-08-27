import React from "react";

function Heading() {
  return (
    <nav className="bg-black text-white px-8 py-5">
      <div className="container py-2 px-24 flex justify-between">
        <div className="text-2xl font-bold tracking-wide">Portfolio</div>
        <div className="space-x-12">
          <a href="#Projects" className="hover:text-gray-100">Projects</a>
          <a href="#contactme" className="hover:text-gray-100">Contact Me</a>
          <a href="#about" className="hover:text-gray-100">About</a>
          <a href="#resume" className="hover:text-gray-100">Resume</a>
        </div>
      </div>
    </nav>
  );
}

export default Heading;
