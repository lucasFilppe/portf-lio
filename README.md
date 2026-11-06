# Portfólio — Lucas Filipe

Portfólio profissional de desenvolvedor Full-stack. Next.js (App Router), React e Tailwind CSS 3.

## Como rodar

```bash
npm install
npm run dev      # desenvolvimento em http://localhost:3000
npm run build    # build de produção
npm run lint     # ESLint
```

## Onde editar o conteúdo

Todo o conteúdo fica em `data/`, sem precisar mexer nos componentes:

| Arquivo | O que controla |
|---|---|
| `data/site.js` | Nome, e-mail, WhatsApp, links (GitHub, LinkedIn, Instagram), currículo |
| `data/projects.js` | Projetos (título, descrição, imagem, link, tecnologias) |
| `data/content.js` | Textos do hero, serviços, sobre, habilidades, experiência, formação e contato |

Links com valor `null` (LinkedIn, Instagram, currículo) **não aparecem** no site até serem preenchidos.
Os comentários `TODO` indicam informações que ainda precisam ser confirmadas.

## Estrutura

```
app/
  layout.js, page.js, globals.css   base, metadados e composição das seções
  components/layout/                Navbar, Footer, botão flutuante do WhatsApp
  components/sections/              Hero, Projects, Services, About, Skills, Trajectory, Contact
  components/ui/                    Section, ícones, TrackedLink
  fonts/                            Bricolage Grotesque e Figtree (auto-hospedadas)
  opengraph-image.png               imagem de pré-visualização ao compartilhar o link
data/                               conteúdo do site
public/images/                      fotos e mockups em WebP
```

## Domínio e compartilhamento

Na Vercel, a URL do site é detectada automaticamente. Para usar domínio próprio, defina a
variável de ambiente `NEXT_PUBLIC_SITE_URL` (ex.: `https://seudominio.com`), usada em
metadados, `sitemap.xml` e `robots.txt`.

## Medição de contatos

Os cliques em WhatsApp e e-mail são registrados como eventos no Vercel Analytics
(`whatsapp_hero`, `whatsapp_menu`, `whatsapp_servicos`, `whatsapp_contato`, `whatsapp_flutuante`,
`email_contato`). Eventos personalizados exigem um plano do Vercel Analytics que os suporte.

## Identidade visual

Tema claro. Paleta: `paper #F6F7FA`, `ink #0F1B33`, `ouro #F4B400`. Tipografia: Bricolage Grotesque
(títulos) e Figtree (texto). Animações respeitam `prefers-reduced-motion`.
