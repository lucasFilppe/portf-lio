'use-client'
import React from "react";
import { IPhoneX, Pixel3XL, Nexus5X} from "react-device-frames";
import { assets } from "@/assets/assets";
import Image from "next/image";

// Importe usando require() para evitar otimização do Next.js
const cosaImg = require("@/assets/cosa.png").default;
const canilImg = require("@/assets/canil.png").default;
const terraPlannerImg = require("@/assets/terraplanner.png").default;

const Services = () => {
  
  return (
    <div id="trabalho" className="w-ful px-[12%] py-10 scroll-mt-20">
    <div  className="w-11/12 max-w-3xl text-center mx-auto min-h-screen py-8 flex flex-col items-center justify-center gap-8">
      {/* Projeto 1 - Cosa */}
      <h2 className="text-center text-5xl font-Ovo">Meu trabalho</h2>
      <div>
        <h3 className="mb-2 font-semibold">Aplicativo Cosa</h3>
        <IPhoneX
          color="black"
          screenshot={cosaImg.src}
          width={280}
        />
      </div>

      {/* Projeto 2 - Canil */}
      <div>
        <h3 className="mb-2 font-semibold">Terra Planner</h3>
        <Pixel3XL
          color="black"
          screenshot={terraPlannerImg.src}
          width={280}
        />
      </div>

      <div className="flex flex-col sm:flex-row items-center gap-4 mt-4">
        <a 
          href="https://github.com/lucasFilppe?tab=repositories"
          className="px-10 py-3 border border-white rounded-full bg-black text-white flex items-center gap-2"
        >
          Veja mais
          <Image src={assets.right_arrow_white} alt="" className="w-4" />
        </a>
      </div>
    </div>
  </div>
  );
};

export default Services;