"use client";

import Image from "next/image";
import { assets } from "@/assets/assets";

export default function Contact() {
  return (
    <section
      id="contato"
      className="w-full px-[12%] py-20 scroll-mt-20 bg-black text-white"
    >
      <div className="max-w-3xl mx-auto text-center flex flex-col items-center gap-6">
        
        {/* Título */}
        <h2 className="text-4xl sm:text-5xl font-Ovo">
          Vamos conversar sobre seu projeto?
        </h2>

        {/* Texto de apoio */}
        <p className="text-sm sm:text-base md:text-lg leading-relaxed max-w-2xl">
          Desenvolvo sites modernos, rápidos e responsivos, focados em apresentar
          bem sua ideia ou negócio. Se você tem um projeto em mente ou precisa
          melhorar seu site atual, é só me chamar.
        </p>

        {/* CTA principal */}
        <a
          href="https://wa.me/5531971527535"
          target="_blank"
          rel="noopener noreferrer"
          className="
            mt-4 px-8 py-3 rounded-full
            bg-white text-black font-medium
            flex items-center gap-2
            hover:bg-gray-200 transition-colors
          "
        >
          Falar comigo no WhatsApp
          <Image
            src={assets.right_arrow}
            alt=""
            className="w-4"
          />
        </a>

        {/* Links secundários */}
        <div className="flex items-center gap-6 mt-6">
          <a
            href="https://www.linkedin.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm hover:underline"
          >
            LinkedIn
          </a>

          <a
            href="https://github.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm hover:underline"
          >
            GitHub
          </a>

          <a
            href="mailto:lucasfiliperamos99@gmail.com"
            className="text-sm hover:underline"
          >
            Email
          </a>
        </div>

        {/* Expectativa de resposta */}
        <p className="mt-4 text-xs text-gray-400">
          Costumo responder em até 24 horas.
        </p>
      </div>
    </section>
  );
}
