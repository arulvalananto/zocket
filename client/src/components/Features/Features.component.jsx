import React from "react";
import "./Features.styles.css";

import services from "../../datasets/services.dataset";

import { BsArrowRight } from "react-icons/bs";

const Features = () => {
  return (
    <section className="features">
      <h1 className="features__title">Tailor-made Services</h1>
      <div className="features__bottom">
        {services.map(({ icon, title, content }) => (
          <div key={title} className="features__card">
            <img src={icon} alt={title} className="features__cardImage" />
            <div className="features__cardInfo">
              <p className="features__cardFeatureTitle">{title}</p>
              <p className="features__cardFeatureContent">{content}</p>
            </div>
            <a href="/" className="features__cardURL">
              <p>Explore</p>
              <BsArrowRight className="features__CardURLIcon" size={14} />
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;
