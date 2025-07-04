import React from "react";

function RightSection({
  imageURL,
  productName,
  prodouctDescription,
  
  learnMore,
  
}) {
  return (
    <>
      <div className="container ">
        <div className="row mb-5 ">
          <div className="col-5 p-5 mt-5">
            <h1 className="mt-5">{productName}</h1>
            <p className="fs-5 mt-5">{prodouctDescription}</p>
            <div className=" ">
               <a href={learnMore} style={{textDecoration:"none",fontSize:"22px"}} >
                Learn more <i class="fa-solid fa-arrow-right"></i>
                
              </a>
            </div>
          
          </div>
          <div className="col-1"></div>
          <div className="col-6 p">
            <img src={imageURL}></img>
          </div>
        </div>
      </div>
    </>
  );
}

export default RightSection;
