"use client";

import React from "react";
import Image from "next/image";
import { assets } from "@/assets/assets";
import ProjectMockupCard from "./ProjectMockupCard";

// 2. Defina os dados dos seus projetos
const projectsData = [
  {
    id: 1,
    title: "Projeto Rebu Web",
    imageSrc: assets.rebu_web, // O objeto importado
    imageAlt: "Mockup do site Rebu Web em dispositivos",
    url: "https://republica-rebu-site.vercel.app/", // URL do seu projeto
  },
  {
    id: 2,
    title: "Projeto TerraLab(UFOP)",
    imageSrc: assets.terra_muckup,
    imageAlt: "Mockup da aplicação",
    url: "https://www.terraplanner.org/",
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

        {/* Layout de grade responsivo */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.map((project) => (
            <ProjectMockupCard
              key={project.id}
              src={project.imageSrc}
              alt={project.imageAlt}
              title={project.title}
              projectUrl={project.url}
            />
          ))}
        </div>

        <div className="flex flex-col sm:flex-row items-center gap-4 mt-4">
          <a
            href="https://github.com/lucasFilppe?tab=repositories"
            target="_blank" // Boa prática para links externos
            rel="noopener noreferrer" // Boa prática de segurança
            className="px-10 py-3 border border-white rounded-full bg-black text-white flex items-center gap-2"
          >
            Veja mais no GitHub
            <Image src={assets.right_arrow_white} alt="" className="w-4" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Services;
