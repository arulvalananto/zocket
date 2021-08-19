import React from "react";
import "./Alert.styles.css";
import { BsCheckCircle, BsFillXCircleFill, BsX } from "react-icons/bs";

const Alert = ({
  type = "success",
  message = "Registered Successfully",
  onClose,
}) => {
  const renderIcon = () => {
    return type === "success" ? (
      <BsCheckCircle size={20} className="success__icon" />
    ) : type === "failure" ? (
      <BsFillXCircleFill size={20} className="failure__icon" />
    ) : null;
  };

  return (
    <div className="alert">
      <div
        className={`alert__container ${
          type === "success"
            ? "alert__container--success"
            : type === "failure"
            ? "alert__container--failure"
            : ""
        }`}
      >
        {renderIcon()}
        <p className="alert__message">{message}</p>
        <p className="alert__closeButton" onClick={onClose}>
          <BsX size={16} />
        </p>
      </div>
    </div>
  );
};

export default Alert;
