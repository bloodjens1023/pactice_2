import { useNavigate } from "react-router-dom";
import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import Rating from "@mui/material/Rating";
import axios from "axios";
import { motion } from "framer-motion";
//card produits
function CardProduit({ produits }) {
  const navigate = useNavigate();
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  function ajoutPanier(e, f) {
    axios
      .post("http://localhost:8000/api/ajoutPanier", { e, f })
      .then((res) => {
        console.log(res.data);
      })
      .catch((res) => console.error(res.data));
  }
  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Information</Modal.Title>
        </Modal.Header>
        <Modal.Body>✨✨ Produit ajouter au panier ✨✨</Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>

      <div className="cards col-md-3">
        <div className="image-container">
          <img
            style={{ height: "200px", width: "200px" }}
            className="card-img-top"
            src={produits.lien_image}
            alt="First slide"
          />

          <div className="price">{produits.prix} Ar</div>
        </div>

        <div className="content">
          <div style={{ marginTop: "150px" }}></div>
          <div className="brand">{produits.nom_produit}</div>
          <div className="product-name">{produits.type}</div>
          <div style={{ display: "flex" }}>
            <Rating name="read-only" value={produits.value} readOnly />
            ({produits.value})
          </div>
        </div>

        <div className="button-container">
          <motion.button
            style={{ background:"#774DB3"}}
            whileHover={{ backgroundColor: "#FFFFFF" }}
            className="buy-button button"
            onClick={() => {
              ajoutPanier(produits.id_produit, produits.nom_produit);
              navigate("/paniers");
            }}
          >
            Achat direct
            </motion.button>
          <motion.button
            style={{ background:"#774DB3"}}
            whileHover={{ backgroundColor: "FFFFFF" }}
            className="btsx"
            onClick={() => {
              handleShow();
              ajoutPanier(produits.id_produit, produits.nom_produit);
            }}
          >
            <AddShoppingCartIcon />
          </motion.button>
        </div>
      </div>
    </>
  );
}

export default CardProduit;