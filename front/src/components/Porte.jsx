import React from "react";

const Porte = ({ couleur, h, w, t, l }) => {
  return (
    <div
      style={{
        backgroundColor: couleur,
        width: w,
        height: h,
        position: "absolute",
        top: t,
        left: l,
      }}
    ></div>
  );
};

export default Porte;
