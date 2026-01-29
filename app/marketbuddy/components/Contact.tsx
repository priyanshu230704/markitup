"use client";

import { Reveal } from "@/components/Reveal";
import { FiMail, FiPhone, FiMapPin, FiSend } from "react-icons/fi";

export default function Contact() {
    return (
        <section id="contact" className="py-24">
            <div className="container mx-auto px-6">
                <div className="bg-zinc-900 dark:bg-zinc-800 rounded-[3rem] overflow-hidden shadow-2xl">
                    <div className="w-full">
                        <div className="p-12 bg-white dark:bg-zinc-900">
                            <Reveal>
                                <h2 className="text-4xl font-bold font-heading mb-8 text-center">Get in <span className="text-primary">Touch</span></h2>
                            </Reveal>
                            <form className="space-y-6 max-w-4xl mx-auto">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <Reveal delay={0.1}>
                                        <div className="space-y-2">
                                            <label className="text-sm font-bold ml-1">Full Name</label>
                                            <input
                                                type="text"
                                                placeholder="John Doe"
                                                className="w-full px-6 py-4 bg-zinc-50 dark:bg-zinc-800 border-none rounded-2xl focus:ring-2 focus:ring-primary outline-none transition-all"
                                            />
                                        </div>
                                    </Reveal>
                                    <Reveal delay={0.2}>
                                        <div className="space-y-2">
                                            <label className="text-sm font-bold ml-1">Email Address</label>
                                            <input
                                                type="email"
                                                placeholder="john@example.com"
                                                className="w-full px-6 py-4 bg-zinc-50 dark:bg-zinc-800 border-none rounded-2xl focus:ring-2 focus:ring-primary outline-none transition-all"
                                            />
                                        </div>
                                    </Reveal>
                                </div>
                                <Reveal delay={0.3}>
                                    <div className="space-y-2">
                                        <label className="text-sm font-bold ml-1">Subject</label>
                                        <select className="w-full px-6 py-4 bg-zinc-50 dark:bg-zinc-800 border-none rounded-2xl focus:ring-2 focus:ring-primary outline-none transition-all appearance-none">
                                            <option>Growth Strategy</option>
                                            <option>Content Creation</option>
                                            <option>Brand Identity</option>
                                            <option>Other</option>
                                        </select>
                                    </div>
                                </Reveal>
                                <Reveal delay={0.4}>
                                    <div className="space-y-2">
                                        <label className="text-sm font-bold ml-1">Message</label>
                                        <textarea
                                            rows={4}
                                            placeholder="Tell us about your brand..."
                                            className="w-full px-6 py-4 bg-zinc-50 dark:bg-zinc-800 border-none rounded-2xl focus:ring-2 focus:ring-primary outline-none transition-all"
                                        />
                                    </div>
                                </Reveal>
                                <Reveal delay={0.5}>
                                    <button className="w-full md:w-auto px-10 py-5 bg-primary text-white rounded-2xl font-bold shadow-xl hover:scale-105 transition-transform flex items-center justify-center gap-3 mx-auto">
                                        Send Message <FiSend />
                                    </button>
                                </Reveal>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
