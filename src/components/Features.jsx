import React from "react"; 
import {FeaturesData,Feature} from '../DynamicData/Features'
const Features = () => {
  return (
    <>
    <div className="section-shell w-full">
      {/* <div className="container lg:px-12 mx-auto text-center">
        <h3 className="text-yellow-500 text-sm font-semibold uppercase">{FeaturesData.Heading}</h3>
        <h2 className="text-4xl font-bold mt-2 mb-[10px]">{FeaturesData.title}</h2>
      </div> */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 container lg:px-12 mx-auto">
        {Feature.map((service, index) => (
          <div
            key={index}
            className="relative bg-[#212428] p-12 rounded-lg border-l-[1px]   border-yellow-500   hover:shadow-[0px_10px_4px_0px_rgba(255,255,255,0.1)]   shadow-[6px_6px_6px_6px_rgba(255,255,255,0.1)] hover:bg-[#212428] transform transition-all duration-300 ease-in-out md:hover:translate-x-2 hover:translate-y-2"
          >
            <div className="mb-6  text-yellow-500">{service.icon}</div>
            <h3 className="text-xl font-semibold mb-6">{service.title}</h3>
            <p className="text-gray-400">{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  
    </>
  );
};
export default Features;
