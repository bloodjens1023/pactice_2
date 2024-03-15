import React, { useState } from "react";
import { Carousel } from "react-bootstrap";
import image1 from "../assets/img/caroussel/donut1.jpg";
import image2 from "../assets/img/caroussel/donut2.jpg";
import image3 from "../assets/img/caroussel/donut3.jpg";

export default function Sidebar() {
  return (
    <>
      <aside>
        <div className="p-5">
          <Carousel>
            <Carousel.Item>
              <img
                style={{ height: "200px", width: "800rem"}}
                className="d-block w-100"
                src={image1}
                alt="First slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img style={{ height: "200px", width: "800rem"}}className="d-block w-100" src={image2} alt="Second slide" />

            </Carousel.Item>
            <Carousel.Item>
              <img style={{ height: "200px", width: "800rem"}} className="d-block w-100" src={image3} alt="Third slide" />
            </Carousel.Item>
          </Carousel>
        </div>
      </aside>
    </>
  );
}
