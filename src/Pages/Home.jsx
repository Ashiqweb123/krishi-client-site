import React from 'react';
import HeroSlider from './HeroSlider';
import Works from './works';
import AgroNews from './AgroNews';
import LatestCrops from './LatestCrops';


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
            <LatestCrops></LatestCrops>
           </div>
        </div>
    );
};

export default Home;