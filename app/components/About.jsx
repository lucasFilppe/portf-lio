import { assets, infoList, toolsData } from "@/assets/assets";
import Image from "next/image";
import React from "react";

const About = () => {
  return (
    <div
      id="sobre"
      className="w-full px-4 sm:px-8 md:px-[12%] py-10 scroll-mt-20"
    >
      <h2 className="text-center text-3xl sm:text-4xl md:text-5xl font-Ovo mb-12">
        Sobre mim
      </h2>

      <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16">
        {/* Imagem do perfil */}
        <div className="w-36 sm:w-48 md:w-64 lg:w-80 rounded-3xl flex-shrink-0">
          <Image
            src={assets.perfil}
            alt="user"
            className="w-full h-auto rounded-3xl"
          />
        </div>

        {/* Texto e informações */}
        <div className="flex-1">
          <p className="mb-6 sm:mb-8 text-sm sm:text-base md:text-lg font-Ovo leading-relaxed">
            Sou um <strong>Desenvolvedor Full Stack</strong> apaixonado por
            transformar ideias em soluções digitais eficientes. Minha abordagem
            combina <strong>código limpo</strong>,{" "}
            <strong>boas práticas</strong> e{" "}
            <strong>atenção aos detalhes</strong> para criar aplicações que são
            tanto funcionais quanto elegantes.
          </p>

          <p className="mb-6 text-sm sm:text-base md:text-lg font-Ovo leading-relaxed">
            Minha jornada na programação começou{" "}
            <i>"na faculdade de ciência de computação pela UFOP"</i>, e desde
            então venho me especializando em{" "}
            <strong>JavaScript/TypeScript</strong>, <strong>React</strong>,{" "}
            <strong>Node.js</strong> e bancos de dados relacionais e
            não-relacionais.
          </p>

          <p className="mb-6 text-sm sm:text-base md:text-lg font-Ovo leading-relaxed">
            Além do código, valorizo <strong>experiência do usuário</strong>,{" "}
            <strong>performance</strong> e <strong>escalabilidade</strong>.
            Acredito que tecnologia deve resolver problemas reais de forma
            simples e acessível.
          </p>

          {/* Botões de ação */}
          <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4 mt-6 mb-6">
            <a
              href="https://wa.me/5531971527535"
              target="_blank"
              className="px-6 sm:px-10 py-2 sm:py-3 border border-white rounded-full bg-black text-white flex items-center gap-2 hover:bg-gray-800 transition-colors"
            >
              Entre em contato
              <Image src={assets.right_arrow_white} alt="" className="w-4" />
            </a>

            
          </div>

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
                <p className="text-gray-700 text-xs sm:text-sm">
                  {description}
                </p>
              </li>
            ))}
          </ul>

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
      </div>
    </div>
  );
};

export default About;
