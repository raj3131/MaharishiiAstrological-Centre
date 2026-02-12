"use client";

import { motion } from "framer-motion";
import { ArrowRight, Play, Sparkles, Moon } from "lucide-react";

export default function Hero() {
    return (
        <section className="min-h-screen pt-32 flex items-center justify-center relative overflow-hidden bg-[var(--background)] text-[var(--foreground)]">
            {/* Background Texture */}
            <div className="absolute inset-0 z-0 bg-gradient-animate pointer-events-none opacity-40" />
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cream-pixels.png')] opacity-30 pointer-events-none" />

            {/* Rotating Background Mandala - Warm tones */}
            <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 120, repeat: Infinity, ease: "linear" }}
                className="absolute -top-[20%] -right-[10%] w-[800px] h-[800px] rounded-full border border-[var(--color-1)] opacity-30 z-0 border-dashed"
            />
            <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 180, repeat: Infinity, ease: "linear" }}
                className="absolute -top-[15%] -right-[5%] w-[600px] h-[600px] rounded-full border border border-[var(--color-2)] opacity-30 z-0"
            />

            <div className="container relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="text-left space-y-8"
                >
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/60 border border-[var(--color-3)]/30 text-[var(--color-3)] rounded-full text-sm font-bold shadow-sm backdrop-blur-sm">
                        <Sparkles className="w-4 h-4 fill-current animate-pulse text-[var(--color-2)]" />
                        <span className="tracking-wider uppercase text-xs">Pioneer in DNA Astrology</span>
                    </div>

                    <h1 className="heading-xl tracking-widest text-[var(--foreground)] leading-tight font-serif">
                        Decode Your <br />
                        <span className="text-gradient font-serif italic tracking-widest">Genetic Karma</span> <br />
                        With DNA Astrology
                    </h1>

                    <p className="text-xl text-[var(--color-4)] max-w-lg font-medium leading-relaxed">
                        Unveil the cosmic blueprint hidden in your lineage. Maharishii Astrological Centre specializes in DNA Astrology to heal ancestral patterns and align your genetic destiny.
                    </p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                        className="flex flex-wrap gap-4"
                    >
                        <button className="btn btn-primary group px-8 py-4 text-lg">
                            DNA Karma Analysis
                            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </button>
                        <button className="flex items-center gap-4 group px-6 py-4 rounded-full hover:bg-[var(--color-1)]/20 border border-transparent hover:border-[var(--color-3)]/30 transition-all cursor-pointer">
                            <div className="w-12 h-12 bg-[var(--color-2)]/10 rounded-full flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform">
                                <Play className="w-5 h-5 ml-1 fill-[var(--color-3)] text-[var(--color-3)]" />
                            </div>
                            <span className="font-bold text-[var(--foreground)] group-hover:text-[var(--color-3)] transition-colors tracking-wide">Watch Rituals</span>
                        </button>
                    </motion.div>

                    <div className="flex items-center gap-8 pt-8 border-t border-[var(--color-2)]/20">
                        <div>
                            <h4 className="text-3xl font-bold text-[var(--foreground)] font-serif">10k+</h4>
                            <p className="text-sm text-[var(--color-4)] uppercase tracking-wider">Kundalis Read</p>
                        </div>
                        <div>
                            <h4 className="text-3xl font-bold text-[var(--foreground)] font-serif">99%</h4>
                            <p className="text-sm text-[var(--color-4)] uppercase tracking-wider">Alignment</p>
                        </div>
                        <div>
                            <h4 className="text-3xl font-bold text-[var(--foreground)] font-serif">Vedic</h4>
                            <p className="text-sm text-[var(--color-4)] uppercase tracking-wider">Certified</p>
                        </div>
                    </div>
                </motion.div>

                {/* Hero Visual - Mystical/Astrological */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1.2, type: "spring" }}
                    className="relative h-[600px] w-full hidden lg:flex items-center justify-center"
                >
                    {/* Central Planet / Crystal Ball visual */}
                    <div className="relative w-[500px] h-[500px]">
                        {/* Glowing Aura */}
                        <div className="absolute inset-0 bg-gradient-to-r from-[var(--color-1)] to-[var(--color-2)] rounded-full blur-[80px] opacity-30 animate-pulse" />

                        {/* Main Image Container */}
                        <div className="absolute inset-4 rounded-full overflow-hidden border-4 border-white/80 shadow-2xl ring-1 ring-[var(--color-5)]">
                            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1599707367072-cd6ad6e33258?q=80&w=1200&auto=format&fit=crop')] bg-cover bg-center hover:scale-110 transition-transform duration-[10s]" />
                        </div>

                        {/* Orbiting Elements */}
                        <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                            className="absolute inset-0 rounded-full border border-[var(--color-3)]/20 border-dotted"
                        >
                            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-[var(--color-3)] rounded-full shadow-md border border-white" />
                        </motion.div>

                        <motion.div
                            animate={{ rotate: -360 }}
                            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                            className="absolute inset-12 rounded-full border border border-[var(--color-2)]/30 border-dashed"
                        >
                            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-8 h-8 bg-white rounded-full shadow-md flex items-center justify-center border border-[var(--color-2)]">
                                <Moon className="w-4 h-4 text-[var(--color-3)] fill-current" />
                            </div>
                        </motion.div>

                        {/* Floating Card */}
                        <motion.div
                            animate={{ y: [0, -15, 0] }}
                            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                            className="absolute bottom-10 -left-10 bg-white/90 backdrop-blur-xl border border-[var(--color-1)] p-6 rounded-2xl shadow-xl max-w-[240px]"
                        >
                            <div className="flex gap-1 text-[var(--color-5)] mb-2">★★★★★</div>
                            <p className="text-sm font-medium text-[var(--foreground)] italic">"The planetary alignment guidance changed my career path completely."</p>
                            <p className="text-muted mt-2 text-right">- Anjali R.</p>
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
