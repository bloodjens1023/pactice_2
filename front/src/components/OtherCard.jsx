import { useNavigate } from "react-router-dom";
import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import axios from "axios";
//caro produits
function OtherCard({ produits }) {
  const navigate = useNavigate();
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const VisuallyHiddenInput = styled("input")({
    clip: "rect(0 0 0 0)",
    clipPath: "inset(50%)",
    height: 1,
    overflow: "hidden",
    position: "absolute",
    bottom: 0,
    left: 0,
    whiteSpace: "nowrap",
    width: 1,
  });

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

      <div class="caro">
        <div class="caro-image">
          <img
            style={{
              height: "100%",
              width: "100%",
              borderRadius: "10px",
              objectFit: "cover",
            }}
            className="card-img-top"
            src={produits.lien_image}
            alt="First slide"
          />
        </div>
        <p class="caro-title">{produits.nom_produit}</p>
        <p class="caro-body">{produits.description}</p>
        <p
          class="footer"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: "100%",
          }}
        >
          <Button
            variant="contained"
            size="large"
            startIcon={<AddShoppingCartIcon />}
            style={{ backgroundColor: "#173734", borderRadius: "40px" }}
            onClick={() => {
              handleShow();
              ajoutPanier(produits.id_produit, produits.nom_produit);
            }}
          >
            Ajouter au panier
            <VisuallyHiddenInput type="button" />
          </Button>
        </p>
      </div>
    </>
  );
}

export default OtherCard;
