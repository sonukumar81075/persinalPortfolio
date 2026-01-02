import React from "react";
import SkillsCard from "./helper/SkillsCard";
import skillsData from "../data/skills.json";

const Skills = () => {
  return (
    <div className="section-shell flex flex-col gap-10">
      {/* <div className="container lg:px-12 mx-auto text-center">
        <h3 className="text-yellow-500 text-sm font-semibold uppercase">
          {skillsData.header.eyebrow}
        </h3>
        <h2 className="text-4xl font-bold mt-2 mb-[10px]">
          {skillsData.header.title}
        </h2>
      </div> */}

      <div className="grid container lg:px-12 mx-auto grid-cols-1 lg:grid-cols-7 gap-[2rem] items-center">
        <div className="col-span-3 items-start space-y-3 flex justify-center flex-col h-full">
          <p className="text-yellow-500">{skillsData.header.eyebrow}</p>
          <h1 className="text-white">
            {skillsData.header.headline.split("<br />").map((line, idx) => (
              <span key={idx} className={idx === 0 ? "" : "block"}>
                {line}
              </span>
            ))}
          </h1>
          <p className="text-[15px] mb-[1.5rem] text-white opacity-70 mt-[1.5rem]">
            {skillsData.header.description}
          </p>
          <button className="px-4 py-2 border-r-2 border-l-2 shadow-[0_4px_6px_0px_rgba(255,255,255,0.1)] p-3 flex justify-center  transition-transform duration-300 transform hover:translate-y-[-3px] border-yellow-500 text-white hover:bg-yellow-500 hover:text-black font-medium rounded-md">
            {skillsData.header.cta}
          </button>
        </div>
        <div className="col-span-4 ">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-3 xl:grid-cols-4 gap-6 items-center">
            {skillsData.skills.map((skill, index) => (
              <div key={`${skill.title}-${index}`}>
                <SkillsCard title={skill.title} image={skill.image} percent={skill.percent} />
              </div>
            ))}
          </div>
        </div>
      </div>

    </div>
  );
};

export default Skills;
