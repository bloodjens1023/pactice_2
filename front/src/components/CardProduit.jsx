import { useNavigate } from "react-router-dom";
import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import axios from "axios";
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
  return (<Modal show={show} onHide={handleClose}>
    <Modal.Header closeButton>
      <Modal.Title>Information</Modal.Title>
    </Modal.Header>
    <Modal.Body>
      ✨✨ Ajout de Vente effectuer avec success ✨✨
    </Modal.Body>
    <Modal.Footer>
      <Button variant="danger" onClick={handleClose}>
        Close
      </Button>
    </Modal.Footer>
  </Modal>
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

          <div className="price">{produits.prix} Tc</div>
        </div>

        <div className="content">
          <div style={{ marginTop: "150px" }}></div>
          <div className="brand">{produits.nom_produit}</div>
          <div className="product-name">{produits.description}</div>

          <div className="rating">
            <svg
              viewBox="0 0 99.498 16.286"
              xmlns="http://www.w3.org/2000/svg"
              className="svg four-star-svg"
            >
              <path
                fill="#fc0"
                transform="translate(-0.001 -1.047)"
                d="M9.357,1.558,11.282,5.45a.919.919,0,0,0,.692.5l4.3.624a.916.916,0,0,1,.509,1.564l-3.115,3.029a.916.916,0,0,0-.264.812l.735,4.278a.919.919,0,0,1-1.334.967l-3.85-2.02a.922.922,0,0,0-.855,0l-3.85,2.02a.919.919,0,0,1-1.334-.967l.735-4.278a.916.916,0,0,0-.264-.812L.279,8.14A.916.916,0,0,1,.789,6.576l4.3-.624a.919.919,0,0,0,.692-.5L7.71,1.558A.92.92,0,0,1,9.357,1.558Z"
                id="star-svgrepo-com"
              ></path>
              <path
                fill="#fc0"
                transform="translate(20.607 -1.047)"
                d="M9.357,1.558,11.282,5.45a.919.919,0,0,0,.692.5l4.3.624a.916.916,0,0,1,.509,1.564l-3.115,3.029a.916.916,0,0,0-.264.812l.735,4.278a.919.919,0,0,1-1.334.967l-3.85-2.02a.922.922,0,0,0-.855,0l-3.85,2.02a.919.919,0,0,1-1.334-.967l.735-4.278a.916.916,0,0,0-.264-.812L.279,8.14A.916.916,0,0,1,.789,6.576l4.3-.624a.919.919,0,0,0,.692-.5L7.71,1.558A.92.92,0,0,1,9.357,1.558Z"
                data-name="star-svgrepo-com"
                id="star-svgrepo-com-2"
              ></path>
              <path
                fill="#fc0"
                transform="translate(41.215 -1.047)"
                d="M9.357,1.558,11.282,5.45a.919.919,0,0,0,.692.5l4.3.624a.916.916,0,0,1,.509,1.564l-3.115,3.029a.916.916,0,0,0-.264.812l.735,4.278a.919.919,0,0,1-1.334.967l-3.85-2.02a.922.922,0,0,0-.855,0l-3.85,2.02a.919.919,0,0,1-1.334-.967l.735-4.278a.916.916,0,0,0-.264-.812L.279,8.14A.916.916,0,0,1,.789,6.576l4.3-.624a.919.919,0,0,0,.692-.5L7.71,1.558A.92.92,0,0,1,9.357,1.558Z"
                data-name="star-svgrepo-com"
                id="star-svgrepo-com-3"
              ></path>
              <path
                fill="#fc0"
                transform="translate(61.823 -1.047)"
                d="M9.357,1.558,11.282,5.45a.919.919,0,0,0,.692.5l4.3.624a.916.916,0,0,1,.509,1.564l-3.115,3.029a.916.916,0,0,0-.264.812l.735,4.278a.919.919,0,0,1-1.334.967l-3.85-2.02a.922.922,0,0,0-.855,0l-3.85,2.02a.919.919,0,0,1-1.334-.967l.735-4.278a.916.916,0,0,0-.264-.812L.279,8.14A.916.916,0,0,1,.789,6.576l4.3-.624a.919.919,0,0,0,.692-.5L7.71,1.558A.92.92,0,0,1,9.357,1.558Z"
                data-name="star-svgrepo-com"
                id="star-svgrepo-com-4"
              ></path>
              <path
                fill="#e9e9e9"
                transform="translate(82.431 -1.047)"
                d="M9.357,1.558,11.282,5.45a.919.919,0,0,0,.692.5l4.3.624a.916.916,0,0,1,.509,1.564l-3.115,3.029a.916.916,0,0,0-.264.812l.735,4.278a.919.919,0,0,1-1.334.967l-3.85-2.02a.922.922,0,0,0-.855,0l-3.85,2.02a.919.919,0,0,1-1.334-.967l.735-4.278a.916.916,0,0,0-.264-.812L.279,8.14A.916.916,0,0,1,.789,6.576l4.3-.624a.919.919,0,0,0,.692-.5L7.71,1.558A.92.92,0,0,1,9.357,1.558Z"
                data-name="star-svgrepo-com"
                id="star-svgrepo-com-5"
              ></path>
            </svg>
            (29,062)
          </div>
        </div>

        <div className="button-container">
          <button
            className="buy-button button"
            onClick={() => {
              ajoutPanier(produits.id_produit, produits.nom_produit);
              navigate("/paniers");
            }}
          >
            Acheter Direct
          </button>
          <button
            className="btsx"
            onClick={() => {
              handleShow();
              ajoutPanier(produits.id_produit, produits.nom_produit);
            }}
          >
            <AddShoppingCartIcon />
          </button>
        </div>
      </div>
    </>
  );
}

export default CardProduit;
