import React from "react";

const Weather = () => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
      }}
    >
      <hr style={{ backgroundColor: "black" }} />
      <h3>Votre Météo</h3>
      <div class="weather">
        <div class="conts">
          <div class="cloud front">
            <span class="left-front"></span>
            <span class="right-front"></span>
          </div>
          <span class="sun sunshine"></span>
          <span class="sun"></span>
          <div class="cloud back">
            <span class="left-back"></span>
            <span class="right-back"></span>
          </div>
        </div>

        <div class="weather-header">
          <span>
            Antananarivo
            <br />
            Tana
          </span>
          <span></span>
        </div>

        <span class="temp">25°</span>

        <div class="temp-scale">
          <span>Celcius</span>
        </div>
      </div>
    </div>
  );
};

export default Weather;
