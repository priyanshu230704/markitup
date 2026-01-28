"use client";

import { Reveal } from "@/components/Reveal";
import { FiMail, FiPhone, FiMapPin, FiSend } from "react-icons/fi";

export default function Contact() {
    return (
        <section id="contact" className="py-24">
            <div className="container mx-auto px-6">
                <div className="bg-zinc-900 dark:bg-zinc-800 rounded-[3rem] overflow-hidden shadow-2xl">
                    <div className="flex flex-col lg:flex-row">
                        <div className="lg:w-1/3 p-12 bg-primary text-white">
                            <Reveal>
                                <h2 className="text-4xl font-bold font-heading mb-6 text-white">Let's <br />Collaborate</h2>
                            </Reveal>
                            <Reveal delay={0.1}>
                                <p className="text-white/80 mb-12">
                                    Ready to build your growth engine? Reach out and let's start a conversation.
                                </p>
                            </Reveal>

                            <div className="space-y-8">
                                <Reveal delay={0.2}>
                                    <div className="flex items-center gap-6">
                                        <div className="w-12 h-12 bg-white/20 rounded-2xl flex items-center justify-center">
                                            <FiMail size={24} />
                                        </div>
                                        <div>
                                            <p className="text-sm text-white/60">Email Us</p>
                                            <p className="font-bold">hello@marketbuddy.com</p>
                                        </div>
                                    </div>
                                </Reveal>
                                <Reveal delay={0.3}>
                                    <div className="flex items-center gap-6">
                                        <div className="w-12 h-12 bg-white/20 rounded-2xl flex items-center justify-center">
                                            <FiPhone size={24} />
                                        </div>
                                        <div>
                                            <p className="text-sm text-white/60">Call Us</p>
                                            <p className="font-bold">+1 (555) 000-0000</p>
                                        </div>
                                    </div>
                                </Reveal>
                                <Reveal delay={0.4}>
                                    <div className="flex items-center gap-6">
                                        <div className="w-12 h-12 bg-white/20 rounded-2xl flex items-center justify-center">
                                            <FiMapPin size={24} />
                                        </div>
                                        <div>
                                            <p className="text-sm text-white/60">Visit Us</p>
                                            <p className="font-bold">Digital Nomad Street, Cloud City</p>
                                        </div>
                                    </div>
                                </Reveal>
                            </div>
                        </div>

                        <div className="lg:w-2/3 p-12 bg-white dark:bg-zinc-900">
                            <form className="space-y-6">
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
                                    <button className="w-full md:w-auto px-10 py-5 bg-primary text-white rounded-2xl font-bold shadow-xl hover:scale-105 transition-transform flex items-center justify-center gap-3">
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
