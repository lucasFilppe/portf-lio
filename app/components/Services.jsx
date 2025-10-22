'use client';

import React from "react";
import Image from "next/image";
import { assets } from "@/assets/assets";

// ./app/components/Services.jsx

// Linha 8 corrigida: Use o caminho relativo
// Dentro de ./app/components/Services.jsx

// Use o caminho relativo (funciona em qualquer projeto)
import DeviceFrame from "./DeviceFrame";

// ✅ Importações das Imagens (mantidas como fallback para o DeviceFrame)
import cosaImg from "@/assets/cosa.png";
import canilImg from "@/assets/canil.png";
import terraPlannerImg from "@/assets/terraplanner.png";
import rebuImg from "@/assets/rebu.png";

const Services = () => {
  // 🚨 1. DEFINIÇÃO DAS URLS REAIS DE DEPLOY NA VERCEL 🚨
  const projectUrls = {
    rebu: "https://republica-rebu-site.vercel.app/", 
    terraPlanner: "https://www.terraplanner.org/", 
    cosa: "https://carnacosa.vercel.app/", 
    canil: "https://carna-canil.vercel.app/", 
  };
    
  return (
    <div id="trabalho" className="w-full px-[12%] py-10 scroll-mt-20">
      <div className="w-11/12 max-w-3xl text-center mx-auto min-h-screen py-8 flex flex-col items-center justify-center gap-8">
        <h2 className="text-center text-5xl font-Ovo">Meu trabalho</h2>

        {/* PROJETO REBU - AGORA INTERATIVO 
        <DeviceFrame
          title="Site Rebu"
          url={projectUrls.rebu}
          screenshot={rebuImg} // Passa a imagem como fallback
          width={280}
          height={560}
        />*/}

        {/* PROJETO TERRA PLANNER - AGORA INTERATIVO */}
        <DeviceFrame
          title="Aplicativo Terra Planner"
          url={projectUrls.terraPlanner}
          screenshot={terraPlannerImg}
          width={280}
          height={590} 
        />

        {/* PROJETO COSA - AGORA INTERATIVO */}
        <DeviceFrame
          title="Site Cosa"
          url={projectUrls.cosa}
          screenshot={cosaImg}
          width={280}
          height={560}
        />

        {/* PROJETO CANIL - AGORA INTERATIVO */}
        <DeviceFrame
          title="Site Canil"
          url={projectUrls.canil}
          screenshot={canilImg}
          width={280}
          height={560}
        />

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
