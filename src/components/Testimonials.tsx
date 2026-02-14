"use client";

import { motion } from "framer-motion";
import { Star, ArrowRight, Quote } from "lucide-react";
import Image from "next/image";

const testimonials = [
    { id: 1, name: "Dr. Lakshmi S.", role: "Ayurvedic Practitioner", image: "https://randomuser.me/api/portraits/women/44.jpg", text: "The planetary yantra I purchased significantly calmed the energy in my clinic. Patients feel more at peace immediately." },
    { id: 2, name: "Rajiv Malhotra", role: "Real Estate Developer", image: "https://randomuser.me/api/portraits/men/32.jpg", text: "Vastu corrections made by this team during our site planning phase prevented major obstacles. Highly recommended for accuracy." },
    { id: 3, name: "Simran Kaur", role: "Yoga Instructor", image: "https://randomuser.me/api/portraits/women/68.jpg", text: "My horoscope reading was terrifyingly accurate. The remedial gemstone suggested has brought mental clarity I've never felt before." },
];

export default function Testimonials() {
    return (
        <section id="testimonials" className="py-24 bg-[var(--background)] relative overflow-hidden">
            {/* Decorative blurred circles - Sun/Moon */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[var(--color-1)]/30 rounded-full blur-[120px] translate-x-1/2 -translate-y-1/2 animate-pulse" />
            <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[var(--color-2)]/20 rounded-full blur-[100px] -translate-x-1/2 translate-y-1/2" />

            <div className="container relative z-10">
                <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                    >
                        <div className="flex items-center gap-2 mb-4">
                            <Star className="w-4 h-4 text-[var(--color-3)] fill-current" />
                            <span className="text-[var(--color-3)] font-bold uppercase tracking-widest text-xs">Client Karma</span>
                        </div>
                        <h2 className="heading-xl text-[var(--foreground)] w-full max-w-2xl leading-none font-serif">
                            Blessed by the <br /><span className="text-gradient italic">Community</span>
                        </h2>
                    </motion.div>

                    <div className="flex gap-4">
                        <div className="w-12 h-12 rounded-full border border-[var(--color-2)] flex items-center justify-center text-[var(--color-3)] hover:bg-[var(--color-3)] hover:text-white transition-all cursor-pointer">
                            <ArrowRight className="w-5 h-5 rotate-180" />
                        </div>
                        <div className="w-12 h-12 rounded-full bg-[var(--color-3)] text-white flex items-center justify-center hover:scale-110 transition-transform cursor-pointer shadow-lg">
                            <ArrowRight className="w-5 h-5" />
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {testimonials.map((testimonial, index) => (
                        <motion.div
                            key={testimonial.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.2 }}
                            viewport={{ once: true }}
                            className="relative bg-[var(--card-bg)]/50 p-8 rounded-t-3xl rounded-br-3xl border border-[var(--color-3)]/10 hover:border-[var(--color-3)]/40 transition-all duration-500 backdrop-blur-md group hover:bg-[var(--card-bg)] hover:shadow-2xl"
                        >
                            <Quote className="absolute top-6 right-6 w-10 h-10 text-[var(--color-3)]/20 group-hover:text-[var(--color-3)]/40 transition-colors rotate-180" />

                            <div className="flex items-center gap-4 mb-8">
                                <div className="relative w-14 h-14 rounded-full p-[2px] bg-gradient-to-tr from-[var(--color-3)] to-[var(--color-2)]">
                                    <div className="w-full h-full rounded-full overflow-hidden relative bg-[var(--background)]">
                                        <Image
                                            src={testimonial.image}
                                            alt={testimonial.name}
                                            fill
                                            className="object-cover"
                                        />
                                    </div>
                                </div>
                                <div>
                                    <h4 className="font-bold text-[var(--foreground)] font-serif tracking-wide">{testimonial.name}</h4>
                                    <p className="text-xs text-[var(--color-3)] uppercase tracking-wider font-semibold">{testimonial.role}</p>
                                </div>
                            </div>

                            <p className="text-[var(--color-4)] leading-relaxed font-light italic relative z-10">
                                "{testimonial.text}"
                            </p>

                            <div className="mt-6 flex gap-1">
                                {[1, 2, 3, 4, 5].map(i => (
                                    <Star key={i} className="w-3 h-3 text-[var(--color-5)] fill-current" />
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
