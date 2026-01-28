"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { FiArrowRight } from "react-icons/fi";

const Hero = () => {
    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
            {/* Decorative Background Elements */}
            <div className="absolute top-1/4 -left-20 w-72 h-72 bg-primary/20 rounded-full blur-[120px] animate-pulse" />
            <div className="absolute bottom-1/4 -right-20 w-80 h-80 bg-accent/20 rounded-full blur-[120px] animate-pulse delay-700" />

            {/* Floating Shapes */}
            <motion.div
                animate={{
                    y: [0, -20, 0],
                    rotate: [0, 10, 0],
                }}
                transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
                className="absolute top-1/3 right-[15%] hidden lg:block"
            >
                <div className="w-12 h-12 border-2 border-primary/30 rounded-lg rotate-12" />
            </motion.div>

            <motion.div
                animate={{
                    y: [0, 20, 0],
                    rotate: [0, -10, 0],
                }}
                transition={{
                    duration: 6,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
                className="absolute bottom-1/3 left-[15%] hidden lg:block"
            >
                <div className="w-16 h-16 border-2 border-accent/30 rounded-full" />
            </motion.div>

            <div className="container mx-auto px-6 relative z-10 text-center">
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="font-handwriting text-2xl md:text-3xl text-primary mb-4"
                >
                    Hello world, we are
                </motion.p>

                <motion.h1
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="text-6xl md:text-8xl lg:text-9xl font-extrabold font-heading mb-2 tracking-tight"
                >
                    Markit<span className="text-primary text-gradient">Up</span>
                </motion.h1>

                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="text-xl md:text-2xl text-foreground font-heading mb-8 uppercase tracking-[0.3em] font-medium"
                >
                    Building, marketing, and launching modern brands
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    className="max-w-2xl mx-auto text-muted-gray text-lg md:text-xl font-roboto mb-12 leading-relaxed"
                >
                    MarkitUp Group is a modern parent company built to create, grow, and connect multiple business brands under one strategic ecosystem of innovation.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.8 }}
                    className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-20"
                >
                    <Link
                        href="#contact"
                        className="group px-8 py-4 bg-primary text-white rounded-full font-bold flex items-center gap-2 hover:shadow-[0_0_20px_rgba(124,77,255,0.4)] transition-all transform hover:-translate-y-1"
                    >
                        Contact Us
                        <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
                    </Link>
                    <Link
                        href="#services"
                        className="px-8 py-4 border border-foreground/10 hover:border-primary/50 text-foreground rounded-full font-bold flex items-center gap-2 transition-all transform hover:-translate-y-1"
                    >
                        View Ecosystem
                    </Link>
                </motion.div>

                {/* Stats Section */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 1 }}
                    className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto border-t border-foreground/5 pt-12"
                >
                    {[
                        { label: "Business Units", value: "3" },
                        { label: "Unified Vision", value: "1" },
                        { label: "Growth Potential", value: "∞" },
                        { label: "Strategic Focus", value: "100%" },
                    ].map((stat, index) => (
                        <div key={index} className="text-center group">
                            <h3 className="text-3xl md:text-5xl font-extrabold text-primary mb-2 group-hover:scale-110 transition-transform duration-300">
                                {stat.value}
                            </h3>
                            <p className="text-muted-gray text-xs md:text-sm uppercase tracking-widest font-bold">
                                {stat.label}
                            </p>
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
