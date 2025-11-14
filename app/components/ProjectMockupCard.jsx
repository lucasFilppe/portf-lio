// components/ProjectMockupCard.js
import Image from 'next/image';
import Link from 'next/link';

/**
 * Componente para exibir um mockup de projeto com título e link.
 *
 * @param {object} props - As propriedades do componente.
 * @param {StaticImageData} props.src - O objeto de imagem importado.
 * @param {string} props.alt - O texto alternativo para a imagem.
 * @param {string} props.title - O título do projeto.
 * @param {string} props.projectUrl - O URL para o projeto (link).
 */
export default function ProjectMockupCard({ src, alt, title, projectUrl }) {
  // Configurações da imagem (ajuste conforme necessário)
  const imageProps = {
    src: src,
    alt: alt,
    width: 0, // Usando width/height = 0 com sizes e className para controle via CSS
    height: 0,
    sizes: "100vw", // Permite que a imagem se adapte ao seu contêiner (importante com width=0, height=0)
    className: "w-full h-auto object-cover transition-transform duration-300 group-hover:scale-[1.03]",
    priority: true, // Use priority apenas para as imagens que aparecem acima da dobra (abaixo)
  };

  return (
    // O componente Link envolve todo o cartão para que seja clicável
    <Link 
      href={projectUrl} 
      target="_blank" // Abrir em uma nova aba
      rel="noopener noreferrer" // Prática de segurança ao usar target="_blank"
      className="block group overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100"
    >
      <div className="relative overflow-hidden">
        <Image {...imageProps} />
      </div>

      <div className="p-4 bg-black">
        <h3 className="text-xl font-semibold text-white   transition-colors duration-300">
          {title}
        </h3>
        <p className="mt-1 text-sm text-white ">
            Acessar Projeto
        </p>
      </div>
    </Link>
  );
}