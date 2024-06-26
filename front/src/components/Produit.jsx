import SideBar from "./SideBar";
import React from "react";
import "../assets/css/produit.css";
import axios from "axios";
import { useState, useEffect } from "react";
import CardProduit from "./CardProduit";
import Nav from "./Nav";
import { motion } from "framer-motion";
import Load from "./Load";
import Headers from "./Headers";
import Research from "./Research";

export default function Produits() {
  const [produits, setProduits] = useState([]);
  const [charge, setCharge] = useState(false);
  useEffect(() => {
    axios
      .get("http://localhost:8000/api/listeProduit")
      .then((res) => {
        setProduits(res.data);
      })
      .catch((error) => {
        console.error(
          "Une erreur s'est produite lors de la récupération des données : ",
          error
        );
      });
  }, []);

  setInterval(() => {
    setCharge(true);
  }, 2000);
  return (
    <div className="">
      <div className="row">
        <div className="col-md-3">
          <Nav marcher="#FFCC00" />
        </div>
        <div className="col-md-9 ">
          <Headers marcher="#774DB3" />

          {!charge && (
            <div
              style={{
                display: "flex",
                alignItems: "center",
                position: "absolute",
                right: "35%",
                justifyContent: "center",
                height: "90vh",
              }}
            >
              <Load />
            </div>
          )}
          {charge && (
            <>
              <motion.div
                className="d-flex flex-column"
                style={{ marginTop: "0px" }}
                variants={{
                  hidden: { opacity: 0 },
                  visible: { opacity: 1 },
                }}
                initial="hidden"
                animate="visible"
                transition={{ duration: 0.5, delay: 0.25 }}
              >
                <div className="container-fluid">
                  <motion.div
                    id="radius-shape-1"
                    className="position-absolute rounded-circle shadow-5-strong"
                    style={{
                      left: "25%",
                      top: "20%",
                      width: "300px",
                      height: "300px",
                      backgroundColor: "#00000",
                    }}
                    animate={{ scale: 1.3 }}
                    transition={{
                      repeat: Infinity,
                      duration: 2,
                      repeatType: "reverse",
                    }}
                  ></motion.div>
                  <motion.div
                    id="radius-shape-2"
                    className="position-absolute shadow-5-strong"
                    style={{ bottom: "-10%", right: "10%" }}
                    animate={{ rotate: "180deg" }}
                    transition={{
                      repeat: Infinity,
                      duration: 2,
                      repeatType: "reverse",
                      restDelta: 0,
                    }}
                  ></motion.div>

                  <div
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      gap: "3em",
                      zIndex: 3,
                    }}
                    className="row"
                  >
                    <hr />
                    {produits.map((produit) => (
                      <CardProduit
                        produits={produit}
                        key={produit.id_produit}
                      />
                    ))}
                  </div>
                </div>
              </motion.div>
              <br />
              <br />
              <div>
                <hr />
              </div>
              <br />
              <div className="row">
                <div className="col-11">
                  <SideBar />
                </div>
              </div>
              <br />
              <br />
              <br />
              <hr />
              <div className="container-fluid">
                <Research />
              </div>
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
            </>
          )}
        </div>
      </div>
    </div>
  );
}
