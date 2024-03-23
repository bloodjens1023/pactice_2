import { motion } from "framer-motion";
import opencage from "opencage-api-client";
import React, { useState, useEffect } from "react";

const GoogleMap = ({ display, onLocalisationChange }) => {
  const [latitude, setLatitude] = useState(-18.8709762);
  const [longitude, setLongitude] = useState(47.507231);
  const [localisation, setlocalisation] = useState("");

  const handleChange6 = (event) => {
    setlocalisation(event.target.value);
    onLocalisationChange(event.target.value);
  };

  function geocodeCity(cityName) {
    return opencage
      .geocode({
        q: cityName,
        language: "fr",
        key: "916c93b65aa04c10ba25ebf37debc82d",
      })
      .then((data) => {
        if (data.status.code === 200 && data.results.length > 0) {
          const place = data.results[0];
          const formatted = place.formatted;
          const geometry = place.geometry;
          const timezone = place.annotations.timezone.name;
          return { formatted, geometry, timezone };
        } else {
          const error = data.status.message;
          const total_results = data.total_results;
          return { error, total_results };
        }
      })
      .catch((error) => {
        console.log("Error", error.message);
        if (error.status.code === 402) {
          console.log("hit free trial daily limit");
          console.log("become a customer: https://opencagedata.com/pricing");
        }
        return { error: error.message };
      });
  }

  const handleClick = () => {
    if (localisation.trim() !== "") {
      geocodeCity(localisation)
        .then((result) => {
          if (result.geometry) {
            const { lat, lng } = result.geometry;
            console.log(result.geometry.lat);
            console.log("success");
            setLatitude(result.geometry.lat);
            setLongitude(result.geometry.lng);
            setCoordinates({ lat, lng });

            setAfficheMap(true);
          } else {
            console.log("erreur");
          }
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      console.log("erreru");
    }
  };

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
      }}
    >
      <div style={{ display: "flex", flexDirection: "row", gap: "20px", marginBottom: '20px' }}>
        <input
          className="form-control"
          required
          type="text"
          name="localisation"
          placeholder="votre localisation"
          value={localisation}
          onChange={handleChange6}
          style={{ display: display, width:'400px' }}
        />
        <div className="col">
          <motion.button
            onClick={handleClick}
            style={{ display: display }}
            layout
            className="btn btn-primary child"
            type="button"
            whileHover={{ scale: 1.2 }}
            onHoverStart={(e) => {}}
            onHoverEnd={(e) => {}}
          >
            +
          </motion.button>
        </div>
      </div>
      <iframe
        style={{
          width: "500px",
          height: "300px",
          display: display,
          borderRadius: "20px",
          border: "1px solid black",
          padding: "10px",
          marginBottom: '20px'
        }}
        id="google-map"
        title="Google Map"
        width="330"
        height="200"
        loading="lazy"
        allowFullScreen
        src={`https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d15886.119469440584!2d${longitude}!3d${latitude}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sfr!2smg!4v1707619932376!5m2!1sfr!2smg`}
      ></iframe>
    </div>
  );
};

export default GoogleMap;
