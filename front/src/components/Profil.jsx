import Headers from "./Headers";
import Nav from "./Nav";
import img from "../assets/img/profil.jpg";
import { motion } from "framer-motion";
import Load from "./Load";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Cookies from "js-cookie";
import axios from "axios";

import { useNavigate } from 'react-router-dom';

import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import "../assets/css/modalProf.css";

function Profil() {
  const [charge, setCharge] = useState(false);
  const [show, setShow] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null);
  const [photoURL, setPhotoURL] = useState(null);
  const userEmail = Cookies.get("user");
  const navigate = useNavigate();

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  setInterval(() => {
    setCharge(true);
  }, 3000);

  const email = Cookies.get("user");

  const [user, setUser] = useState([]);
  useEffect(() => {
    axios
      .post("http://localhost:8000/api/listeUsr", { email })
      .then((res) => {
        setUser(res.data);
      })
      .catch((error) => {
        console.error(
          "Une erreur s'est produite lors de la récupération des données : ",
          error
        );
      });
  }, []);
  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  function handleSave() {
    if (selectedFile === null) {
      alert("Veuillez sélectionner un fichier");
      return;
    }

    // Vérifier l'extension du fichier
    const allowedExtensions = ["jpg", "jpeg", "png"];
    const fileExtension = selectedFile.name.split(".").pop().toLowerCase();

    if (!allowedExtensions.includes(fileExtension)) {
      alert(
        "Extension de fichier non autorisée. Veuillez sélectionner une image au format JPG, JPEG ou PNG."
      );
      return;
    }

    // Créer un objet FormData pour envoyer le fichier
    const formData = new FormData();
    formData.append("file", selectedFile);

    // Envoyer le fichier vers votre API
    axios
      .post("http://localhost:8000/api/imageUpload", formData)
      .then((response) => {
        // Traitement de la réponse si nécessaire
        console.log("Fichier envoyé avec succès :", response.data);
        // Mettre à jour l'URL de la photo dans l'état
        const baseUrl = response.data.photoURL;
        console.log(`baseUrl : ${baseUrl}`);
        setPhotoURL(baseUrl);
        console.log(photoURL);
        UpDatePfp(baseUrl)

        handleClose();
      })
      .catch((error) => {
        console.error("Erreur lors de l'envoi du fichier :", error);
        // Afficher un message d'erreur à l'utilisateur si nécessaire
        alert(
          "Une erreur s'est produite lors de l'envoi du fichier. Veuillez réessayer."
        );
      });
  }

  function UpDatePfp(photo) {
    axios
      .put("http://localhost:8000/api/imageUpdate", {
        email: userEmail,
        pfp: photo,
      })
      .then((res) => {
        reloadPage()
        console.log("Succes de la mise a jour de la photot de profil");
      })
      .catch((error) => {
        console.error("Erreur de la mise a jour de la photot de profil", error);
      });
  }
  function reloadPage() {
    window.location.reload();
  }

  return (
    <>
      <div className="row">
        <div className="col-md-3">
          <Nav prof="#FFCC00" />
          <Headers prof="#FFCC00" />
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
              <Modal
                show={show}
                onHide={handleClose}
                style={{ marginTop: "100px" }}
              >
                <Modal.Header closeButton>
                  <Modal.Title>Selectionner votre nouvelle photo</Modal.Title>
                </Modal.Header>
                <Modal.Body
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <div class="input-div">
                    <input
                      class="input"
                      name="file"
                      type="file"
                      onChange={handleFileChange}
                    />
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="1em"
                      height="1em"
                      stroke-linejoin="round"
                      stroke-linecap="round"
                      viewBox="0 0 24 24"
                      stroke-width="2"
                      fill="none"
                      stroke="currentColor"
                      class="icon"
                    >
                      <polyline points="16 16 12 12 8 16"></polyline>
                      <line y2="21" x2="12" y1="12" x1="12"></line>
                      <path d="M20.39 18.39A5 5 0 0 0 18 9h-1.26A8 8 0 1 0 3 16.3"></path>
                      <polyline points="16 16 12 12 8 16"></polyline>
                    </svg>
                  </div>
                </Modal.Body>
                <Modal.Footer>
                  <Button variant="success" onClick={handleSave}>
                    Enregistrer
                  </Button>
                </Modal.Footer>
              </Modal>

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
              <div className="row mb-3" style={{ paddingTop: "100px" }}>
                <div className="col-lg-4">
                  <div
                    className="card mb-3"
                    style={{ boxShadow: "5px 5px 5px #173734" }}
                  >{user.map((u) => (
                    <div className="card-body text-center shadow">
                      <img
                        className="rounded-circle mb-3 mt-4"
                        src={u.pfp}
                        width="160"
                        height="200"
                        style={{ width: "170px" }}
                      />
                      <div className="mb-3">
                        <button
                          className="btn  btn-sm"
                          type="button"
                          style={{ backgroundColor: "#173734", color: "white" }}
                          onClick={() => {
                            handleShow();
                          }}
                        >
                          Changer de photos
                        </button>
                      </div>

                      <div className="mb-3">
                        <Link
                          to="/"
                          className="btn btn-outline-warning  btn-sm"
                          onClick={() => {
                            Cookies.remove("user");
                          }}
                        >
                          Se déconnecter
                        </Link>
                      </div>
                    </div>
                  ))}
                  </div>
                  <div className="card shadow mb-4">
                    <div className="card-header py-3">
                      <h6
                        className="text fw-bold m-0"
                        style={{ color: "#173734" }}
                      >
                        Autre
                      </h6>
                    </div>
                    <div
                      className="card-body"
                      style={{
                        borderRadius: "10px",
                        boxShadow: "5px 5px 5px #173734",
                      }}
                    >
                      <h4
                        className="small fw-bold"
                        style={{ color: "#173734" }}
                      >
                        Rating<span className="float-end">60%</span>
                      </h4>
                      <div className="progress progress-sm mb-3">
                        <div
                          className="progress-bar bg-primary"
                          aria-valuenow="60"
                          aria-valuemin="0"
                          aria-valuemax="100"
                          style={{ width: "60%" }}
                        >
                          <span className="visually-hidden">60%</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-8">
                  <div className="row">
                    {user.map((u) => (
                      <div className="col">
                        <div className="card shadow mb-3">
                          <div className="card-header py-3">
                            <p
                              className="text m-0 fw-bold"
                              style={{ color: "#173734" }}
                            >
                              Vos informations
                            </p>
                          </div>
                          <div
                            className="card-body"
                            style={{
                              borderRadius: "10px 0px",
                              boxShadow: "5px 5px 5px #173734",
                            }}
                          >
                            <form key={u.id_user}>
                              <div className="row">
                                <div className="col">
                                  <div className="mb-3">
                                    <label
                                      className="form-label"
                                      htmlFor="username"
                                    >
                                      <strong>Nom</strong>
                                    </label>
                                    <p>{u.nom_user}</p>
                                  </div>
                                </div>
                                <div className="col">
                                  <div className="mb-3">
                                    <label
                                      className="form-label"
                                      htmlFor="email"
                                    >
                                      <strong>Prenom</strong>
                                    </label>
                                    <p>{u.prenom_user}</p>
                                  </div>
                                </div>
                              </div>
                              <div className="row">
                                <div className="col">
                                  <div className="mb-3">
                                    <label
                                      className="form-label"
                                      htmlFor="first_name"
                                    >
                                      <strong>Email</strong>
                                    </label>
                                    <p>{u.email}</p>
                                  </div>
                                </div>
                                <div className="col">
                                  <div className="mb-3">
                                    <label
                                      className="form-label"
                                      htmlFor="last_name"
                                    >
                                      <strong>Solde</strong>
                                    </label>
                                    <p>{u.token} Tc</p>
                                  </div>
                                </div>
                              </div>
                              <div className="row">
                                <div className="col-4">
                                  <motion.button
                                    className="btn btn-primary btn-sm"
                                    type="submit"
                                    style={{
                                      backgroundColor: "#173734",
                                      color: "white",
                                    }}
                                    whileHover={{ scale: 1.1 }}
                                  >
                                    Déposer des fonds
                                  </motion.button>
                                </div>
                                <div className="col-4">
                                  <motion.button
                                    className="btn btn-outline-success btn-sm"
                                    type="submit"
                                    whileHover={{ scale: 1.1 }}
                                  >
                                    Retirer mes soldes
                                  </motion.button>
                                </div>
                              </div>
                            </form>
                          </div>
                        </div>
                        <div className="card shadow">
                          <div className="card-header py-3">
                            <p
                              className="text m-0 fw-bold"
                              style={{ color: "#173734" }}
                            >
                              Information de votre carte TRASH COIN
                            </p>
                          </div>
                          <div
                            className="card-body"
                            style={{
                              borderRadius: "10px 0px",
                              boxShadow: "5px 5px 5px #173734",
                            }}
                          >
                            <form>
                              <div className="row">
                                <div className="col">
                                  <div className="mb-3">
                                    <label
                                      className="form-label"
                                      htmlFor="city"
                                    >
                                      <strong>Numero</strong>
                                    </label>
                                    <p>{u.numero_carte}</p>
                                  </div>
                                </div>
                                <div className="col">
                                  <div className="mb-3">
                                    <label
                                      className="form-label"
                                      htmlFor="country"
                                    >
                                      <strong>Propriétaire</strong>
                                    </label>
                                    <p>{u.nom_user}</p>
                                  </div>
                                </div>
                              </div>
                              <div className="mb-3">
                                <label className="form-label" htmlFor="address">
                                  <strong>Validité</strong>
                                </label>
                                <p>{u.validite}</p>
                              </div>
                              <div className="mb-3">
                                <button
                                  className="btn btn-primary btn-sm"
                                  type="submit"
                                >
                                  Renoveler mon carte
                                </button>
                              </div>
                            </form>
                          </div>
                        </div>
                      </div>
                    ))}
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

export default Profil;
