import React from "react";

const FloatingButton = ({ onClick, icon }) => {
  return (
    <button className="floating-button" onClick={onClick}>
      <i className={icon}></i>
    </button>
  );
};

export default FloatingButton;
