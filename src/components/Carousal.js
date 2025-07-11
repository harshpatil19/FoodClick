import React from "react";


export default function Carousal() {
  return (
    <div>
      <div
        id="carouselExampleControls"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src="/images/Burger.jpg"
              className="d-block w-100"
              alt="Burger"
              style={{ height: "400px", objectFit: "cover" }}
            />
          </div>
          <div className="carousel-item">
            <img
              src="/images/Pizza.jpg"
              className="d-block w-100"
              alt="Pizza"
              style={{ height: "400px", objectFit: "cover" }}
            />
          </div>
          <div className="carousel-item">
            <img
              src="/images/Biryani.jpg"
              className="d-block w-100"
              alt="Biryani"
              style={{ height: "400px", objectFit: "cover" }}
            />
          </div>
        </div>

        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
}
