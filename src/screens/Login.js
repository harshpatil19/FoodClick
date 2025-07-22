import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Link, useNavigate } from "react-router-dom";


export default function Login() {

  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
   
  
  });
  let navigate= useNavigate();


//to perform handleSubmit function inside FORM
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:5000/api/loginuser", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        //to route request to proper credentails user have entered wewill do json.stringify
        body: JSON.stringify({
    
          email: credentials.email,
          password: credentials.password,
        
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
       // is success then it will navigate to home page
       //also it will set an authToken and it will generate a new token inside browser console
      if(json.success){
        localStorage.setItem("authToken",json.authToken)
        console.log(localStorage.getItem("authToken"))
        navigate("/")
      }
    } catch (error) {
      console.error("Error during signup:", error);
      alert("Failed to Login. Please try again later.");
    }

   
  
  };


//yhis onchange will SET new values for setCrdentials in our useState function with name= firstName and value=credential.first name
//means it will bind that data from form
  const onChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };
  return (
    <div>
      <Navbar />
      
      <div className="container d-flex justify-content-center align-items-center" style={{ minHeight: "80vh" }}>
        <div className="card p-4 shadow" style={{ width: "100%", maxWidth: "400px" }}>
          <h3 className="text-center mb-4">Login</h3>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="exampleInputEmail1" className="form-label">Email</label>
              <input
                type="email"
                className="form-control"
                name="email"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                value={credentials.email}
                onChange={onChange}
              />
              <small id="emailHelp" className="form-text text-muted">
                We'll never share your email with anyone else.
              </small>
            </div>

            <div className="mb-3">
              <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
              <input
                type="password"
                name="password"
                className="form-control"
                id="exampleInputPassword1"
                value={credentials.password}
                onChange={onChange}
              />
            </div>

            <div className="form-check mb-3">
              <input
                type="checkbox"
                className="form-check-input"
                id="exampleCheck1"
              />
              <label className="form-check-label" htmlFor="exampleCheck1">
                Check me out
              </label>s
            </div>
           
            <button type="submit" className="btn btn-primary w-100">Submit</button>
            <Link to="/SignUp" className=' d-flex justify-content-center  align-items-center'>Not a user? SignUp</Link>
          </form>
        </div>
      </div>

      <Footer />
    </div>
  );
}
