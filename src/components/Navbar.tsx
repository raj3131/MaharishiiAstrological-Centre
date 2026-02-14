"use client";

import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { Menu, X, Facebook, Instagram, Twitter, Compass, MessageCircle } from "lucide-react";
import { useState, useEffect } from "react";
import Link from "next/link";

export default function Navbar() {
    const { scrollY } = useScroll();
    const [isOpen, setIsOpen] = useState(false);
    const [hasScrolled, setHasScrolled] = useState(false);

    useEffect(() => {
        return scrollY.onChange((latest) => {
            setHasScrolled(latest > 50);
        });
    }, [scrollY]);

    const navBackground = useTransform(
        scrollY,
        [0, 50],
        ["rgba(255, 253, 247, 0)", "rgba(255, 253, 247, 0.95)"] // Warm white with transparency
    );

    const navShadow = useTransform(
        scrollY,
        [0, 50],
        ["none", "0 10px 30px -10px rgba(164, 108, 76, 0.1)"] // Soft brown shadow
    );

    return (
        <motion.nav
            style={{ background: navBackground, boxShadow: navShadow, backdropFilter: hasScrolled ? "blur(12px)" : "blur(0px)" }}
            className="fixed top-0 left-0 right-0 z-50 h-24 flex items-center transition-all duration-300 border-b border-transparent data-[scrolled=true]:border-[var(--color-2)]/20"
            data-scrolled={hasScrolled}
        >
            <div className="container flex items-center justify-between">
                {/* Animated Logo */}
                <Link href="/" className="group relative z-50">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="flex items-center gap-3"
                    >
                        {/* Vastu Logo Mark */}
                        <div className="w-10 h-10 bg-[var(--color-3)] text-white rounded-lg flex items-center justify-center font-bold text-xl group-hover:rotate-45 transition-transform shadow-md">
                            <Compass className="w-6 h-6 animate-pulse" />
                        </div>
                        <div className="flex flex-col leading-tight">
                            <span className="text-xl font-bold tracking-widest text-[var(--foreground)] font-serif">Maharishii</span>
                            <span className="text-sm font-medium text-[var(--color-3)] -mt-1 font-serif uppercase tracking-[0.2em]">Astrological Centre</span>
                        </div>
                    </motion.div>
                </Link>

                {/* Desktop Menu */}
                <div className="hidden lg:flex items-center gap-10">
                    {["Services", "Sacred Tools", "Horoscope", "About"].map((item, i) => (
                        <motion.div
                            key={item}
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 * i }}
                        >
                            <Link
                                href={`#${item.toLowerCase().replace(' ', '-')}`}
                                className="text-base font-medium text-[var(--foreground)] hover:text-[var(--color-3)] transition-colors relative group py-2 tracking-wide"
                            >
                                {item}
                                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[var(--color-3)] transition-all duration-300 group-hover:w-full" />
                            </Link>
                        </motion.div>
                    ))}
                </div>

                {/* Actions */}
                <div className="hidden lg:flex items-center gap-6">
                    <div className="flex gap-4 text-[var(--color-4)] hover:text-[var(--color-3)] transition-colors">
                        <Facebook className="w-5 h-5 cursor-pointer hover:text-[#1877F2] transition-colors" />
                        <Instagram className="w-5 h-5 cursor-pointer hover:text-[#E4405F] transition-colors" />
                        <Twitter className="w-5 h-5 cursor-pointer hover:text-[#1DA1F2] transition-colors" />
                    </div>

                    <a
                        href="https://wa.me/919876543210"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-primary px-6 py-2 h-12 text-sm uppercase tracking-wide shadow-md flex items-center gap-2"
                    >
                        <MessageCircle className="w-5 h-5 fill-current" />
                        Consult Now
                    </a>
                </div>

                {/* Mobile Toggle */}
                <motion.button
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="lg:hidden z-50 p-2 text-[var(--foreground)] hover:text-[var(--color-3)] transition-colors"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
                </motion.button>

                {/* Mobile Menu Overlay */}
                <AnimatePresence>
                    {isOpen && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            className="fixed inset-0 bg-[#FFFDF7] z-[60] flex flex-col items-center justify-center gap-6 lg:hidden"
                        >
                            <div className="absolute inset-0 bg-[#FFFDF7] pointer-events-none" />

                            {["Services", "Sacred Tools", "Horoscope", "About", "Contact"].map((item, i) => (
                                <motion.div
                                    key={item}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.2 + (0.1 * i) }}
                                    className="z-10"
                                >
                                    <Link
                                        href={`#${item.toLowerCase().replace(' ', '-')}`}
                                        onClick={() => setIsOpen(false)}
                                        className="text-4xl font-bold text-[var(--foreground)] hover:text-[var(--color-3)] transition-colors tracking-widest font-serif"
                                    >
                                        {item}
                                    </Link>
                                </motion.div>
                            ))}

                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.7 }}
                                className="z-10 mt-4 px-6 w-full"
                            >
                                <a
                                    href="https://wa.me/919876543210"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="btn btn-primary w-full py-4 text-xl flex items-center justify-center gap-3"
                                >
                                    <MessageCircle className="w-6 h-6 fill-current" />
                                    Contact on WhatsApp
                                </a>
                            </motion.div>

                            <div className="mt-8 flex gap-8 z-10 text-[var(--color-4)]">
                                <Facebook className="w-8 h-8 hover:text-[var(--color-3)] transition-colors" />
                                <Instagram className="w-8 h-8 hover:text-[var(--color-3)] transition-colors" />
                                <Twitter className="w-8 h-8 hover:text-[var(--color-3)] transition-colors" />
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </motion.nav>
    );
}
