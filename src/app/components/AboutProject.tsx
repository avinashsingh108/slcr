"use client";

import { projectData } from "@/data/homepageData";
import { useState } from "react";
import { motion } from "motion/react";

const AboutProject = () => {
  const [activeSection, setActiveSection] = useState(0);

  return (
    <div className="min-h-[500px] bg-[#F5F5DC] flex flex-col items-center py-12 px-6">
      <div className="max-w-6xl w-full">
        <h1 className="text-4xl font-bold text-gray-800 text-center">
          About Our Project
        </h1>
        <p className="mt-4 text-lg text-gray-600 text-center">
          Learn more about our team, our mission, and what drives us to create
          exceptional solutions.
        </p>

        <div className="flex flex-col md:flex-row mt-10 gap-8">
          <div className="flex flex-col gap-4 w-full md:w-1/4">
            {projectData.sections.map((section, index) => {
              const Icon = section.icon;
              return (
                <motion.button
                  key={index}
                  onClick={() => setActiveSection(index)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`p-4 rounded-lg text-left flex items-center gap-x-2 cursor-pointer transition font-medium  
                ${
                  activeSection === index
                    ? "bg-gray-800 text-white shadow-md"
                    : "bg-white text-gray-700"
                }`}
                >
                  {Icon && (
                    <Icon
                      className={` text-xl ${
                        activeSection === index ? "text-white" : "text-black"
                      }`}
                    />
                  )}
                  {section.name}
                </motion.button>
              );
            })}
          </div>

          <div className="p-8 bg-white rounded-lg w-full md:w-3/4">
            <h2 className="text-2xl font-semibold text-gray-700">
              {projectData.sections[activeSection].name}
            </h2>
            <p className="mt-4 text-gray-700 leading-relaxed">
              {projectData.sections[activeSection].content}
            </p>

            {projectData.sections[activeSection].points && (
              <ul className="mt-6 space-y-3">
                {projectData.sections[activeSection].points.map(
                  (point, index) => (
                    <li
                      key={index}
                      className="bg-gray-100 p-4 rounded-lg text-gray-700 shadow-sm"
                    >
                      {point}
                    </li>
                  )
                )}
              </ul>
            )}

            {projectData.sections[activeSection].outcome && (
              <p className="mt-6 text-lg text-gray-700 font-semibold">
                Outcome: {projectData.sections[activeSection].outcome}
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutProject;
