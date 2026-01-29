"use client";

import Navbar from "@/components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Footer from "@/components/Footer";
import { Reveal } from "@/components/Reveal";

export default function MarketBuddyClient() {
    return (
        <main className="min-h-screen bg-background text-foreground">
            <Navbar />

            <Hero />

            <Services />

            <section className="py-24 bg-white dark:bg-zinc-950">
                <div className="container mx-auto px-6 text-center">
                    <Reveal>
                        <p className="text-3xl md:text-4xl font-handwriting text-primary italic max-w-4xl mx-auto">
                            "MarketBuddy is built for brands that want growth that feels right. Personal, thoughtful, and sustainable — a growth engine made just for you."
                        </p>
                    </Reveal>
                </div>
            </section>

            <Footer />
        </main>
    );
}
