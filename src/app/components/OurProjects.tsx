"use client";

import { projects } from "@/data/homepageData";
import Link from "next/link";
import { motion } from "motion/react";

const OurProjects = () => {
  return (
    <section className="py-12 bg-[#081F5C] flex justify-center">
      <div className="max-w-6xl w-full">
        <h2 className="text-3xl font-bold text-white text-center mb-8">
          Our Projects
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-lg shadow-lg overflow-hidden p-6 hover:shadow-xl transition-all"
              whileHover={{ scale: 1.01 }}
              viewport={{ once: true }}
            >
              <h3 className="text-lg font-semibold text-gray-800 mb-4">
                {project.title}
              </h3>
              <p className="text-sm text-gray-700 mb-6">{project.description}</p>
              <Link
                href={project.link}
                className="text-blue-600 font-medium hover:underline"
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
