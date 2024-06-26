import React, { useState } from "react";
import { Link } from "react-router-dom";
import StorefrontIcon from "@mui/icons-material/Storefront";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import InsertChartIcon from "@mui/icons-material/InsertChart";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import DrawIcon from '@mui/icons-material/Draw';
import Badge from "@mui/joy/Badge";
import { motion } from "framer-motion";

function Headers(props) {
  const [showHeader, setShowHeader] = useState(true);

  // Fonction pour masquer le header lorsque la largeur de l'écran est inférieure à 768px
  const handleResize = () => {
    if (window.innerWidth <= 800) {
      setShowHeader(true);
    } else {
      setShowHeader(false);
    }
  };

  // Ajouter un écouteur d'événement de redimensionnement lorsque le composant est monté
  React.useEffect(() => {
    handleResize(); // Appel initial pour vérifier la largeur de l'écran
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // Si showHeader est false, retourner null pour ne pas afficher le header
  if (!showHeader) {
    return null;
  }

  // Si showHeader est true, afficher le header
  return (
    <>
      <div
        style={{
          paddingTop: "10px",
          width: "100%",
          height: "60px",
          backgroundColor: "#1C8EA4",
          position: "fixed",
          top: 0,
          left: 0,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "white",
          zIndex: 10,
        }}
      >
        <h3
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            margin: "15px",
            fontWeight: "bold",
            fontFamily: "monospace",
          }}
        >
          Eye I
        </h3>

        <ul
          style={{
            display: "flex",
            gap: "20px",
            textDecoration: "none",
            listStyle: "none",
          }}
        >
          <motion.li className="nav-item " whileHover={{ scale: 1.2 }}>
            <Link
              className="nav-link"
              to="/Produits"
              style={{ display: "flex", alignItems: "start", gap: "4px" }}
            >
              <StorefrontIcon
                style={{
                  fontSize: "30px",
                  marginRight: "10px",
                  color: props.marcher,
                }}
              />
            </Link>
          </motion.li>
          <motion.li className="nav-item" whileHover={{ scale: 1.2 }}>
            <Link
              className="nav-link"
              to="/Model"
              style={{ display: "flex", alignItems: "start", gap: "4px" }}
            >
              <DrawIcon
                style={{
                  fontSize: "30px",
                  marginRight: "10px",
                  color: props.event,
                }}
              />
            </Link>
          </motion.li>
          <motion.li className="nav-item" whileHover={{ scale: 1.2 }}>
            <Link
              className="nav-link"
              to="/Paniers"
              style={{ display: "flex", alignItems: "start", gap: "4px" }}
            >
              <Badge size="sm" color="success" variant="solid">
                <ShoppingBasketIcon
                  style={{
                    fontSize: "30px",
                    marginRight: "10px",
                    color: props.panier,
                  }}
                />
              </Badge>
            </Link>
          </motion.li>
          <motion.li className="nav-item" whileHover={{ scale: 1.2 }}>
            <Link
              className="nav-link"
              to="/dash"
              style={{ display: "flex", alignItems: "start", gap: "4px" }}
            >
              <InsertChartIcon
                style={{
                  fontSize: "30px",
                  marginRight: "10px",
                  color: props.stat,
                }}
              />
            </Link>
          </motion.li>
          <motion.li className="nav-item" whileHover={{ scale: 1.2 }}>
            <Link
              className="nav-link"
              to="/profil"
              style={{ display: "flex", alignItems: "start", gap: "4px" }}
            >
              <AccountCircleIcon
                style={{
                  fontSize: "30px",
                  marginRight: "10px",
                  color: props.prof,
                }}
              />
            </Link>
          </motion.li>
        </ul>
      </div>
    </>
  );
}

export default Headers;