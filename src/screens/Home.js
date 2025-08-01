import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Card from "../components/Card";
import Carousal from "../components/Carousal";

export default function Home() {

 const [search, setSearch] = useState('')

  const [foodCat, setFoodCat] = useState([]);

  const [foodItem, setFoodItem] = useState([]);

  const loadData = async () => {
    let response = await fetch("http://localhost:5000/api/foodData", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    });

    response = await response.json();

    setFoodItem(response[0]);
    setFoodCat(response[1]);
  };

  useEffect(() => {
    loadData();
  }, []);

  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div
        id="carouselExampleControlsNoTouching"
        className="carousel slide carousel-fade"
        data-bs-touch="false"
        data-bs-interval="3000"
        style={{ objectFit: "contain !impostant" }}
      >
        <div className="carousel-inner position-relative" id="carousel">
          {/* Search form overlay */}
          <div
            className="carousel-caption "
            style={{
              zIndex: "10",
            }}
          >
            <div className="d-flex justify-content-center">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search" value={search} onChange={(e)=>{setSearch(e.target.value)}}
              />
            
            </div>
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
      <div className=" container">
        {
          //this is conditional operator
          foodCat.length > 0
            ? foodCat.map((data) => {
                return (
                  <div key={data._id} className="row mb-3">
                    <div className="fs-3 m-3">{data.CategoryName}</div>
                    <hr />
                    {foodItem.length > 0 ? (
                      foodItem
                        .filter(
                          (item) => (item.CategoryName === data.CategoryName)
                         && (item.name.toLowerCase().includes(search.toLowerCase())))
                        .map((filterItems) => {
                          return (
                            <div
                              key={filterItems._id}
                              className="col-12 col-md-6 col-lg-3"
                            >
                              <Card
                               foodItem = {filterItems}
                                options={filterItems.options?.[0] || {}}
                                
                              ></Card>
                            </div>
                          );
                        })
                    ) : (
                      <div>No such Data Found"</div>
                    )}
                  </div>
                );
              })
            : ""
        }
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}
