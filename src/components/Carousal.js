import React from "react";

export default function Carousal() {
  return (
    <div>
      <div
        id="carouselExampleControlsNoTouching"
        className="carousel slide carousel-fade"
        data-bs-touch="false"
        data-bs-interval="3000"
        style={{objectFit:"contain !impostant"}}
      >
        <div className="carousel-inner position-relative" id='carousel'>

          {/* Search form overlay */}
          <div
            className="carousel-caption "
            style={{
              zIndex: "10"
            }}
          >
            <form className="d-flex">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-success text-white bg-success" type="submit">
                Search
              </button>
            </form>
          </div>

          {/* Carousel Items */}
          <div className="carousel-item active">
            <img
              src="../images/biryani.jpg"
              className="d-block w-100"
              alt="Biryani"
              style={{
                height: "400px",
                objectFit: "cover",
                filter: "brightness(30%)",
              }}
            />
          </div>
          <div className="carousel-item">
            <img
              src="../images/pizza.jpg"
              className="d-block w-100"
              alt="Pizza"
              style={{
                height: "400px",
                objectFit: "cover",
                filter: "brightness(30%)",
              }}
            />
          </div>
          <div className="carousel-item">
            <img
              src="../images/burger.jpg"
              className="d-block w-100"
              alt="Burger"
              style={{
                height: "400px",
                objectFit: "cover",
                filter: "brightness(30%)",
              }}
            />
          </div>
        </div>

        {/* Controls */}
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleControlsNoTouching"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true" />
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleControlsNoTouching"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true" />
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
}
