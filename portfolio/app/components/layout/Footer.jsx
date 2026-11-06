import { site } from "@/data/site";

export default function Footer() {
  return (
    <footer className="wrap flex flex-wrap items-center justify-between gap-3 border-t border-line py-8 text-[0.95rem] text-muted">
      <p>
        © {new Date().getFullYear()} {site.name}. {site.role}.
      </p>
      <a href="#inicio" className="inline-flex min-h-[2.75rem] items-center font-medium hover:text-ink">
        Voltar ao topo
      </a>
    </footer>
  );
}
