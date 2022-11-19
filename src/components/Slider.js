import React from "react";
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import slider from '../images/slider.png'

const Slider = () => {
    return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={slider}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>ELIJA SANITARIOS CAMPANA PARA SU HOGAR</h3>
          <p>Lo que Ud. necesita</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={slider}
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>ELIJA SANITARIOS CAMPANA PARA SU HOGAR</h3>
          <p>Lo que Ud. necesita</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={slider}
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>ELIJA SANITARIOS CAMPANA PARA SU HOGAR</h3>
          <p>Lo que Ud. necesita</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    );
}

export default Slider; 