import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import FloatingWhatsApp from "./components/layout/FloatingWhatsApp";
import Hero from "./components/sections/Hero";
import Projects from "./components/sections/Projects";
import Services from "./components/sections/Services";
import About from "./components/sections/About";
import Skills from "./components/sections/Skills";
import Trajectory from "./components/sections/Trajectory";
import Contact from "./components/sections/Contact";

export default function Home() {
  return (
    <>
      <a
        href="#conteudo"
        className="sr-only z-[60] rounded-full bg-ink px-5 py-3 font-semibold text-white focus:not-sr-only focus:fixed focus:left-4 focus:top-4"
      >
        Pular para o conteúdo
      </a>
      <Navbar />
      <main id="conteudo">
        <Hero />
        <Projects />
        <Services />
        <About />
        <Skills />
        <Trajectory />
        <Contact />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </>
  );
}
