import React, { useEffect, useState } from "react";
import Nav from "./Nav";
import axios from "axios";
import Load from "./Load";
import Headers from "./Headers";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
function Paniers() {
  const [produits, setProduits] = useState([]);
  const [prixTotal, setPrixTotal] = useState(0);
  const navigate = useNavigate();
  const [charge, setCharge] = useState(false);
  useEffect(() => {
    axios
      .get("http://localhost:8000/api/listePanier")
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

  function remove() {
    axios
      .get("http://localhost:8000/api/supprimerPanier")
      .then((res) => {
        navigate("/produits");
      })
      .catch((error) => {
        console.error(
          "Une erreur s'est produite lors de la récupération des données : ",
          error
        );
      });
  }

  const [nbProduits, setNbProduits] = useState(produits.length);
  useEffect(() => {
    var u = 0;
    produits.forEach((element) => {
      u += parseInt(element.nb) * parseInt(element.prix);
    });
    setPrixTotal(u);
  });
  useEffect(() => {
    var u = 0;
    produits.forEach((element) => {
      u += parseInt(element.nb);
    });
    setNbProduits(u);
  });

  function afficheCount() {
    var u = 0;
    produits.forEach((element) => {
      u += parseInt(element.nb);
    });
    setNbProduits(u);
  }

  function calculerPrix() {
    var u = 0;
    produits.forEach((element) => {
      u += parseInt(element.nb) * parseInt(element.prix);
    });
    setPrixTotal(u);
  }

  setInterval(() => {
    setCharge(true);
  }, 2000);

  return (
    <div className="">
      <div className="row">
        <div className="col-md-3">
          <Nav panier="text-decoration-underline" />
        </div>
        <div className="col-md-9">
          <Headers panier="#FFCC00" />

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
            <section
              className="clean-block clean-cart dark"
              style={{ marginTop: "100px" }}
            >
              <div className="container">
                <div className="block-heading">
                  <h2 className="">Votre panier</h2>
                </div>
                <div className="content">
                  <div className="row g-0">
                    <div className="col-md-12 col-lg-8">
                      <div className="items">
                        {produits.map((produit) => (
                          <div className="product" key={produit.id_panier}>
                            <div className="row justify-content-center align-items-center">
                              <div className="col-md-3 mb-5">
                                <div className="product-image">
                                  <img
                                    className="img-fluid d-block mx-auto image"
                                    src={produit.lien_image}
                                  />
                                </div>
                              </div>
                              <br />
                              <div className="col-md-5 product-info">
                                {produit.nom_produit}
                              </div>
                              <span
                                data-reflow-variant="199976733_s"
                                data-reflow-product="717978921"
                                data-reflow-max-qty="999"
                                data-reflow-quantity="1"
                              ></span>
                              <div className="col-6 col-md-3 quantity">
                                <label
                                  className="form-label d-none d-md-block"
                                  htmlFor="quantity"
                                >
                                  Quantité
                                </label>
                                <input
                                  type="number"
                                  id="number"
                                  className="form-control quantity-input"
                                  defaultValue={produit.nb}
                                  onChange={(e) => {
                                    for (const iterator of produits) {
                                      if (iterator == produit)
                                        iterator.nb = e.target.value;
                                      console.log(iterator);
                                    }
                                    afficheCount();
                                    calculerPrix();
                                  }}
                                />
                              </div>
                              <div
                                className="col-6 col-md-3 price"
                                style={{ marginTop: "5%" }}
                              >
                                <span>{produit.prix} Tc</span>
                              </div>
                            </div>
                            <hr />
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className="col-md-12 col-lg-4">
                      <div className="bg-body-tertiary summary">
                        <h3>Sommaire</h3>
                        <h4>
                          <span className="text">type de commande</span>
                          <span className="price">{produits.length}</span>
                        </h4>
                        <h4>
                          <span className="text">Nombre de Total</span>
                          <span className="price">{nbProduits}</span>
                        </h4>
                        <h4>
                          <span className="text">Total</span>
                          <span className="price">{prixTotal} Tc</span>
                          <br />
                          <br />
                        </h4>
                        <motion.button
                          className="btn   d-block w-100"
                          type="button"
                          style={{ color: "white", background: "#173734" }}
                          whileHover={{ scale: 1.1 }}
                          onClick={() => {
                            navigate("/paiement/", 1000);
                          }}
                        >
                          valider
                        </motion.button>
                        <br />
                        <motion.button
                          className="btn btn-outline-danger   d-block w-100"
                          type="button"
                          whileHover={{ scale: 1.1 }}
                          onClick={() => {
                            if (prixTotal == 0) {
                              alert("pas d'achats a faire");
                            } else {
                              remove();
                            }
                          }}
                        >
                          Vider le panier
                        </motion.button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          )}
        </div>
      </div>
    </div>
  );
}

export default Paniers;
