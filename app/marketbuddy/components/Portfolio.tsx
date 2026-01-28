"use client";

import { Reveal } from "@/components/Reveal";
import Image from "next/image";

const projects = [
    {
        title: "Modern Dining Brand",
        category: "Growth Strategy",
        image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&q=80",
    },
    {
        title: "SaaS Launchpad",
        category: "Acquisition",
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
    },
    {
        title: "Lifestyle E-commerce",
        category: "Retention",
        image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&q=80",
    },
    {
        title: "Tech Innovation Hub",
        category: "Positioning",
        image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80",
    }
];

export default function Portfolio() {
    return (
        <section id="portfolio" className="py-24">
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
                    <div>
                        <Reveal>
                            <h2 className="text-4xl md:text-5xl font-bold font-heading mb-4">Selected <span className="text-primary">Work</span></h2>
                        </Reveal>
                        <Reveal delay={0.1}>
                            <p className="text-muted-gray text-lg max-w-xl">
                                Real results for real brands. We build systems that deliver sustainable growth.
                            </p>
                        </Reveal>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {projects.map((project, index) => (
                        <Reveal key={index} delay={index * 0.1}>
                            <div className="group relative overflow-hidden rounded-[2.5rem] bg-zinc-100 dark:bg-zinc-800 aspect-[16/9]">
                                <Image
                                    src={project.image}
                                    alt={project.title}
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-10">
                                    <p className="text-primary font-bold mb-2 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">{project.category}</p>
                                    <h3 className="text-white text-3xl font-bold translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75">{project.title}</h3>
                                </div>
                            </div>
                        </Reveal>
                    ))}
                </div>
            </div>
        </section>
    );
}
