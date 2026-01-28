"use client";

import Link from "next/link";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-[var(--background)] text-foreground pt-20 pb-10 border-t border-[var(--border-color)] transition-colors duration-300">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
                    {/* Brand Column */}
                    <div className="space-y-6">
                        <Link href="/" className="text-3xl font-bold font-heading text-foreground">
                            Markit<span className="text-primary">Up</span>
                        </Link>
                        <p className="text-muted-gray font-roboto leading-relaxed text-sm">
                            MarkitUp Group is a modern parent company built to create, grow, and connect multiple business brands under one strategic ecosystem of innovation.
                        </p>
                        <div className="flex gap-4">
                            {[
                                { icon: <FaFacebookF />, href: "#" },
                                { icon: <FaTwitter />, href: "#" },
                                { icon: <FaInstagram />, href: "#" },
                                { icon: <FaLinkedinIn />, href: "#" },
                            ].map((social, index) => (
                                <Link
                                    key={index}
                                    href={social.href}
                                    className="w-10 h-10 rounded-full bg-primary/5 text-primary flex items-center justify-center hover:bg-primary hover:text-white transition-all duration-300 transform hover:-translate-y-1"
                                >
                                    {social.icon}
                                </Link>
                            ))}
                        </div>
                    </div>

                    {/* Newsletter Column */}
                    <div>
                        <h4 className="text-xl font-bold font-heading mb-8 relative after:absolute after:bottom-[-10px] after:left-0 after:w-10 after:h-1 after:bg-primary text-foreground">
                            Newsletter
                        </h4>
                        <p className="text-muted-gray mb-6">
                            Subscribe to get the latest marketing tips and trends.
                        </p>
                        <form className="relative">
                            <input
                                type="email"
                                placeholder="Your email"
                                className="w-full bg-background border border-[var(--border-color)] px-6 py-4 rounded-2xl outline-none focus:border-primary transition-colors text-foreground"
                            />
                            <button className="absolute right-2 top-2 bottom-2 px-6 bg-primary text-white rounded-xl font-bold text-sm hover:opacity-90 transition-opacity">
                                Join
                            </button>
                        </form>
                    </div>
                </div>

                <div className="border-t border-[var(--border-color)] pt-10 flex flex-col md:flex-row justify-between items-center gap-6">
                    <div className="flex gap-8 text-sm text-muted-gray">
                        <span>© {currentYear} MarkitUp Group. All rights reserved.</span>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
