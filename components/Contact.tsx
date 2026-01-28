"use client";

import { motion } from "framer-motion";
import { FiMail, FiPhone, FiMapPin, FiSend } from "react-icons/fi";

const Contact = () => {
    return (
        <section id="contact" className="py-24 bg-background">
            <div className="container mx-auto px-6">
                <div className="flex flex-col lg:flex-row gap-16 items-start">
                    {/* Contact Info */}
                    <div className="lg:w-1/2">
                        <motion.h4
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="font-handwriting text-2xl text-primary mb-2"
                        >
                            Get in touch
                        </motion.h4>
                        <motion.h2
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="text-4xl md:text-5xl font-bold font-heading mb-8 text-foreground"
                        >
                            Let's Create Something <span className="text-primary text-gradient">Amazing Together</span>
                        </motion.h2>

                        <motion.p
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="text-muted-gray text-lg font-roboto mb-12 max-w-lg leading-relaxed"
                        >
                            Ready to elevate your brand's digital presence? Our team of experts is here to help you navigate the landscape and achieve your goals.
                        </motion.p>

                        <div className="space-y-8">
                            {[
                                {
                                    icon: <FiMail />,
                                    title: "Email Us",
                                    detail: "markitupgroup@gmail.com",
                                    href: "mailto:markitupgroup@gmail.com"
                                },
                                {
                                    icon: <FiPhone />,
                                    title: "Call Us",
                                    detail: "+44 7767 901263",
                                    href: "tel:+447767901263"
                                },
                                {
                                    icon: <FiMapPin />,
                                    title: "Visit Us",
                                    detail: "233A The Mall, Harrow, HA3 9TX",
                                    href: "https://www.google.com/maps/search/?api=1&query=233A+The+Mall,+Harrow,+HA3+9TX"
                                },
                            ].map((item, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 10 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.3 + index * 0.1 }}
                                    className="flex items-center gap-6 group"
                                >
                                    <div className="w-14 h-14 rounded-2xl bg-primary text-white flex items-center justify-center text-xl shadow-[0_10px_20px_rgba(124,77,255,0.2)] group-hover:scale-110 transition-transform">
                                        {item.icon}
                                    </div>
                                    <div>
                                        <h5 className="text-sm font-heading font-medium uppercase tracking-widest text-muted-gray mb-1">
                                            {item.title}
                                        </h5>
                                        <a
                                            href={item.href}
                                            target={item.title === "Visit Us" ? "_blank" : undefined}
                                            rel={item.title === "Visit Us" ? "noopener noreferrer" : undefined}
                                            className="text-xl font-bold font-heading text-foreground hover:text-primary transition-colors block"
                                        >
                                            {item.detail}
                                        </a>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="lg:w-1/2 w-full bg-[var(--card-bg)] p-8 md:p-12 rounded-[2.5rem] border border-[var(--border-color)] shadow-2xl relative"
                    >
                        <div className="absolute -top-10 -right-10 w-40 h-40 bg-primary/5 rounded-full blur-[60px]" />

                        <form className="space-y-6 relative">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-sm font-heading font-semibold ml-1 text-foreground">Your Name</label>
                                    <input
                                        type="text"
                                        placeholder="Enter name"
                                        className="w-full px-6 py-4 rounded-2xl bg-background text-foreground border border-[var(--border-color)] focus:border-primary outline-none transition-all font-roboto"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-heading font-semibold ml-1 text-foreground">Your Email</label>
                                    <input
                                        type="email"
                                        placeholder="Enter email"
                                        className="w-full px-6 py-4 rounded-2xl bg-background text-foreground border border-[var(--border-color)] focus:border-primary outline-none transition-all font-roboto"
                                    />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm font-heading font-semibold ml-1 text-foreground">Subject</label>
                                <input
                                    type="text"
                                    placeholder="How can we help?"
                                    className="w-full px-6 py-4 rounded-2xl bg-background text-foreground border border-[var(--border-color)] focus:border-primary outline-none transition-all font-roboto"
                                />
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm font-heading font-semibold ml-1 text-foreground">Message</label>
                                <textarea
                                    rows={4}
                                    placeholder="Your message..."
                                    className="w-full px-6 py-4 rounded-2xl bg-background text-foreground border border-[var(--border-color)] focus:border-primary outline-none transition-all font-roboto resize-none"
                                ></textarea>
                            </div>

                            <button className="w-full py-5 bg-primary !text-white rounded-2xl font-bold font-heading text-lg flex items-center justify-center gap-3 hover:shadow-[0_15px_30px_rgba(124,77,255,0.4)] transition-all transform hover:-translate-y-1 group">
                                Send Message
                                <FiSend className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                            </button>
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
