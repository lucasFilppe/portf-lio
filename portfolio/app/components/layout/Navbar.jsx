"use client";

import { useEffect, useRef, useState } from "react";
import { nav, whatsappUrl } from "@/data/site";
import { ArchMark, CloseIcon, MenuIcon, WhatsAppIcon } from "../ui/Icons";
import TrackedLink from "../ui/TrackedLink";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("");
  const buttonRef = useRef(null);

  // Sombra/fundo só depois de rolar
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Destaca o link da seção visível
  useEffect(() => {
    const ids = [...nav.map((n) => n.id), "contato"];
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-40% 0px -55% 0px" },
    );
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  // Menu móvel: Esc fecha, trava a rolagem e devolve o foco ao botão
  useEffect(() => {
    if (!open) return;
    const onKey = (e) => {
      if (e.key === "Escape") {
        setOpen(false);
        buttonRef.current?.focus();
      }
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  const linkClass = (id) =>
    `rounded-full px-3 py-2 text-[0.95rem] font-medium transition-colors hover:text-ink ${
      active === id ? "text-ink" : "text-muted"
    }`;

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-[background-color,border-color] duration-300 ${
          scrolled || open
            ? "border-b border-line bg-paper/90 backdrop-blur-md"
            : "border-b border-transparent"
        }`}
      >
        <nav
          aria-label="Principal"
          className="wrap flex h-[var(--nav-h)] items-center justify-between"
        >
          <a
            href="#inicio"
            className="flex items-center gap-2.5 font-display text-lg font-bold"
          >
            <ArchMark className="h-7 w-6" />
            Lucas Filipe
          </a>

          <ul className="hidden items-center gap-1 md:flex">
            {nav.map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  className={linkClass(item.id)}
                  aria-current={active === item.id ? "true" : undefined}
                >
                  {item.label}
                </a>
              </li>
            ))}
            <li className="ml-2">
              <a
                href="#contato"
                className="btn btn-ink !min-h-[2.5rem] !px-5 !py-2 text-[0.95rem]"
              >
                Contato
              </a>
            </li>
          </ul>

          <button
            ref={buttonRef}
            type="button"
            className="-mr-2 flex h-11 w-11 items-center justify-center rounded-full md:hidden"
            aria-expanded={open}
            aria-controls="menu-movel"
            aria-label={open ? "Fechar menu" : "Abrir menu"}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <CloseIcon /> : <MenuIcon />}
          </button>
        </nav>
      </header>

      {open && (
        <div
          id="menu-movel"
          className="menu-in fixed inset-x-0 bottom-0 top-[var(--nav-h)] z-40 overflow-y-auto bg-paper md:hidden"
        >
          <ul className="wrap flex flex-col pt-4">
            {nav.map((item) => (
              <li key={item.id} className="border-b border-line">
                <a
                  href={`#${item.id}`}
                  onClick={() => setOpen(false)}
                  className="flex min-h-[4rem] items-center font-display text-2xl font-bold"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="wrap mt-8 pb-10">
            <TrackedLink
              href={whatsappUrl}
              event="whatsapp_menu"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-gold w-full"
            >
              <WhatsAppIcon /> Falar no WhatsApp
            </TrackedLink>
          </div>
        </div>
      )}
    </>
  );
}
