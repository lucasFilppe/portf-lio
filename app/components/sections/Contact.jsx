import { contact } from "@/data/content";
import { site, whatsappUrl } from "@/data/site";
import { WhatsAppIcon } from "../ui/Icons";
import TrackedLink from "../ui/TrackedLink";

export default function Contact() {
  const social = [
    { label: "GitHub", href: site.links.github },
    { label: "LinkedIn", href: site.links.linkedin },
    { label: "Instagram", href: site.links.instagram },
    site.cv && { label: "Currículo (PDF)", href: site.cv },
  ].filter((item) => item && item.href);

  return (
    <section id="contato" aria-labelledby="contato-titulo" className="wrap pb-16 sm:pb-24">
      <div className="rounded-[2rem] bg-ouro p-7 text-ink sm:p-12 lg:p-16">
        <h2 id="contato-titulo" className="max-w-[20ch] text-3xl font-extrabold leading-[1.1] tracking-tight sm:text-5xl">
          {contact.title}
        </h2>
        <p className="mt-5 max-w-xl text-lg leading-relaxed">{contact.text}</p>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <TrackedLink
            href={whatsappUrl}
            event="whatsapp_contato"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-ink"
          >
            <WhatsAppIcon /> Falar comigo no WhatsApp
            <span className="sr-only"> (abre em nova aba)</span>
          </TrackedLink>
          <TrackedLink
            href={`mailto:${site.email}`}
            event="email_contato"
            className="btn border border-ink/40 hover:bg-ink/10"
          >
            Enviar e-mail
          </TrackedLink>
        </div>

        <ul className="mt-8 flex flex-wrap gap-x-6 gap-y-1">
          {social.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-[2.75rem] items-center font-semibold underline decoration-ink/40 decoration-2 underline-offset-4 hover:decoration-ink"
              >
                {item.label}
                <span className="sr-only"> (abre em nova aba)</span>
              </a>
            </li>
          ))}
        </ul>

        <p className="mt-2 text-[0.95rem]">{contact.reply}</p>
      </div>
    </section>
  );
}
