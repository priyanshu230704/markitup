"use client";

import { Reveal } from "@/components/Reveal";
import { FiCheckCircle, FiSearch, FiTarget, FiTrendingUp, FiUsers, FiLayers, FiMessageSquare } from "react-icons/fi";

const services = [
    {
        title: "Brand & Positioning",
        description: "We help you clarify your identity and voice to stand out in a crowded market.",
        icon: <FiTarget className="w-6 h-6" />,
        features: ["Identity Design", "Voice & Tone", "Market Research"]
    },
    {
        title: "Content & Attention",
        description: "Telling stories people care about through video, written, and visual content.",
        icon: <FiMessageSquare className="w-6 h-6" />,
        features: ["Storytelling", "Short-form Video", "Content Strategy"]
    },
    {
        title: "Acquisition & Growth",
        description: "Reaching the right audience through optimized distribution channels.",
        icon: <FiTrendingUp className="w-6 h-6" />,
        features: ["Paid Media", "SEO Optimization", "Social Growth"]
    },
    {
        title: "Community & Retention",
        description: "Building long-term loyalty and turning customers into advocates.",
        icon: <FiUsers className="w-6 h-6" />,
        features: ["Community Management", "Email Marketing", "Loyalty Programs"]
    }
];

export default function Services() {
    return (
        <section id="services" className="py-24 bg-zinc-950">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <Reveal>
                        <h2 className="text-4xl md:text-5xl font-bold font-heading mb-4 !text-white">Our <span className="text-primary">Engines</span></h2>
                    </Reveal>
                    <Reveal delay={0.1}>
                        <p className="text-zinc-400 text-lg max-w-2xl mx-auto">
                            Instead of one-off campaigns, we build long-term growth systems tailored to your brand's unique needs.
                        </p>
                    </Reveal>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {services.map((service, index) => (
                        <Reveal key={index} delay={index * 0.1}>
                            <div className="bg-zinc-900 p-8 rounded-[2rem] border border-zinc-800 hover:border-primary/50 transition-all duration-300 shadow-sm hover:shadow-xl group h-full flex flex-col">
                                <div className="flex items-center gap-4 mb-4">
                                    <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                                        {service.icon}
                                    </div>
                                    <h3 className="text-xl font-bold !text-white">{service.title}</h3>
                                </div>
                                <p className="text-zinc-400 mb-6 flex-grow">{service.description}</p>
                                <ul className="space-y-3 mt-auto">
                                    {service.features.map((feature, i) => (
                                        <li key={i} className="flex items-center gap-2 text-sm text-zinc-400">
                                            <FiCheckCircle className="text-primary flex-shrink-0" />
                                            <span>{feature}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </Reveal>
                    ))}
                </div>
            </div>
        </section>
    );
}
