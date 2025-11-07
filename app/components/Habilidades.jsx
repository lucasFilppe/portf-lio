import { assets, infoList, toolsData} from "@/assets/assets";
import Image from "next/image";
import React from "react";

const Habilidades = () => {
  return (
    <div id="habilidades" className="w-full px-4 sm:px-8 md:px-[12%] h-screen flex flex-col items-center justify-center gap-4 text-center">
      <h2 className="text-center text-3xl sm:text-4xl md:text-5xl font-Ovo mb-5">
        Habilidades, Educação e Ferramentas
      </h2>

      {/* Lista de informações */}
      <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 max-w-full">
        {infoList.map(({ icon, title, description }, index) => (
          <li
            key={index}
            className="border-[0.5px] border-gray-400 rounded-xl p-4 sm:p-6 cursor-pointer hover:bg-lightHover hover:translate-y-1 duration-500 hover:shadow-lg flex flex-col items-start"
          >
            <Image src={icon} alt={title} className="w-6 sm:w-7 mb-3" />
            <h3 className="font-semibold text-gray-700 text-sm sm:text-base mb-2">
              {title}
            </h3>
            <p className="text-gray-700 text-xs sm:text-sm">{description}</p>
          </li>
        ))}
      </ul>

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

      {/* Ferramentas */}
        <h4 className="mt-8 mb-4 text-gray-700 font-Ovo text-base sm:text-lg">
          Ferramentas que uso
        </h4>
        <ul className="flex items-center gap-2 sm:gap-3 overflow-x-auto pb-2">
          {toolsData.map((tool, index) => (
            <li
              key={index}
              className="flex items-center justify-center w-10 sm:w-12 md:w-14 aspect-square border border-gray-400 rounded-lg cursor-pointer hover:translate-y-1 duration-500 flex-shrink-0"
            >
              <Image src={tool} alt="tool" className="w-4 sm:w-5 md:w-6" />
            </li>
          ))}
        </ul>


    </div>
  );
};

export default Habilidades;