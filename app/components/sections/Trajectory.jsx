import { education, experience } from "@/data/content";
import Section from "../ui/Section";

function Timeline({ title, items }) {
  return (
    <div>
      <h3 className="text-xl font-bold">{title}</h3>
      <ul className="mt-5 space-y-8">
        {items.map((item) => (
          <li key={item.title} className="border-l-2 border-ouro pl-5">
            <p className="text-lg font-bold leading-snug">{item.title}</p>
            <p className="mt-1 text-muted">{item.org}</p>
            {item.period && <p className="mt-0.5 text-[0.95rem] font-medium text-ouro-deep">{item.period}</p>}
            {item.text && <p className="mt-3 max-w-[52ch] leading-relaxed text-muted">{item.text}</p>}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Trajectory() {
  return (
    <Section id="trajetoria" title="Experiência e formação">
      <div className="mt-10 grid gap-12 md:grid-cols-2 md:gap-16">
        <Timeline title="Experiência" items={experience} />
        <Timeline title="Formação" items={education} />
      </div>
    </Section>
  );
}
