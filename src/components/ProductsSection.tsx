
import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ProductCard from "./ProductCard";
import ThreeProductCard from "./ThreeProductCard";
import { Product } from "@/types/product";

gsap.registerPlugin(ScrollTrigger);

interface ProductsSectionProps {
  products: Product[];
  onProductSelect: (product: Product) => void;
}

const ProductsSection = ({ products, onProductSelect }: ProductsSectionProps) => {
  const productsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (productsRef.current) {
      const productCards = productsRef.current.querySelectorAll(".product-card");
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
    <section id="shop" ref={productsRef} className="py-10 md:py-20 px-4 md:px-6 bg-gray-50">
      <div className="text-center mb-8 md:mb-16">
        <h3 className="font-shadows text-2xl md:text-3xl font-bold mb-4 tracking-wider text-black">
          COLLECTION
        </h3>
        <div className="w-24 md:w-32 h-1 bg-black mx-auto mb-6 md:mb-8"></div>
        <p className="text-center text-gray-600 mb-8 md:mb-16 text-lg md:text-xl max-w-2xl mx-auto px-4">
          Handpicked pieces forged in the spirit of rebellion. Each item
          carries the essence of streetwear.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-7xl mx-auto justify-items-center">
        {products.map((product, index) => (
          <div key={product.id} className="relative group">
            <ProductCard
              product={product}
              onClick={() => onProductSelect(product)}
            />
            {index < 3 && (
              <div className="absolute inset-0 opacity-0 group-hover:opacity-30 transition-opacity duration-300 pointer-events-none">
                <ThreeProductCard />
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProductsSection;
