import React from "react";
import plans from "../assets/img/model1.jpg";
const PlanPerso1 = () => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div>
        <img src={plans} alt="" width="650px" height="450px" />
        <div
          className="porte1"
          style={{
            width: "30px",
            height: "5px",
            top: "55px",
            left: "440px",
            backgroundColor: "red",
          }}
        ></div>
      </div>
    </div>
  );
};

export default PlanPerso1;
