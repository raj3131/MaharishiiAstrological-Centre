"use client";

import { motion, Variants } from "framer-motion";
import { Star, ShoppingBag, ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface Product {
    id: number;
    name: string;
    price: number;
    image: string;
    category: string;
    description?: string;
}

interface ProductShowcaseProps {
    products: Product[];
}

export default function ProductShowcase({ products = [] }: ProductShowcaseProps) {

    const containerVariants: Variants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const itemVariants: Variants = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100 } }
    };

    return (
        <section id="products" className="py-24 bg-[var(--color-1)]/10 relative">
            <div className="container">

                <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-4 border-b border-[var(--color-3)]/10 pb-8">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="max-w-2xl"
                    >
                        <span className="text-[var(--color-3)] font-bold uppercase tracking-widest text-sm mb-2 block">Sacred Artifacts</span>
                        <h2 className="heading-xl text-[var(--foreground)] mb-6 leading-none font-serif tracking-widest">Conduit of <br /><span className="text-gradient italic tracking-widest">Cosmic Energy</span></h2>
                        <p className="text-[var(--color-4)] text-lg font-light">
                            Energized tools crafted during auspicious planetary transits to amplify your aura.
                        </p>
                    </motion.div>

                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        className="hidden md:flex items-center gap-2 text-[var(--color-3)] font-bold hover:text-[var(--color-2)] transition-colors text-lg border-b-2 border-[var(--color-2)] pb-1"
                    >
                        View Catalog <ArrowUpRight className="w-5 h-5" />
                    </motion.button>
                </div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                    className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8"
                >
                    {products.map((product) => (
                        <Link href={`/products/${product.id}`} key={product.id}>
                            <motion.div variants={itemVariants} className="group relative bg-[var(--card-bg)] rounded-3xl overflow-hidden border border-[var(--color-3)]/10 hover:border-[var(--color-3)]/40 transition-all duration-500 hover:shadow-[0_20px_40px_-5px_rgba(0,0,0,0.5)] cursor-pointer">

                                {/* Image */}
                                <div className="h-[200px] md:h-[280px] w-full relative overflow-hidden bg-[var(--color-1)]/20">
                                    <Image
                                        src={product.image}
                                        alt={product.name}
                                        fill
                                        className="object-cover transition-transform duration-700 group-hover:scale-110 opacity-100"
                                    />

                                    {/* Floating Cart Button */}
                                    <button className="absolute bottom-4 right-4 bg-[var(--background)] text-[var(--foreground)] p-3 rounded-full shadow-lg translate-y-20 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 hover:bg-[var(--color-3)] hover:text-[var(--background)] z-20 border border-[var(--color-3)]/20">
                                        <ShoppingBag className="w-5 h-5" />
                                    </button>

                                    {/* Badge */}
                                    <div className="absolute top-4 left-4 bg-[var(--card-bg)]/90 backdrop-blur-md border border-[var(--color-3)]/20 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider text-[var(--color-3)] shadow-sm">
                                        {product.category}
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="p-4 md:p-6 relative bg-[var(--card-bg)]">
                                    <div className="flex flex-col gap-1 mb-2">
                                        <h3 className="text-lg md:text-xl font-serif text-[var(--foreground)] group-hover:text-[var(--color-3)] transition-colors cursor-pointer tracking-wide truncate">{product.name}</h3>
                                        <div className="flex justify-between items-center">
                                            <span className="text-base md:text-lg font-bold text-[var(--color-3)] font-serif">₹{product.price}</span>
                                            <div className="flex items-center gap-1 text-[var(--color-3)] text-xs">
                                                <Star className="w-3 h-3 fill-current" />
                                                <span>4.9</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="w-full h-[1px] bg-gradient-to-r from-[var(--color-3)]/20 to-transparent my-3 md:my-4" />
                                    <p className="text-[var(--color-4)] text-[10px] md:text-sm line-clamp-1 italic font-light">
                                        Blessed for purity and potency.
                                    </p>
                                </div>
                            </motion.div>
                        </Link>
                    ))}
                </motion.div>

                <div className="mt-12 text-center md:hidden">
                    <button className="btn btn-outline w-full py-4 font-bold text-lg">View All Products</button>
                </div>
            </div>
        </section>
    );
}
