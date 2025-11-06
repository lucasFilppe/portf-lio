import About from "./components/About";
import Image from "next/image";

import Navbar from "./components/Navbar";
import Services from "./components/Services";

export default function Home() {
  return (
    <>
      <Navbar/>
      <Services/>
      <About/>   
    </>
  );
}
