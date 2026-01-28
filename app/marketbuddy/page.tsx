"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { Reveal } from "@/components/Reveal";
import { FiArrowLeft, FiCheckCircle } from "react-icons/fi";
import Link from "next/link";
import Image from "next/image";

export default function MarketBuddyPage() {
    const points = [
        {
            title: "1. MarketBuddy Identity",
            content: "MarketBuddy exists to help brands grow without losing their soul. Every business has its own story, audience, and ambition. Our role is to understand that deeply and then build a growth system around it. We work like an extension of your team, not an external vendor."
        },
        {
            title: "2. The Reality of Today’s Market",
            content: "Brands today compete for attention in a noisy, fast-moving digital world. Organic reach is shrinking, ads are getting expensive, and customers trust stories more than slogans. MarketBuddy is built to navigate this reality with clarity and care."
        },
        {
            title: "3. Our Way of Thinking",
            content: "We believe growth should feel intentional, not forced. Strategy matters, systems matter, but relationships matter more. We design everything around people first — your customers, your team, and your vision."
        },
        {
            title: "4. What We Build for Brands",
            content: "Instead of one-off campaigns, we build long-term growth engines:",
            list: [
                "Brand & Positioning Engine – clarifying identity and voice",
                "Content & Attention Engine – telling stories people care about",
                "Distribution & Acquisition Engine – reaching the right audience",
                "Conversion & Revenue Engine – turning interest into action",
                "Partnership & Influence Engine – growing through trust and collaboration",
                "Community & Retention Engine – building loyalty over time"
            ]
        },
        {
            title: "5. How We Work Together",
            content: "Our engagement flows through clear, simple phases:",
            list: [
                "Foundation – understanding your brand and goals",
                "Build – creating content, systems, and assets",
                "Growth – activating channels and campaigns",
                "Scale – expanding reach and performance",
                "Evolution – adapting as the brand grows"
            ]
        },
        {
            title: "6. Built for Any Industry",
            content: "Whether you run a restaurant, sell a physical product, launch an app, or grow a local business, our core approach stays the same. Your brand stays unique; the system adapts around it."
        },
        {
            title: "7. Staying Modern, Staying Human",
            content: "We thoughtfully use modern tools and trends such as:",
            list: [
                "Short-form and story-led content",
                "Creator and micro-influencer collaborations",
                "Community-driven growth",
                "Social commerce and owned audiences",
                "AI-supported insights and optimisation",
                "Rapid testing and iteration"
            ]
        },
        {
            title: "8. Measuring What Matters",
            content: "We focus on meaningful metrics — engagement quality, conversion, repeat customers, and brand trust. Numbers guide us, but understanding guides decisions."
        },
        {
            title: "9. Partnership Model",
            content: "MarketBuddy works as a partner, not just a service provider. We collaborate closely, communicate openly, and grow with you over time."
        },
        {
            title: "10. MarketBuddy Inside MarkitUp Group",
            content: "MarketBuddy is part of the MarkitUp Group ecosystem, connected with ITBuddy and DiscountBuddy. This gives brands access to technology, product thinking, and future platform opportunities."
        }
    ];

    return (
        <main className="min-h-screen bg-background">
            <Navbar />

            {/* Hero Section */}
            <section className="relative pt-32 pb-20 overflow-hidden">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-primary/5 blur-[120px] rounded-full" />

                <div className="container mx-auto px-6 relative z-10">
                    <Reveal>
                        <Link
                            href="/#services"
                            className="inline-flex items-center gap-2 text-primary font-medium mb-12 hover:gap-3 transition-all"
                        >
                            <FiArrowLeft /> Back to Ecosystem
                        </Link>
                    </Reveal>

                    <div className="flex flex-col md:flex-row items-center gap-12 mb-16">
                        <Reveal>
                            <div className="relative w-32 h-32 md:w-48 md:h-48 bg-white rounded-[2.5rem] p-6 shadow-2xl border border-primary/10">
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
                        </div>
                    </div>
                </div>
            </section>

            {/* Content Section */}
            <section className="pb-32">
                <div className="container mx-auto px-6">
                    <div className="max-w-4xl mx-auto space-y-16">
                        {points.map((point, index) => (
                            <Reveal key={index} delay={index * 0.05}>
                                <div className="group bg-[var(--card-bg)] p-8 md:p-12 rounded-[2.5rem] border border-[var(--border-color)] hover:border-primary/30 transition-all duration-500 shadow-sm hover:shadow-xl">
                                    <h3 className="text-2xl md:text-3xl font-bold font-heading mb-6 text-foreground group-hover:text-primary transition-colors">
                                        {point.title}
                                    </h3>
                                    <p className="text-muted-gray text-lg font-roboto leading-relaxed mb-8">
                                        {point.content}
                                    </p>

                                    {point.list && (
                                        <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                            {point.list.map((item, i) => (
                                                <li key={i} className="flex items-start gap-3 text-muted-gray">
                                                    <FiCheckCircle className="text-primary mt-1 flex-shrink-0" />
                                                    <span className="text-sm md:text-base font-medium">{item}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    )}
                                </div>
                            </Reveal>
                        ))}

                        {/* Closing Quote */}
                        <Reveal>
                            <div className="text-center pt-20 border-t border-border">
                                <p className="text-3xl md:text-4xl font-handwriting text-primary mb-8 italic">
                                    "MarketBuddy is built for brands that want growth that feels right. Personal, thoughtful, and sustainable — a growth engine made just for you."
                                </p>
                                <div className="inline-block px-8 py-4 bg-primary text-white rounded-full font-bold shadow-xl">
                                    Let's Grow Together
                                </div>
                            </div>
                        </Reveal>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
