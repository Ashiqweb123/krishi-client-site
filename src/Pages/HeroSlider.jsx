import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay, A11y } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import bannerImg1 from '../assets/banner-a.jpg';
import bannerImg2 from '../assets/banner-b.jpg';
import bannerImg3 from '../assets/banner-c.jpg';

const HeroSlider = () => {
  return (
    <section className="w-full my-4">
      <Swiper
        modules={[Navigation, Pagination, Autoplay, A11y]}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        loop={true}
      >
        {/* Slide 1 */}
        <SwiperSlide>
          <div className="relative w-full">
            <img src={bannerImg1} alt="Fresh Organic Crops" className="w-full object-cover md:h-[500px]" />
            <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white  bg-opacity-30 p-4">
              <h1 className="text-3xl md:text-5xl font-bold mb-2">Fresh Organic Crops</h1>
              <p className="text-lg md:text-2xl">Direct from the farm to your home</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative w-full">
            <img src={bannerImg2} alt="Fresh Organic Crops" className="w-full object-cover md:h-[500px]" />
            <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white  bg-opacity-30 p-4">
              <h1 className="text-3xl md:text-5xl font-bold mb-2">Fresh Organic Crops</h1>
              <p className="text-lg md:text-2xl">Direct from the farm to your home</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative w-full">
            <img src={bannerImg3} alt="Fresh Organic Crops" className="w-full object-cover md:h-[500px]" />
            <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white  bg-opacity-30 p-4">
              <h1 className="text-3xl md:text-5xl font-bold mb-2">Fresh Organic Crops</h1>
              <p className="text-lg md:text-2xl">Direct from the farm to your home</p>
            </div>
          </div>
        </SwiperSlide>

        {/* Slide 2 */}
        {/* <SwiperSlide>
          <div className="relative w-full">
            <img src={bannerImg2} alt="Connect with Local Farmers"className="w-full object-cover md:h-[500px]" />
            <div className="absolute inset-0 flex flex-col justify-center items-center text-center bg-black text-white bg-black bg-opacity-30 p-4">
              <h1 className="text-3xl md:text-5xl font-bold mb-2">Connect with Local Farmers</h1>
              <p className="text-lg md:text-2xl">Support the community and sustainable agriculture</p>
            </div>
          </div>
        </SwiperSlide> */}

        {/* Slide 3 */}
        {/* <SwiperSlide>
          <div className="relative w-full">
            <img src={bannerImg1} alt="Healthy & Nutritious" />
            <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white bg-black bg-opacity-30 p-4">
              <h1 className="text-3xl md:text-5xl font-bold mb-2">Healthy & Nutritious</h1>
              <p className="text-lg md:text-2xl">Eat fresh and live healthy</p>
            </div>
          </div>
        </SwiperSlide> */}
      </Swiper>
    </section>
  );
};

export default HeroSlider;
