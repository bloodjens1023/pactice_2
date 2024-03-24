import axios from "axios";
import Plan from "./Plan";
import React, { useState, useEffect } from "react";
import Models from "./modelisation/Model";
import { Link } from "react-router-dom";

export default function Model() {
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

  return (
    <>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
        }}
      >
        <div>
          <h2
            style={{
              textAlign: "center",
              marginTop: "20px",
              marginLeft: "20px",
              marginRight: "20px",
              textTransform: "uppercase",
            }}
          >
            Modeliser votre maison avec EyE I et tester sa sécurité en temps
            réel
          </h2>
        </div>
        <iframe
          title="React Pricing Table"
          src="http://localhost:3001/"
          style={{
            width: "97vw",
            height: "100vh",
            border: "none",
            borderRadius: "20px",
          }}
        />
        <Link
          to="/produits"
          style={{
            position: "absolute",
            bottom: "30px",
            right: "400px",
            width: "200px",
            height: "50px",
            backgroundColor: "rgb(152, 195, 121)",
            color: "white",
            fontSize: "20px",
            textAlign: "center",
            border: "none",
            borderRadius: "10px",
            cursor: "pointer",
            outline: "none",
          }}
        >
          Valider
        </Link>
      </div>
    </>
  );
}
