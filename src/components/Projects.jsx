import React from "react";
import netflix  from "../assets/portfolio/netflix.jpg";
import delivery from "../assets/portfolio/delivery.jpg";
import spotify from "../assets/portfolio/spotify.jpg";
import zoom from "../assets/portfolio/zoom.jpg";


const projects= () => {
  const projects = [
    {
      id: 1,
      src:netflix ,
      title:"Netflix",
    },
    {
      id: 2,
      src:delivery,
    },
    {
      id: 3,
      src:spotify ,
    },
    {
      id: 4,
      src:zoom ,
    },
  
  ];

  return (
    <div
      name="projects"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white lg:h-full"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Projects
          </p>
          <p className="py-6">Check out some of my work right here</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {projects.map(({ id, src }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img
                src={src}
                alt=""
                className="rounded-md duration-200 hover:scale-105"
              />
              <div className="flex items-center justify-center">
                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                  Demo
                </button>
                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                  Code
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default projects;