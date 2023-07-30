import React, { useState } from "react";

import "./Navbar.css";
const Navbar = () => {

  const [color,setColor] = useState(false);

  const changeColor=()=>{
    if(window.scrollY>= 200)
    {
      setColor(true);
    }
    else{
      setColor(false)
    }
  }
  window.addEventListener('scroll',changeColor);
  return (
    <div>
      <div>
        <nav className={color?"navbar navbar-expand-lg navbar-text fixed-top navbar-scrolled":"navbar navbar-expand-lg  fixed-top"}>
          <div className="container">
            <a className="navbar-brand " href="#">
              Yonigenics
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav ms-auto">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="#">
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Blog
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    About
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
      
    </div>
  );
};

export default Navbar;
