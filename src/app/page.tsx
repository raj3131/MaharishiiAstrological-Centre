import Hero from "@/components/Hero";
import ProductShowcase from "@/components/ProductShowcase";
import Services from "@/components/Services";
import Testimonials from "@/components/Testimonials";
import DNAExplainer from "@/components/DNAExplainer";
import { getProducts } from "@/lib/db";

export default function Home() {
  const products = getProducts();

  return (
    <div className="relative">
      <Hero />
      <Services />
      <DNAExplainer />
      <ProductShowcase products={products} />
      <Testimonials />
    </div>
  );
}
