"use client";

import { Reveal } from "@/components/Reveal";
import { FiStar } from "react-icons/fi";

const testimonials = [
    {
        name: "Sarah Jenkins",
        role: "CEO, Innovate Tech",
        content: "MarketBuddy transformed our acquisition strategy. We've seen a 40% increase in organic reach in just three months.",
        avatar: "SJ"
    },
    {
        name: "Michael Chen",
        role: "Founder, GreenPlate",
        content: "The personal touch MarketBuddy brings is unmatched. They truly understand our brand's soul and vision.",
        avatar: "MC"
    },
    {
        name: "Elena Rodriguez",
        role: "Marketing Director, Lux Living",
        content: "More than just an agency, they are a partner. Their growth engines are built for long-term sustainability.",
        avatar: "ER"
    }
];

export default function Testimonials() {
    return (
        <section className="py-24 bg-primary/5">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <Reveal>
                        <h2 className="text-4xl md:text-5xl font-bold font-heading mb-4">Partner <span className="text-primary">Stories</span></h2>
                    </Reveal>
                    <Reveal delay={0.1}>
                        <p className="text-muted-gray text-lg max-w-2xl mx-auto">
                            Hear from the brands we've helped grow.
                        </p>
                    </Reveal>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {testimonials.map((testimonial, index) => (
                        <Reveal key={index} delay={index * 0.1}>
                            <div className="bg-white dark:bg-zinc-900 p-8 rounded-[2rem] border border-zinc-200 dark:border-zinc-800 shadow-sm relative italic">
                                <div className="flex gap-1 mb-6">
                                    {[...Array(5)].map((_, i) => (
                                        <FiStar key={i} className="text-yellow-500 fill-yellow-500 w-4 h-4" />
                                    ))}
                                </div>
                                <p className="text-muted-gray mb-8 text-lg">"{testimonial.content}"</p>
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center font-bold text-primary not-italic">
                                        {testimonial.avatar}
                                    </div>
                                    <div className="not-italic">
                                        <h4 className="font-bold">{testimonial.name}</h4>
                                        <p className="text-sm text-muted-gray">{testimonial.role}</p>
                                    </div>
                                </div>
                            </div>
                        </Reveal>
                    ))}
                </div>
            </div>
        </section>
    );
}
