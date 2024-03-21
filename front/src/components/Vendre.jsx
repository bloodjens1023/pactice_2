import React, { useState } from "react";
import { motion } from "framer-motion";
import Form from "react-bootstrap/Form";
import FloatingLabel from "react-bootstrap/FloatingLabel";

import { useNavigate } from "react-router-dom";
import GoogleMap from "./GoogleMap";
import Headers from "./Headers";
import Load from "./Load";
import Nav from "./Nav";
import ValidVente from "./ValidVente";
import axios from "axios";

const Vendre = (props) => {
  const [type, setType] = useState("");
  const [numCarte, setNumCarte] = useState("");
  const [prCarte, setPrCarte] = useState("");
  const [mois, setMois] = useState(" ");
  const [annee, setAnnee] = useState(" ");
  const [localisation, setLocalisation] = useState("");
  const [quantite, setQuantite] = useState("");

  const [visible, setVisible] = useState(false);
  const navigate = useNavigate();
  const [charge, setCharge] = useState(false);

  console.log(props);
  function handleChange(e) {
    e.preventDefault();

    axios
      .post("http://localhost:8000/api/VendreDechet", {
        type: type,
        quantite: quantite,
        numero_carte: numCarte,
        proprio_carte: prCarte,
        mois_exp: mois,
        annee_exp: annee,
        loc: localisation,
      })
      .then((res) => {
        console.log(res.data);
      })
      .catch((res) => console.error(res.data));

    if (numCarte !== "") {
      setVisible(true);
      const intervalId = setInterval(() => {
        clearInterval(intervalId); // Arrête l'intervalle après 1000 millisecondes
        navigate("/Produits"); // Navigue vers '/profil' après 1000 millisecondes
      }, 2000);
    }
  }

  const handleLocalisationChange = (value) => {
    setLocalisation(value);
  };
  setInterval(() => {
    setCharge(true);
  }, 2000);

  return (
    <>
      {visible && <ValidVente />}

      {!visible && (
        <>
          <Headers vendre="#FFCC00" />
          <Nav vendre="#FFCC00" />
          {!charge && (
            <div
              style={{
                display: "flex",
                alignItems: "center",
                position: "absolute",
                right: "42%",
                justifyContent: "center",
                height: "90vh",
              }}
            >
              <Load />
            </div>
          )}
          {charge && (
            <motion.div
              className="containerss "
              style={{
                padding: "100px",
                width: "97vw",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                paddingLeft: "25%",
              }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
            >
              <form onSubmit={handleChange} style={{ paddingTop: "60px" }}>
                <center>
                  <h3>INFORMATION A REMPLIR POUR VENDRE DES DECHETS</h3>
                </center>
                <br />
                <br />
                <FloatingLabel
                  controlId="floatingSelect"
                  label="Type de dechets recyclable"
                  className="mb-3"
                >
                  <Form.Select
                    aria-label="Type de dechets recyclable"
                    required
                    value={type}
                    onChange={(e) => setType(e.target.value)}
                  >
                    <option hidden></option>
                    <option value="Déchets plastiques">
                      Déchets plastiques
                    </option>
                    <option value="Déchets métalliques">
                      Déchets métalliques
                    </option>
                    <option value="Déchets fibreux">Déchets fibreux</option>
                  </Form.Select>
                </FloatingLabel>
                <FloatingLabel
                  controlId="floatingInput"
                  label="Quantite en kilogramme (kg)"
                  className="mb-3"
                >
                  <Form.Control
                    type="number"
                    placeholder="10"
                    maxLength={9}
                    value={quantite}
                    onChange={(e) => setQuantite(parseInt(e.target.value, 10))}
                    required
                  />
                </FloatingLabel>

                <FloatingLabel
                  controlId="floatingInput"
                  label="Numero de la carte"
                  className="mb-3"
                >
                  <Form.Control
                    type="text"
                    placeholder="111111111"
                    maxLength={9}
                    value={numCarte}
                    onChange={(e) => setNumCarte(parseInt(e.target.value, 10))}
                    required
                  />
                </FloatingLabel>

                <FloatingLabel
                  controlId="floatingInput"
                  label="Propriétaire du carte"
                  className="mb-3"
                >
                  <Form.Control
                    type="text"
                    placeholder="John Doe"
                    maxLength={109}
                    onChange={(e) => setPrCarte(e.target.value)}
                    required
                  />
                </FloatingLabel>

                <div className="flexbox">
                  <div className="inputBox">
                    <Form.Select
                      aria-label="Default select example"
                      value={mois}
                      required
                      onChange={(e) => setMois(e.target.value)}
                    >
                      <option hidden>Mois d'expiration</option>
                      <option value="Janvier">Janvier</option>.
                      <option value="Fevrier">Fevrier</option>
                      <option value="Mars">Mars</option>
                      <option value="Avril">Avril</option>
                      <option value="Mai">Mai</option>
                      <option value="Juin">Juin</option>
                      <option value="Juillet">Juillet</option>
                      <option value="Aout">Aout</option>
                      <option value="Septembre">Septembre</option>
                      <option value="Octobre">Octobre</option>
                      <option value="Novembre">Novembre</option>
                      <option value="Decembre">Decembre</option>
                    </Form.Select>
                  </div>
                  <div className="inputBox">
                    <Form.Select
                      type="number"
                      aria-label="Default select example"
                      value={annee}
                      required
                      onChange={(e) => setAnnee(parseInt(e.target.value, 10))}
                    >
                      <option hidden>Annee d'expiration</option>
                      <option value="2024">2024</option>.
                      <option value="2025">2025</option>
                      <option value="2026">2026</option>
                      <option value="2027">2027</option>
                      <option value="2028">2028</option>
                      <option value="2029">2029</option>
                      <option value="2030">2030</option>
                    </Form.Select>
                  </div>
                </div>
                <br />
                <br />
                <div>
                  <h4>Votre Coordonées</h4>
                </div>
                <br />
                <div>
                  <GoogleMap onLocalisationChange={handleLocalisationChange} />
                </div>
                <br />
                <button className="bt2">
                  <div className="svg-wrapper-1">
                    <div className="svg-wrapper">
                      <svg
                        className="bi bi-cart-check-fill"
                        xmlns="http://www.w3.org/2000/svg"
                        width="1em"
                        height="1em"
                        fill="currentColor"
                        viewBox="0 0 16 16"
                      >
                        <path d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0m7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0m-1.646-7.646-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L8 8.293l2.646-2.647a.5.5 0 0 1 .708.708z"></path>
                      </svg>
                    </div>
                  </div>
                  <span>Valider la demande</span>
                </button>
              </form>
            </motion.div>
          )}
        </>
      )}
    </>
  );
};

export default Vendre;
