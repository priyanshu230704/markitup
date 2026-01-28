"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Reveal } from "./Reveal";
import {
    FiShare2,
    FiLayers,
    FiMonitor
} from "react-icons/fi";

const services = [
    {
        title: "MarketBuddy",
        subtitle: "Brand Growth & Marketing Studio",
        status: "Active",
        statusColor: "bg-green-500",
        description: "The operating and revenue-focused brand of MarkitUp Group. It works directly with businesses to build visibility, engagement, and growth through structured marketing systems.",
        focusTitle: "Focus Areas",
        focusItems: [
            "Brand strategy and positioning",
            "Social media and content ecosystems",
            "Performance marketing and lead systems",
            "Websites and conversion assets",
            "Influencer and partnership campaigns",
            "Market entry and growth consulting"
        ],
        footerNote: "Intelligence Layer: MarketBuddy acts as the market-facing intelligence layer, generating real-world data and insights.",
        icon: (
            <div className="relative w-10 h-10">
                <Image
                    src="/marketbuddy.png"
                    alt="MarketBuddy Logo"
                    fill
                    className="object-contain"
                />
            </div>
        ),
        color: "bg-white border border-border",
    },
    {
        title: "ITBuddy",
        subtitle: "Digital Solutions & Product Development Studio",
        status: "Active - Internal Focus",
        statusColor: "bg-amber-500",
        description: "ITBuddy is the technical and development-focused unit of MarkitUp Group. It exists to design, build, and maintain the digital infrastructure behind both client solutions and internal products.",
        focusTitle: "Current Focus",
        focusItems: [
            "App and platform development",
            "Website and system engineering",
            "Internal tools and automation",
            "Product prototyping and MVP builds",
            "Technical support for group projects"
        ],
        footerNote: "Current Stage: Primarily focused on internal capability building and supporting the development of DiscountBuddy and MarketBuddy systems.",
        icon: <FiMonitor className="w-8 h-8" />,
        color: "bg-purple-600",
    },
    {
        title: "DiscountBuddy",
        subtitle: "Consumer Platform & App Venture",
        status: "In Development",
        statusColor: "bg-blue-400",
        description: "DiscountBuddy is a consumer-focused digital platform connecting UK consumers with verified, accessible, and brand-driven discount opportunities through a centralized system.",
        focusTitle: "Strategic Purpose",
        focusItems: [
            "Build long-term owned digital assets",
            "Create a scalable consumer ecosystem",
            "Develop platform-based revenue models",
            "Enable brand partnerships and cross-promotion",
            "Transition beyond service dependency"
        ],
        footerNote: "Long-term Direction: Represents the product direction of MarkitUp Group, being developed using market insight from MarketBuddy and technical execution from ITBuddy.",
        icon: <FiLayers className="w-8 h-8" />,
        color: "bg-pink-600",
    }
];

const Services = () => {
    return (
        <section id="services" className="py-24 relative bg-background">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <motion.h4
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="font-handwriting text-2xl text-primary mb-2"
                    >
                        What we do
                    </motion.h4>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-5xl font-bold font-heading text-foreground"
                    >
                        Our Ecosystem <span className="text-primary">Structure</span>
                    </motion.h2>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => {
                        const isMarketBuddy = service.title === "MarketBuddy";
                        const CardWrapper = ({ children }: { children: React.ReactNode }) =>
                            isMarketBuddy ? (
                                <Link href="/marketbuddy" className="h-full block">
                                    {children}
                                </Link>
                            ) : (
                                <div className="h-full">{children}</div>
                            );

                        return (
                            <Reveal key={index} delay={index * 0.1}>
                                <CardWrapper>
                                    <motion.div
                                        className={`bg-[var(--card-bg)] p-8 rounded-[2.5rem] h-full border border-[var(--border-color)] group transition-all duration-500 hover:shadow-[0_20px_50px_rgba(124,77,255,0.1)] relative overflow-hidden flex flex-col ${isMarketBuddy ? 'cursor-pointer' : ''}`}
                                    >
                                        {/* Status Badge */}
                                        <div className="flex justify-between items-start mb-6">
                                            <div className={`w-14 h-14 ${service.color} text-white rounded-2xl flex items-center justify-center shadow-lg transform group-hover:rotate-6 transition-transform duration-300`}>
                                                {service.icon}
                                            </div>
                                            <span className={`${service.statusColor} text-white text-[10px] uppercase tracking-widest font-bold px-3 py-1 rounded-full shadow-sm`}>
                                                {service.status}
                                            </span>
                                        </div>

                                        <div className="mb-4">
                                            <h3 className="text-2xl font-bold font-heading text-foreground group-hover:text-primary transition-colors flex items-center gap-2">
                                                {service.title}
                                                {isMarketBuddy && (
                                                    <span className="text-[10px] bg-primary/10 text-primary px-2 py-0.5 rounded-full uppercase tracking-tighter">View Details</span>
                                                )}
                                            </h3>
                                            <p className="text-primary/80 font-medium text-sm">
                                                {service.subtitle}
                                            </p>
                                        </div>

                                        <p className="text-muted-gray text-sm font-roboto leading-relaxed mb-6">
                                            {service.description}
                                        </p>

                                        <div className="flex-grow">
                                            <h4 className="text-xs uppercase tracking-[0.2em] font-bold text-foreground mb-4 border-l-2 border-primary pl-3">
                                                {service.focusTitle}
                                            </h4>
                                            <ul className="space-y-2 mb-8">
                                                {service.focusItems.map((item, i) => (
                                                    <li key={i} className="text-muted-gray text-sm flex items-start gap-2">
                                                        <span className="text-primary mt-1.5 w-1 h-1 rounded-full bg-primary flex-shrink-0" />
                                                        {item}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>

                                        <div className="mt-auto pt-6 border-t border-[var(--border-color)]">
                                            <p className="text-xs text-muted-gray italic leading-relaxed">
                                                {service.footerNote}
                                            </p>
                                        </div>

                                        {/* Corner Accent */}
                                        <motion.div
                                            initial={{ width: 0 }}
                                            whileHover={{ width: "100%" }}
                                            className="absolute bottom-0 left-0 h-1 bg-primary transition-all duration-500"
                                        />
                                    </motion.div>
                                </CardWrapper>
                            </Reveal>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default Services;
