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
    <nav className="w-full bg-white shadow-lg z-50 absolute top-0 right-0 left-0">
      <div className="flex flex-wrap justify-center gap-2 md:gap-10 p-2">
        <div className="h-[60px] w-auto max-w-[200px] flex items-center justify-center">
          <Image
            src="/img/denmark.png"
            alt="Ministry of Denmark logo"
            width={200}
            height={60}
            className="rounded-md object-contain max-h-[60px] w-full"
          />
        </div>

        <div className="h-[60px] w-auto max-w-[100px] flex items-center justify-center">
          <Image
            src="/img/Ministry_of_Jal_Shakti.svg"
            alt="Jal Shakti"
            width={100}
            height={60}
            className="rounded-md object-contain max-h-[60px] w-full"
          />
        </div>

        <div className="h-[60px] w-auto max-w-[100px] flex items-center justify-center">
          <Image
            src="/img/slcr_logo.avif"
            alt="SLCR logo"
            width={100}
            height={60}
            className="rounded-md object-contain max-h-[60px] w-full"
          />
        </div>

        <div className="h-[60px] w-auto max-w-[70px] flex items-center justify-center">
          <Image
            src="/img/ganga.jpg"
            alt="Namami Gange logo"
            width={70}
            height={60}
            className="rounded-md object-contain max-h-[60px] w-full"
          />
        </div>
      </div>

      <div className="flex justify-between items-center p-4 lg:px-10 xl:px-24 bg-[#081F5C] text-white">
        <h1 className=" text-xl sm:text-2xl font-medium sm:font-semibold">
          Smart Laboratory ON Clean River
        </h1>
        <button
          className="lg:hidden text-xl sm:text-2xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
        <ul className="hidden lg:flex gap-6 items-center">
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
                  className=" hover:text-blue-600 transition"
                >
                  {item.title}
                </Link>
              ) : (
                <span className=" flex items-center gap-1">
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

      {/* Mobile Menu */}
      {menuOpen && (
        <ul className="lg:hidden bg-[#081F5C] text-white flex flex-col items-center gap-2 p-4 absolute inset-0 -z-10 w-full pt-20 h-screen">
          {menuItems.map((item: MenuItem) => (
            <li key={item.title} className="relative">
              {item.link ? (
                <Link href={item.link} className="block  py-2">
                  {item.title}
                </Link>
              ) : (
                <div className="flex flex-col">
                  <button
                    onClick={() =>
                      setHovered(hovered === item.title ? null : item.title)
                    }
                    className=" flex items-center gap-2 justify-between w-full py-2"
                  >
                    {item.title}
                    {hovered === item.title ? (
                      <FaAngleUp className="text-xs" />
                    ) : (
                      <FaAngleDown className="text-xs" />
                    )}
                  </button>
                  {item.subMenu && hovered === item.title && (
                    <ul className="bg-white text-gray-800 shadow-md rounded-md w-full">
                      {item.subMenu.map((subItem) => (
                        <li key={subItem.title} className="hover:bg-blue-50">
                          <Link
                            href={subItem.link}
                            className="block rounded-md w-full px-4 py-2 text-sm hover:bg-gray-100"
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
