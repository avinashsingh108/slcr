"use client";

import { projects } from "@/data/homepageData";
import Link from "next/link";
import { motion } from "framer-motion";

const OurProjects = () => {
  return (
    <section className="py-12 bg-[#081F5C] flex justify-center">
      <div className="max-w-6xl w-full px-4">
        <h2 className="text-2xl sm:text-3xl font-bold text-white text-center mb-8">
          Our Projects
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
  {projects.map((project, index) => (
    <motion.div
      key={index}
      className="bg-white rounded-lg shadow-lg overflow-hidden p-4 sm:p-6 hover:shadow-xl transition-all flex flex-col"
      whileHover={{ scale: 1.01 }}
      viewport={{ once: true }}
    >
      <h3 className="text-lg font-semibold text-gray-800 mb-2">
        {project.title}
      </h3>

      <div className="flex-grow">
        <p className="text-sm sm:text-base text-gray-700">{project.description}</p>
      </div>

      <Link
        href={project.link}
        className="text-blue-600 font-medium hover:underline mt-4"
      >
        Learn More →
      </Link>
    </motion.div>
  ))}
</div>

      </div>
    </section>
  );
};

export default OurProjects;
