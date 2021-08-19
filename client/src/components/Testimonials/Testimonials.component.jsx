import React from "react";
import "./Testimonials.styles.css";

import Slider from "react-slick";

import Testimonial from "./Testimonial.component";
import feedbacks from "../../datasets/feedbacks.dataset";

const settings = {
  dots: true,
  infinite: true,
  speed: 800,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,
};

const Testimonials = () => {
  const emptyArray = Array(3).fill("");
  return (
    <section className="testimonials">
      <h1 className="testimonials__title">Hear It From Them</h1>
      <Slider {...settings} class="slick-dots" pauseOnDotsHover={false}>
        {emptyArray.map((data, index) => (
          <Testimonial key={index} feedbacks={feedbacks} />
        ))}
      </Slider>
    </section>
  );
};

export default Testimonials;
