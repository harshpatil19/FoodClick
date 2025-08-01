import React from "react";
import {Link} from 'react-router-dom'

export default function Footer() {
  return (
    <div>
      <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
        {" "}
        <div className="col-md-4 d-flex align-items-center">
          {" "}
          <Link
            to="/"
            className="mb-3 me-2 mb-md-0 text-body-secondary text-decoration-none lh-1"
            aria-label="Bootstrap"
          >
            {" "}
            <svg className="bi" width="30" height="24" aria-hidden="true">
              
            </svg>{" "}
          </Link>{" "}
          <span className="mb-3 mb-md-0 text-white">
            © 2025 FoodClick, Inc
          </span>{" "}
        </div>{" "}
        <ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
          {" "}
          <li className="ms-3">
            <Link className="text-body-secondary" to="#" aria-label="Instagram">
              <svg className="bi" width="24" height="24" aria-hidden="true">
                
              </svg>
            </Link>
          </li>{" "}
          <li className="ms-3">
            <Link className="text-body-secondary" to="#" aria-label="Facebook">
              <svg className="bi" width="24" height="24">
              </svg>
            </Link>
          </li>{" "}
        </ul>{" "}
      </footer>
    </div>
  );
}
