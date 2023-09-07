import React from 'react';

const HomeSlider = () => {
  return (
    <div>
      <div
        id="carouselExampleIndicators"
        className="carousel slide rounded-3"
        data-bs-ride="carousel">
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="1"
            aria-label="Slide 2"></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="2"
            aria-label="Slide 3"></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="3"
            aria-label="Slide 4"></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="4"
            aria-label="Slide 5"></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src="../../../../public/images/slider1.jpeg"
              className="d-block w-100 rounded-2" />
          </div>
          <div className="carousel-item">
            <img
              src="../../../../public/images/slider2.jpeg"
              className="d-block w-100 rounded-3" />
          </div>
          <div className="carousel-item">
            <img
              src="../../../../public/images/slider3.jpeg"
              className="d-block w-100 rounded-3" />
          </div>
          <div className="carousel-item">
            <img
              src="../../../../public/images/slider4.jpeg"
              className="d-block w-100 rounded-3" />
          </div>
          <div className="carousel-item">
            <img
              src="../../../../public/images/slider5.jpeg"
              className="d-block w-100 rounded-3" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeSlider;
