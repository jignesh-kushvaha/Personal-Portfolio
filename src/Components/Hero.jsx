import React from "react";
import HeroImage from "../assets/mine.png";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import { Link } from "react-router-dom";

function Hero() {
  const [text] = useTypewriter({
    words: ["Jigneshsingh Kushvaha"],
    loop: true,
  });


  function handleNavigate(){
    window.location = "#contactme";
  }

  return (
      <div className="flex justify-center bg-black text-center text-white py-16 pt-24 h-screen">
        <div className="w-[30%] text-left items-center">
          <img
            className="mx-auto mb-8 w-72 h-72 rounded-full object-cover transform transition-transform duration-300 hover:scale-105"
            src={HeroImage}
            alt=""
          />
          <pre className="text-4xl font-bold">
            <p>hey 👋,</p>
            I'm {""}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">
              {text}
            </span>
            <Cursor cursorColor="red" />
          </pre>
          <p className="mt-2 text-xl">an aspirant Front-End Developer</p>
          <div className="mt-4 space-x-4">
            <button className=" bg-gradient-to-r from-green-400 to-blue-500 text-white rounded-full px-4 py-2 transform transition-transform duration-200 hover:scale-95 font-semibold" 
            onClick={handleNavigate}
            >
              Contact me
            </button>
            <button className=" bg-gradient-to-r from-pink-400 to-yellow-500 text-white rounded-full px-4 py-2 transform transition-transform duration-200 hover:scale-95 font-semibold">
              Resume
            </button>
          </div>
        </div>
        <hr />
      </div>
  );
}

export default Hero;
