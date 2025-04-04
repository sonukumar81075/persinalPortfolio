import { SparklesIcon, StarIcon } from "@heroicons/react/16/solid"; 
import React from "react";

 
const ClientReviewsCard = ({ role, user, image }) => {
  return (
    <div className="m-2 hover:bg-gray-700 transition-all duration-300 rounded-lg">
      <div className="border-2 p-4 border-gray-700 rounded-xl">
        <img
          src={`${image}`}
          alt={user}
          width={100}
          height={100}
          className="rounded-full mx-auto mt-[2rem]"
        />
        <div className="">
          <SparklesIcon className="w-[6rem] h-[6rem] text-white opacity-15 fixed" />
        </div>
        <p className="tex-[15px] text-white opacity-65 mt-[3rem] text-center">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odio id
          ducimus ab, sint similique nemo sunt repudiandae consectetur incidunt?
          Ipsa maxime dolorem rem corrupti quaerat quod asperiores aperiam
          cumque. Non!
        </p>
        <div className="flex items-center space-x-1 justify-center mt-[0.4rem] ">
          <StarIcon className="w-[1.4rem] h-[1.4rem] text-yellow-400" />
          <StarIcon className="w-[1.4rem] h-[1.4rem] text-yellow-400" />
          <StarIcon className="w-[1.4rem] h-[1.4rem] text-yellow-400" />
          <StarIcon className="w-[1.4rem] h-[1.4rem] text-yellow-400" />
          <StarIcon className="w-[1.4rem] h-[1.4rem] text-yellow-400" />
        </div>
        <div className="">
          <SparklesIcon className="w-[6rem] h-[6rem] right-0 text-white opacity-15 fixed" />
        </div>
        <h1 className="text-[20px] text-center text-white mt-[2rem] font-medium">{user}</h1>
        <p className="text-yellow-400 text-[18px] text-center mb-[3rem] ">{role}</p>
      </div>
    </div>
  );
};

export default ClientReviewsCard;
