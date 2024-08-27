import React from "react";
import AboutMeImage from "../assets/mine.png";
function AboutMe() {
  return (
    <div className="bg-black text-white py-15 w-full py-12" id='about'>
      <div className="container mx-auto px-8">
        <h2 className="text-center font-bold text-4xl mb-8">About Me</h2>
        <div className="conyainer mx-32 flex flex-col justify-center items-center mt-24 gap-20 md:flex-row ">
          <img className="mx-auto mb-8 w-80 min-h-96 rounded-sm object-cover transform transition-transform duration-300 hover:scale-105" src={AboutMeImage} alt="" />
          <p className="">
            A dedicated and quick learner with a passion for Front-End web
            development. Eager to contribute to a dynamic team as a Front-End
            Web Developer, utilizing my knowledge of front-end including proficiency in HTML, CSS, JavaScript,
            Designing FrameWorks and tools to create seamless and efficient web applications.
          </p>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
