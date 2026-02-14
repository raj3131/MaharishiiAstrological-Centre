"use client";

import { motion } from "framer-motion";
import { Sparkles, Moon } from "lucide-react";

export default function Hero() {
    return (
        <section className="min-h-screen pt-24 pb-12 flex items-center justify-center relative bg-[var(--background)] text-[var(--foreground)]">
            {/* Background Wrapper with isolated overflow */}
            <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
                {/* Background Texture */}
                <div className="absolute inset-0 bg-gradient-animate opacity-40" />
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cream-pixels.png')] opacity-30" />

                {/* Rotating Background Mandala - Warm tones */}
                <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 120, repeat: Infinity, ease: "linear" }}
                    className="absolute -top-[20%] -right-[10%] w-[800px] h-[800px] rounded-full border border-[var(--color-1)] opacity-30 border-dashed"
                />
                <motion.div
                    animate={{ rotate: -360 }}
                    transition={{ duration: 180, repeat: Infinity, ease: "linear" }}
                    className="absolute -top-[15%] -right-[5%] w-[600px] h-[600px] rounded-full border border border-[var(--color-2)] opacity-30"
                />
            </div>

            <div className="container relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="text-left space-y-4 md:space-y-6"
                >
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 md:px-4 md:py-2 bg-white/60 border border-[var(--color-3)]/30 text-[var(--color-3)] rounded-full text-[10px] md:text-sm font-bold shadow-sm backdrop-blur-sm">
                        <Sparkles className="w-3 h-3 md:w-4 md:h-4 fill-current animate-pulse text-[var(--color-2)]" />
                        <span className="tracking-wider uppercase">Pioneer in DNA Astrology</span>
                    </div>

                    <h1 className="heading-xl tracking-widest text-[var(--foreground)] leading-tight font-serif">
                        Decode Your <br />
                        <span className="text-gradient font-serif italic tracking-widest">Genetic Karma</span> <br />
                        With DNA Astrology
                    </h1>

                    <p className="text-base md:text-lg text-[var(--color-4)] max-w-lg font-medium leading-relaxed">
                        Unveil the cosmic blueprint hidden in your lineage. Maharishii Astrological Centre specializes in DNA Astrology to heal ancestral patterns and align your genetic destiny.
                    </p>

                    {/* Action buttons removed as requested */}

                    <div className="grid grid-cols-3 gap-2 md:gap-8 pt-6 border-t border-[var(--color-2)]/20">
                        <div>
                            <h4 className="text-lg md:text-3xl font-bold text-[var(--foreground)] font-serif">10k+</h4>
                            <p className="text-[10px] md:text-sm text-[var(--color-4)] uppercase tracking-wider">Kundalis</p>
                        </div>
                        <div>
                            <h4 className="text-lg md:text-3xl font-bold text-[var(--foreground)] font-serif">99%</h4>
                            <p className="text-[10px] md:text-sm text-[var(--color-4)] uppercase tracking-wider">Alignment</p>
                        </div>
                        <div>
                            <h4 className="text-lg md:text-3xl font-bold text-[var(--foreground)] font-serif">Vedic</h4>
                            <p className="text-[10px] md:text-sm text-[var(--color-4)] uppercase tracking-wider">Certified</p>
                        </div>
                    </div>
                </motion.div>

                {/* Hero Visual - Mystical/Astrological */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1, type: "spring" }}
                    className="relative h-[300px] sm:h-[400px] lg:h-[600px] w-full flex items-center justify-center"
                >
                    {/* Central Planet / Crystal Ball visual */}
                    <div className="relative w-[280px] h-[280px] sm:w-[500px] sm:h-[500px]">
                        {/* Glowing Aura */}
                        <div className="absolute inset-0 bg-gradient-to-r from-[var(--color-1)] to-[var(--color-2)] rounded-full blur-[40px] md:blur-[80px] opacity-30 animate-pulse" />

                        {/* Main Image Container */}
                        <div className="absolute inset-2 md:inset-4 rounded-full overflow-hidden border-2 border-[var(--color-2)] shadow-2xl ring-2 md:ring-4 ring-[var(--color-5)]/20">
                            <div className="absolute inset-0 bg-white">
                                <img
                                    src="/images/ae0dd8a0-7e68-498b-b41a-5ede03d89f7a.jpg"
                                    alt="DNA Astrology Master"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        </div>

                        {/* Orbiting Elements - Simplified for mobile */}
                        <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                            className="absolute inset-0 rounded-full border border-[var(--color-3)]/10 border-dotted"
                        />

                        <motion.div
                            animate={{ rotate: -360 }}
                            transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                            className="absolute inset-8 md:inset-12 rounded-full border border border-[var(--color-2)]/20 border-dashed"
                        />

                        {/* Floating Card - Hidden on very small screens or made smaller */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="absolute -bottom-4 -left-4 md:bottom-10 md:-left-10 bg-white/95 backdrop-blur-xl border border-[var(--color-1)] p-3 md:p-6 rounded-xl md:rounded-2xl shadow-xl max-w-[160px] md:max-w-[240px] z-20"
                        >
                            <div className="flex gap-1 text-[var(--color-5)] mb-1 text-[8px] md:text-xs">★★★★★</div>
                            <p className="text-[10px] md:text-sm font-medium text-[var(--foreground)] italic leading-tight">"The guidance changed my career path."</p>
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
