import React from "react";

export default function ProjectCard({
  image,
  title,
  tech1,
  tech2,
  tech3,
  tech4,
  cardnumber,
}) {
  return (
    <div className="grid md:px-0 px-6  mx-auto pt-[5rem] grid-cols-1 lg:grid-cols-2 gap-10 items-center">
      <div className={`${cardnumber == 2 || cardnumber == 4 ? 'md:order-2' : 'md:order-2'} p-4 rounded-xl relative cursor-pointer hover:rotate-6 transform transition-all duration-200 bg-gray-800 shadow-md`}>
        <img
          src={`${image}`}
          alt={title}
          className="w-full h-56 object-co rounded-xl mx-auto shadow-md"
        />
      </div>

      <div className={`${cardnumber == 2 || cardnumber == 4 ? 'md:order-1' : 'md:order-2'}`}>
        <p className="text-white text-[25px] ">{title}</p>
        <p className="text-white opacity-65 text-[15px] mt-[1rem] ">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet, eius
          perspiciatis. Ab sequi necessitatibus cumque, fuga qui culpa, neque
          velit placeat debitis praesentium ipsam aut reiciendis natus,
          aspernatur maiores! Laborum? Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Nostrum sequi hic vero. Lorem ipsum dolor sit amet,
          consectetur adipisicing elit. Accusamus magni vel numquam?
        </p>
        <div className="mt-[1.3rem] grid grid-cols-2 sm:grid-cols-3 xl:grid-cols-4 gap-[2rem]">
          <h1 className="bg-[#212428] border-r-2 border-l-2 border-yellow-500 hover:text-yellow-500 shadow-[0_4px_6px_0px_rgba(255,255,255,0.1)] p-3 flex justify-center rounded-lg transition-transform duration-300 transform hover:translate-y-[-3px]">
            {tech1}
          </h1>
          <h1 className="bg-[#212428] border-r-2 border-l-2 border-yellow-500 hover:text-yellow-500 shadow-[0_4px_6px_0px_rgba(255,255,255,0.1)] p-3 flex justify-center rounded-lg transition-transform duration-300 transform hover:translate-y-[-3px]">
            {tech2}
          </h1>
          <h1 className="bg-[#212428] border-r-2 border-l-2 border-yellow-500 hover:text-yellow-500 shadow-[0_4px_6px_0px_rgba(255,255,255,0.1)] p-3 flex justify-center rounded-lg transition-transform duration-300 transform hover:translate-y-[-3px]">
            {tech3}
          </h1>
          <h1 className="bg-[#212428] border-r-2 border-l-2 border-yellow-500 hover:text-yellow-500 shadow-[0_4px_6px_0px_rgba(255,255,255,0.1)] p-3 flex justify-center rounded-lg transition-transform duration-300 transform hover:translate-y-[-3px]">
            {tech4}
          </h1>
        </div>
      </div>
    </div>
  );
}
