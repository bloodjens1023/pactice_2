import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../assets/css/pricing.css";
import Cookies from "js-cookie";
import axios from "axios";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Sidebar from "./SideBar";


export default function Pricing() {
  const [abonnement, setAbonnement] = useState();
  const [prixBasique, setPrixBasique] = useState("");
  const [prixBuisness, setPrixBuisness] = useState("");
  const [isAnuelle, setIsAnuelle] = useState(true);
  const [isMensuelle, setIsMensuelle] = useState(false);
  const userEmail = Cookies.get("user");
  const navigate = useNavigate();
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [show, setShow] = useState(false);

  function updtaeAbonnement(abbInd) {
    // Récupérer l'e-mail stocké dans le cookie

    let selectedAbonnement = "";

    switch (abbInd) {
      case 1:
        selectedAbonnement = "Basique Annuelle";
        break;
      case 2:
        selectedAbonnement = "Premium Anunelle";
        break;
      case 3:
        selectedAbonnement = "Basique Mensuelle";
        break;
      case 4:
        selectedAbonnement = "Premium Mensuelle";
        break;
      default:
        selectedAbonnement = "";
    }

    // Envoyer une requête PUT à votre API pour mettre à jour l'abonnement de l'utilisateur
    axios
      .put("http://localhost:8000/api/inscription", {
        email: userEmail,
        abonnement: selectedAbonnement,
      })
      .then((res) => {
        console.log("Abonnement mis à jour avec succès :", res.data);
        handleShow();
      })
      .catch((error) => {
        console.error("Erreur lors de la mise à jour de l'abonnement :", error);
      });
  }
  function redirection(){
    navigate('/Paiement')
  }

  function switchMethodeAnuelle() {
    setIsAnuelle(true);
    setIsMensuelle(false);
    console.log(` is Anuelle :${isAnuelle}`);
    console.log(` is Mensuelle :${isMensuelle}`);
  }

  function switchMethodeMensuelle() {
    setIsMensuelle(true);
    setIsAnuelle(false);
    console.log(` is Anuelle :${isAnuelle}`);
    console.log(` is Mensuelle :${isMensuelle}`);
  }
  useEffect(() => {
    if (isAnuelle) {
      setPrixBasique(2700000);
      setPrixBuisness(3240000);
    } else {
      setPrixBasique(250000);
      setPrixBuisness(300000);
    }
  });

  return (
    <>
      <Modal show={show} onHide={handleClose} style={{ marginTop: "100px" }}>
        <Modal.Header closeButton>
        </Modal.Header>
        <Modal.Body
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >

<Sidebar/>

        </Modal.Body>
        <Modal.Footer>
          <Button variant="success" onClick={redirection}>Acheter</Button>
        </Modal.Footer>
      </Modal>

      <div className="container">
        <div className="text-center">
          <div className="nav price-tabs" role="tablist">
            <a
              className="nav-link active"
              href="#yearly"
              role="tab"
              data-toggle="tab"
              onClick={() => switchMethodeAnuelle()}
            >
              Annuelle
            </a>
            <a
              className="nav-link"
              href="#monthly"
              role="tab"
              data-toggle="tab"
              onClick={() => switchMethodeMensuelle()}
            >
              Mensuelle
            </a>
          </div>
        </div>
        <div className="tab-content wow fadeIn">
          <div
            role="tabpanel"
            className="tab-pane fade show active"
            id="yearly"
          >
            <div className="row justify-content-center">
              <div className="col-md-6 col-lg-4 mb-30">
                <div
                  className="price-item text-center"
                  style={{ height: "638px" }}
                >
                  <div className="price-top">
                    <h4>Basique</h4>
                    <h2 className="mb-0">
                      {prixBasique.toLocaleString()} <sup>Ar</sup>
                    </h2>
                    <span className="text-capitalize">par an</span>
                  </div>
                  <div className="price-content">
                    <ul className="border-bottom mb-30 mt-md-4 pb-3 text-left">
                      <li>
                        <i className="zmdi zmdi-check mr-2"></i>
                        <span className="c-black">Jusqu'a 7 appareils</span>
                      </li>
                      <li>
                        <i className="zmdi zmdi-check mr-2"></i>
                        <span className="c-black">Surveillance 24/7</span>
                      </li>
                      <li>
                        <i className="zmdi zmdi-check mr-2"></i>
                        <span className="c-black">Assistance DinAi</span>
                      </li>
                      <li>
                        <i className="zmdi zmdi-close mr-2"></i>
                        <span>Disque dur 250go offerte</span>
                      </li>
                      <li>
                        <i className="zmdi zmdi-close mr-2"></i>
                        <span>Installation offerte</span>
                      </li>
                    </ul>
                    <a
                      href="#"
                      className="btn btn-custom btn-light"
                      style={{
                        border: "2px solid #1B8EA4",
                      }}
                      onClick={() => updtaeAbonnement(1)}
                    >
                      Buy now
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-lg-4 mb-30">
                <div
                  className="price-item text-center popular"
                  style={{ height: "638px" }}
                >
                  <div className="price-top">
                    <h4>Premium</h4>
                    <h2 className="mb-0">
                      {prixBuisness.toLocaleString()} <sup>Ar</sup>
                    </h2>
                    <span className="text-capitalize">per year</span>
                  </div>
                  <div className="price-content">
                    <ul className="border-bottom mb-30 mt-md-4 pb-3 text-left">
                      <li>
                        <i className="zmdi zmdi-check mr-2"></i>
                        <span className="c-black">Jusqu'a 12 appareils</span>
                      </li>
                      <li>
                        <i className="zmdi zmdi-check mr-2"></i>
                        <span className="c-black">Surveillance 24/7</span>
                      </li>
                      <li>
                        <i className="zmdi zmdi-check mr-2"></i>
                        <span className="c-black">
                          Assistance DinAi v2 Turbo
                        </span>
                      </li>
                      <li>
                        <i className="zmdi zmdi-close mr-2"></i>
                        <span>Disque dur 2To offerte</span>
                      </li>
                      <li>
                        <i className="zmdi zmdi-close mr-2"></i>
                        <span> Installation offerte</span>
                      </li>
                      <li>
                        <i className="zmdi zmdi-close mr-2"></i>
                        <span>Premier kit offerte</span>
                      </li>
                    </ul>
                    <a
                      href="#"
                      className="btn btn-custom btn-light"
                      onClick={() => updtaeAbonnement(2)}
                    >
                      Buy now
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div role="tabpanel" className="tab-pane fade" id="monthly">
            <div className="row justify-content-center">
              <div className="col-md-6 col-lg-4 mb-30">
                <div
                  className="price-item text-center"
                  style={{ height: "638px" }}
                >
                  <div className="price-top">
                    <h4>Basique</h4>
                    <h2 className="mb-0">
                      {prixBasique.toLocaleString()} <sup>Ar</sup>
                    </h2>
                    <span className="text-capitalize">per month</span>
                  </div>
                  <div className="price-content">
                      <ul className="border-bottom mb-30 mt-md-4 pb-3 text-left">
                        <li>
                          <i className="zmdi zmdi-check mr-2"></i>
                          <span className="c-black">Jusqu'a 7 appareils</span>
                        </li>
                        <li>
                          <i className="zmdi zmdi-check mr-2"></i>
                          <span className="c-black">Surveillance 24/7</span>
                        </li>
                        <li>
                          <i className="zmdi zmdi-check mr-2"></i>
                          <span className="c-black">Assistance DinAi</span>
                        </li>
                        <li>
                          <i className="zmdi zmdi-close mr-2"></i>
                          <span>Disque dur 128go offerte</span>
                        </li>
                    </ul>
                    <a
                      href="#"
                      className="btn btn-custom btn-light"
                      style={{
                        border: "2px solid #1B8EA4",
                      }}
                      onClick={() => updtaeAbonnement(3)}
                    >
                      Buy now
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-lg-4 mb-30">
                <div
                  className="price-item text-center popular"
                  style={{ height: "638px" }}
                >
                  <div className="price-top">
                    <h4>Premium</h4>
                    <h2 className="mb-0">
                      {prixBuisness.toLocaleString()} <sup>Ar</sup>
                    </h2>
                    <span className="text-capitalize">per month</span>
                  </div>
                  <div className="price-content">
                    <ul className="border-bottom mb-30 mt-md-4 pb-3 text-left">
                      <li>
                        <i className="zmdi zmdi-check mr-2"></i>
                        <span className="c-black">Jusqu'a 12 appareils</span>
                      </li>
                      <li>
                        <i className="zmdi zmdi-check mr-2"></i>
                        <span className="c-black">Surveillance 24/7</span>
                      </li>
                      <li>
                        <i className="zmdi zmdi-check mr-2"></i>
                        <span className="c-black">
                          Assistance DinAi v2 Turbo
                        </span>
                      </li>
                      <li>
                        <i className="zmdi zmdi-close mr-2"></i>
                        <span>Disque dur 1To offerte</span>
                      </li>

                      <li>
                        <i className="zmdi zmdi-close mr-2"></i>
                        <span>Premier kit offerte</span>
                      </li>
                    </ul>
                    <a
                      href="#"
                      className="btn btn-custom btn-light"
                      onClick={() => updtaeAbonnement(4)}
                    >
                      Buy now
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
