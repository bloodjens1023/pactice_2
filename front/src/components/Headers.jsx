import { motion } from "framer-motion";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import StorefrontIcon from "@mui/icons-material/Storefront";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import ArchiveIcon from "@mui/icons-material/Archive";
import InsertChartIcon from "@mui/icons-material/InsertChart";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
function Headers(props) {
  return (
    <>
      <div
        style={{
          paddingTop: "10px",
          width: "100%",
          height: "60px",
          backgroundColor: "#173734",
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
          ECOSORT
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
              to="/"
              style={{ display: "flex", alignItems: "start", gap: "4px" }}
            >
              <CalendarMonthIcon
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
              <ShoppingBasketIcon
                style={{
                  fontSize: "30px",
                  marginRight: "10px",
                  color: props.panier,
                }}
              />
            </Link>
          </motion.li>
          <motion.li className="nav-item" whileHover={{ scale: 1.2 }}>
            <Link
              className="nav-link"
              to="/vendre"
              style={{ display: "flex", alignItems: "start", gap: "4px" }}
            >
              <ArchiveIcon
                style={{
                  fontSize: "30px",
                  marginRight: "10px",
                  color: props.vendre,
                }}
              />
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
