import React from "react";
import { Link } from "react-router-dom";
import ProjectCard from "./helper/ProjectCard";
import projectsData from "../data/projects.json";

export default function Project() {
  const { header, items } = projectsData;

  return (
    <div className="section-shell w-full md:py-24">
      <div className="container lg:px-12 mx-auto">
        {/* <div className="container lg:px-12 mx-auto text-center">
          <h3 className="text-yellow-500 text-sm font-semibold uppercase">
            {header?.eyebrow}
          </h3>
          <h2 className="text-4xl font-bold 2xl:mt-2 mb-[10px]">{header?.title}</h2>
          {header?.description && (
            <p className="text-white/70 max-w-3xl mx-auto mt-3 leading-relaxed">
              {header.description}
            </p>
          )}
        </div> */}

        {items?.map((project, index) => (
          <ProjectCard
            key={project.id}
            {...project}
            isReversed={index % 2 === 1}
          />
        ))}

        <div className="mt-12 flex flex-wrap gap-4 items-center">
          <Link
            to="/cv"
            className="border border-yellow-500 text-yellow-500 px-4 py-2 rounded-lg hover:bg-yellow-500 hover:text-black transition text-sm font-semibold"
          >
            View Full CV
          </Link>
          <a
            href="/downloads/sonu-cv.pdf"
            download
            className="border border-yellow-500 text-yellow-500 px-4 py-2 rounded-lg hover:bg-yellow-500 hover:text-black transition text-sm font-semibold"
          >
            Download CV
          </a>
        </div>
      </div>
    </div>
  );
}
