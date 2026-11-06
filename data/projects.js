// Projetos. Os textos são os mesmos do portfólio original.
// `category` descreve o tipo de projeto (baseado nas próprias descrições).
// `stack` só deve ser preenchido com tecnologias que você confirmar.

export const projects = [
  {
    id: "rebu",
    title: "Site República Rebu",
    category: "Site institucional",
    description:
      "Desenvolvimento de um site para a República Rebu, uma moradia estudantil feminina em Ouro Preto, com foco em apresentar a história, valores e informações relevantes de forma clara e acessível. O layout responsivo e a navegação simples ajudam visitantes a conhecer melhor a república e seus diferenciais.",
    image: "/images/projects/rebu.webp",
    imageAlt: "Site da República Rebu exibido em notebook e celular",
    url: "https://republica-rebu-site.vercel.app/",
    stack: [], // TODO
  },
  {
    id: "terra-planner",
    title: "Terra Planner UFOP",
    category: "Solução web geoespacial",
    description:
      "Desenvolvimento de uma plataforma web colaborativa criada com estudantes do Terra Lab da UFOP, integrada a ferramentas como OpenLayers e ORS para gerar rotas, isócronas e camadas WMS. A solução facilita a visualização e análise geoespacial diretamente no navegador, agregando valor a projetos de mapeamento e tomada de decisão geográfica.",
    image: "/images/projects/terra-planner.webp",
    imageAlt: "Plataforma Terra Planner com mapa e rotas, em notebook e celular",
    url: "https://www.terraplanner.org/",
    stack: ["OpenLayers", "ORS", "WMS"],
  },
  {
    id: "carna-cosa",
    title: "Site Carna Cosa",
    category: "Divulgação e venda de ingressos",
    description:
      "Desenvolvimento de um site para o Carna Cosa, plataforma de divulgação e venda de ingressos para festas de carnaval e blocos. A página foi projetada com foco em usabilidade e conversão, facilitando o acesso às informações dos eventos e otimizando o processo de compra para os usuários.",
    image: "/images/projects/carna-cosa.webp",
    imageAlt: "Site do Carna Cosa exibido em notebook e celular",
    url: "https://carnacosa.vercel.app/",
    stack: [], // TODO
  },
  {
    id: "explorer-card",
    title: "Explorer Card XI",
    category: "Projeto pessoal",
    description:
      "Projeto pessoal de interface web com foco em navegação interativa e visualização de cartões de informação. Desenvolvido para explorar componentes reutilizáveis, animações suaves e layout responsivo que se adapta a diferentes tamanhos de tela.",
    image: "/images/projects/explorer-card.webp",
    imageAlt: "Interface do Explorer Card exibida em notebook e celular",
    url: "https://explorer-card-xi.vercel.app/",
    stack: [], // TODO
  },
  {
    id: "discover-marathon",
    title: "Discover Rocketseat Marathon",
    category: "Projeto pessoal",
    description:
      "Projeto pessoal inspirado na Rocketseat Marathon, com foco em organização de conteúdo e interação em interface web. Desenvolvido para praticar a criação de componentes reutilizáveis, responsividade e estrutura de layout moderno, proporcionando uma experiência fluida tanto no desktop quanto no mobile.",
    image: "/images/projects/discover-marathon.webp",
    imageAlt: "Interface do Discover exibida em notebook e celular",
    url: "https://discover-rocketseat-marathon.vercel.app/",
    stack: [], // TODO
  },
];
