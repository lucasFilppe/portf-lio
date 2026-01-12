'use client'

import { assets } from "@/assets/assets";
import Image from "next/image";
import React, { useRef, useEffect, useState } from "react";

const Navbar = () => {
  const [isScroll, setIsScroll] = useState(false);
  const sideMenuRef = useRef(null);

  const openMenu = () => {
    if (sideMenuRef.current) {
      sideMenuRef.current.style.transform = 'translateX(0)';
    }
  }

  const closeMenu = () => {
    if (sideMenuRef.current) {
      sideMenuRef.current.style.transform = 'translateX(100%)';
    }
  }

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScroll(true);
      } else {
        setIsScroll(false);
      }
    }

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Background fixo atrás da navbar */}
      <div className="fixed top-0 right-0 w-11/12 -z-10 -translate-y-1/2">
        <Image src={assets.header_bg_color} alt="" className="w-full" />
      </div>

      <nav className={`w-full fixed px-5 lg:px-8 xl:px-[8%] py-4 flex 
        items-center justify-between z-50 transition-colors duration-300
        ${isScroll ? 'bg-white bg-opacity-50 backdrop-blur-lg shadow-sm' : ''}`}
      >
        {/* Menu desktop */}
        <ul className="hidden md:flex items-center gap-6 lg:gap-8 rounded-full px-6 py-2 
          bg-white bg-opacity-50 shadow-sm">
          <li><a href="#top" className="font-Ovo">Início</a></li>
          <li><a href="#sobre" className="font-Ovo">Sobre mim</a></li>
          <li><a href="#trabalho" className="font-Ovo">Meu trabalho</a></li>
        </ul>

        {/* Botões e menu mobile */}
        <div className="flex items-center gap-4">
          {/** <button>
            <Image src={assets.moon_icon} alt="Modo noturno" className="w-6" />
          </button>
          */}

          <a
            href="#contato"
            className="hidden lg:flex items-center gap-3 px-6 sm:px-10 py-2.5 border border-gray-500 rounded-full font-Ovo"
          >
            Contato
            <Image src={assets.arrow_icon} alt="Seta" className="w-3" />
          </a>

          {/* Botão hamburger mobile */}
          <button className="block md:hidden" onClick={openMenu}>
            <Image src={assets.menu_black} alt="Menu" className="w-6" />
          </button>
        </div>

        {/* Menu mobile */}
        <ul
          ref={sideMenuRef}
          className="fixed top-0 right-0 flex flex-col gap-6 py-20 px-8 w-72 h-screen 
             bg-white backdrop-blur-md shadow-2xl rounded-l-2xl 
             transform translate-x-full transition-transform duration-300 ease-in-out z-50"
        >
          {/* Botão de fechar */}
          <button
            onClick={closeMenu}
            className="absolute right-5 top-5 p-2 rounded-full bg-rose-100 hover:bg-rose-200 
               transition-colors duration-200"
          >
            <Image src={assets.close_black} alt="Fechar" className="w-5 h-5" />
          </button>

          {/* Links */}
          <li>
            <a
              href="#top"
              onClick={closeMenu}
              className="font-Ovo text-lg text-gray-800 hover:text-rose-500 transition-colors duration-200"
            >
              Início
            </a>
          </li>
          <li>
            <a
              href="#trabalho"
              onClick={closeMenu}
              className="font-Ovo text-lg text-gray-800 hover:text-rose-500 transition-colors duration-200"
            >
              Meu trabalho
            </a>
          </li>
          <li>
            <a
              href="#habilidades"
              onClick={closeMenu}
              className="font-Ovo text-lg text-gray-800 hover:text-rose-500 transition-colors duration-200"
            >
              Habilidades
            </a>
          </li>
          <li>
            <a
              href="#sobre"
              onClick={closeMenu}
              className="font-Ovo text-lg text-gray-800 hover:text-rose-500 transition-colors duration-200"
            >
              Sobre mim
            </a>
          </li>
          <li>
            <a
              href="#contato"
              onClick={closeMenu}
              className="font-Ovo text-lg text-gray-800 hover:text-rose-500 transition-colors duration-200"
            >
              Contato
            </a>
          </li>
        </ul>

      </nav>
    </>
  );
}

export default Navbar;


