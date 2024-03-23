import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../assets/css/pricing.css";
import Cookies from "js-cookie";
import axios from "axios";
export default function Pricing() {
  const [abonnement, setAbonnement] = useState();
  const [prixBasique, setPrixBasique] = useState("");
  const [prixBuisness, setPrixBuisness] = useState("");
  const [isAnuelle, setIsAnuelle] = useState(true);
  const [isMensuelle, setIsMensuelle] = useState(false);
  const userEmail = Cookies.get("user");
  const navigate = useNavigate();

  function updtaeAbonnement(abbInd) {
    // Récupérer l'e-mail stocké dans le cookie
    
    let selectedAbonnement = "";

    switch (abbInd) {
      case 1:
        selectedAbonnement = "Basique Annuelle";
        break;
      case 2:
        selectedAbonnement = "Buisness Anunelle";
        break;
      case 3:
        selectedAbonnement = "Basique Mensuelle";
        break;
      case 4:
        selectedAbonnement = "Buisness Mensuelle";
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
        navigate("/paiement/", 1000);
      })
      .catch((error) => {
        console.error("Erreur lors de la mise à jour de l'abonnement :", error);
      });
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
        <div role="tabpanel" className="tab-pane fade show active" id="yearly">
          <div className="row justify-content-center">
            <div className="col-md-6 col-lg-4 mb-30">
              <div className="price-item text-center">
                <div className="price-top">
                  <h4>Basic</h4>
                  <h2 className="mb-0">
                    {prixBasique.toLocaleString()} <sup>Ar</sup>
                  </h2>
                  <span className="text-capitalize">per year</span>
                </div>
                <div className="price-content">
                  <ul className="border-bottom mb-30 mt-md-4 pb-3 text-left">
                    <li>
                      <i className="zmdi zmdi-check mr-2"></i>
                      <span className="c-black">Eget erovtiu faucid</span>
                    </li>
                    <li>
                      <i className="zmdi zmdi-check mr-2"></i>
                      <span className="c-black">Cras justo odio</span>
                    </li>
                    <li>
                      <i className="zmdi zmdi-check mr-2"></i>
                      <span className="c-black">Morbi leo risus</span>
                    </li>
                    <li>
                      <i className="zmdi zmdi-close mr-2"></i>
                      <span>Porta consectetur ac</span>
                    </li>
                    <li>
                      <i className="zmdi zmdi-close mr-2"></i>
                      <span> Vestibulum at eros</span>
                    </li>
                    <li>
                      <i className="zmdi zmdi-close mr-2"></i>
                      <span>Adipisci atque beatae</span>
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
              <div className="price-item text-center popular">
                <div className="price-top">
                  <h4>Business</h4>
                  <h2 className="mb-0">
                    {prixBuisness.toLocaleString()} <sup>Ar</sup>
                  </h2>
                  <span className="text-capitalize">per year</span>
                </div>
                <div className="price-content">
                  <ul className="border-bottom mb-30 mt-md-4 pb-3 text-left">
                    <li>
                      <i className="zmdi zmdi-check mr-2"></i>
                      <span className="c-black">Eget erovtiu faucid</span>
                    </li>
                    <li>
                      <i className="zmdi zmdi-check mr-2"></i>
                      <span className="c-black">Cras justo odio</span>
                    </li>
                    <li>
                      <i className="zmdi zmdi-check mr-2"></i>
                      <span className="c-black">Morbi leo risus</span>
                    </li>
                    <li>
                      <i className="zmdi zmdi-close mr-2"></i>
                      <span>Porta consectetur ac</span>
                    </li>
                    <li>
                      <i className="zmdi zmdi-close mr-2"></i>
                      <span> Vestibulum at eros</span>
                    </li>
                    <li>
                      <i className="zmdi zmdi-close mr-2"></i>
                      <span>Adipisci atque beatae</span>
                    </li>
                  </ul>
                  <a href="#" className="btn btn-custom btn-light" onClick={() => updtaeAbonnement(2)}>
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
              <div className="price-item text-center">
                <div className="price-top">
                  <h4>Personal</h4>
                  <h2 className="mb-0">
                    {prixBasique.toLocaleString()} <sup>Ar</sup>
                  </h2>
                  <span className="text-capitalize">per month</span>
                </div>
                <div className="price-content">
                  <ul className="border-bottom mb-30 mt-md-4 pb-3 text-left">
                    <li>
                      <i className="zmdi zmdi-check mr-2"></i>
                      <span className="c-black">Eget erovtiu faucid</span>
                    </li>
                    <li>
                      <i className="zmdi zmdi-check mr-2"></i>
                      <span className="c-black">Cras justo odio</span>
                    </li>
                    <li>
                      <i className="zmdi zmdi-check mr-2"></i>
                      <span className="c-black">Morbi leo risus</span>
                    </li>
                    <li>
                      <i className="zmdi zmdi-close mr-2"></i>
                      <span>Porta consectetur ac</span>
                    </li>
                    <li>
                      <i className="zmdi zmdi-close mr-2"></i>
                      <span> Vestibulum at eros</span>
                    </li>
                    <li>
                      <i className="zmdi zmdi-close mr-2"></i>
                      <span>Adipisci atque beatae</span>
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
              <div className="price-item text-center popular">
                <div className="price-top">
                  <h4>Business</h4>
                  <h2 className="mb-0">
                    {prixBuisness.toLocaleString()} <sup>Ar</sup>
                  </h2>
                  <span className="text-capitalize">per month</span>
                </div>
                <div className="price-content">
                  <ul className="border-bottom mb-30 mt-md-4 pb-3 text-left">
                    <li>
                      <i className="zmdi zmdi-check mr-2"></i>
                      <span className="c-black">Eget erovtiu faucid</span>
                    </li>
                    <li>
                      <i className="zmdi zmdi-check mr-2"></i>
                      <span className="c-black">Cras justo odio</span>
                    </li>
                    <li>
                      <i className="zmdi zmdi-check mr-2"></i>
                      <span className="c-black">Morbi leo risus</span>
                    </li>
                    <li>
                      <i className="zmdi zmdi-close mr-2"></i>
                      <span>Porta consectetur ac</span>
                    </li>
                    <li>
                      <i className="zmdi zmdi-close mr-2"></i>
                      <span> Vestibulum at eros</span>
                    </li>
                    <li>
                      <i className="zmdi zmdi-close mr-2"></i>
                      <span>Adipisci atque beatae</span>
                    </li>
                  </ul>
                  <a href="#" className="btn btn-custom btn-light" onClick={() => updtaeAbonnement(4)}>
                    Buy now
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
