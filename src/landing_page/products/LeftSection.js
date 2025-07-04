import React from "react";

function LeftSection({
  imageURL,
  productName,
  prodouctDescription,
  tryDemo,
  learnMore,
  googlePlay,
  appStore,
}) {
  return (
    <>
      <div className="container mt-5 ">
        <div className="row mb-5">
          <div className="col-6 p-4">
            <img src={imageURL}></img>
          </div>
          <div className="col-1"></div>
          <div className="col-5 p-5 mt-5">
            <h1>{productName}</h1>
            <p className="mt-5">{prodouctDescription}</p>
            <div className="mt-3 mb-3">
              <a href={tryDemo} style={{textDecoration:"none",fontSize:"22px"}}> {tryDemo}  </a>
              <a href={learnMore } style={{marginLeft:"50px",textDecoration:"none",fontSize:"22px"}}> {learnMore } </a>
            </div>
            <div>
               
            <a href="">
              {googlePlay} <img src=" media\googlePlayBadge.svg"></img>
            </a>
            <a href="">
              {appStore} <img src="media\appstoreBadge (1).svg"></img>
            </a>
            </div>
 
             
          </div>
        </div>
      </div>
    </>
  );
}

export default LeftSection;
