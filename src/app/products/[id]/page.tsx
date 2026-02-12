import { getProducts } from "@/lib/db";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Star, Check, ShieldCheck, Truck, MessageCircle } from "lucide-react";
import { notFound } from "next/navigation";

export default async function ProductDetail({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;
    const products = getProducts();
    const product = products.find((p) => p.id === Number(id));

    if (!product) {
        notFound();
    }

    return (
        <main className="min-h-screen pt-32 pb-20 bg-[var(--color-1)]/5">
            <div className="container max-w-6xl mx-auto px-4">
                <Link
                    href="/"
                    className="inline-flex items-center gap-2 text-[var(--color-3)] font-medium mb-8 hover:opacity-80 transition-opacity"
                >
                    <ArrowLeft className="w-4 h-4" /> Back to Store
                </Link>

                <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-[var(--color-2)]/20">
                    <div className="grid grid-cols-1 lg:grid-cols-2">

                        {/* Image Section */}
                        <div className="relative h-[400px] lg:h-[600px] bg-[var(--color-1)]/10">
                            <Image
                                src={product.image}
                                alt={product.name}
                                fill
                                className="object-cover"
                                priority
                            />
                            <div className="absolute top-6 left-6 bg-white/90 backdrop-blur px-4 py-1.5 rounded-full text-sm font-bold uppercase tracking-wider text-[var(--color-3)] shadow-sm">
                                {product.category}
                            </div>
                        </div>

                        {/* Content Section */}
                        <div className="p-8 lg:p-12 flex flex-col justify-center">
                            <div className="mb-6">
                                <div className="flex items-center gap-2 text-yellow-500 mb-2">
                                    <Star className="w-5 h-5 fill-current" />
                                    <Star className="w-5 h-5 fill-current" />
                                    <Star className="w-5 h-5 fill-current" />
                                    <Star className="w-5 h-5 fill-current" />
                                    <Star className="w-5 h-5 fill-current" />
                                    <span className="text-[var(--color-4)] text-sm ml-2 font-medium">(42 Reviews)</span>
                                </div>
                                <h1 className="heading-xl text-[var(--foreground)] mb-2">{product.name}</h1>
                                <p className="text-3xl font-bold text-[var(--color-5)] font-serif">₹{product.price}</p>
                            </div>

                            <div className="w-full h-[1px] bg-gray-100 my-6" />

                            <div className="prose prose-stone max-w-none text-[var(--color-4)] mb-8">
                                <p className="text-lg leading-relaxed">{product.description}</p>
                                <ul className="mt-6 space-y-3">
                                    <li className="flex items-center gap-3">
                                        <Check className="w-5 h-5 text-green-600 flex-shrink-0" />
                                        <span>Energized by authentic Vedic rituals</span>
                                    </li>
                                    <li className="flex items-center gap-3">
                                        <Check className="w-5 h-5 text-green-600 flex-shrink-0" />
                                        <span>High-quality materials for maximum potency</span>
                                    </li>
                                    <li className="flex items-center gap-3">
                                        <Check className="w-5 h-5 text-green-600 flex-shrink-0" />
                                        <span>Comes with usage instructions and mantra</span>
                                    </li>
                                </ul>
                            </div>

                            <div className="grid grid-cols-2 gap-4 mb-8">
                                <div className="bg-[var(--color-1)]/10 p-4 rounded-xl flex items-center gap-3">
                                    <ShieldCheck className="w-6 h-6 text-[var(--color-3)]" />
                                    <div>
                                        <p className="font-bold text-[var(--foreground)] text-sm">Authentic</p>
                                        <p className="text-xs text-[var(--color-4)]">100% Verified</p>
                                    </div>
                                </div>
                                <div className="bg-[var(--color-1)]/10 p-4 rounded-xl flex items-center gap-3">
                                    <Truck className="w-6 h-6 text-[var(--color-3)]" />
                                    <div>
                                        <p className="font-bold text-[var(--foreground)] text-sm">Shipping</p>
                                        <p className="text-xs text-[var(--color-4)]">Worldwide</p>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-auto">
                                <a
                                    href={`https://wa.me/919876543210?text=Hello, I am interested in your ${product.name} item (ID: ${product.id}).`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-full btn btn-primary py-4 text-center flex items-center justify-center gap-3 text-lg shadow-lg hover:shadow-xl transition-all"
                                >
                                    <MessageCircle className="w-6 h-6 fill-current" />
                                    Inquire on WhatsApp
                                </a>
                                <p className="text-center text-xs text-[var(--color-4)] mt-4">
                                    Worldwide Shipping • 100% Expert Guidance
                                </p>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
