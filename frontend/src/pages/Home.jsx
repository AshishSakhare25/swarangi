import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Nav, { scrollToHash } from "@/components/Nav";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import NodeMap from "@/components/NodeMap";
import SelectedWork from "@/components/SelectedWork";
import Notices from "@/components/Notices";
import About from "@/components/About";
import Gallery from "@/components/Gallery";
import Toolkit from "@/components/Toolkit";
import Garden from "@/components/Garden";
import Process from "@/components/Process";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  const location = useLocation();

  useEffect(() => {
    if (location.state?.scrollTo) {
      const t = setTimeout(() => scrollToHash(location.state.scrollTo), 120);
      return () => clearTimeout(t);
    }
    return undefined;
  }, [location.state]);

  return (
    <div>
      <Nav />
      <main>
        <Hero />
        <Marquee />
        <NodeMap />
        <SelectedWork />
        <Notices />
        <About />
        <Gallery />
        <Toolkit />
        <Garden />
        <Process />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
