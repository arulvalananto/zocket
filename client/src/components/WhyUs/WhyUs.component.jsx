import React from "react";
import "./WhyUs.styles.css";

import reasons from "../../datasets/reasons.dataset";

const WhyUs = () => {
  return (
    <section className="whyUs">
      <h1 className="whyUs__title">Why Us</h1>
      <div className="whyUs__reasons">
        {reasons.map(({ image, title, content, inverted }, index) => (
          <div className="whyUs__reason" key={index}>
            <img
              src={image}
              alt={title}
              className={`whyUs__reasonImage ${
                inverted && "whyUs__reasonImage--inverted"
              }`}
            />
            <div
              className={`whyUs__reasonDetails whyUs__reasonDetails--${index}`}
            >
              <h1 className="whyUs__reasonTitle ">{title}</h1>
              <p
                className={`whyUs__reasonContent whyUs__reasonContent--${index}`}
              >
                {content}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhyUs;
