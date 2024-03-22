import React, { useState } from "react";
import { Carousel } from "react-bootstrap";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Rating from "@mui/material/Rating";

export default function Sidebar() {
  const [produits, setProduits] = useState([]);
  const navigate = useNavigate();
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

  return (
    <aside>
      <h4
        style={{
          marginBottom: "50px",
        }}
      >
        LES PRODUITS LES PLUS VENDUES
      </h4>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Carousel>
          {produits.map((produit) => (
            <Carousel.Item key={produit.id_produit}>
              <div
                className="parent"
                style={{ width: "400px", height: "400px" }}
              >
                <div
                  className="cardia"
                  style={{
                    background: "url('" + produit.lien_image + "')",
                    backgroundSize: "cover",
                  }}
                >
                  <div className="glass">
                    <div className="content">
                      <span className="title">
                        <h2 style={{ fontWeight: "bold", color: "black" }}>
                          {produit.nom_produit}
                        </h2>
                      </span>
                      <span className="text" style={{ color: "black" }}>
                        {produit.description}
                      </span>
                    </div>
                    <div className="bottom">
                      <hr />
                      <Rating name="read-only" value={4} readOnly />
                      <div className="social-buttons-container">
                        <h2 style={{ fontWeight: "bold" }}>
                          {produit.prix} Tc
                        </h2>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Carousel.Item>
          ))}
        </Carousel>
      </div>
    </aside>
  );
}
