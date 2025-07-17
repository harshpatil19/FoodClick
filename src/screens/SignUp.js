import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

export default function SignUp() {
  //what data should we use to store and set the value from form so we used useState
  const [credentials, setCredentials] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    address: "",
    city: "",
    state: "",
    zip: "",
  });


//to perform handleSubmit function inside FORM
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:5000/api/createuser", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        //to route request to proper credentails user have entered wewill do json.stringify
        body: JSON.stringify({
          firstName: credentials.firstName,
          lastName: credentials.lastName,
          email: credentials.email,
          password: credentials.password,
          address: credentials.address,
          city: credentials.city,
          state: credentials.state,
          zip: credentials.zip,
        }),
      });

      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(`Server error ${response.status}: ${errorText}`);
      }

      const json = await response.json();
      console.log(json);

      //If credentials are not valid then set alert message

      if (!json.success) {
        alert("Enter Valid Credentials");
      }
    } catch (error) {
      console.error("Error during signup:", error);
      alert("Failed to submit form. Please try again later.");
    }
  };


//yhis onchange will SET new values for setCrdentials in our useState function with name= firstName and value=credential.first name
//means it will bind that data from form
  const onChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  return (
    <>
      <Navbar />

      <div
        className="d-flex justify-content-center align-items-center"
        style={{ minHeight: "80vh" }}
      >
        <div
          className="card p-4 shadow"
          style={{
            width: "100%",
            maxWidth: "50rem",
            maxHeight: "90vh",
            overflowY: "auto",
          }}
        >
          <h3 className="text-center mb-4">Sign Up</h3>
          <form onSubmit={handleSubmit}>
            <div className="row mb-3">
              <div className="col">
                <label htmlFor="inputFirst" className="form-label">
                  First Name
                </label>
                <input
                  id="inputFirst"
                  name="firstName"
                  type="text"
                  className="form-control"
                  placeholder="First name"
                  value={credentials.firstName}
                  onChange={onChange}
                />
              </div>
              <div className="col">
                <label htmlFor="inputLast" className="form-label">
                  Last Name
                </label>
                <input
                  id="inputLast"
                  name="lastName"
                  type="text"
                  className="form-control"
                  placeholder="Last name"
                  value={credentials.lastName}
                  onChange={onChange}
                />
              </div>
            </div>

            <div className="row mb-3">
              <div className="col-md-6">
                <label htmlFor="inputEmail4" className="form-label">
                  Email
                </label>
                <input
                  type="email"
                  id="inputEmail4"
                  name="email"
                  className="form-control"
                  placeholder="Email"
                  value={credentials.email}
                  onChange={onChange}
                />
              </div>
              <div className="col-md-6">
                <label htmlFor="inputPassword4" className="form-label">
                  Password
                </label>
                <input
                  type="password"
                  id="inputPassword4"
                  name="password"
                  className="form-control"
                  placeholder="Password"
                  value={credentials.password}
                  onChange={onChange}
                />
              </div>
            </div>

            <div className="mb-3">
              <label htmlFor="inputAddress" className="form-label">
                Address
              </label>
              <input
                type="text"
                id="inputAddress"
                name="address"
                className="form-control"
                placeholder="1234 Main St"
                value={credentials.address}
                onChange={onChange}
              />
            </div>

            <div className="row mb-4">
              <div className="col-md-6">
                <label htmlFor="inputCity" className="form-label">
                  City
                </label>
                <input
                  type="text"
                  id="inputCity"
                  name="city"
                  className="form-control"
                  value={credentials.city}
                  onChange={onChange}
                />
              </div>
              <div className="col-md-4">
                <label htmlFor="inputState" className="form-label">
                  State
                </label>
                <select
                  id="inputState"
                  name="state"
                  className="form-select"
                  value={credentials.state}
                  onChange={onChange}
                >
                  <option value="AP">Andhra Pradesh</option>
                  <option value="AR">Arunachal Pradesh</option>
                  <option value="AS">Assam</option>
                  <option value="BR">Bihar</option>
                  <option value="CT">Chhattisgarh</option>
                  <option value="GA">Gujarat</option>
                  <option value="HR">Haryana</option>
                  <option value="HP">Himachal Pradesh</option>
                  <option value="JK">Jammu and Kashmir</option>
                  <option value="GA">Goa</option>
                  <option value="JH">Jharkhand</option>
                  <option value="KA">Karnataka</option>
                  <option value="KL">Kerala</option>
                  <option value="MP">Madhya Pradesh</option>
                  <option value="MH">Maharashtra</option>
                  <option value="MN">Manipur</option>
                  <option value="ML">Meghalaya</option>
                  <option value="MZ">Mizoram</option>
                  <option value="NL">Nagaland</option>
                  <option value="OR">Odisha</option>
                  <option value="PB">Punjab</option>
                  <option value="RJ">Rajasthan</option>
                  <option value="SK">Sikkim</option>
                  <option value="TN">Tamil Nadu</option>
                  <option value="TG">Telangana</option>
                  <option value="TR">Tripura</option>
                  <option value="UT">Uttarakhand</option>
                  <option value="UP">Uttar Pradesh</option>
                  <option value="WB">West Bengal</option>
                  <option value="AN">Andaman and Nicobar Islands</option>
                  <option value="CH">Chandigarh</option>
                  <option value="DN">Dadra and Nagar Haveli</option>
                  <option value="DD">Daman and Diu</option>
                  <option value="DL">Delhi</option>
                  <option value="LD">Lakshadweep</option>
                  <option value="PY">Puducherry</option>
                  {/* ...options... */}
                </select>
              </div>
              <div className="col-md-2">
                <label htmlFor="inputZip" className="form-label">
                  Zip
                </label>
                <input
                  type="text"
                  id="inputZip"
                  name="zip"
                  className="form-control"
                  value={credentials.zip}
                  onChange={onChange}
                />
              </div>
            </div>

            <button type="submit" className="btn btn-primary w-100">
              Sign Up
            </button>
            <Link to="/login" className=' d-flex justify-content-center  align-items-center'>Already a user? Login</Link>
          </form>
        </div>
      </div>

      <Footer />
    </>
  );
}
