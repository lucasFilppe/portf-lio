
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

        </div>
      </div>
    </div>
  );
};

export default About;
