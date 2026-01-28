"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiExternalLink } from "react-icons/fi";
import Image from "next/image";

const categories = ["All", "Marketing", "Development", "Product", "Strategy"];

const initialProjects = [
    {
        id: 1,
        title: "MarketBuddy Growth Engine",
        category: "Marketing",
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800",
    },
    {
        id: 2,
        title: "ITBuddy Infrastructure",
        category: "Development",
        image: "https://images.unsplash.com/photo-1492724441997-5dc865305da7?auto=format&fit=crop&q=80&w=800",
    },
    {
        id: 3,
        title: "DiscountBuddy Platform",
        category: "Product",
        image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&q=80&w=800",
    },
    {
        id: 4,
        title: "Ecosystem Integration",
        category: "Strategy",
        image: "https://images.unsplash.com/photo-1572044162444-ad60f128bdea?auto=format&fit=crop&q=80&w=800",
    },
    {
        id: 5,
        title: "Brand Transformation",
        category: "Marketing",
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800",
    },
    {
        id: 6,
        title: "Scalable Solutions",
        category: "Development",
        image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&q=80&w=800",
    },
];

const Portfolio = () => {
    const [activeCategory, setActiveCategory] = useState("All");
    const projects = activeCategory === "All"
        ? initialProjects
        : initialProjects.filter(p => p.category === activeCategory);

    return (
        <section id="portfolio" className="py-24 bg-background border-t border-[var(--border-color)]">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <motion.h4
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="font-handwriting text-2xl text-primary mb-2"
                    >
                        Our Work
                    </motion.h4>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-5xl font-bold font-heading mb-12 text-foreground"
                    >
                        Featured <span className="text-primary text-gradient">Projects</span>
                    </motion.h2>

                    {/* Category Filter */}
                    <div className="flex flex-wrap justify-center gap-4 mb-12">
                        {categories.map((cat) => (
                            <button
                                key={cat}
                                onClick={() => setActiveCategory(cat)}
                                className={`px-8 py-3 rounded-full font-heading font-medium transition-all duration-300 ${activeCategory === cat
                                    ? "bg-primary text-white shadow-lg shadow-primary/30"
                                    : "bg-[var(--card-bg)] border border-[var(--border-color)] text-foreground/70 hover:border-primary/50"
                                    }`}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>
                </div>

                <motion.div
                    layout
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                >
                    <AnimatePresence mode="popLayout">
                        {projects.map((project) => (
                            <motion.div
                                key={project.id}
                                layout
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                transition={{ duration: 0.4 }}
                                className="group relative overflow-hidden rounded-3xl bg-[var(--card-bg)] aspect-[4/3] cursor-pointer border border-[var(--border-color)]"
                            >
                                <Image
                                    src={project.image}
                                    alt={project.title}
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                                />

                                {/* Overlay */}
                                <div className="absolute inset-0 bg-gradient-to-t from-[#0f0f1a] via-[#0f0f1a]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-8">
                                    <span className="text-primary font-handwriting text-xl mb-2 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                                        {project.category}
                                    </span>
                                    <h3 className="text-white text-2xl font-bold font-heading mb-4 translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75">
                                        {project.title}
                                    </h3>
                                    <div className="flex items-center gap-2 text-white/80 font-medium translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-100">
                                        View Project <FiExternalLink />
                                    </div>
                                </div>

                                {/* Corner Border Glow */}
                                <div className="absolute top-0 right-0 w-0 h-0 border-t-2 border-r-2 border-primary group-hover:w-16 group-hover:h-16 transition-all duration-500 rounded-tr-3xl" />
                                <div className="absolute bottom-0 left-0 w-0 h-0 border-b-2 border-l-2 border-primary group-hover:w-16 group-hover:h-16 transition-all duration-500 rounded-bl-3xl" />
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>
            </div>
        </section>
    );
};

export default Portfolio;
