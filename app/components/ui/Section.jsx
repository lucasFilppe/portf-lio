// Seção padrão: ancora, título acessível e espaçamento consistente.
export default function Section({ id, title, children, className = "", bleed = false }) {
  const inner = (
    <div className={`wrap py-16 sm:py-24 ${className}`}>
      <h2 id={`${id}-titulo`} className="section-title">
        {title}
      </h2>
      {children}
    </div>
  );

  return (
    <section id={id} aria-labelledby={`${id}-titulo`}>
      {bleed ? <div className="border-y border-line bg-surface">{inner}</div> : inner}
    </section>
  );
}
