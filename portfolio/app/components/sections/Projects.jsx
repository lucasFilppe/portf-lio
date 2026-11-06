import Image from "next/image";
import { projects } from "@/data/projects";
import { site } from "@/data/site";
import Section from "../ui/Section";
import { ExternalIcon } from "../ui/Icons";

export default function Projects() {
  return (
    <Section id="projetos" title="Projetos">
      <p className="mt-4 max-w-xl text-lg text-muted">
        Alguns projetos que desenvolvi com foco em resolver problemas reais, utilizando boas
        práticas de desenvolvimento web e design responsivo.
      </p>

      <ul className="mt-10 divide-y divide-line border-t border-line">
        {projects.map((p, i) => (
          <li
            key={p.id}
            className="grid gap-6 py-10 md:grid-cols-12 md:items-center md:gap-10 lg:gap-14"
          >
            {/* A imagem repete o link do texto: fica fora da ordem de tabulação */}
            <a
              href={p.url}
              target="_blank"
              rel="noopener noreferrer"
              tabIndex={-1}
              aria-hidden="true"
              className={`group block overflow-hidden rounded-2xl bg-surface ring-1 ring-line md:col-span-7 ${
                i % 2 === 1 ? "md:order-2" : ""
              }`}
            >
              <Image
                src={p.image}
                alt={p.imageAlt}
                width={1080}
                height={734}
                sizes="(min-width: 1152px) 640px, (min-width: 768px) 55vw, 92vw"
                className="h-auto w-full transition-transform duration-500 ease-out group-hover:scale-[1.03]"
              />
            </a>

            <div className="md:col-span-5">
              <p className="text-[0.95rem] font-semibold text-ouro-deep">{p.category}</p>
              <h3 className="mt-2 text-2xl font-bold leading-snug sm:text-[1.7rem]">{p.title}</h3>
              <p className="mt-3 leading-relaxed text-muted">{p.description}</p>

              {p.stack.length > 0 && (
                <ul className="mt-4 flex flex-wrap gap-2" aria-label="Tecnologias">
                  {p.stack.map((tech) => (
                    <li key={tech} className="rounded-full bg-ouro-soft px-3 py-1 text-sm font-medium">
                      {tech}
                    </li>
                  ))}
                </ul>
              )}

              <a
                href={p.url}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 inline-flex min-h-[2.75rem] items-center gap-2 font-semibold underline decoration-ouro decoration-[3px] underline-offset-[6px] transition-colors hover:decoration-ink"
              >
                Ver o projeto online
                <ExternalIcon />
                <span className="sr-only">: {p.title} (abre em nova aba)</span>
              </a>
            </div>
          </li>
        ))}
      </ul>

      <a
        href={site.links.githubRepos}
        target="_blank"
        rel="noopener noreferrer"
        className="btn btn-outline mt-4"
      >
        Veja mais projetos no GitHub
        <ExternalIcon />
        <span className="sr-only"> (abre em nova aba)</span>
      </a>
    </Section>
  );
}
