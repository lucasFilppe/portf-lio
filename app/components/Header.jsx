import { assets } from "@/assets/assets";
import Image from "next/image";
import React from "react";

const Header = () => {
  return (
    <header className="w-full px-4 sm:px-8 md:px-[12%] h-screen flex flex-col items-center justify-center gap-4 text-center">
      {/* Foto de perfil */}
      <div>
        <Image
          src={assets.perfil}
          alt="Lucas Filipe"
          className="rounded-full w-24 sm:w-28 md:w-32"
        />
      </div>

      {/* Saudação */}
      <h3 className="flex items-center sm:items-end gap-2 text-lg sm:text-xl md:text-2xl font-Ovo mb-2">
        Olá, Eu sou Lucas Filipe
        <Image
          src={assets.hand_icon}
          alt="Mão acenando"
          className="w-5 sm:w-6"
        />
      </h3>

      {/* Título principal */}
      <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-[66px] font-Ovo leading-snug sm:leading-tight md:leading-tight max-w-3xl">
        Desenvolvedor Front-end focado em criar sites modernos, rápidos e
        responsivos para pequenos negócios e projetos digitais.
      </h1>

      {/* Descrição */}
      <p className="mt-4 text-sm sm:text-base md:text-lg max-w-2xl font-Ovo leading-relaxed">
        Transformo ideias em experiências web profissionais, com foco em
        usabilidade, performance e presença online.
      </p>
    </header>
  );
};

export default Header;
