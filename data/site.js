// Dados gerais do site. Edite aqui para atualizar contatos e links.
// Valores `null` fazem o link NÃO aparecer no site até você preencher.

export const site = {
  name: "Lucas Filipe",
  role: "Desenvolvedor Full-stack",
  email: "lucasfiliperamos99@gmail.com",
  whatsappNumber: "5531971527535",
  whatsappMessage:
    "Olá, Lucas! Vi seu portfólio e gostaria de conversar sobre um projeto.",
  links: {
    github: "https://github.com/lucasFilppe",
    githubRepos: "https://github.com/lucasFilppe?tab=repositories",
    // TODO: preencha com a URL real do seu perfil (ex.: "https://www.linkedin.com/in/seu-usuario")
    linkedin: null,
    // TODO: preencha com a URL do seu Instagram (ex.: "https://www.instagram.com/seu-usuario")
    instagram: null,
  },
  // TODO: se tiver um currículo em PDF, coloque em /public/curriculo.pdf e use "/curriculo.pdf"
  cv: null,
  description:
    "Portfólio de Lucas Filipe, desenvolvedor Full-stack. Sites e aplicações web modernos, rápidos e responsivos para negócios e projetos digitais.",
};

export const whatsappUrl = `https://wa.me/${site.whatsappNumber}?text=${encodeURIComponent(
  site.whatsappMessage,
)}`;

export const nav = [
  { id: "projetos", label: "Projetos" },
  { id: "servicos", label: "Serviços" },
  { id: "sobre", label: "Sobre" },
  { id: "habilidades", label: "Habilidades" },
  { id: "trajetoria", label: "Trajetória" },
];

// URL pública do site. Na Vercel é detectada automaticamente; para domínio próprio,
// defina NEXT_PUBLIC_SITE_URL (ex.: https://lucasfilipe.dev) nas variáveis de ambiente.
export const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ||
  (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : "http://localhost:3000");
