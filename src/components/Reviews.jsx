import React from "react";
import ReviewsSlider from "./helper/ReviewsSlider";

const Reviews = () => {
  return (
    <div className="bg-[#212428] min-h-screen  text-white pt-24  px-4 md:px-0">
      <div className="max-w-7xl mx-auto  py-12 text-center">
        <h3 className="text-yellow-500 text-sm font-semibold uppercase">
          Client Reviews
        </h3>
        <h2 className="text-4xl text-white font-bold mt-2">
          {" "}
          I've 40+Client Feedback
        </h2>
      </div>
      <div className="max-w-7xl mx-auto   ">
        {/* reviews slider */}
        <ReviewsSlider />
      </div>
    </div>
  );
};

export default Reviews;
