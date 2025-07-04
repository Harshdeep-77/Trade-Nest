import React from "react";

function Team() {
  return (
    <>
      <div className="container ">
        <div className="row p-3 text-center    border-top">
          <h1 className="mt-5">People</h1>
        </div>
        <div className="row  p-3 fs-6 ">
          <div className="col-6 p-5 text-center">
            <img
              src=" media\harshdeepimg.PNG"
              style={{ borderRadius: "100%", width: "60%", height: "300px" }}
            ></img>
            <h4 className="mt-5">Harshdeep</h4>
            <h6>Founder,CEO</h6>
          </div>
          <div className="col-6 p-3 fs-4">
            <p>
              Harshdeep bootstrapped and founded TradeNest in 2008 to overcome
              the hurdles he faced during his decade long stint as a trader.
              Today, TradeNest has changed the landscape of the Indian broking
              industry.
            </p>
            <p>
              He is a member of the SEBI Secondary Market Advisory Committee
              (SMAC) and the Market Data Advisory Committee (MDAC).
            </p>
            <p>Playing Chess is his zen.</p>
            <p>
              Connect on <a href="" style={{textDecoration:"none"}}>Homepage</a>/ <a href="" style={{textDecoration:"none"}}>TradingQnA</a> /
              <a href="" style={{textDecoration:"none"}}>Twitter</a> 
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Team;
