import React from "react";
import NavBar from "../NavBar";
import Hero from "./Hero";
import LeftSection from "./LeftSection";
import RightSection from "./RightSection";

import Uninverse from "./Universe";

function ProductPage() {
  return (
    <>
      <Hero />
      <LeftSection
        imageURL=" media\kite.png"
        productName="Kite"
        prodouctDescription="Our ultra-fast flagship trading platform with streaming market data, advanced charts, an elegant UI, and more. Enjoy the Kite experience seamlessly on your Android and iOS devices."
        tryDemo="Try demo →"
        learnMore="Learn more→"
        googlePlay=""
        appStore=""
      />

      <RightSection
        imageURL=" media\console.png"
        productName="Console"
        prodouctDescription=" The central dashboard for your Zerodha account. Gain insights into your trades and investments with in-depth reports and visualisations."
        learnMore="Learn more "
        googlePlay=""
        appStore=""
      />
      <LeftSection
        imageURL=" media\kite.png"
        productName="Coin "
        prodouctDescription=" Buy direct mutual funds online, commission-free, delivered directly to your Demat account. Enjoy the investment experience on your Android and iOS devices.

"
        tryDemo="Coin →"
        googlePlay=""
        appStore=""
      />

      <RightSection
        imageURL=" media\kiteconnect.png"
        productName="Kite Connect API"
        prodouctDescription=" Build powerful trading platforms and experiences with our super simple HTTP/JSON APIs. If you are a startup, build your investment app and showcase it to our clientbase."
        learnMore="Kite Connect  "
        googlePlay=""
        appStore=""
      />

      <LeftSection
        imageURL=" media\varsity.png"
        productName="Varsity mobile"
        prodouctDescription=" An easy to grasp, collection of stock market lessons with in-depth coverage and illustrations. Content is broken down into bite-size cards to help you learn on the go."
        googlePlay=""
        appStore=""
      />
      <>
        <p className="text-center fs-3 mt-5" >
          
          Want to know more about our technology stack? Check out the <spand></spand>
          <a href=""style={{textDecoration:"none"}}>TradeNest.tech</a> Zerodha.tech blog.
        </p>
          <br></br>  <br></br>
      </>

      <Uninverse />
    </>
  );
}

export default ProductPage;
