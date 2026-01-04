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
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        loop={true}
        className="h-[60vh] md:h-[70vh]"
      >
        <SwiperSlide>
          <div className="relative w-full h-full">
            <img
              src={bannerImg1}
              alt="Fresh Organic Crops"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/30 flex flex-col justify-center items-center text-center px-4">
              <h1 className="text-3xl md:text-5xl font-bold mb-4 animate-fadeIn">
                Fresh Organic Crops
              </h1>
              <p className="text-lg md:text-2xl mb-6 animate-fadeIn delay-200">
                Direct from the farm to your home
              </p>
              <button className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-semibold animate-bounce">
                Shop Now
              </button>
            </div>
            <div className="absolute bottom-0 w-full h-12 bg-gradient-to-t from-white/80 to-transparent" />
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="relative w-full h-full">
            <img
              src={bannerImg2}
              alt="Fresh Organic Crops"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/30 flex flex-col justify-center items-center text-center px-4">
              <h1 className="text-3xl md:text-5xl font-bold mb-4 animate-fadeIn">
                Healthy & Organic
              </h1>
              <p className="text-lg md:text-2xl mb-6 animate-fadeIn delay-200">
                Delivered fresh at your doorstep
              </p>
              <button className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-semibold animate-bounce">
                Explore
              </button>
            </div>
            <div className="absolute bottom-0 w-full h-12 bg-gradient-to-t from-white/80 to-transparent" />
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="relative w-full h-full">
            <img
              src={bannerImg3}
              alt="Fresh Organic Crops"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/30 flex flex-col justify-center items-center text-center px-4">
              <h1 className="text-3xl md:text-5xl font-bold mb-4 animate-fadeIn">
                Farm to Table
              </h1>
              <p className="text-lg md:text-2xl mb-6 animate-fadeIn delay-200">
                Taste the freshness
              </p>
              <button className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-semibold animate-bounce">
                Get Started
              </button>
            </div>
            <div className="absolute bottom-0 w-full h-12 bg-gradient-to-t from-white/80 to-transparent" />
          </div>
        </SwiperSlide>
      </Swiper>

      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 animate-bounce">
        <span className="block w-6 h-6 border-b-2 border-r-2 border-gray-800 rotate-45"></span>
      </div>
    </section>
  );
};

export default HeroSlider;
