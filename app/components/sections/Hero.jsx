import Image from "next/image";
import { hero } from "@/data/content";
import { whatsappUrl } from "@/data/site";
import { WhatsAppIcon } from "../ui/Icons";
import TrackedLink from "../ui/TrackedLink";

export default function Hero() {
  return (
    <section id="inicio" aria-label="Apresentação" className="wrap pb-16 pt-[calc(var(--nav-h)+2rem)] sm:pb-24 lg:pt-[calc(var(--nav-h)+3.5rem)]">
      <div className="grid items-center gap-12 lg:grid-cols-[1.25fr_0.75fr] lg:gap-16">
        <div>
          <h1
            className="intro max-w-[22ch] text-[2.2rem] font-extrabold leading-[1.06] tracking-tight sm:text-5xl lg:text-[3.4rem]"
            style={{ "--i": 0 }}
          >
            {hero.title.split("Full-stack").flatMap((part, i, arr) =>
              i < arr.length - 1
                ? [part, <span key={i} className="whitespace-nowrap">Full-stack</span>]
                : [part],
            )}
          </h1>
          <p className="intro mt-6 max-w-xl text-lg leading-relaxed text-muted sm:text-xl" style={{ "--i": 1 }}>
            {hero.text}
          </p>

          <div className="intro mt-8 flex flex-col gap-3 sm:flex-row" style={{ "--i": 2 }}>
            <TrackedLink
              href={whatsappUrl}
              event="whatsapp_hero"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-gold"
            >
              <WhatsAppIcon /> Falar no WhatsApp
              <span className="sr-only"> (abre em nova aba)</span>
            </TrackedLink>
            <a href="#projetos" className="btn btn-outline">
              Ver projetos
            </a>
          </div>

          <p className="intro mt-6 text-[0.95rem] text-muted" style={{ "--i": 3 }}>
            {hero.credential}
          </p>
        </div>

        {/* Retrato em arco: referência às portas e janelas coloniais */}
        <div className="relative mx-auto w-full max-w-[17rem] pb-3 pr-3 lg:max-w-[22rem]">
          <div
            aria-hidden="true"
            className="absolute inset-0 translate-x-3 translate-y-3 rounded-b-3xl rounded-t-[999px] border-2 border-ouro"
          />
          <div className="arch-intro relative aspect-[4/5] overflow-hidden rounded-b-3xl rounded-t-[999px] bg-ink">
            <Image
              src="/images/perfil.webp"
              alt="Retrato de Lucas Filipe"
              width={900}
              height={1125}
              priority
              sizes="(min-width: 1024px) 352px, 272px"
              className="h-full w-full object-cover object-[50%_28%]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
