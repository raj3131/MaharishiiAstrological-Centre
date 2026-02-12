"use client";

import { motion } from "framer-motion";
import { Dna, ShieldCheck, History, Sparkles } from "lucide-react";

const features = [
    {
        icon: Dna,
        title: "Karmic Registry in DNA",
        desc: "Ancient wisdom reveals that our DNA acts as a cosmic storage for the karmic registry of seven generations of our ancestors."
    },
    {
        icon: History,
        title: "Heritage Patterns",
        desc: "Life events are often echoes of ancestral experiences. We help you decode these patterns to break negative cycles."
    },
    {
        icon: ShieldCheck,
        title: "Ancestral Protection",
        desc: "Identify and resolve Pitru Doshas (ancestral debts) to gain the blessings and protection of your lineage."
    },
    {
        icon: Sparkles,
        title: "Destiny Realignment",
        desc: "By healing the genetic roots of your karma, you reclaim your original celestial path and true potential."
    }
];

export default function DNAExplainer() {
    return (
        <section className="py-24 bg-gradient-to-b from-white to-[var(--color-1)]/10 overflow-hidden">
            <div className="container px-4">
                <div className="flex flex-col lg:flex-row gap-16 items-center">

                    {/* Visual Section */}
                    <div className="lg:w-1/2 relative">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            className="relative z-10 rounded-[40px] overflow-hidden shadow-2xl border-2 border-white/50"
                        >
                            <img
                                src="https://images.unsplash.com/photo-1507413245164-6160d8298b31?q=80&w=1200&auto=format&fit=crop"
                                alt="DNA Astrology Science"
                                className="w-full aspect-square object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-3)]/40 to-transparent" />
                        </motion.div>

                        {/* Decorative floating DNA icon */}
                        <motion.div
                            animate={{ y: [0, -20, 0] }}
                            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                            className="absolute -top-10 -right-10 w-24 h-24 bg-white rounded-2xl shadow-xl flex items-center justify-center p-4 border border-[var(--color-1)] z-20"
                        >
                            <Dna className="w-12 h-12 text-[var(--color-3)]" />
                        </motion.div>
                    </div>

                    {/* Content Section */}
                    <div className="lg:w-1/2">
                        <motion.span
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            className="text-[var(--color-3)] font-bold uppercase tracking-widest text-sm mb-4 block"
                        >
                            The Science of Lineage Karma
                        </motion.span>
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            className="text-4xl md:text-5xl font-serif text-[var(--foreground)] mb-8 leading-tight tracking-widest"
                        >
                            How DNA Astrology <br />
                            <span className="italic text-[var(--color-3)] tracking-widest">Transforms Your Life</span>
                        </motion.h2>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                            {features.map((feature, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ delay: i * 0.1 }}
                                    className="flex flex-col gap-4"
                                >
                                    <div className="w-12 h-12 bg-[var(--color-1)]/30 rounded-xl flex items-center justify-center text-[var(--color-3)]">
                                        <feature.icon className="w-6 h-6" />
                                    </div>
                                    <h3 className="text-xl font-bold text-[var(--foreground)] tracking-wide">
                                        {feature.title}
                                    </h3>
                                    <p className="text-[var(--color-4)] text-sm leading-relaxed">
                                        {feature.desc}
                                    </p>
                                </motion.div>
                            ))}
                        </div>

                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="mt-12 btn btn-primary px-10 py-4 text-lg"
                        >
                            Explore Your Lineage
                        </motion.button>
                    </div>
                </div>
            </div>
        </section>
    );
}
