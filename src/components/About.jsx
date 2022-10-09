import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>

        <p className="text-xl mt-20">
         I'm an enthusiastic Developer who likes to learn web and solve problems.
         Though my background is not from computer science but i thrive to learn and grow in this scenario.
        </p>

        <br />

        <p className="text-xl">
         You can see my projects which are completed and some are pending.
         I am currently working in Infosys as a System Engineer.
         
        </p>
         <br/>
         <p className="text-xl ">My <a style={{color:'purple'}} href="https://www.leetcode.com/craftyfox">Leetcode Profile.</a></p>
      </div>
    </div>
  );
};

export default About;
