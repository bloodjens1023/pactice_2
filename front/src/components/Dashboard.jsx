import Headers from "./Headers";
import Nav from "./Nav";
import { motion } from "framer-motion";
import Load from "./Load";
import React, { useState, useEffect } from "react";
import axios from "axios";
import CountUp from "react-countup";

import { Chart as ChartJS } from "chart.js/auto";
import { Bar, Doughnut, Line } from "react-chartjs-2";

import revenueData from "./stat.json";

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
        backgroundColor: ["#4A306E", "#40295f", "#301f48"],
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
        display: false,
      },
    },
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
                        Nombre d'utilisateur
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
                          <div className="col-lg-12">
                            {/* <CountUp
                                start={empreinteEco}
                                end={newEmpreinte}
                                duration={4}
                                decimals={4}
                              /> */}

                            <Line
                              data={{
                                labels: revenueData.map((data) => data.label),
                                datasets: [
                                  {
                                    label: "Basic",
                                    data: revenueData.map(
                                      (data) => data.revenue
                                    ),
                                    backgroundColor: "#4A306E",
                                    borderColor: "#4A306E",
                                  },
                                  {
                                    label: "Premium",
                                    data: revenueData.map((data) => data.cost),
                                    backgroundColor: "#4A306E",
                                    borderColor: "#4A306E",
                                  },
                                ],
                              }}
                              options={barOptions}
                            />
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
