import React from "react";
import AboutMeImage from "../assets/mine.png";
import { Link } from "react-router-dom";
function AboutMe() {
  return (
    <div className="bg-black text-white py-15 w-full py-12" id='about'>
      <div className="container mx-auto px-8">
        <h2 className="text-center font-bold text-4xl mb-8">About Me</h2>
        <div className="container mx-auto w-[80%] grid grid-cols-[30%_70%] mt-24 place-content-center">
            <img
              className="w-80 min-h-96 rounded-sm object-cover transform transition-transform duration-300 hover:scale-105"
              src={AboutMeImage}
              alt=""
            />
            <p className="flex items-center px-9">
              A dedicated and quick learner with a passion for Front-End web
              development. Eager to contribute to a dynamic team as a Front-End
              Web Developer, utilizing my knowledge of front-end including
              proficiency in HTML, CSS, JavaScript, Designing FrameWorks and
              tools to create seamless and efficient web applications.
            </p>
          </div>
        </div>
    </div>
  );
}

export default AboutMe;
