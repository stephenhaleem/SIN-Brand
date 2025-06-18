import { useState, useRef, useEffect } from "react";
import { gsap } from "gsap";
import { Product } from "@/types/product";

interface ProductCardProps {
  product: Product;
  onClick: () => void;
}

const ProductCard = ({ product, onClick }: ProductCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (cardRef.current) {
      const handleMouseEnter = () => {
        gsap.to(cardRef.current, {
          scale: 1.05,
          rotateY: 5,
          z: 50,
          duration: 0.4,
          ease: "power2.out",
        });
        if (imageRef.current) {
          gsap.to(imageRef.current, {
            scale: 1.2,
            duration: 0.6,
            ease: "power2.out",
          });
        }
        if (overlayRef.current) {
          gsap.to(overlayRef.current, {
            opacity: 1,
            duration: 0.3,
          });
        }
      };

      const handleMouseLeave = () => {
        gsap.to(cardRef.current, {
          scale: 1,
          rotateY: 0,
          z: 0,
          duration: 0.4,
          ease: "power2.out",
        });
        if (imageRef.current) {
          gsap.to(imageRef.current, {
            scale: 1,
            duration: 0.6,
            ease: "power2.out",
          });
        }
        if (overlayRef.current) {
          gsap.to(overlayRef.current, {
            opacity: 0,
            duration: 0.3,
          });
        }
      };

      cardRef.current.addEventListener("mouseenter", handleMouseEnter);
      cardRef.current.addEventListener("mouseleave", handleMouseLeave);

      return () => {
        if (cardRef.current) {
          cardRef.current.removeEventListener("mouseenter", handleMouseEnter);
          cardRef.current.removeEventListener("mouseleave", handleMouseLeave);
        }
      };
    }
  }, []);

  const formatPrice = (price: number) => {
    return `₦${price.toLocaleString()}`;
  };

  return (
    <div
      ref={cardRef}
      className="product-card cursor-pointer border border-black/10 bg-white hover:bg-black transition-all duration-700 group shadow-md transform perspective-1000 w-full max-w-[300px] sm:max-w-[280px] mx-auto rounded-lg"
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="aspect-square overflow-hidden relative rounded-t-lg">
        <img
          ref={imageRef}
          src={product.images[0]}
          alt={product.name}
          className="w-full h-full object-cover"
        />
        {/* Overlay with clean effect */}
        <div
          ref={overlayRef}
          className="absolute inset-0 bg-black/0 group-hover:bg-black/10 opacity-0 transition-all duration-300"
        />
        {/* Animated corner elements */}
        <div className="absolute top-2 left-2 w-3 h-3 border-l border-t border-black/70 opacity-0 group-hover:border-white/70 group-hover:opacity-100 transition-all duration-300"></div>
        <div className="absolute top-2 right-2 w-3 h-3 border-r border-t border-black/70 opacity-0 group-hover:border-white/70 group-hover:opacity-100 transition-all duration-300"></div>
        <div className="absolute bottom-2 left-2 w-3 h-3 border-l border-b border-black/70 opacity-0 group-hover:border-white/70 group-hover:opacity-100 transition-all duration-300"></div>
        <div className="absolute bottom-2 right-2 w-3 h-3 border-r border-b border-black/70 opacity-0 group-hover:border-white/70 group-hover:opacity-100 transition-all duration-300"></div>
      </div>

      <div className="p-4 relative">
        <div className="relative z-10">
          <h3 className="text-sm font-bold mb-2 tracking-wider text-black group-hover:text-white transition-colors duration-300">
            {product.name}
          </h3>
          <p className="text-base font-bold mb-2 text-black/90 group-hover:text-white transition-colors duration-300">
            {formatPrice(product.price)}
          </p>
          <p className="text-xs text-black/70 group-hover:text-white/80 transition-colors duration-300 mb-3 line-clamp-2">
            {product.description}
          </p>

          <div className="mt-2 pt-2 border-t border-black/10 group-hover:border-white/20 transition-colors duration-300">
            <div className="flex justify-between items-center">
              <p className="text-[10px] tracking-wide font-medium text-black/50 group-hover:text-white/70 transition-colors duration-300">
                {product.colors.length} colors • {product.sizes.length} sizes
              </p>
              <div className="flex gap-1">
                {product.colors.slice(0, 2).map((color, index) => (
                  <div
                    key={index}
                    className={`w-1.5 h-1.5 rounded-full border ${
                      color === "Black"
                        ? "bg-black border-black group-hover:border-white"
                        : color === "White"
                        ? "bg-white border-black/20 group-hover:border-white"
                        : "bg-gray-500 border-gray-400"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
