import React from "react";
import "./Button.styles.css";

const Button = ({ type, click, className, children, loading }) => {
  return (
    <button
      type={type}
      onClick={click}
      className={`button ${className ? className : ""}`}
      disabled={loading}
    >
      {children}
    </button>
  );
};

export default Button;
