import React from "react";
import HeroSlider from "./HeroSlider";
import Works from "./works";
import AgroNews from "./AgroNews";
import LatestCrops from "./LatestCrops";
import CropCategories from "./CropCategories";

const Home = () => {
  return (
    <div>
      <HeroSlider />
      <div>
        <Works></Works>
      </div>
      <div>
        <AgroNews></AgroNews>
      </div>
      <div>
        <CropCategories></CropCategories>
      </div>
      <div>
        <LatestCrops></LatestCrops>
      </div>
    </div>
  );
};

export default Home;
