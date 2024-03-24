import { motion } from "framer-motion";
import React from "react";

const Switch = ({ id, nom }) => {
  return (
    <div
      class="switch-holder"
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div class="switch-label">
        <i class="fa fa-bluetooth-b"></i>
        <span>
          {nom} numero {id}
        </span>
      </div>
      <motion.input
        type="button"
        value="Désactiver"
        style={{
          height: "35px",
          fontSize: "1.1em",
          backgroundColor: "grey",
          border: "none",
          borderRadius: "5px",
          color: "white",
        }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 1.0 }}
      />
    </div>
  );
};

export default Switch;
