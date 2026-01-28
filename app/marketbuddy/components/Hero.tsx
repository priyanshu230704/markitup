"use client";

import { motion } from "framer-motion";
import { Reveal } from "@/components/Reveal";
import { FiArrowLeft } from "react-icons/fi";
import Link from "next/link";
import Image from "next/image";

export default function Hero() {
    return (
        <section className="relative pt-32 pb-20 overflow-hidden">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-primary/5 blur-[120px] rounded-full" />

            <div className="container mx-auto px-6 relative z-10">
                <Reveal>
                    <Link
                        href="/"
                        className="inline-flex items-center gap-2 text-primary font-medium mb-12 hover:gap-3 transition-all"
                    >
                        <FiArrowLeft /> Back to Ecosystem
                    </Link>
                </Reveal>

                <div className="flex flex-col md:flex-row items-center gap-12 mb-16">
                    <Reveal>
                        <div className="relative w-32 h-32 md:w-48 md:h-48 bg-white dark:bg-zinc-900 rounded-[2.5rem] p-6 shadow-2xl border border-primary/10">
                            <Image
                                src="/marketbuddy.png"
                                alt="MarketBuddy Logo"
                                fill
                                className="object-contain p-6"
                            />
                        </div>
                    </Reveal>

                    <div className="flex-1">
                        <Reveal delay={0.1}>
                            <h1 className="text-5xl md:text-7xl font-bold font-heading mb-6">
                                Market<span className="text-primary">Buddy</span>
                            </h1>
                        </Reveal>
                        <Reveal delay={0.2}>
                            <p className="text-2xl md:text-3xl font-handwriting text-primary mb-6">
                                Your Personal Brand Growth Engine
                            </p>
                        </Reveal>
                        <Reveal delay={0.3}>
                            <p className="max-w-2xl text-muted-gray text-lg md:text-xl font-roboto leading-relaxed">
                                MarketBuddy is where strategy meets care. We build growth engines around each brand in a way that feels personal, human, and truly theirs.
                            </p>
                        </Reveal>
                        <Reveal delay={0.4}>
                            <div className="mt-8 flex flex-wrap gap-4">
                                <Link
                                    href="#contact"
                                    className="px-8 py-4 bg-primary text-white rounded-full font-bold shadow-xl hover:scale-105 transition-transform"
                                >
                                    Start Your Growth
                                </Link>
                                <Link
                                    href="#services"
                                    className="px-8 py-4 bg-transparent border border-primary text-primary rounded-full font-bold hover:bg-primary/5 transition-colors"
                                >
                                    Our Services
                                </Link>
                            </div>
                        </Reveal>
                    </div>
                </div>
            </div>
        </section>
    );
}
