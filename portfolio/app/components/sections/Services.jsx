import { services } from "@/data/content";
import { whatsappUrl } from "@/data/site";
import Section from "../ui/Section";
import { WhatsAppIcon } from "../ui/Icons";
import TrackedLink from "../ui/TrackedLink";

export default function Services() {
  return (
    <Section id="servicos" title="Como posso ajudar" bleed>
      <div className="mt-10 grid gap-10 md:grid-cols-3 md:gap-8">
        {services.map((s) => (
          <div key={s.title} className="border-t-2 border-ouro pt-5">
            <h3 className="text-xl font-bold">{s.title}</h3>
            <p className="mt-3 leading-relaxed text-muted">{s.text}</p>
          </div>
        ))}
      </div>
      <TrackedLink
        href={whatsappUrl}
        event="whatsapp_servicos"
        target="_blank"
        rel="noopener noreferrer"
        className="btn btn-ink mt-12"
      >
        <WhatsAppIcon /> Conversar sobre meu projeto
        <span className="sr-only"> (abre em nova aba)</span>
      </TrackedLink>
    </Section>
  );
}
