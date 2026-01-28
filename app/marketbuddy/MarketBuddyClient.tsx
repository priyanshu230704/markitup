"use client";

import { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Portfolio from "./components/Portfolio";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { Reveal } from "@/components/Reveal";

export default function MarketBuddyClient() {
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    // During SSR and initial hydration, render a loading shell
    // This ensures meaningful HTML is prerendered for SEO
    if (!isMounted) {
        return (
            <main className="min-h-screen bg-background text-foreground">
                <div className="h-16 bg-background" /> {/* Navbar placeholder */}
                <section className="min-h-screen flex items-center justify-center">
                    <div className="text-center">
                        <h1 className="text-4xl md:text-6xl font-bold mb-4">
                            MarketBuddy
                        </h1>
                        <p className="text-xl text-muted-foreground">
                            Your Personal Brand Growth Engine
                        </p>
                    </div>
                </section>
            </main>
        );
    }

    return (
        <main className="min-h-screen bg-background text-foreground">
            <Navbar />

            <Hero />

            <Services />

            <Portfolio />

            <Testimonials />

            <section className="py-24 bg-white dark:bg-zinc-950">
                <div className="container mx-auto px-6 text-center">
                    <Reveal>
                        <p className="text-3xl md:text-4xl font-handwriting text-primary italic max-w-4xl mx-auto">
                            "MarketBuddy is built for brands that want growth that feels right. Personal, thoughtful, and sustainable — a growth engine made just for you."
                        </p>
                    </Reveal>
                </div>
            </section>

            <Contact />

            <Footer />
        </main>
    );
}
