import { Box, Button, Typography } from "@mui/material";
import TextField from "@mui/material/TextField";
import React, { useState, useEffect } from "react";
import SearchIcon from "@mui/icons-material/Search";
import axios from "axios";
import CardProduit from "./CardProduit";
import OtherCard from "./OtherCard";
const Research = () => {
  const [produits, setProduits] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [filtre, setFiltre] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/listeProduit")
      .then((res) => {
        setProduits(res.data);
        setFiltre(res.data);
      })
      .catch((error) => {
        console.error(
          "Une erreur s'est produite lors de la récupération des données : ",
          error
        );
      });
  }, []);

  const hangleChange = (event) => {
    setSearchQuery(event.target.value);
    const v = [];
    for (const i of produits) {
      if (
        i.nom_produit.toLowerCase().includes(event.target.value.toLowerCase())
      ) {
        v.push(i);
      }
    }

    setFiltre(v);
  };
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",

        marginTop: "20px",
      }}
    >
      <h4>TOUS LES PRODUITS</h4>
      <br />
      <Box
        sx={{
          position: "relative",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "10px",
        }}
      >
        <Typography
          sx={{ position: "absolute", opacity: 0.5, left: 14, top: 16 }}
        ></Typography>
        <TextField
          label="Rechercher des produits"
          style={{ width: "400px" }}
          onChange={hangleChange}
        />
        <button
          style={{ height: "100%", backgroundColor: "#173734" }}
          className="btn btn-primary"
        >
          <SearchIcon />
        </button>
      </Box>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "3em",
          zIndex: 3,
          marginTop: "70px",
        }}
        className="row"
      >
        {filtre.map((produit) => (
          <OtherCard produits={produit} key={produit.id_produit} />
        ))}
      </div>
    </div>
  );
};

export default Research;
