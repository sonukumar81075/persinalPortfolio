import React, { useState } from "react";
import ImageModal from "../ImageModal";

export default function ProjectCard({
  images = [],
  title,
  description,
  techStack = [],
  projectUrl,
  isReversed = false,
}) {
  const [open, setOpen] = useState(false);
  const coverImage = images[0] || "/images/project1.jpg";
  const copy =
    description ||
    "I built a modern freelance marketplace web application that allows clients to post projects and freelancers to browse and place bids. The platform features a clean dashboard, structured project listings, and a responsive user interface focused on usability and performance. Built using modern frontend technologies with scalability in mind.";

  return (
    <>
      <div className="grid px-4 sm:px-6 mx-auto pt-[5rem] grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        {/* Main Image */}
        <div
          onClick={() => setOpen(true)}
          className={`w-full sm:p-4 rounded-xl cursor-pointer hover:rotate-3 transition bg-gray-800 shadow-md ${isReversed ? "lg:order-2" : "lg:order-1"}`}
        >
          <img
            src={coverImage}
            alt={title}
            className="w-full h-56 sm:h-72 object-cover rounded-xl"
          />
        </div>

        {/* Content */}
        <div className={isReversed ? "lg:order-1" : "lg:order-2"}>
          <p className="text-white text-[25px]">{title}</p>
          <p className="text-white opacity-65 text-[15px] mt-4">{copy}</p>

          <div className="mt-6 grid grid-cols-2 sm:grid-cols-4 gap-4">
            {(techStack.length
              ? techStack
              : [
                  { name: "React", url: "https://react.dev" },
                  { name: "Node.js", url: "https://nodejs.org" },
                  { name: "Tailwind CSS", url: "https://tailwindcss.com" },
                  { name: "MongoDB", url: "https://www.mongodb.com" },
                ]
            ).map((tech, index) => {
              const techName = typeof tech === "string" ? tech : tech.name;
              const techUrl = typeof tech === "string" ? null : tech.url;
              return techUrl ? (
                <a
                  key={`${title}-${techName}-${index}`}
                  href={techUrl}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="bg-[#212428] border-x-2 border-yellow-500 p-3 rounded-lg text-center hover:text-yellow-400 transition"
                >
                  {techName}
                </a>
              ) : (
                <span
                  key={`${title}-${techName}-${index}`}
                  className="bg-[#212428] border-x-2 border-yellow-500 p-3 rounded-lg text-center hover:text-yellow-400 transition"
                >
                  {techName}
                </span>
              );
            })}
          </div>
        </div>
      </div>

      {/* Modal */}
      {open && (
        <ImageModal
          images={images}
          title={title}
          description={copy}
          projectUrl={projectUrl}
          onClose={() => setOpen(false)}
        />
      )}
    </>
  );
}
