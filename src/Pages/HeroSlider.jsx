import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay, A11y } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import bannerImg1 from "../assets/banner-a.jpg";
import bannerImg2 from "../assets/banner-b.jpg";
import bannerImg3 from "../assets/banner-c.jpg";

const HeroSlider = () => {
  return (
    <section className="w-full relative">
      <Swiper
        modules={[Navigation, Pagination, Autoplay, A11y]}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        loop={true}
      >
        {[bannerImg1, bannerImg2, bannerImg3].map((img, index) => (
          <SwiperSlide key={index}>
            <div className="relative w-full h-[60vh]">
              <img
                src={img}
                alt="Fresh Organic Crops"
                className="w-full h-full object-cover"
              />

              <div className="absolute inset-0 bg-black/40 flex flex-col justify-center items-center text-center text-white px-4">
                <h1 className="text-3xl md:text-5xl font-bold mb-3">
                  Fresh Organic Crops
                </h1>
                <p className="text-base md:text-xl mb-6 max-w-2xl">
                  Direct from the farm to your home
                </p>

                <button className="px-6 py-3 bg-primary hover:bg-secondary transition rounded-md text-white font-semibold">
                  Explore Now
                </button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white animate-bounce">
        <span className="text-2xl">↓</span>
      </div>
    </section>
  );
};

export default HeroSlider;
