import About from "./components/About";
import Image from "next/image";

import Navbar from "./components/Navbar";
import Services from "./components/Services";
import Header from "./components/Header";
import Habilidades from "./components/Habilidades";
import Contact from "./components/Contact";
import WhatsAppFloatingButton from "./components/WhatsAppFloatingButton";

export default function Home() {
  return (
    <>
      <Navbar/>
      <WhatsAppFloatingButton/>
      <Header/>
      <Services/>
      <Habilidades/>
      <About/>
      <Contact/>   
    </>
  );
}
