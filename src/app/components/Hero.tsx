"use client";

import { heroSlider, heroText } from "@/data/hero";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";

const Hero = () => {
  return (
    <section className="h-screen flex flex-col">
      <div className="w-full h-[65vh] sm:h-[70vh] md:h-[75vh] lg:h-[80vh] xl:h-[85vh] flex-shrink-0">
        <Swiper
          modules={[Autoplay, EffectFade]}
          autoplay={{ delay: 3000 }}
          loop={true}
          effect="fade"
          className="w-full h-full"
        >
          {heroSlider.map((slide, index) => (
            <SwiperSlide key={index}>
              <div className="relative w-full h-full">
              <Image
                  src={slide.src}
                  alt={slide.alt}
                  layout="fill"
                  objectFit="cover"
                  className="w-full h-full"
                  priority={true}
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div className="w-full flex items-center justify-center px-4 sm:px-6 md:px-12 text-gray-900 bg-white h-[35vh] sm:h-[30vh] md:h-[25vh] lg:h-[20vh] xl:h-[15vh]">
        <div className="max-w-7xl text-center">
          <p className="text-base sm:text-lg ">
            {heroText.description}
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
