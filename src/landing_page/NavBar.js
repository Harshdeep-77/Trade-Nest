import React from "react";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <nav
      class="navbar navbar-expand-lg  border-bottom "
      style={{ backgroundColor: "#fff" ,height:"100px"}}
    >
      <div class="container p-2">
        <Link class="navbar-brand" to={"/"} href="#">
          <img src="media/newlogo2.png" style={{ width: "30%" }} />
        </Link>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <form class="d-flex" role="search">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item fs-4" >
                <Link class="nav-link active" to={"/signup"} aria-current="page" >
                  Signup
                </Link>
              </li>
              <li class="nav-item  fs-4">
                <Link class="nav-link  active" to={"/about"}>
                  About
                </Link>
              </li>
                    <li class="nav-item  fs-4">
                <Link class="nav-link  active" to={"/products"}>
                  Products
                </Link>
              </li>
                    <li class="nav-item  fs-4">
                <Link class="nav-link  active" to={"/pricing"}>
                  Pricing
                </Link>
              </li>
                    <li class="nav-item fs-4">
                <Link class="nav-link  active" to={"/support"}>
                  Support
                </Link>
              </li>
             <li class="nav-item  fs-4">
                <a class="nav-link  active" >
                  <i class="fa-solid fa-bars"></i>
                </a>
              </li>
              
            </ul>
          </form>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
