import React from "react";

function Hero() {
  return (
    <>
      <section className="container-fluid" id="support">
        <div className="p-5 mt-5" id="supportWrapper">
          <h1 className="fs-2">Support Portal</h1>
          <a href="" style={{ fontSize: "1.5rem" }}>
            Track ticket
          </a>
        </div>
        <div className="row p-3 ">
          <div className="col-6 p-5 ">
            <h1 className="fs-2">
              Search for an answer or browse help topics to create a ticket
            </h1>
            <input placeholder="Eg:how do i activate F&O,why is my order getting rejected..." />
            <br />
            <a href=""style={{fontSize:"1.2rem"}}> Track account opening </a>
            <a href=""style={{marginLeft:"15px",fontSize:"1.2rem"}}> Track segment activation </a>
            <a href=""style={{marginLeft:"15px",fontSize:"1.2rem"}}> Intraday margins</a>
            <a href=""style={{marginLeft:"15px",fontSize:"1.2rem"}}> Kite user manual</a>
          </div>
          <div className="col-6 p-5" id="hero-link">
            <h1 className="fs-2">Featured</h1>
            <ol>
              <li>  <a href="">
              Exclusion of F&O contracts on 8 securities from August 29, 2025
            </a></li>
            <li>  <a href="">
              Revision in expiry day of Index and Stock derivatives contracts
            </a></li>
            </ol>
            
           
          </div>
        </div>
      </section>
    </>
  );
}

export default Hero;
