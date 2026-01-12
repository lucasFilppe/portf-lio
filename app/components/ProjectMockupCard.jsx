import Image from "next/image";
import Link from "next/link";

export default function ProjectMockupCard({
  src,
  alt,
  title,
  description,
  projectUrl,
}) {
  // ✅ MANTIDO conforme solicitado
  const imageProps = {
    src: src,
    alt: alt,
    width: 0,
    height: 0,
    sizes: "100vw",
    className:
      "w-full h-auto object-cover transition-transform duration-300 group-hover:scale-[1.03]",
    priority: true,
  };

  return (
    <Link
      href={projectUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Acessar projeto ${title}`}
      className="
        group block h-full overflow-hidden rounded-xl
        border border-gray-200 bg-black
        shadow-md transition-all duration-300
        hover:shadow-xl
        focus-visible:outline focus-visible:outline-2
        focus-visible:outline-offset-2 focus-visible:outline-white
      "
    >
      {/* 🔑 FLEX WRAPPER PRINCIPAL */}
      <div className="flex flex-col h-full">
        {/* Imagem */}
        <div className="relative overflow-hidden flex-shrink-0">
          <Image {...imageProps} />
        </div>

        {/* Conteúdo */}
        <div className="flex flex-col flex-1 p-5">
          <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>

          <p className="text-white text-sm sm:text-base leading-relaxed">
            {description}
          </p>

          {/* CTA SEMPRE NO FINAL */}
          <p
            className="
    mt-auto pt-4 text-sm font-medium text-white
    flex items-center justify-center gap-2
    group-hover:underline
  "
          >
            Acessar Projeto
            <span className="transition-transform group-hover:translate-x-1">
              →
            </span>
          </p>
        </div>
      </div>
    </Link>
  );
}
