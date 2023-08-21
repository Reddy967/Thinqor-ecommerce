import React from 'react';
import { Carousel } from 'react-bootstrap';
import dyna2 from "../assets/dyna 2.png";
import dyna3 from "../assets/dyna 3.png";
import dyna4 from "../assets/dyna 4.png";




const CarouselComponent = () => {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={dyna2}
          alt="Slide 1"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={dyna2}
          alt="Slide 2"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={dyna3}
          alt="Slide 3"
        />
      </Carousel.Item>
      {/* Add more Carousel.Items for each slide */}
    </Carousel>
  );
};

export default CarouselComponent;
