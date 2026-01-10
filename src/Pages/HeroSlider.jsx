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
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        pagination={{
          clickable: true,
          dynamicBullets: true,
        }}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        loop={true}
        className="h-[50vh] sm:h-[60vh] md:h-[70vh] lg:h-[80vh]"
      >
        {/* Slide 1 */}
        <SwiperSlide>
          <div className="relative w-full h-full">
            <img
              src={bannerImg1}
              alt="Fresh Organic Crops"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/40 flex flex-col justify-center items-center text-center px-4 sm:px-6 lg:px-8">
              <h1 className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-2 sm:mb-4 animate-fadeIn">
                Fresh Organic Crops
              </h1>
              <p className="text-white text-sm sm:text-lg md:text-xl lg:text-2xl mb-4 sm:mb-6 animate-fadeIn delay-200 max-w-2xl">
                Direct from the farm to your home
              </p>
              <a
                href="#shop"
                aria-label="Go to shop section"
                className="bg-green-600 hover:bg-green-700 hover:scale-105 active:scale-95
                           text-white px-4 py-2 sm:px-6 sm:py-3 rounded-lg font-semibold
                           transition-all duration-300 animate-bounce text-sm sm:text-base"
              >
                Shop Now
              </a>
            </div>
          </div>
        </SwiperSlide>

        {/* Slide 2 */}
        <SwiperSlide>
          <div className="relative w-full h-full">
            <img
              src={bannerImg2}
              alt="Healthy & Organic"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/40 flex flex-col justify-center items-center text-center px-4 sm:px-6 lg:px-8">
              <h1 className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-2 sm:mb-4 animate-fadeIn">
                Healthy & Organic
              </h1>
              <p className="text-white text-sm sm:text-lg md:text-xl lg:text-2xl mb-4 sm:mb-6 animate-fadeIn delay-200 max-w-2xl">
                Delivered fresh at your doorstep
              </p>
              <a
                href="#products"
                aria-label="Explore products"
                className="bg-green-600 hover:bg-green-700 hover:scale-105 active:scale-95
                           text-white px-4 py-2 sm:px-6 sm:py-3 rounded-lg font-semibold
                           transition-all duration-300 animate-bounce text-sm sm:text-base"
              >
                Explore
              </a>
            </div>
          </div>
        </SwiperSlide>

        {/* Slide 3 */}
        <SwiperSlide>
          <div className="relative w-full h-full">
            <img
              src={bannerImg3}
              alt="Farm to Table"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/40 flex flex-col justify-center items-center text-center px-4 sm:px-6 lg:px-8">
              <h1 className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-2 sm:mb-4 animate-fadeIn">
                Farm to Table
              </h1>
              <p className="text-white text-sm sm:text-lg md:text-xl lg:text-2xl mb-4 sm:mb-6 animate-fadeIn delay-200 max-w-2xl">
                Taste the freshness
              </p>
              <a
                href="#contact"
                aria-label="Get started"
                className="bg-green-600 hover:bg-green-700 hover:scale-105 active:scale-95
                           text-white px-4 py-2 sm:px-6 sm:py-3 rounded-lg font-semibold
                           transition-all duration-300 animate-bounce text-sm sm:text-base"
              >
                Get Started
              </a>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>

      {/* Custom navigation buttons */}
      <div className="swiper-button-prev !text-white !w-8 !h-8 sm:!w-10 sm:!h-10 after:!text-sm sm:after:!text-lg"></div>
      <div className="swiper-button-next !text-white !w-8 !h-8 sm:!w-10 sm:!h-10 after:!text-sm sm:after:!text-lg"></div>

      {/* Scroll indicator */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 animate-bounce hidden sm:block">
        <span className="block w-6 h-6 border-b-2 border-r-2 border-white rotate-45"></span>
      </div>
    </section>
  );
};

export default HeroSlider;
