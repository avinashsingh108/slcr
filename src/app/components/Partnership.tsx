"use client";

import { indoDenmarkPartnership } from "@/data/homepageData";
import Image from "next/image";

const Partnership = () => {
  return (
    <section className="py-40 bg-white flex justify-center">
      <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="space-y-4">
          <h2 className="text-3xl font-bold text-gray-800">{indoDenmarkPartnership.title}</h2>
          <p className="text-gray-700 leading-relaxed">{indoDenmarkPartnership.description}</p>
        </div>

        <div className="relative w-full h-[350px] overflow-hidden shadow-md">
          <Image
            src={indoDenmarkPartnership.image}
            alt={indoDenmarkPartnership.title}
            fill
            className="rounded-md object-cover "
          />
        </div>
      </div>
    </section>
  );
};

export default Partnership;
