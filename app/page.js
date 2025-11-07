import About from "./components/About";
import Image from "next/image";

import Navbar from "./components/Navbar";
import Services from "./components/Services";
import Header from "./components/Header";
import Habilidades from "./components/Habilidades";

export default function Home() {
  return (
    <>
      <Navbar/>
      <Header/>
      <Services/>
      <Habilidades/>
      <About/>   
    </>
  );
}
