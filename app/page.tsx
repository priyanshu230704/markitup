import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { Reveal } from "@/components/Reveal";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />

      <Hero />

      <Reveal delay={0.2}>
        <Services />
      </Reveal>

      <Reveal delay={0.2}>
        <Contact />
      </Reveal>

      <Footer />
    </main>
  );
}
