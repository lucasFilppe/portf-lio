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
        Desenvolvedor Full Stack criando soluções digitais
      </h1>

      {/* Descrição */}
      <p className="mt-4 text-sm sm:text-base md:text-lg max-w-2xl font-Ovo leading-relaxed">
        Especialista em JavaScript com experiência em React, TypeScript, Node.js
        e bancos de dados. Transformo ideias em aplicações web performáticas e
        escaláveis. Histórico de desenvolvimento de aplicações web completas,
        com foco em performance, usabilidade e código limpo.
      </p>

     

      {/* Botões de ação */}
      <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4 mt-6">
        <a
          href="https://wa.me/5531971527535"
          target="_blank"
          className="px-6 sm:px-10 py-2 sm:py-3 border border-white rounded-full bg-black text-white flex items-center gap-2 hover:bg-gray-800 transition-colors"
        >
          Entre em contato
          <Image src={assets.right_arrow_white} alt="" className="w-4" />
        </a>

        <a
          href="https://github.com/lucasFilppe?tab=repositories"
          className="px-6 sm:px-10 py-2 sm:py-3 border border-white rounded-full bg-black text-white flex items-center gap-2 hover:bg-gray-800 transition-colors"
        >
          Projetos
          <Image src={assets.right_arrow_white} alt="" className="w-4" />
        </a>
      </div>
    </header>
  );
};

export default Header;
