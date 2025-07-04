import React from "react";

function Universe() {
  return (
    <div className="container mt-5">
      <div className="row text-center"  >
        <h1 className="">The TradeNest Universe</h1>
        <p className="mt-4 fs-4 " style={{ marginBottom:"100px"}}>
          Extend your trading and investment experience even further with our
          partner platforms
        </p>
        <div className="col-3 p-3 mt-5" >
          <img src=" media\zerodhaFundhouse.png" style={{ width: "70%" }} />
          <p className="mt-3">
            Our asset management venture <br></br>that is creating simple and
            transparent index funds to help you save for your goals.
          </p>
          <br></br>
          <br></br>
          <img
            src=" media\streakLogo.png"
            style={{ width: "70%", marginTop: "20px" }}
          />
          <p className="mt-3">
            Systematic trading platform that allows you to create and backtest
            strategies without coding.
          </p>
        </div>
        <div className="col-1"></div>
        <div className="col-3  p-3  mt-5 ">
          <img src="media\sensibullLogo (1).svg" style={{ width: "70%" }} />
          <p className="mt-3">
            Our asset management venture <br></br>that is creating simple and
            transparent index funds to help you save for your goals.
          </p>
          <br></br>
          <br></br>
          <img
            src=" media\smallcase-Logo.png"
            style={{ width: "70%", marginTop: "20px" }}
          />
          <p className="mt-3">
            Our asset management venture <br></br>that is creating simple and
            transparent index funds to help you save for your goals.
          </p>
        </div>
        <div className="col-1"></div>
        <div className="col-4  p-3  mt-4">
          <img src="media\tijori.svg " style={{ width: "60%" }} />
          <p className="mt-3">
            Our asset management venture <br></br>that is creating simple and
            transparent index funds to help you save for your goals.
          </p>
          <br></br>
          <br></br>
          <img
            src=" media\ditto-logo.png"
            style={{ width: "50%", marginTop: "20px" }}
          />
          <p className="mt-3">
            Our asset management venture <br></br>that is creating simple and
            transparent index funds to help you save for your goals.
          </p>
        </div>
        <button className="btn btn-primary mt-5 fs-5 mb-5" style={{width:"25%",margin:"0 auto"}}>Sign up for free</button>
      </div>
    </div>
  );
}

export default Universe;
