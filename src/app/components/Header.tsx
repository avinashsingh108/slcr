"use client";

import { menuItems, MenuItem } from "@/data/header";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { FaAngleDown, FaAngleUp, FaBars, FaTimes } from "react-icons/fa";

const Header: React.FC = () => {
  const [hovered, setHovered] = useState<string | null>(null);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="w-full bg-white shadow-lg z-50 md:absolute top-0 right-0 left-0">
      <div className="flex max-md:flex-col max-md:gap-y-2 items-center justify-between space-x-4 p-2 lg:px-40">
        <div className="flex space-x-10 justify-between items-center">
          <div className="max-sm:w-[160px]">
            <Image
              src="/img/denmark.png"
              alt="ministry of denmark logo"
              width={200}
              height={70}
              className="rounded-md object-cover "
            />
          </div>
          <div className="max-sm:w-[90px]">
            <Image
              src="/img/Ministry_of_Jal_Shakti.svg"
              alt="Jal Shakti"
              width={100}
              height={70}
              className="rounded-md object-cover "
            />
          </div>
        </div>
        <h1 className="text-2xl lg:text-3xl xl:text-4xl text-center text-gray-900 font-bold font-garamond">
          Smart Laboratory on Clean River
        </h1>
        <div className="flex space-x-10 md:space-x-4 xl:space-x-10 justify-between items-center">
          <div className="max-sm:w-[100px]">
            <Image
              src="/img/slcr_logo.avif"
              alt="slcr logo"
              width={100}
              height={70}
              className="rounded-md object-cover "
            />
          </div>
          <div className="max-sm:w-[60px]">
            <Image
              src="/img/nmcgGif.gif"
              alt="Namami gange logo"
              width={70}
              height={70}
              className="rounded-md object-cover "
            />
          </div>
        </div>
      </div>
      <div className="flex justify-between items-center p-4 lg:px-24 xl:px-48 bg-[#081F5C] text-white">
        <button
          className="md:hidden text-2xl cursor-pointer ml-auto"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>

        <ul className="hidden md:flex gap-6 md:gap-6 lg:gap-20 justify-center items-center flex-1">
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
                  className="text-lg font-normal md:font-medium hover:text-blue-600 transition"
                >
                  {item.title}
                </Link>
              ) : (
                <span className="text-lg font-normal md:font-medium flex items-center gap-1">
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
      </div>

      {menuOpen && (
        <ul className="lg:hidden bg-[#081F5C] text-white flex flex-col gap-2 p-4">
          {menuItems.map((item: MenuItem) => (
            <li key={item.title} className="relative">
              {item.link ? (
                <Link
                  href={item.link}
                  className="block text-lg font-normal md:font-medium py-2"
                >
                  {item.title}
                </Link>
              ) : (
                <div className="flex flex-col">
                  <button
                    onClick={() =>
                      setHovered(hovered === item.title ? null : item.title)
                    }
                    className="text-lg font-normal md:font-medium flex items-center justify-between w-full py-2"
                  >
                    {item.title}
                    {hovered === item.title ? (
                      <FaAngleUp className="text-xs" />
                    ) : (
                      <FaAngleDown className="text-xs" />
                    )}
                  </button>
                  {item.subMenu && hovered === item.title && (
                    <ul className="bg-white text-gray-800 shadow-md rounded-lg">
                      {item.subMenu.map((subItem) => (
                        <li key={subItem.title} className="hover:bg-blue-50">
                          <Link
                            href={subItem.link}
                            className="block px-4 py-2 text-sm hover:bg-gray-100"
                          >
                            {subItem.title}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              )}
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
};

export default Header;
