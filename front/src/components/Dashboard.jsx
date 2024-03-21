import Headers from "./Headers";
import Nav from "./Nav";
import img from "../assets/img/profil.jpg";
import { motion } from "framer-motion";
import Load from "./Load";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

import CountUp from "react-countup";
import CountDown from "react-countdown";

function Dashboard() {
  const [dechetPlastiques, setDechetPlastiques] = useState(0);
  const [dechetMetaliques, setDechetMetaliques] = useState(0);
  const [dechetFibreux, setDechetFibreux] = useState(0);
  const [dechetGlobaux, setDechetGlobaux] = useState(0);
  const [empreinteEco, setEmpreinteEco] = useState(0.9766);
  const [newEmpreinte, setNewEmpreinte] = useState(0);

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/listeProduit")
      .then((res) => {
        const totaldechetGlobaux = res.data.length / 1000;
        setDechetPlastiques(totaldechetGlobaux);
        setDechetMetaliques(totaldechetGlobaux);
        setDechetFibreux(totaldechetGlobaux);

        const totalTonne =
          dechetFibreux + dechetPlastiques + dechetMetaliques / 10;
        setDechetGlobaux(totalTonne);

        const newEmpreinteCalc = empreinteEco - dechetGlobaux;
        setNewEmpreinte(newEmpreinteCalc);
      })
      .catch((error) => {
        console.error(
          "Une erreur s'est produite lors de la récupération des données : ",
          error
        );
      });
  });

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
                <div className="col-lg-4">
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
                        borderRadius: "10px 0px",
                        boxShadow: "5px 5px 5px #173734",
                        height: "250px",
                        padding: "50px 50px",
                        textAlign: "center",
                      }}
                    >
                      <h1
                        style={{
                          fontSize: "2rem",
                          paddingTop: "30px",
                          fontWeight: "bold",
                        }}
                      >
                        <CountUp
                          start={0}
                          end={dechetPlastiques}
                          duration={2}
                          decimals={4}
                        />
                        <svg
                          fill="#25544F"
                          version="1.1"
                          id="Capa_1"
                          xmlns="http://www.w3.org/2000/svg"
                          xmlns:xlink="http://www.w3.org/1999/xlink"
                          width="64px"
                          height="64px"
                          viewBox="0 0 443.336 443.336"
                          xml:space="preserve"
                          stroke="#25544F"
                          style={{ marginTop: "-30px", marginLeft: "10px" }}
                        >
                          <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                          <g
                            id="SVGRepo_tracerCarrier"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          ></g>
                          <g id="SVGRepo_iconCarrier">
                            {" "}
                            <g>
                              {" "}
                              <g>
                                {" "}
                                <path d="M441.993,368.062l-68.646-194.324c-4.422-12.521-18.29-22.329-31.57-22.329H281.52 c5.571-10.072,8.516-21.359,8.516-33.011c0-37.694-30.67-68.366-68.367-68.366s-68.365,30.672-68.365,68.366 c0,11.686,2.913,22.95,8.48,33.011h-60.225c-13.28,0-27.146,9.808-31.57,22.329L1.343,368.062 c-2.276,6.447-1.638,12.896,1.759,17.693c3.394,4.797,9.26,7.549,16.096,7.549h404.941c6.835,0,12.703-2.752,16.096-7.549 C443.63,380.958,444.27,374.509,441.993,368.062z M433.097,380.708c-1.759,2.486-4.939,3.855-8.958,3.855H19.198 c-4.019,0-7.199-1.369-8.958-3.855c-1.759-2.486-1.992-5.943-0.652-9.73l68.647-194.324c3.16-8.942,13.842-16.5,23.326-16.5h68.03 c4.051,0,6.858-2.378,3.688-6.912c-7.196-10.294-11.233-22.233-11.233-34.842c0-32.875,26.746-59.623,59.623-59.623 c32.877,0,59.625,26.748,59.625,59.623c0,11.953-3.361,23.591-10.181,33.334c-2.864,4.092-2.208,8.418,3.639,8.418h67.028 c9.485,0,20.166,7.557,23.326,16.5l68.645,194.324C435.088,374.764,434.855,378.221,433.097,380.708z"></path>{" "}
                                <path d="M221.668,73.412c-24.805,0-44.985,20.184-44.985,44.987c0,15.914,8.538,30.792,22.282,38.844 c2.084,1.219,4.763,0.521,5.981-1.563c1.221-2.083,0.521-4.762-1.565-5.984c-11.075-6.485-17.958-18.479-17.958-31.297 c0-19.985,16.26-36.245,36.242-36.245c19.984,0,36.243,16.26,36.243,36.245c0,13.467-7.402,25.751-19.318,32.056 c-2.135,1.13-2.95,3.775-1.82,5.909c0.785,1.483,2.3,2.329,3.868,2.329c0.69,0,1.39-0.165,2.04-0.509 c14.788-7.825,23.974-23.069,23.974-39.785C266.653,93.596,246.474,73.412,221.668,73.412z"></path>{" "}
                              </g>{" "}
                            </g>{" "}
                          </g>
                        </svg>
                        (Tonne)
                      </h1>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="card shadow">
                    <div
                      className="card-header py-3"
                      style={{ textAlign: "center" }}
                    >
                      <p
                        className="text m-0 fw-bold"
                        style={{ color: "#173734" }}
                      >
                        Déchets métalliques
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
                      <h1
                        style={{
                          fontSize: "2rem",
                          paddingTop: "30px",
                          fontWeight: "bold",
                        }}
                      >
                        <CountUp
                          start={0}
                          end={dechetMetaliques}
                          duration={2}
                          decimals={4}
                        />
                        <svg
                          fill="#25544F"
                          version="1.1"
                          id="Capa_1"
                          xmlns="http://www.w3.org/2000/svg"
                          xmlns:xlink="http://www.w3.org/1999/xlink"
                          width="64px"
                          height="64px"
                          viewBox="0 0 443.336 443.336"
                          xml:space="preserve"
                          stroke="#25544F"
                          style={{ marginTop: "-30px", marginLeft: "10px" }}
                        >
                          <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                          <g
                            id="SVGRepo_tracerCarrier"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          ></g>
                          <g id="SVGRepo_iconCarrier">
                            {" "}
                            <g>
                              {" "}
                              <g>
                                {" "}
                                <path d="M441.993,368.062l-68.646-194.324c-4.422-12.521-18.29-22.329-31.57-22.329H281.52 c5.571-10.072,8.516-21.359,8.516-33.011c0-37.694-30.67-68.366-68.367-68.366s-68.365,30.672-68.365,68.366 c0,11.686,2.913,22.95,8.48,33.011h-60.225c-13.28,0-27.146,9.808-31.57,22.329L1.343,368.062 c-2.276,6.447-1.638,12.896,1.759,17.693c3.394,4.797,9.26,7.549,16.096,7.549h404.941c6.835,0,12.703-2.752,16.096-7.549 C443.63,380.958,444.27,374.509,441.993,368.062z M433.097,380.708c-1.759,2.486-4.939,3.855-8.958,3.855H19.198 c-4.019,0-7.199-1.369-8.958-3.855c-1.759-2.486-1.992-5.943-0.652-9.73l68.647-194.324c3.16-8.942,13.842-16.5,23.326-16.5h68.03 c4.051,0,6.858-2.378,3.688-6.912c-7.196-10.294-11.233-22.233-11.233-34.842c0-32.875,26.746-59.623,59.623-59.623 c32.877,0,59.625,26.748,59.625,59.623c0,11.953-3.361,23.591-10.181,33.334c-2.864,4.092-2.208,8.418,3.639,8.418h67.028 c9.485,0,20.166,7.557,23.326,16.5l68.645,194.324C435.088,374.764,434.855,378.221,433.097,380.708z"></path>{" "}
                                <path d="M221.668,73.412c-24.805,0-44.985,20.184-44.985,44.987c0,15.914,8.538,30.792,22.282,38.844 c2.084,1.219,4.763,0.521,5.981-1.563c1.221-2.083,0.521-4.762-1.565-5.984c-11.075-6.485-17.958-18.479-17.958-31.297 c0-19.985,16.26-36.245,36.242-36.245c19.984,0,36.243,16.26,36.243,36.245c0,13.467-7.402,25.751-19.318,32.056 c-2.135,1.13-2.95,3.775-1.82,5.909c0.785,1.483,2.3,2.329,3.868,2.329c0.69,0,1.39-0.165,2.04-0.509 c14.788-7.825,23.974-23.069,23.974-39.785C266.653,93.596,246.474,73.412,221.668,73.412z"></path>{" "}
                              </g>{" "}
                            </g>{" "}
                          </g>
                        </svg>
                        (Tonne)
                      </h1>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="card shadow">
                    <div
                      className="card-header py-3"
                      style={{ textAlign: "center" }}
                    >
                      <p
                        className="text m-0 fw-bold"
                        style={{ color: "#173734" }}
                      >
                        Déchets fibreux
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
                      <h1
                        style={{
                          fontSize: "2rem",
                          paddingTop: "30px",
                          fontWeight: "bold",
                        }}
                      >
                        <CountUp
                          start={0}
                          end={dechetFibreux}
                          duration={2}
                          decimals={4}
                        />
                        <svg
                          fill="#25544F"
                          version="1.1"
                          id="Capa_1"
                          xmlns="http://www.w3.org/2000/svg"
                          xmlns:xlink="http://www.w3.org/1999/xlink"
                          width="64px"
                          height="64px"
                          viewBox="0 0 443.336 443.336"
                          xml:space="preserve"
                          stroke="#25544F"
                          style={{ marginTop: "-30px", marginLeft: "10px" }}
                        >
                          <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                          <g
                            id="SVGRepo_tracerCarrier"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          ></g>
                          <g id="SVGRepo_iconCarrier">
                            {" "}
                            <g>
                              {" "}
                              <g>
                                {" "}
                                <path d="M441.993,368.062l-68.646-194.324c-4.422-12.521-18.29-22.329-31.57-22.329H281.52 c5.571-10.072,8.516-21.359,8.516-33.011c0-37.694-30.67-68.366-68.367-68.366s-68.365,30.672-68.365,68.366 c0,11.686,2.913,22.95,8.48,33.011h-60.225c-13.28,0-27.146,9.808-31.57,22.329L1.343,368.062 c-2.276,6.447-1.638,12.896,1.759,17.693c3.394,4.797,9.26,7.549,16.096,7.549h404.941c6.835,0,12.703-2.752,16.096-7.549 C443.63,380.958,444.27,374.509,441.993,368.062z M433.097,380.708c-1.759,2.486-4.939,3.855-8.958,3.855H19.198 c-4.019,0-7.199-1.369-8.958-3.855c-1.759-2.486-1.992-5.943-0.652-9.73l68.647-194.324c3.16-8.942,13.842-16.5,23.326-16.5h68.03 c4.051,0,6.858-2.378,3.688-6.912c-7.196-10.294-11.233-22.233-11.233-34.842c0-32.875,26.746-59.623,59.623-59.623 c32.877,0,59.625,26.748,59.625,59.623c0,11.953-3.361,23.591-10.181,33.334c-2.864,4.092-2.208,8.418,3.639,8.418h67.028 c9.485,0,20.166,7.557,23.326,16.5l68.645,194.324C435.088,374.764,434.855,378.221,433.097,380.708z"></path>{" "}
                                <path d="M221.668,73.412c-24.805,0-44.985,20.184-44.985,44.987c0,15.914,8.538,30.792,22.282,38.844 c2.084,1.219,4.763,0.521,5.981-1.563c1.221-2.083,0.521-4.762-1.565-5.984c-11.075-6.485-17.958-18.479-17.958-31.297 c0-19.985,16.26-36.245,36.242-36.245c19.984,0,36.243,16.26,36.243,36.245c0,13.467-7.402,25.751-19.318,32.056 c-2.135,1.13-2.95,3.775-1.82,5.909c0.785,1.483,2.3,2.329,3.868,2.329c0.69,0,1.39-0.165,2.04-0.509 c14.788-7.825,23.974-23.069,23.974-39.785C266.653,93.596,246.474,73.412,221.668,73.412z"></path>{" "}
                              </g>{" "}
                            </g>{" "}
                          </g>
                        </svg>
                        (Tonne)
                      </h1>
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
                                height="90"
                                fill="currentColor"
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

                          <div className="col-lg-6">right</div>
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
