import React from "react";

const Testimonial = ({ feedbacks }) => {
  return (
    <div className="testimonials__items">
      {feedbacks.map(
        ({ title, content, avatar, username, userPosition }, index) => (
          <div className="testimonials__item" key={index}>
            <div className="testimonials__itemTop">
              <h1 className="testimonials__itemTitle">{title}</h1>
              <p className="testimonials__itemContent">{content}</p>
            </div>
            <div className="testimonials__itemBottom">
              <div className="testimonials__itemAvatarWrapper">
                <div className="testimonials__itemAvatarContainer">
                  <img
                    src={avatar}
                    alt="testimonial__avatar"
                    className="testimonials__itemAvatar"
                  />
                </div>
              </div>
              <h1 className="testimonials__itemUserName">{username}</h1>
              <p className="testimonials__itemUserPosition">{userPosition}</p>
            </div>
          </div>
        )
      )}
    </div>
  );
};

export default Testimonial;
