import React from "react";
import Carousel from "../components/Carousel";
import Footer from "../components/Footer";
import carouselData from "../components/carouselInfoArray";


function Albums() {
  return (
    <div className="App bg-[#909485]">
      <img src="../images/other/Billie-Eilish-Logo-2016-2018.png" />
      <div className="w-1/2 m-auto">
        <Carousel items={carouselData} />
      </div>
      <Footer />
    </div>
  );
}

export default Albums;