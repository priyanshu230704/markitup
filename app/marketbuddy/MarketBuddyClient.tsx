"use client";

import Navbar from "@/components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Portfolio from "./components/Portfolio";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { Reveal } from "@/components/Reveal";

export default function MarketBuddyClient() {
    return (
        <main className="min-h-screen bg-background">
            <Navbar />

            <Hero />

            <Services />

            <Portfolio />

            <Testimonials />

            <section className="py-24 bg-white dark:bg-zinc-950">
                <div className="container mx-auto px-6">
                    <Reveal>
                        <div className="text-center mb-20 animate-pulse">
                            <p className="text-3xl md:text-4xl font-handwriting text-primary italic">
                                "MarketBuddy is built for brands that want growth that feels right. Personal, thoughtful, and sustainable — a growth engine made just for you."
                            </p>
                        </div>
                    </Reveal>
                </div>
            </section>

            <Contact />

            <Footer />
        </main>
    );
}
