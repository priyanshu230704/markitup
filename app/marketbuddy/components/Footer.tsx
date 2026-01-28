"use client";

import Link from "next/link";
import { Reveal } from "@/components/Reveal";

export default function Footer() {
    return (
        <footer className="py-20 border-t border-zinc-200 dark:border-zinc-800">
            <div className="container mx-auto px-6 text-center">
                <Reveal>
                    <Link href="/" className="text-3xl font-bold font-heading text-foreground mb-8 block">
                        Market<span className="text-primary">Buddy</span>
                    </Link>
                </Reveal>

                <Reveal delay={0.1}>
                    <div className="flex flex-wrap justify-center gap-8 mb-12">
                        <Link href="#services" className="text-muted-gray hover:text-primary transition-colors">Services</Link>
                        <Link href="#portfolio" className="text-muted-gray hover:text-primary transition-colors">Portfolio</Link>
                        <Link href="#testimonials" className="text-muted-gray hover:text-primary transition-colors">Stories</Link>
                        <Link href="#contact" className="text-muted-gray hover:text-primary transition-colors">Contact</Link>
                    </div>
                </Reveal>

                <Reveal delay={0.2}>
                    <p className="text-muted-gray text-sm italic">
                        "MarketBuddy — Personal. Thoughtful. Sustainable."
                    </p>
                </Reveal>

                <div className="mt-16 pt-8 border-t border-zinc-100 dark:border-zinc-900 flex flex-col md:flex-row justify-between items-center gap-6">
                    <p className="text-zinc-400 text-xs">
                        © {new Date().getFullYear()} MarketBuddy. Part of MarkitUp Group.
                    </p>
                    <div className="flex gap-6 text-xs text-zinc-400">
                        <Link href="#" className="hover:text-primary">Privacy Policy</Link>
                        <Link href="#" className="hover:text-primary">Terms of Service</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
