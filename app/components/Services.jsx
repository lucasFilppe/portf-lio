'use client';

import React from "react";
// REMOVIDAS: IPhoneX, Pixel3XL não são mais necessárias
// import { IPhoneX, Pixel3XL,IPhoneX, } from "react-device-frames";
import Image from "next/image";
import { assets } from "@/assets/assets";

// ✅ Importações diretas — sem require()
import cosaImg from "@/assets/cosa.png";
import canilImg from "@/assets/canil.png";
import terraPlannerImg from "@/assets/terraplanner.png";
import rebuImg from "@/assets/rebu.png";

const Services = () => {
  return (
    <div id="trabalho" className="w-full px-[12%] py-10 scroll-mt-20">
      <div className="w-11/12 max-w-3xl text-center mx-auto min-h-screen py-8 flex flex-col items-center justify-center gap-8">
        <h2 className="text-center text-5xl font-Ovo">Meu trabalho</h2>

        <div>
          <h3 className="mb-2 font-semibold">Site rebu</h3>
          {/* Substituído IPhoneX por Image */}
          <Image
            src={rebuImg}
            alt="Screenshot do Aplicativo Cosa"
            width={280} // Use a largura original para dimensionamento
            height={560} // Adicione a altura. Se não souber, use 'fill' ou ajuste. Para manter a proporção de um celular, use aprox. o dobro da largura.
            className="rounded-xl shadow-lg" // Adicione estilos para simular a apresentação ou para sua preferência
          />
        </div>

         {/* Projeto 3 - Terra Planner */}
         <div>
          <h3 className="mb-2 font-semibold">Aplicativo Terra Planner</h3>
          {/* Substituído Pixel3XL por Image */}
          <Image
            src={terraPlannerImg}
            alt="Screenshot do Terra Planner"
            width={280}
            height={590} // Ajuste a altura se o Terra Planner for de um dispositivo diferente (Pixel 3 XL é ligeiramente mais alto)
            className="rounded-xl shadow-lg"
          />
        </div>

        {/* Projeto 1 - Cosa */}
        <div>
          <h3 className="mb-2 font-semibold">Site Cosa</h3>
          {/* Substituído IPhoneX por Image */}
          <Image
            src={cosaImg}
            alt="Screenshot do Aplicativo Cosa"
            width={280} // Use a largura original para dimensionamento
            height={560} // Adicione a altura. Se não souber, use 'fill' ou ajuste. Para manter a proporção de um celular, use aprox. o dobro da largura.
            className="rounded-xl shadow-lg" // Adicione estilos para simular a apresentação ou para sua preferência
          />
        </div>

        {/* Projeto 2 - Canil */}
        <div>
          <h3 className="mb-2 font-semibold">Site Canil</h3>
          {/* Substituído IPhoneX por Image */}
          <Image
            src={canilImg}
            alt="Screenshot do Aplicativo Canil"
            width={280}
            height={560}
            className="rounded-xl shadow-lg"
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
