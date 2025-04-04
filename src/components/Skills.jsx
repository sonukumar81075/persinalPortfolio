import React from "react";
import SkillsCard from "./helper/SkillsCard";
import { SkillsData } from "../DynamicData/Features";

const Skills = () => {
  return (
    <div className="bg-[#212428] min-h-screen items-center flex justify-center  text-white pt-12  px-6">
      {/* <div className="max-w-7xl mx-auto py-16 text-center">
        <h3 className="text-yellow-500 text-sm font-semibold uppercase">
          {SkillsData.Heading}
        </h3>
        <h2 className="text-4xl font-bold mt-2">{SkillsData.title}</h2>
      </div> */}

      <div className="grid max-w-7xl mx-auto grid-cols-1 lg:grid-cols-7 gap-[2rem] items-center">
        <div className="col-span-3 items-start space-y-3 flex justify-center flex-col h-full">
          <p className="text-yellow-500">My Skills</p>
          <h1 className="text-white">Let's Explor Populer Skills Experience</h1>
          <p className="text-[15px] mb-[1.5rem] text-white opacity-70 mt-[1.5rem]">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vero nihil
            in ullam totam provident voluptatem, magnam quae corporis cupiditate
            dolore, consectetur molestiae beatae pariatur ex sit. Repellendus
            animi minus quaerat.
          </p>
          <button className="px-4 py-2 border-r-2 border-l-2 shadow-[0_4px_6px_0px_rgba(255,255,255,0.1)] p-3 flex justify-center  transition-transform duration-300 transform hover:translate-y-[-3px] border-yellow-500 text-white hover:bg-yellow-500 hover:text-black font-medium rounded-md">
            Learn More
          </button>
        </div>
        <div className="col-span-4 ">
          <div className="grid  grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-3 xl:grid-cols-4 gap-6 items-center">
            <div data-aos="flip-left" data-aos-anchor-placement="top-center">
              <SkillsCard
                title="React"
                image="/images/react.png"
                percent="90%"
              />
            </div>
            <div>
              <SkillsCard title="CSS" image="/images/css.png" percent="97%" />
            </div>
            <div>
              <SkillsCard
                title="JavaScript"
                image="/images/javascript.png"
                percent="77%"
              />
            </div>
            <div>
              <SkillsCard
                title="TypeScript"
                image="/images/type.png"
                percent="67%"
              />
            </div>
            <div>
              <SkillsCard title="HTML" image="/images/html.png" percent="67%" />
            </div>
            <div>
              <SkillsCard
                title="Node Js"
                image="/images/node.png"
                percent="77%"
              />
            </div>
            <div>
              <SkillsCard
                title="MongoDB"
                image="/images/mongo.png"
                percent="65%"
              />
            </div>
            <div>
              <SkillsCard
                title="Next js"
                image="/images/next.png"
                percent="85%"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
