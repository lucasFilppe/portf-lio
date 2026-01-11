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
            Sou desenvolvedor front-end com foco em criar interfaces modernas e
            funcionais. Tenho experiência com React e Next.js, sempre buscando
            entregar aplicações rápidas, responsivas e fáceis de usar.
          </p>

          <p className="mb-6 text-sm sm:text-base md:text-lg font-Ovo leading-relaxed">
            Atualmente estou em constante evolução, aprimorando minhas
            habilidades e desenvolvendo projetos que simulam demandas reais do
            mercado.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
