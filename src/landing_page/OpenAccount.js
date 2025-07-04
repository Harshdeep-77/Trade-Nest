import React from "react";

function OpenAccount() {
  return (
    <div className="container mt-5 p-2">
      <div className="row text-center">
        <h1 className="mb-5 mt-5">Open a Zerodha account</h1>
        <p className="mb-5 fs-5">
          Modern platforms and apps, ₹0 investments, and flat ₹20 intraday and
          F&O trades.
        </p>
        <button
          className="btn btn-primary p-2 fs-5 mb-5"
          style={{ width: "20%", margin: "0 auto" }}
        >
          Sign up for free
        </button>
      </div>
    </div>
  );
}

export default OpenAccount;
