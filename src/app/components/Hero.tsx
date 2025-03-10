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
      <div className="w-full h-10/12 flex-shrink-0">
        <Swiper
          modules={[Autoplay, EffectFade]}
          autoplay={{ delay: 3000 }}
          loop={true}
          effect="fade"
          className="w-full h-full"
        >
          {heroSlider.map((slide, index) => (
            <SwiperSlide key={index}>
              <Image
                src={slide.src}
                alt={slide.alt}
                fill
                className="object-cover"
                priority={true}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div className="w-full h-2/12 bg-white flex items-center justify-center px-6 md:px-12 text-gray-900">
        <div className="max-w-7xl">
          <p className="text-lg ">{heroText.description}</p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
