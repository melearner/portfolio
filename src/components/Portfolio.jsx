import React from "react";
import videoplayer from "../assets/portfolio/videoplayer.png";
import penlogo from "../assets/portfolio/penlogo.jpeg";

import logo from "../assets/portfolio/logo.jpg";

import blog from "../assets/portfolio/blog.png";


const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: videoplayer,
      demo:"https://sweet-starship-ccfbd5.netlify.app",
      code:"https://github.com/melearner/videos"
    },
    {
      id: 2,
      src: penlogo,
      demo:"https://dapper-genie-d8e887.netlify.app",
      code:"https://github.com/melearner/codepen"
    },
    {
      id: 3,
      src: logo,
      demo:"https://github.com/melearner/chat-app",
      code:"https://github.com/melearner/chat-app"
    },
    {
      id: 4,
      src: blog,
      demo:"https://drive.google.com/file/d/1kTf4YKiwiZA5KCtovmJ4-UX67Cf7va1D/view?usp=sharing",
      code:"https://github.com/melearner/blog"
    },
    
  ];

  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Portfolio
          </p>
          <p className="py-6">Check out some of my work right here</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolios.map(({ id, src,code,demo}) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img
                src={src}
                alt=""
                className="rounded-md duration-200 hover:scale-105"
              />
              <div className="flex items-center justify-center">
                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                <a href={demo} > demo</a>
                </button>
                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                 <a href={code} > Code</a>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
