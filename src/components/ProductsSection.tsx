import { useRef, useEffect, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ProductCard from "./ProductCard";
import ProductModal from "./ProductModal";
import { Product } from "@/types/product";

gsap.registerPlugin(ScrollTrigger);

interface ProductsSectionProps {
  products: Product[];
}

const ProductsSection = ({ products }: ProductsSectionProps) => {
  const productsRef = useRef<HTMLDivElement>(null);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [hoveredProduct, setHoveredProduct] = useState<string | null>(null);

  useEffect(() => {
    if (productsRef.current) {
      const productCards =
        productsRef.current.querySelectorAll(".product-card");
      gsap.fromTo(
        productCards,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: productsRef.current,
            start: "top 70%",
            end: "bottom 30%",
            toggleActions: "play none none reverse",
          },
        }
      );
    }

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <section
      id="shop"
      ref={productsRef}
      className="py-20 md:py-32 px-6 md:px-12 bg-secondary/30"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 md:mb-24">
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-black mb-6 tracking-tighter text-foreground font-shadows">
            THE COLLECTION
          </h2>
          <div className="w-32 md:w-48 h-1 bg-foreground mx-auto mb-8"></div>
          <p className="text-center text-muted-foreground text-xl md:text-2xl max-w-3xl mx-auto font-light leading-relaxed">
            Handpicked pieces forged in the spirit of rebellion.
            <span className="block mt-2 font-medium">
              Each item carries the essence of streetwear culture.
            </span>
          </p>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 justify-items-center">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onClick={() => setSelectedProduct(product)}
            />
          ))}
        </div>
      </div>

      {/* Product Modal with Color Variant Switching */}
      {selectedProduct && (
        <ProductModal
          product={selectedProduct}
          onClose={() => setSelectedProduct(null)}
        />
      )}
    </section>
  );
};

export default ProductsSection;
