import { skills } from "@/data/content";
import Section from "../ui/Section";

export default function Skills() {
  return (
    <Section id="habilidades" title="Habilidades e ferramentas" bleed>
      <p className="mt-4 max-w-xl text-lg text-muted">{skills.intro}</p>
      <div className="mt-10 grid gap-10 md:grid-cols-3 md:gap-8">
        {skills.groups.map((group) => (
          <div key={group.title}>
            <h3 className="text-xl font-bold">{group.title}</h3>
            <ul className="mt-4 flex flex-wrap gap-2 md:block md:border-t md:border-line">
              {group.items.map((item) => (
                <li
                  key={item}
                  className="rounded-full border border-line bg-paper px-4 py-2 md:rounded-none md:border-0 md:border-b md:bg-transparent md:px-0 md:py-3 md:text-lg"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  );
}
