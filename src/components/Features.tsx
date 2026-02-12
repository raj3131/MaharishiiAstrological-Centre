"use client";

import { motion } from "framer-motion";
import { Zap, Shield, Globe } from "lucide-react";

export default function Features() {
    const features = [
        { icon: Zap, title: "Fast & Efficient", desc: "Experience rapid energy shifts with our geometrically perfected tools." },
        { icon: Shield, title: "Scientifically Proven", desc: "Our products are backed by modern physics and ancient architectural science." },
        { icon: Globe, title: "Global Shipping", desc: "We deliver positive energy to every corner of the world with secure packaging." }
    ];

    return (
        <section className="py-20 bg-[var(--background)]">
            <div className="container grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                {features.map((feature, index) => {
                    const Icon = feature.icon;
                    return (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.2, duration: 0.5 }}
                            viewport={{ once: true, margin: "-50px" }}
                            className="card p-8 flex flex-col items-center group bg-white hover:bg-[var(--secondary)] transition-colors shadow-sm"
                        >
                            <div className="w-16 h-16 bg-[var(--primary)]/10 rounded-full flex items-center justify-center mb-6 text-[var(--primary)] group-hover:scale-110 transition-transform">
                                <Icon className="w-8 h-8" />
                            </div>
                            <h3 className="text-xl font-bold mb-4 text-[var(--foreground)]">{feature.title}</h3>
                            <p className="text-[var(--muted)] font-medium leading-relaxed">{feature.desc}</p>
                        </motion.div>
                    );
                })}
            </div>
        </section>
    );
}
