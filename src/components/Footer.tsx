"use client";

import { Facebook, Instagram, Twitter, Mail, MapPin, Phone } from "lucide-react";

export default function Footer() {
    return (
        <footer className="bg-[#1a1a1a] text-white pt-24 pb-12 rounded-t-[40px] mt-12">
            <div className="container">

                {/* Newsletter Section */}
                <div className="bg-[var(--primary)] rounded-3xl p-10 flex flex-col md:flex-row items-center justify-between gap-8 mb-20 shadow-2xl relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />

                    <div className="relative z-10">
                        <h3 className="text-3xl font-bold mb-2">Join the Energy Revolution</h3>
                        <p className="text-white/80">Get exclusive Vastu tips and early access to new artifacts.</p>
                    </div>

                    <div className="flex w-full md:w-auto gap-2 relative z-10">
                        <input
                            type="email"
                            placeholder="Enter your email"
                            className="px-6 py-4 bg-white/10 border border-white/20 rounded-full outline-none focus:bg-white/20 text-white placeholder:text-white/60 w-full md:w-80 backdrop-blur-sm"
                        />
                        <button className="px-8 py-4 bg-white text-[var(--primary)] font-bold rounded-full hover:bg-gray-100 transition-colors shadow-lg">
                            Subscribe
                        </button>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 border-b border-gray-800 pb-16">
                    <div className="space-y-6">
                        <h3 className="text-3xl font-bold tracking-tight">Maharishii<span className="text-[var(--primary)]"> Astrological Centre</span></h3>
                        <p className="text-gray-400 leading-relaxed">
                            Leading global experts in **DNA Astrology** and **Ancestral Karma healing**. We bridge ancient Vedic wisdom with lineage science to help you realign with your cosmic destiny.
                        </p>
                        <div className="flex gap-4">
                            <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-[var(--primary)] transition-colors group">
                                <Facebook className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors" />
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-[var(--primary)] transition-colors group">
                                <Instagram className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors" />
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-[var(--primary)] transition-colors group">
                                <Twitter className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors" />
                            </a>
                        </div>
                    </div>

                    <div>
                        <h4 className="font-bold mb-8 text-white text-lg">Quick Links</h4>
                        <ul className="space-y-4 text-gray-400">
                            <li><a href="#services" className="hover:text-[var(--primary)] transition-colors flex items-center gap-2"><span className="w-1 h-1 bg-[var(--primary)] rounded-full" /> Services</a></li>
                            <li><a href="#products" className="hover:text-[var(--primary)] transition-colors flex items-center gap-2"><span className="w-1 h-1 bg-[var(--primary)] rounded-full" /> Products</a></li>
                            <li><a href="#testimonials" className="hover:text-[var(--primary)] transition-colors flex items-center gap-2"><span className="w-1 h-1 bg-[var(--primary)] rounded-full" /> Testimonials</a></li>
                            <li><a href="#" className="hover:text-[var(--primary)] transition-colors flex items-center gap-2"><span className="w-1 h-1 bg-[var(--primary)] rounded-full" /> About Us</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-bold mb-8 text-white text-lg">Legal</h4>
                        <ul className="space-y-4 text-gray-400">
                            <li><a href="#" className="hover:text-[var(--primary)] transition-colors">Privacy Policy</a></li>
                            <li><a href="#" className="hover:text-[var(--primary)] transition-colors">Terms of Service</a></li>
                            <li><a href="#" className="hover:text-[var(--primary)] transition-colors">Shipping Policy</a></li>
                            <li><a href="#" className="hover:text-[var(--primary)] transition-colors">Refund Policy</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-bold mb-8 text-white text-lg">Contact Us</h4>
                        <ul className="space-y-6 text-gray-400">
                            <li className="flex items-start gap-4">
                                <MapPin className="w-6 h-6 text-[var(--primary)] shrink-0" />
                                <span>Mumbai, Maharashtra, India</span>
                            </li>
                            <li className="flex items-center gap-4">
                                <Phone className="w-5 h-5 text-[var(--primary)] shrink-0" />
                                <span>+91 98765 43210</span>
                            </li>
                            <li className="flex items-center gap-4">
                                <Mail className="w-5 h-5 text-[var(--primary)] shrink-0" />
                                <span>info@maharishiiastro.com</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-gray-500 text-sm">
                    <p>&copy; {new Date().getFullYear()} Maharishii Astrological Centre. All rights reserved.</p>
                    <p>Designed with Positive Energy.</p>
                </div>
            </div>
        </footer>
    );
}
