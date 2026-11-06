"use client";

import { useEffect, useState } from "react";
import { whatsappUrl } from "@/data/site";
import { WhatsAppIcon } from "../ui/Icons";
import TrackedLink from "../ui/TrackedLink";

// Botão flutuante: só aparece depois do hero e some quando o painel de contato está na tela
export default function FloatingWhatsApp() {
  const [seen, setSeen] = useState({ inicio: true, contato: false });

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      setSeen((prev) => {
        const next = { ...prev };
        entries.forEach((e) => (next[e.target.id] = e.isIntersecting));
        return next;
      });
    });
    ["inicio", "contato"].forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  const visible = !seen.inicio && !seen.contato;

  return (
    <TrackedLink
      href={whatsappUrl}
      event="whatsapp_flutuante"
      target="_blank"
      rel="noopener noreferrer"
      inert={!visible}
      className={`fixed bottom-[max(1rem,env(safe-area-inset-bottom))] right-4 z-30 inline-flex min-h-[3rem] items-center gap-2 rounded-full bg-ink px-5 font-semibold text-white shadow-lg shadow-ink/25 transition-[opacity,transform] duration-300 sm:right-6 ${
        visible ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-4 opacity-0"
      }`}
    >
      <WhatsAppIcon className="h-5 w-5 text-[#25D366]" />
      WhatsApp
      <span className="sr-only"> (abre em nova aba)</span>
    </TrackedLink>
  );
}
