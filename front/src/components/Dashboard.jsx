import Headers from "./Headers";
import Nav from "./Nav";
import { motion } from "framer-motion";
import Load from "./Load";
import React, { useState, useEffect } from "react";
import axios from "axios";
import CountUp from "react-countup";

import { Chart as ChartJS } from "chart.js/auto";
import { Bar, Doughnut, Line } from "react-chartjs-2";

function Dashboard() {
  const [dechetPlastiques, setDechetPlastiques] = useState(0);
  const [dechetMetaliques, setDechetMetaliques] = useState(0);
  const [dechetFibreux, setDechetFibreux] = useState(0);
  const [dechetGlobaux, setDechetGlobaux] = useState(0);
  const [empreinteEco, setEmpreinteEco] = useState(0.9766);
  const [newEmpreinte, setNewEmpreinte] = useState(0);
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/listeVendu")
      .then((res) => {
        const dataJson = res.data;
        setData(dataJson);

        // Calculer la somme des quantités pour chaque type de déchets
        const quantitePlastiques = dataJson
          .filter((item) => item.type_dechets === "Déchets plastiques")
          .reduce((total, item) => total + item.quantite, 0);
        setDechetPlastiques(quantitePlastiques / 1000);

        const quantiteMetalliques = dataJson
          .filter((item) => item.type_dechets === "Déchets métalliques")
          .reduce((total, item) => total + item.quantite, 0);
        setDechetMetaliques(quantiteMetalliques / 1000);

        const quantiteFibreux = dataJson
          .filter((item) => item.type_dechets === "Déchets fibreux")
          .reduce((total, item) => total + item.quantite, 0);
        setDechetFibreux(quantiteFibreux / 1000);

        console.log("Quantité de déchets plastiques :", quantitePlastiques);
        console.log("Quantité de déchets métalliques :", quantiteMetalliques);
        console.log("Quantité de déchets fibreux :", quantiteFibreux);
      })
      .catch((error) => {
        console.error(
          "Une erreur s'est produite lors de la récupération des données : ",
          error
        );
      });
  }, []);

  useEffect(() => {
    setDechetGlobaux(dechetFibreux + dechetMetaliques + dechetPlastiques);
    const newEmpreinteCalc = empreinteEco - dechetGlobaux;
    setNewEmpreinte(newEmpreinteCalc);
  });

  const topThreeLocations = data.reduce((acc, item) => {
    if (!acc[item.nom_produit]) {
      acc[item.nom_produit] = 0;
    }
    acc[item.nom_produit] += item.nb;
    return acc;
  }, {});

  const sortedTopThreeLocations = Object.entries(topThreeLocations)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 3);

  const Longlabels = sortedTopThreeLocations.map(
    ([nom_produit]) => nom_produit
  );
  const quantities = sortedTopThreeLocations.map(([_, nb]) => nb);

  const labels = Longlabels.map((label) => label.split(" "));

  // Données pour le graphique Doughnut
  const barData = {
    labels: labels,
    datasets: [
      {
        data: quantities,
        backgroundColor: ["#449a90", "#25544F", "#173532"],
      },
    ],
  };

  const barOptions = {
    maintainAspectRatio: false,
    responsive: true,
    animation: {
      animateRotate: true, // Active l'animation de rotation
      animateScale: true, // Active l'animation de mise à l'échelle
      duration: 1000, // Définit la durée de l'animation en millisecondes (par exemple, 1000 pour une seconde)
    },
    plugins: {
      legend: {
        display: false
      }
    }
  };

  const [charge, setCharge] = useState(false);
  setInterval(() => {
    setCharge(true);
  }, 3000);
  return (
    <>
      <div className="row">
        <div className="col-md-3">
          <Nav stat="#FFCC00" />
          <Headers stat="#FFCC00" />
        </div>
        <div className="col-md-9">
          {!charge && (
            <div
              style={{
                position: "absolute",
                top: "50%",
                right: "35%",
                height: "100%",
              }}
            >
              <Load />
            </div>
          )}
          {charge && (
            <>
              <motion.div
                id="radius-shape-1"
                className="position-absolute rounded-circle shadow-5-strong"
                style={{
                  left: "45%",
                  top: "40%",
                  width: "300px",
                  height: "300px",
                  backgroundColor: "#153330",
                }}
                animate={{ scale: 1.3 }}
                transition={{
                  repeat: Infinity,
                  duration: 2,
                  repeatType: "reverse",
                }}
              ></motion.div>
              <div
                className="row mb-2"
                style={{ paddingTop: "100px", color: "#25544F" }}
              >
                <div className="col-lg-6">
                  <div className="card shadow">
                    <div
                      className="card-header py-3"
                      style={{ textAlign: "center" }}
                    >
                      <p
                        className="text m-0 fw-bold"
                        style={{ color: "#173734" }}
                      >
                        Top trois de nos produits les plus vendus
                      </p>
                    </div>
                    <div
                      className="card-body"
                      style={{
                        padding: "20px",
                        height: "400px",
                      }}
                    >
                      <Bar data={barData} options={barOptions} />
                    </div>
                  </div>
                </div>
                
                <div className="col-lg-6">
                  <div className="card shadow">
                    <div
                      className="card-header py-3"
                      style={{ textAlign: "center" }}
                    >
                      <p
                        className="text m-0 fw-bold"
                        style={{ color: "#173734" }}
                      >
                        Déchets plastiques
                      </p>
                    </div>
                    <div
                      className="card-body"
                      style={{
                        padding: "20px",
                        height: "400px",
                      }}
                    >
                      <Line data={barData} options={barOptions} />
                    </div>
                  </div>
                </div>

                <div className="row" style={{ paddingTop: "50px" }}>
                  <div className="col-lg-12">
                    <div className="card shadow">
                      <div
                        className="card-header py-3"
                        style={{ textAlign: "center" }}
                      >
                        <p
                          className="text m-0 fw-bold"
                          style={{ color: "#173734" }}
                        >
                          L'empreinte ecologique de madagascar a l'echeille
                          Mondiale
                        </p>
                      </div>
                      <div
                        className="card-body"
                        style={{
                          borderRadius: "10px 0px",
                          boxShadow: "5px 5px 5px #173734",
                          height: "250px",
                          padding: "50px 50px",
                          textAlign: "center",
                        }}
                      >
                        <div className="row">
                          <div
                            className="col-lg-6"
                            style={{
                              display: "flex",
                              alignItems: "center",
                              paddingLeft: "10px",
                              margingRight: "290px",
                            }}
                          >
                            <p>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="90"
                                currentColor
                                height="90"
                                fill="#E5AE09"
                                class="bi bi-fingerprint"
                                viewBox="0 0 16 16"
                              >
                                <path d="M8.06 6.5a.5.5 0 0 1 .5.5v.776a11.5 11.5 0 0 1-.552 3.519l-1.331 4.14a.5.5 0 0 1-.952-.305l1.33-4.141a10.5 10.5 0 0 0 .504-3.213V7a.5.5 0 0 1 .5-.5Z" />
                                <path d="M6.06 7a2 2 0 1 1 4 0 .5.5 0 1 1-1 0 1 1 0 1 0-2 0v.332q0 .613-.066 1.221A.5.5 0 0 1 6 8.447q.06-.555.06-1.115zm3.509 1a.5.5 0 0 1 .487.513 11.5 11.5 0 0 1-.587 3.339l-1.266 3.8a.5.5 0 0 1-.949-.317l1.267-3.8a10.5 10.5 0 0 0 .535-3.048A.5.5 0 0 1 9.569 8m-3.356 2.115a.5.5 0 0 1 .33.626L5.24 14.939a.5.5 0 1 1-.955-.296l1.303-4.199a.5.5 0 0 1 .625-.329" />
                                <path d="M4.759 5.833A3.501 3.501 0 0 1 11.559 7a.5.5 0 0 1-1 0 2.5 2.5 0 0 0-4.857-.833.5.5 0 1 1-.943-.334m.3 1.67a.5.5 0 0 1 .449.546 10.7 10.7 0 0 1-.4 2.031l-1.222 4.072a.5.5 0 1 1-.958-.287L4.15 9.793a9.7 9.7 0 0 0 .363-1.842.5.5 0 0 1 .546-.449Zm6 .647a.5.5 0 0 1 .5.5c0 1.28-.213 2.552-.632 3.762l-1.09 3.145a.5.5 0 0 1-.944-.327l1.089-3.145c.382-1.105.578-2.266.578-3.435a.5.5 0 0 1 .5-.5Z" />
                                <path d="M3.902 4.222a5 5 0 0 1 5.202-2.113.5.5 0 0 1-.208.979 4 4 0 0 0-4.163 1.69.5.5 0 0 1-.831-.556m6.72-.955a.5.5 0 0 1 .705-.052A4.99 4.99 0 0 1 13.059 7v1.5a.5.5 0 1 1-1 0V7a3.99 3.99 0 0 0-1.386-3.028.5.5 0 0 1-.051-.705M3.68 5.842a.5.5 0 0 1 .422.568q-.044.289-.044.59c0 .71-.1 1.417-.298 2.1l-1.14 3.923a.5.5 0 1 1-.96-.279L2.8 8.821A6.5 6.5 0 0 0 3.058 7q0-.375.054-.736a.5.5 0 0 1 .568-.422m8.882 3.66a.5.5 0 0 1 .456.54c-.084 1-.298 1.986-.64 2.934l-.744 2.068a.5.5 0 0 1-.941-.338l.745-2.07a10.5 10.5 0 0 0 .584-2.678.5.5 0 0 1 .54-.456" />
                                <path d="M4.81 1.37A6.5 6.5 0 0 1 14.56 7a.5.5 0 1 1-1 0 5.5 5.5 0 0 0-8.25-4.765.5.5 0 0 1-.5-.865m-.89 1.257a.5.5 0 0 1 .04.706A5.48 5.48 0 0 0 2.56 7a.5.5 0 0 1-1 0c0-1.664.626-3.184 1.655-4.333a.5.5 0 0 1 .706-.04ZM1.915 8.02a.5.5 0 0 1 .346.616l-.779 2.767a.5.5 0 1 1-.962-.27l.778-2.767a.5.5 0 0 1 .617-.346m12.15.481a.5.5 0 0 1 .49.51c-.03 1.499-.161 3.025-.727 4.533l-.07.187a.5.5 0 0 1-.936-.351l.07-.187c.506-1.35.634-2.74.663-4.202a.5.5 0 0 1 .51-.49" />
                              </svg>
                            </p>
                            <p style={{ fontWeight: "bold", fontSize: "6em" }}>
                              <CountUp
                                start={empreinteEco}
                                end={newEmpreinte}
                                duration={4}
                                decimals={4}
                              />
                            </p>
                            <p
                              style={{
                                paddingTop: "46px",
                                fontSize: "1.4rem",
                                fontWeight: "bold",
                              }}
                            >
                              ha / habitants
                            </p>
                          </div>

                          <div className="col-lg-6"></div>
                          <div className="row" style={{ marginLeft: "305px" }}>
                            <p
                              className="text m-0 fw-bold"
                              style={{ color: "#173734" }}
                            >
                              Plus gros contributteur actuelle
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
}

export default Dashboard;
