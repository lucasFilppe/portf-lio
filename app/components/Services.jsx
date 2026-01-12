"use client";

import React from "react";
import Image from "next/image";
import { assets } from "@/assets/assets";
import ProjectMockupCard from "./ProjectMockupCard";

// 2. Defina os dados dos seus projetos
const projectsData = [
  {
    id: 1,
    title: "Site República Rebu",
    description: "Desenvolvimento de um site para a República Rebu, uma moradia estudantil feminina em Ouro Preto, com foco em apresentar a história, valores e informações relevantes de forma clara e acessível. O layout responsivo e a navegação simples ajudam visitantes a conhecer melhor a república e seus diferenciais.",
    imageSrc: assets.rebu_web, // O objeto importado
    imageAlt: "Mockup do site Rebu Web em dispositivos",
    url: "https://republica-rebu-site.vercel.app/", // URL do seu projeto
  },
  {
    id: 2,
    title: "TERRA PLANNER UFOP – Solução web geoespacial",
    imageSrc: assets.terra_muckup,
    description:"Desenvolvimento de uma plataforma web colaborativa criada com estudantes do Terra Lab da UFOP, integrada a ferramentas como OpenLayers e ORS para gerar rotas, isócronas e camadas WMS. A solução facilita a visualização e análise geoespacial diretamente no navegador, agregando valor a projetos de mapeamento e tomada de decisão geográfica.",
    imageAlt: "Mockup da aplicação",
    url: "https://www.terraplanner.org/",
  },

  {
    id: 3,
    title: "Site Carna Cosa",
    imageSrc: assets.cosa_muckup,
    description:"Desenvolvimento de um site para o Carna Cosa, plataforma de divulgação e venda de ingressos para festas de carnaval e blocos. A página foi projetada com foco em usabilidade e conversão, facilitando o acesso às informações dos eventos e otimizando o processo de compra para os usuários.",
    imageAlt: "Mockup da aplicação cosa",
    url: "https://carnacosa.vercel.app/",
  },

  {
    id: 5,
    title: "Explorer Card XI – Cartão interativo de navegação",
    imageSrc: assets.card_muckup,
    description: "Projeto pessoal de interface web com foco em navegação interativa e visualização de cartões de informação. Desenvolvido para explorar componentes reutilizáveis, animações suaves e layout responsivo que se adapta a diferentes tamanhos de tela.",
    imageAlt: "Mockup da aplicação card",
    url: "https://explorer-card-xi.vercel.app/",
  },

  {
    id: 6,
    title: "Discover Rocketseat Marathon – Interface interativa de conteúdo",
    imageSrc: assets.finance_muckup,
    description:"Projeto pessoal inspirado na Rocketseat Marathon, com foco em organização de conteúdo e interação em interface web. Desenvolvido para praticar a criação de componentes reutilizáveis, responsividade e estrutura de layout moderno, proporcionando uma experiência fluida tanto no desktop quanto no mobile.",
    
    imageAlt: "Mockup da aplicação finance",
    url: "https://discover-rocketseat-marathon.vercel.app/",
  },

  // Adicione mais projetos aqui
];

const Services = () => {
  // 🚨 1. DEFINIÇÃO DAS URLS REAIS DE DEPLOY NA VERCEL 🚨
  // const projectUrls = {
  //rebu: "https://republica-rebu-site.vercel.app/",
  // terraPlanner: "https://www.terraplanner.org/",
  // cosa: "https://carnacosa.vercel.app/",
  //canil: "https://carna-canil.vercel.app/",
  //};

  return (
    <div id="trabalho" className="w-full px-[12%] py-10 scroll-mt-20">
      <div className="w-11/12 max-w-3xl text-center mx-auto min-h-screen py-8 flex flex-col items-center justify-center gap-8">
        <h2 className="text-center text-5xl font-Ovo">Meu trabalho</h2>
        <p className="mt-4 text-sm sm:text-base md:text-lg max-w-2xl font-Ovo leading-relaxed">
          Aqui estão alguns projetos que desenvolvi com foco em resolver
          problemas reais, utilizando boas práticas de desenvolvimento web e
          design responsivo.
        </p>
        {/* Layout de grade responsivo */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">

          {projectsData.map((project) => (
            <ProjectMockupCard
              key={project.id}
              src={project.imageSrc}
              alt={project.imageAlt}
              title={project.title}
              description={project.description}
              projectUrl={project.url}
            />
          ))}
        </div>

        {/* Botões de ação */}
        <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4 mt-2">
          <a
            href="https://github.com/lucasFilppe?tab=repositories"
            target="_blank"
            className="px-6 sm:px-10 py-2 sm:py-3 border border-white rounded-full bg-black text-white flex items-center gap-2 hover:bg-gray-800 transition-colors"
          >
            Veja mais projetos
            <Image src={assets.right_arrow_white} alt="" className="w-4" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Services;
