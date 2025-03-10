"use client";

import { menuItems, MenuItem } from "@/data/header";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";

const Header: React.FC = () => {
  const [hovered, setHovered] = useState<string | null>(null);

  return (
    <nav className="w-full bg-white shadow-lg z-50 absolute top-0 right-0 left-0 ">
      <div className="flex items-center justify-between space-x-4 p-2 px-48">
        <div className="flex space-x-2">
          <Image
            src="/img/denmark.png"
            alt="ministry of denmark logo"
            width={200}
            height={70}
            className="rounded-md object-cover "
          />
          <Image
            src="/img/Ministry_of_Jal_Shakti.svg"
            alt="Jal Shakti"
            width={100}
            height={70}
            className="rounded-md object-cover "
          />
        </div>
        <h1 className="text-4xl text-gray-900 font-bold">
          Smart Laboratory on Clean River
        </h1>
        <div className="flex space-x-2">
          <Image
            src="/img/slcr_logo.avif"
            alt="slcr logo"
            width={100}
            height={70}
            className="rounded-md object-cover "
          />
          <Image
            src="/img/ganga.jpg"
            alt="Namami gange logo"
            width={70}
            height={70}
            className="rounded-md object-cover "
          />
        </div>
      </div>
      <ul className="flex justify-between items-center bg-[#081F5C] text-white p-2 px-48">
        {menuItems.map((item: MenuItem) => (
          <li
            key={item.title}
            className="relative group cursor-pointer"
            onMouseEnter={() => setHovered(item.title)}
            onMouseLeave={() => setHovered(null)}
          >
            {item.link ? (
              <Link
                href={item.link}
                className="text-lg font-medium hover:text-blue-600 transition"
              >
                {item.title}
              </Link>
            ) : (
              <span className="text-lg font-medium flex items-center gap-1">
                {item.title}
                {hovered === item.title ? (
                  <FaAngleUp className="text-xs" />
                ) : (
                  <FaAngleDown className="text-xs" />
                )}
              </span>
            )}

            {item.subMenu && hovered === item.title && (
              <ul className="absolute left-0 w-48 bg-white shadow-md rounded-lg overflow-hidden">
                {item.subMenu.map((subItem) => (
                  <li key={subItem.title} className="hover:bg-blue-50">
                    <Link
                      href={subItem.link}
                      className="block px-4 py-2 text-sm text-gray-800 hover:bg-gray-100"
                    >
                      {subItem.title}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Header;
