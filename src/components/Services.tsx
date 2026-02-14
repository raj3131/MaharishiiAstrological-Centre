"use client";

import { motion } from "framer-motion";
import { Hammer, Users, Lightbulb, Compass, House, ChartBar, Star, Sparkles, Moon } from "lucide-react";

const services = [
    { id: 1, icon: Star, title: "Ancestral Karma Analysis", desc: "Identify deep-rooted karmic patterns inherited from your ancestors (DNA) and find ways to resolve them." },
    { id: 2, icon: Moon, title: "Genetic Blueprint Reading", desc: "Understand your unique cosmic imprint that links your genetic makeup to planetary positions at birth." },
    { id: 3, icon: Compass, title: "Family Lineage Healing", desc: "Discover ancestral doshas affecting your health, wealth, and relationships across generations." },
    { id: 4, icon: House, title: "DNA Vastu Alignment", desc: "Harmonize your living space with your genetic vibrations for maximum spiritual and material success." },
    { id: 5, icon: Users, title: "Progeny & Lineage Path", desc: "Analyze the astrological path for future generations based on current DNA karmic registries." },
    { id: 6, icon: Sparkles, title: "Karmic Remedy Prescription", desc: "Specific Vedic remedies including DNA-resonant mantras and energized artifacts to clear lineage blocks." },
];

export default function Services() {
    return (
        <section id="services" className="py-24 bg-[var(--background)] relative overflow-hidden">
            {/* Background Mandala */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[var(--color-1)] opacity-20 animate-spin-slow pointer-events-none">
                <svg width="800" height="800" viewBox="0 0 100 100" fill="currentColor">
                    <path d="M50 0 L60 40 L100 50 L60 60 L50 100 L40 60 L0 50 L40 40 Z" />
                    <circle cx="50" cy="50" r="30" stroke="currentColor" strokeWidth="1" fill="none" />
                    <circle cx="50" cy="50" r="45" stroke="currentColor" strokeWidth="0.5" fill="none" />
                </svg>
            </div>

            <div className="container relative z-10">

                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    className="text-center mb-16"
                >
                    <div className="w-16 h-1 bg-gradient-to-r from-transparent via-[var(--color-3)] to-transparent mx-auto rounded-full mb-6" />
                    <span className="text-[var(--color-3)] font-bold uppercase tracking-[0.2em] text-sm mb-4 block drop-shadow-sm">Ancient Wisdom</span>
                    <h2 className="text-4xl md:text-5xl font-serif text-[var(--foreground)] mb-6 tracking-widest">
                        Celestial Services
                    </h2>
                    <p className="text-[var(--color-4)] max-w-2xl mx-auto italic font-medium">
                        "As above, so below." Our services bridge the gap between celestial movements and earthly living.
                    </p>
                </motion.div>

                {/* Services Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => {
                        const Icon = service.icon;
                        return (
                            <motion.div
                                key={service.id}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1, duration: 0.5 }}
                                viewport={{ once: true, margin: "-50px" }}
                                className="group relative p-8 group transition-all duration-500"
                            >
                                {/* Authentic Manuscript Parchment Layer */}
                                <div
                                    className="absolute inset-0 bg-[#F9F5F0] border border-[#D2B48C]/40 shadow-[5px_5px_15px_rgba(45,30,23,0.06),inset_0_0_80px_rgba(166,123,91,0.08)] transition-all duration-500 group-hover:shadow-[12px_12px_40px_rgba(45,30,23,0.12),inset_0_0_60px_rgba(210,180,140,0.15)] overflow-hidden"
                                    style={{
                                        clipPath: 'polygon(1% 2%, 99% 0%, 98% 98%, 2% 100%, 0% 50%)',
                                        backgroundImage: `
                                            radial-gradient(circle at 60% 40%, rgba(255,255,255,0.4) 0%, transparent 60%),
                                            url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='paperNoise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.6' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23paperNoise)' opacity='0.05'/%3E%3C/svg%3E")
                                        `
                                    }}
                                />

                                {/* Decorative Ink Framework - Double Line */}
                                <div className="absolute top-3 left-3 right-3 bottom-3 border border-[var(--color-3)]/10 pointer-events-none rounded-sm" />
                                <div className="absolute top-4 left-4 right-4 bottom-4 border border-[var(--color-3)]/5 pointer-events-none rounded-sm border-dashed" />

                                {/* Antique Corner Flourishes */}
                                <div className="absolute top-3 left-3 w-5 h-5 border-t-2 border-l-2 border-[var(--color-3)]/20 pointer-events-none" />
                                <div className="absolute bottom-3 right-3 w-5 h-5 border-b-2 border-r-2 border-[var(--color-3)]/20 pointer-events-none" />

                                {/* Wax Seal Decorative Element */}
                                <div className="absolute top-5 right-5 w-10 h-10 rounded-full bg-gradient-to-br from-[#8B3411] to-[#5C230B] shadow-sm opacity-10 group-hover:opacity-25 transition-opacity duration-500 flex items-center justify-center border border-[var(--color-3)]/20">
                                    <div className="w-6 h-6 border border-[var(--color-1)]/20 rounded-full" />
                                </div>

                                {/* Content Container */}
                                <div className="relative z-10 flex flex-col gap-4 md:gap-6">
                                    <div className="w-12 h-12 md:w-16 md:h-16 bg-[#F0E6D2] border-2 border-[#A67B5B]/30 rounded-full flex items-center justify-center text-[var(--color-3)] group-hover:bg-[var(--color-3)] group-hover:text-[#F8F1E9] group-hover:scale-105 transition-all duration-500 shadow-[inset_0_2px_10px_rgba(0,0,0,0.05)]">
                                        <Icon className="w-5 h-5 md:w-7 md:h-7 stroke-[1.5]" />
                                    </div>

                                    <div>
                                        <h3 className="text-xl md:text-2xl mb-2 md:mb-3 text-[#4A3728] group-hover:text-[var(--color-3)] transition-colors tracking-wide leading-tight" style={{ fontFamily: 'var(--font-accent)' }}>
                                            {service.title}
                                        </h3>
                                        <p className="text-sm md:text-base text-[var(--color-4)] leading-relaxed font-medium italic opacity-85 group-hover:opacity-100 transition-opacity">
                                            {service.desc}
                                        </p>
                                    </div>

                                    <div className="mt-auto pt-4 flex items-center gap-2 text-[var(--color-3)] text-[10px] md:text-sm font-bold border-t border-[var(--color-3)]/10 group-hover:border-[var(--color-3)]/30 transition-colors">
                                        <span className="font-serif italic capitalize text-base tracking-wide">Seek Guidance</span>
                                        <span className="text-lg group-hover:translate-x-1 transition-transform duration-300">~</span>
                                    </div>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
