import React from "react";

const About = () => {
  return (
    <div
      id="sobre"
      className="w-full px-4 sm:px-8 md:px-[12%] py-10 scroll-mt-36" // Aumentado o valor
    >
      <h2 className="text-center text-3xl sm:text-4xl md:text-5xl font-Ovo mb-12 mt-10">
        Sobre mim
      </h2>

      <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16">
        {/* Texto e informações */}
        <div className="flex-1">
          <p className="mb-6 sm:mb-8 text-sm sm:text-base md:text-lg font-Ovo leading-relaxed">
            Sou desenvolvedor front-end com foco em criar sites e interfaces web
            modernas, rápidas e responsivas. Trabalho com tecnologias como React
            e Next.js para transformar ideias em soluções digitais funcionais e
            fáceis de usar.
          </p>

          <p className="mb-6 text-sm sm:text-base md:text-lg font-Ovo leading-relaxed">
            Já participei do desenvolvimento de projetos reais para eventos,
            instituições e iniciativas acadêmicas, sempre buscando unir bom
            design, usabilidade e organização do código.
          </p>
          <p className="mb-6 text-sm sm:text-base md:text-lg font-Ovo leading-relaxed">
            Gosto de entender a necessidade de cada projeto para entregar
            soluções simples, eficientes e que realmente façam sentido para quem
            vai utilizar o site.
          </p>
          <p className="mb-6 text-sm sm:text-base md:text-lg font-Ovo leading-relaxed">
            Ajudo projetos e pequenos negócios a terem uma presença online
            profissional por meio de sites modernos, rápidos e fáceis de
            navegar. Meu foco é criar interfaces claras que transmitam confiança
            e facilitem o contato com o público.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
