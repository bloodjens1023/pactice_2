import { Link } from "react-router-dom";
import React, { useState, useEffect, useRef } from "react";
import StorefrontIcon from "@mui/icons-material/Storefront";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import InsertChartIcon from "@mui/icons-material/InsertChart";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
function Nav(props) {
  const prevPropsRef = useRef();
  const [pan, setPan] = useState(0);
  useEffect(() => {
    if (
      prevPropsRef.current &&
      prevPropsRef.current.someProp !== props.someProp
    ) {
      setPan(pan + 1);
    }
    prevPropsRef.current = props;
  });

  return (
    <>
      <div className=" vertical-nav" style={{ borderRadius: "30px", marginLeft: "10px" }}>
        <ul className="nav flex-column">
          <li
            style={{
              textAlign: "center",
              color: "white",
              fontFamily: "monospace",
            }}
          >
            <h1>Eye I</h1>
          </li>
          <hr />

          <li className="nav-item">
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
              <div style={{ marginTop: "2px", color: props.marcher }}>
                Marché
              </div>
            </Link>
          </li>
          <li className="nav-item">
            <Link
              className="nav-link"
              to="/Model"
              style={{ display: "flex", alignItems: "start", gap: "4px" }}
            >
              <CalendarMonthIcon
                style={{
                  fontSize: "30px",
                  marginRight: "10px",
                  color: props.event,
                }}
              />
              <div style={{ marginTop: "2px", color: props.event }}>
                Modelisation
              </div>
            </Link>
          </li>
          <li className="nav-item">
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

              <div style={{ marginTop: "2px", color: props.panier }}>
                Votre paniers
              </div>
            </Link>
          </li>
          <li className="nav-item">
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
              <div style={{ marginTop: "2px", color: props.stat }}>
                Statistique
              </div>
            </Link>
          </li>
          <li className="nav-item">
            <Link
              className="nav-link"
              to="/Profil"
              style={{ display: "flex", alignItems: "start", gap: "4px" }}
            >
              <AccountCircleIcon
                style={{
                  fontSize: "30px",
                  marginRight: "10px",
                  color: props.prof,
                }}
              />
              <div style={{ marginTop: "2px", color: props.prof }}>Profils</div>
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
}

export default Nav;
