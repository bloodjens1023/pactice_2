import Lottie from "lottie-react";
import animationData from "../assets/validPay.json";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
function ValidPaiement() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);
  return (
    <div
      className="containers"
      style={{ flex: 1, position: "absolute", top: "40%", left: "0%" }}
    >
      <motion.div>
        {isVisible && (
          <div>
            <Lottie
              animationData={animationData}
              loop
              autoplay
              style={{ width: 200, height: 200 }}
            />
          </div>
        )}
      </motion.div>
    </div>
  );
}

export default ValidPaiement;
