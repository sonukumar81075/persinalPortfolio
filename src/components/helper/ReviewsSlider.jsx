import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css"; 
import ClientReviewsCard from "./ClientReviewsCard";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1300 },
    items: 3,
    slidesToSlide: 1, // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1300, min: 764 },
    items: 2,
    slidesToSlide: 1, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 764, min: 0 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
};

export default function ReviewsSlider() {
  return (
    <Carousel
      responsive={responsive}
      additionalTransfrom={0}
      arrows={true}
      autoPlaySpeed={5000}
      centerMode={false}
      infinite
      itemClass="item"
    >
      {/* ClientReviewsCard */}
      <ClientReviewsCard
        image="/images/image2.jpg"
        user="Sonu Kumar"
        role="Web Developer"
      />
      <ClientReviewsCard
        image="/images/image3.jpg"
        user="Vinod Kumar"
        role="Fullstack Developer"
      />
      <ClientReviewsCard
        image="/images/image4.jpg"
        user="Sanjay Kumar"
        role="Gaming Webapp"
      />
      <ClientReviewsCard
        image="/images/image2.jpg"
        user="Jeetu Kumar"
        role="Next js Developer"
      />
      <ClientReviewsCard
        image="/images/image3.jpg"
        user="Lalit Kumar"
        role="Php Developer"
      />
    </Carousel>
  );
}
