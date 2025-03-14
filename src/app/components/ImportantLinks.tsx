"use client";

import { importantLinks } from "@/data/homepageData";
import Link from "next/link";
import { motion } from "framer-motion";
import { FiExternalLink } from "react-icons/fi";

const ImportantLinks = () => {
  return (
    <section className="py-12 bg-[#081F5C] flex justify-center">
      <div className="max-w-6xl w-full px-4">
        <motion.h2
          className="text-2xl sm:text-3xl font-bold text-white text-center mb-8"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          Important Links
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {importantLinks.map((link, index) => (
            <motion.div
              key={index}
              className="bg-white p-4 sm:p-6 rounded-lg shadow-md hover:shadow-xl transition-all flex items-center gap-4"
              whileHover={{ scale: 1.01 }}
            >
              <FiExternalLink className="text-blue-700 text-lg" />
              <Link
                href={link.url}
                className="text-sm sm:text-base font-medium text-blue-800 hover:underline flex-1"
                target="_blank"
              >
                {link.title}
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ImportantLinks;
