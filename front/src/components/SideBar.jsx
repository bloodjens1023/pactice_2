import React, { useState } from "react";
import { Carousel } from "react-bootstrap";
import image1 from "../assets/img/caroussel/donut1.jpg";
import image2 from "../assets/img/caroussel/donut2.jpg";
import image3 from "../assets/img/caroussel/donut3.jpg";

export default function Sidebar() {
  return (
    
    <aside >
        <div  style={{display:"flex" , flexDirection:"column", alignItems:"center"}}>
          <Carousel >
            <Carousel.Item>
              <div class="parent" style={{width:"400px", height:"400px"}}>
                <div class="cardia" style={{background:"url('"+image1+"')", backgroundSize:"cover"}}>
                <div class="glass">
                  <div class="content">
                    <span class="title"><h2 style={{fontWeight:"bold", color:"black"}}>Produit 1</h2></span>
                    <span class="text" style={{color:"black"}}>Description du produit</span>
                  </div>
                  <div class="bottom">
                <hr />
                  <div class="social-buttons-container">
                    <h2 style={{fontWeight:"bold"}}>Prix : 10000 Tc</h2>
                  </div>
              </div>
                </div>
                       
                </div>
              </div>
            </Carousel.Item>
            <Carousel.Item>
              <div class="parent" style={{width:"400px", height:"400px"}}>
                <div class="cardia" style={{background:"url('"+image3+"')", backgroundSize:"cover"}}>
                <div class="glass">
                  <div class="content">
                    <span class="title"><h2 style={{fontWeight:"bold", color:"black"}}>Produit 2</h2></span>
                    <span class="text" style={{color:"black"}}>Description du produit</span>
                  </div>
                  <div class="bottom">
                <hr />
                  <div class="social-buttons-container">
                    <h2 style={{fontWeight:"bold"}}>Prix : 7000 Tc</h2>
                  </div>
              </div>
                </div>
                       
                </div>
              </div>
            </Carousel.Item>
            <Carousel.Item>
              <div class="parent" style={{width:"400px", height:"400px"}}>
                <div class="cardia" style={{background:"url('"+image2+"')", backgroundSize:"cover"}}>
                <div class="glass">
                  <div class="content">
                    <span class="title"><h2 style={{fontWeight:"bold", color:"black"}}>Produit 3</h2></span>
                    <span class="text" style={{color:"black"}}>Description du produit 3</span>
                  </div>
                  <div class="bottom">
                <hr />
                  <div class="social-buttons-container">
                    <h2 style={{fontWeight:"bold"}}>Prix : 8000 Tc</h2>
                  </div>
              </div>
                </div>
                       
                </div>
              </div>
            </Carousel.Item>
          </Carousel>
          <center>
          <h2>
            les plus vendue
          </h2>
        </center>
        </div>
        
    </aside>
  );
}
