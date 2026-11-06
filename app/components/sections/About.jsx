import { about } from "@/data/content";
import Section from "../ui/Section";

export default function About() {
  const [lead, ...rest] = about;
  return (
    <Section id="sobre" title="Sobre mim">
      <div className="mt-8 max-w-[62ch] space-y-5 text-lg leading-relaxed text-muted">
        <p className="text-xl text-ink sm:text-2xl sm:leading-snug">{lead}</p>
        {rest.map((text) => (
          <p key={text}>{text}</p>
        ))}
      </div>
    </Section>
  );
}
