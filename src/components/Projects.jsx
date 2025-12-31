import React from "react";
import ProjectCard from "./helper/ProjectCard";
 
export default function Project() {
  return (
    <div className="bg-[#212428] w-full min-h-screen text-white pt-24  ">
      <div className="container lg:px-12 mx-auto">
        <div className="container lg:px-12 mx-auto text-center">
          <h3 className="text-yellow-500 text-sm font-semibold uppercase">
            Recent Work
          </h3>
          <h2 className="text-4xl  font-bold 2xl:mt-2">projects</h2>
        </div>
        <ProjectCard
          cardnumber={1}
          title="Freelancer Project Bidding Platform"
          tech1="React"
          tech2="Node"
          tech3="Tailwindcss"
          tech4="MongoDB"
          image="/images/Screenshot_3.png"
        />
        <ProjectCard
          cardnumber={2}
          title="Portfolio Website"
          tech1="React"
          tech2="next js"
          tech3="Tailwindcss"
          tech4="TypreScript"
          image="/images/project2.png"
        />
        <ProjectCard
          cardnumber={3}
          title="Fullstack Food Delivery Webapp"
          tech1="React"
          tech2="Next js"
          tech3="Node js"
          tech4="MongoDb"
          image="/images/project3.jpg"
        />
        <ProjectCard
          cardnumber={4}
          title="Travel Website"
          tech1="React"
          tech2="next js"
          tech3="Tailwindcss"
          tech4="TypreScript"
          image="/images/project4.jpg"
        />
      </div>
    </div>
  );
}
