import React from "react";

export default function Card() {
  return (
    <div className="container mt-3">
      {/* First Row - 4 Cards */}
      <div className="d-flex flex-wrap justify-content-start">
        {/* Card 1 */}
        <div className="card mt-3 me-3" style={{ width: "18rem", maxHeight: "500px" }}>
          <img src="/images/Cards/McDonalds.jpg" className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">McDonalds Meal</h5>
            <p className="card-text">This is card text</p>
            <div className="container w-100">
              <select className="m-2 h-100 rounded">
                {Array.from(Array(6), (e, i) => (
                  <option key={i + 1} value={i + 1}>{i + 1}</option>
                ))}
              </select>
              <div className="d-inline h-100 fs-5">Total Price</div>
            </div>
          </div>
        </div>

        {/* Card 2 */}
        <div className="card mt-3 me-3" style={{ width: "18rem", maxHeight: "500px" }}>
          <img src="/images/Cards/KFC.jpg" className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">KFC Bucket</h5>
            <p className="card-text">This is card text</p>
            <div className="container w-100">
              <select className="m-2 h-100 rounded">
                {Array.from(Array(6), (e, i) => (
                  <option key={i + 1} value={i + 1}>{i + 1}</option>
                ))}
              </select>
              <div className="d-inline h-100 fs-5">Total Price</div>
            </div>
          </div>
        </div>

        {/* Card 3 */}
        <div className="card mt-3 me-3" style={{ width: "18rem", maxHeight: "500px" }}>
          <img src="/images/Cards/BurgerKing.jpg" className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">Burger King</h5>
            <p className="card-text">This is card text</p>
            <div className="container w-100">
              <select className="m-2 h-100 rounded">
                {Array.from(Array(6), (e, i) => (
                  <option key={i + 1} value={i + 1}>{i + 1}</option>
                ))}
              </select>
              <div className="d-inline h-100 fs-5">Total Price</div>
            </div>
          </div>
        </div>

        {/* Card 4 */}
        <div className="card mt-3" style={{ width: "18rem", maxHeight: "500px" }}>
          <img src="/images/Cards/BarbequeNation.jpg" className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">Barbeque Nation</h5>
            <p className="card-text">This is card text</p>
            <div className="container w-100">
              <select className="m-2 h-100 rounded">
                {Array.from(Array(6), (e, i) => (
                  <option key={i + 1} value={i + 1}>{i + 1}</option>
                ))}
              </select>
              <div className="d-inline h-100 fs-5">Total Price</div>
            </div>
          </div>
        </div>
      </div>

      {/* Second Row - 2 Cards */}
      <div className="d-flex">
        {/* Butter Chicken Card */}
        <div className="card mt-3 ms-5" style={{ width: "18rem", maxHeight: "400px" }}>
          <img src="/images/Cards/ButterChicken.jpg" className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">Butter Chicken</h5>
            <p className="card-text">This is card text</p>
            <div className="container w-100">
              <select className="m-2 h-100 rounded">
                {Array.from(Array(6), (e, i) => (
                  <option key={i + 1} value={i + 1}>{i + 1}</option>
                ))}
              </select>
              <select className="m-2 h-100  rounded">
                <option value="half">Half</option>
                <option value="full">Full</option>
              </select>
              <div className="d-inline h-100 fs-5">Total Price</div>
            </div>
          </div>
        </div>

        {/* McDonalds Card (Duplicate) */}
        <div className="card mt-3 ms-3" style={{ width: "18rem", maxHeight: "400px" }}>
          <img src="/images/Cards/Momos.jpg" className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">Momos</h5>
            <p className="card-text">This is card text</p>
            <div className="container w-100">
              <select className="m-2 h-100  rounded">
                {Array.from(Array(6), (e, i) => (
                  <option key={i + 1} value={i + 1}>{i + 1}</option>
                ))}
              </select>
              <select className="m-2 h-100 rounded">
                <option value="half">Half</option>
                <option value="full">Full</option>
              </select>
              <div className="d-inline h-100 fs-5">Total Price</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
