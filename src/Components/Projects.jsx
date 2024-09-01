import React from "react";
import { Link } from "react-router-dom";

const projectsDetail = [
  {
    name: "Gussing Game",
    description: "Gussing Number Game",
    link: "https://gussing-number-game.vercel.app/",
    tecnologies:[
        "Html","Css","Javascript"
    ]
  },
  {
    name: "To-do List",
    description: "React To-Dos App with crud operations",
    link: "https://to-do-list-in-react-six.vercel.app/",
    tecnologies:[
        "Html","Tailwind Css","React Js"
    ]
  },
];

function Projects() {
  return (
    <div className="bg-black text-white py-15 w-full py-12" id="Projects">
      <div className="container mx-auto px-8 w-[80%]">
        <h2 className="text-center font-bold text-4xl mb-8">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mx-3">
          {projectsDetail.map((project, index) => (
            <Link
              to={project.link}
              target="_blank"
              key={index}
              className="cursor-pointer group"
            >
              <div className=" bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 p-1 rounded-xl shadow-xl overflow-hidden transform transition-transform duration-300 group-hover:scale-105">
                <div className=" z-10 p-6 bg-black rounded-lg">
                  <h3 className="text-2xl font-bold mb-4 text-white">
                    {project.name}
                  </h3>
                  <p className="text-gray-400 pb-3">{project.description}</p>
                  <p className="text-gray-400">Technologies: {project.tecnologies.join(", ")}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Projects;
