import React from "react";
import experienceData from "../data/experience.json";

const Experience = () => {
  const { header, experience, education } = experienceData;

  return (
    <div className="section-shell">
      {/* <div className="container lg:px-12 mx-auto text-center">
        <h3 className="text-yellow-500 text-sm font-semibold uppercase">
          {header.eyebrow}
        </h3>
        <h2 className="text-4xl font-bold mt-2 mb-[10px]">{header.title}</h2>
      </div> */}

      <div className="container lg:px-12 mx-auto md:mt-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:mt-6">
          {/* Experience Column */}
          <div className="space-y-8">
            {experience.map((item, idx) => (
              <div
                key={`${item.role}-${idx}`}
                className="bg-[#24272b] p-8 sm:p-10 lg:p-12 rounded-xl border-l-[1px] border-yellow-500 shadow-[5px_6px_0px_0px_rgba(255,255,255,0.1)] min-h-[180px]"
              >
                <p className="text-xs text-gray-300 mb-2">{item.duration}</p>
                <h4 className="text-lg font-semibold text-white">{item.role}</h4>
                {item.company && (
                  <p className="text-sm text-gray-400 mt-1">{item.company}</p>
                )}
                {item.summary && (
                  <p className="text-sm text-gray-300 mt-3">{item.summary}</p>
                )}
              </div>
            ))}
          </div>

          {/* Education Column */}
          <div className="space-y-8">
            {education.map((item, idx) => (
              <div
                key={`${item.degree}-${idx}`}
                className="bg-[#24272b] p-8 sm:p-10 lg:p-12 rounded-xl border-l-[1px] border-yellow-500 shadow-[5px_6px_0px_0px_rgba(255,255,255,0.1)] min-h-[180px]"
              >
                <p className="text-xs text-gray-300 mb-2">{item.duration}</p>
                <h4 className="text-lg font-semibold text-white">{item.degree}</h4>
                {item.school && (
                  <p className="text-sm text-gray-400 mt-1">{item.school}</p>
                )}
                {item.notes && (
                  <p className="text-sm text-gray-300 mt-3">{item.notes}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;

