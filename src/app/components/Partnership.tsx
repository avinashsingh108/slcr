"use client";

import { indoDenmarkPartnership } from "@/data/homepageData";
import Image from "next/image";

const Partnership = () => {
  return (
    <section className="py-20 sm:py-40 bg-white flex justify-center">
      <div className="max-w-6xl w-full px-4 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
        <div className="space-y-4">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-800">{indoDenmarkPartnership.title}</h2>
          <p className="text-sm sm:text-base text-gray-700 leading-relaxed">{indoDenmarkPartnership.description}</p>
        </div>

        <div className="relative w-full h-[250px] sm:h-[350px] hover:scale-105 transition duration-300 ease-in-out overflow-hidden shadow-md rounded-md">
          <Image
            src={indoDenmarkPartnership.image}
            alt={indoDenmarkPartnership.title}
            fill
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default Partnership;
