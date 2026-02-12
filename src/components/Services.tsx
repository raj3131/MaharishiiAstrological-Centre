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
                                className="group relative p-8 bg-white/80 backdrop-blur-sm border border-[var(--color-2)]/30 rounded-2xl hover:border-[var(--color-3)] transition-all duration-300 overflow-hidden shadow-sm hover:shadow-[0_10px_40px_rgba(202,132,74,0.15)]"
                            >
                                {/* Hover Glow */}
                                <div className="absolute -inset-[100%] bg-gradient-to-br from-transparent via-[var(--color-1)]/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-xl rounded-full translate-x-12 translate-y-12" />

                                <div className="relative z-10 flex flex-col gap-6">
                                    <div className="w-16 h-16 bg-[var(--color-1)]/20 border border-[var(--color-5)]/50 rounded-full flex items-center justify-center text-[var(--color-3)] group-hover:bg-[var(--color-3)] group-hover:text-white transition-all duration-300 shadow-inner">
                                        <Icon className="w-7 h-7" />
                                    </div>

                                    <div>
                                        <h3 className="text-2xl font-serif mb-3 text-[var(--foreground)] group-hover:text-[var(--color-3)] transition-colors tracking-wide">{service.title}</h3>
                                        <p className="text-[var(--color-4)] leading-relaxed font-light">
                                            {service.desc}
                                        </p>
                                    </div>

                                    <div className="mt-auto pt-4 flex items-center gap-2 text-[var(--color-3)] text-sm uppercase tracking-widest opacity-80 group-hover:opacity-100 transition-all duration-300 font-bold">
                                        Consult Now <span className="text-lg">→</span>
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
