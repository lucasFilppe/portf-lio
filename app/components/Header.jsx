import { assets } from "@/assets/assets";
import Image from "next/image";
import React from "react";

const Header = () => {
  return (
    <div className="w-11/12 max-w-3xl text-center mx-auto h-screen items-center flex flex-col justify-center gap-4">
      <div>
        <Image src={assets.perfil} alt="" className="rounded-full w-32" />
      </div>
      <h3 className="flex items-end gap-2 text-xl md:text-2xl mb-3 font-Ovo">
        Olá, Eu sou Lucas Filipe
        <Image src={assets.hand_icon} alt="" className="w-6" />
      </h3>
      <h1 className="text-3xl sm:text-6xl lg:text-[66px] font-Ovo">
      Desenvolvedor Full Stack criando soluções digitais
        </h1>
        <p className="max-2xl mx-auto font-Ovo">
        Especialista em JavaScript com experiência em React, Typescript, Node.js e bancos de dados. 
        Transformo ideias em aplicações web performáticas e escaláveis. Histórico de desenvolvimento de aplicações web completas, com foco em performance, 
        usabilidade e código limpo.
        </p>
      
      <div className="flex flex-col sm:flex-row items-center gap-4 mt-4">
        <a 
          href="https://wa.me/5531971527535"
          target={"_blank"}
          className="px-10 py-3 border border-white rounded-full bg-black text-white flex items-center gap-2"
        >
          Entre em contato
          <Image src={assets.right_arrow_white} alt="" className="w-4" />
        </a>

        <a 
          href="https://github.com/lucasFilppe?tab=repositories"
          className="px-10 py-3 border border-white rounded-full bg-black text-white flex items-center gap-2"
        >
          Projetos
          <Image src={assets.right_arrow_white} alt="" className="w-4" />
        </a>
      </div>
    </div>
  );
};

export default Header;
