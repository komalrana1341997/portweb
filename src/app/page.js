import Image from "next/image";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";

import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Services from "./components/Services";
import Blog from "./components/Blog";


export default function Home() {
  return (
      <div className="pt-20">
      <Navbar />
      <Hero/>
      <About/>
      <Projects/>
      <Services/>
      <Blog/>
      <Contact/>
     
    </div>
  );
}
