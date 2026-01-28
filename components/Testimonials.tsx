"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, EffectFade } from "swiper/modules";
import { motion } from "framer-motion";
import { FaQuoteLeft, FaStar } from "react-icons/fa";
import Image from "next/image";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-fade";

const testimonials = [
    {
        name: "John Doe",
        position: "CEO at TechFlow",
        text: "MarkitUp transformed our online presence completely. Their SEO strategies led to a 200% increase in organic traffic within just 6 months.",
        image: "https://randomuser.me/api/portraits/men/32.jpg",
    },
    {
        name: "Sarah Jenkins",
        position: "Marketing Director",
        text: "The video production quality is unmatched. They perfectly captured our brand's voice and delivered content that went viral on social media.",
        image: "https://randomuser.me/api/portraits/women/44.jpg",
    },
    {
        name: "Michael Smith",
        position: "Founder of GreenLife",
        text: "Working with MarkitUp has been a game-changer. They are professional, creative, and data-driven. Highly recommended for any growing brand.",
        image: "https://randomuser.me/api/portraits/men/85.jpg",
    },
];

const Testimonials = () => {
    return (
        <section id="testimonials" className="py-24 relative overflow-hidden bg-background">
            {/* Background decoration */}
            <div className="absolute top-1/2 left-0 -translate-y-1/2 w-64 h-64 bg-primary/10 rounded-full blur-[100px]" />

            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <motion.h4
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="font-handwriting text-2xl text-primary mb-2"
                    >
                        Testimonials
                    </motion.h4>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-5xl font-bold font-heading text-foreground"
                    >
                        What Our <span className="text-primary text-gradient">Clients Say</span>
                    </motion.h2>
                </div>

                <div className="max-w-4xl mx-auto relative px-4">
                    <Swiper
                        modules={[Autoplay, Navigation, EffectFade]}
                        effect="fade"
                        fadeEffect={{ crossFade: true }}
                        spaceBetween={30}
                        slidesPerView={1}
                        loop={true}
                        autoplay={{
                            delay: 5000,
                            disableOnInteraction: false,
                        }}
                        navigation={{
                            nextEl: ".swiper-button-next-custom",
                            prevEl: ".swiper-button-prev-custom",
                        }}
                        className="testimonial-swiper"
                    >
                        {testimonials.map((t, index) => (
                            <SwiperSlide key={index}>
                                <div className="bg-[var(--card-bg)] rounded-[3rem] p-8 md:p-16 text-center border border-[var(--border-color)] shadow-xl relative overflow-hidden">
                                    <div className="mb-8 flex justify-center">
                                        <div className="relative">
                                            <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-primary/20 shadow-xl relative">
                                                <Image
                                                    src={t.image}
                                                    alt={t.name}
                                                    fill
                                                    className="object-cover"
                                                />
                                            </div>
                                            <div className="absolute -bottom-2 -right-2 bg-primary text-white p-2 rounded-full shadow-lg z-10">
                                                <FaQuoteLeft size={14} />
                                            </div>
                                        </div>
                                    </div>

                                    <div className="flex justify-center gap-1 mb-6 text-yellow-500">
                                        {[...Array(5)].map((_, i) => (
                                            <FaStar key={i} size={18} />
                                        ))}
                                    </div>

                                    <p className="text-lg md:text-2xl font-roboto text-foreground/80 italic mb-10 leading-relaxed">
                                        "{t.text}"
                                    </p>

                                    <div>
                                        <h4 className="text-2xl font-bold font-heading text-primary">{t.name}</h4>
                                        <p className="text-muted-gray uppercase tracking-widest text-sm font-medium mt-1">
                                            {t.position}
                                        </p>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>

                    {/* Custom Nav Buttons */}
                    <button className="swiper-button-prev-custom absolute left-[-15px] md:left-[-60px] top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-background border border-border flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all shadow-lg">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                        </svg>
                    </button>
                    <button className="swiper-button-next-custom absolute right-[-15px] md:right-[-60px] top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-background border border-border flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all shadow-lg">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                        </svg>
                    </button>
                </div>
            </div>

            <style jsx global>{`
        .testimonial-swiper {
          position: relative;
          overflow: visible !important;
        }
        .swiper-button-disabled {
          opacity: 0.3;
          cursor: not-allowed;
        }
      `}</style>
        </section>
    );
};

export default Testimonials;
