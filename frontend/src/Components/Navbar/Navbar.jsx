import React, { useState } from "react";
import img from "../../images/flat-lay-medical-composition.jpg";
import "../Navbar.css";
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

  return (
    <div>
      <div onScroll={changeColor}>
        <nav className={color?"navbar navbar-expand-lg navbar-dark fixed-top navbar-scrolled":"navbar navbar-expand-lg navbar-dark fixed-top"}>
          <div class="container">
            <a class="navbar-brand" href="#">
              Navbar
            </a>
            <button
              class="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
              <ul class="navbar-nav ms-auto">
                <li class="nav-item">
                  <a class="nav-link active" aria-current="page" href="#">
                    Home
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">
                    Features
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">
                    Pricing
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
      <img src={img} className="bg-img" alt="bg" />
    </div>
  );
};

export default Navbar;
