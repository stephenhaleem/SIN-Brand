import { useState, useRef, useEffect, useMemo } from "react";
import { gsap } from "gsap";
import { Product } from "@/types/product";

interface ProductCardProps {
  product: Product;
  onClick: () => void;
}

const ProductCard = ({ product, onClick }: ProductCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const [selectedColor, setSelectedColor] = useState(product.colors[0]);
  const cardRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);

  // Get current color's image
  const displayImage = useMemo(() => {
    if (product.colorVariants) {
      const variant = product.colorVariants.find(
        (v) => v.color === selectedColor
      );
      return variant ? variant.images[0] : product.images[0];
    }
    return product.images[0];
  }, [product, selectedColor]);

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
      className="product-card cursor-pointer border-2 border-border bg-card hover:bg-foreground transition-all duration-700 group shadow-premium hover:shadow-premium-lg transform perspective-1000 w-full max-w-[320px] sm:max-w-[300px] mx-auto"
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="aspect-square overflow-hidden relative">
        <img
          ref={imageRef}
          src={displayImage}
          alt={product.name}
          className="w-full h-full object-cover"
        />
        {/* Premium Overlay */}
        <div
          ref={overlayRef}
          className="absolute inset-0 bg-black/0 group-hover:bg-black/20 opacity-0 transition-all duration-500"
        />
        {/* Corner Elements */}
        <div className="absolute top-3 left-3 w-4 h-4 border-l-2 border-t-2 border-foreground/70 opacity-0 group-hover:border-background group-hover:opacity-100 transition-all duration-300"></div>
        <div className="absolute top-3 right-3 w-4 h-4 border-r-2 border-t-2 border-foreground/70 opacity-0 group-hover:border-background group-hover:opacity-100 transition-all duration-300"></div>
        <div className="absolute bottom-3 left-3 w-4 h-4 border-l-2 border-b-2 border-foreground/70 opacity-0 group-hover:border-background group-hover:opacity-100 transition-all duration-300"></div>
        <div className="absolute bottom-3 right-3 w-4 h-4 border-r-2 border-b-2 border-foreground/70 opacity-0 group-hover:border-background group-hover:opacity-100 transition-all duration-300"></div>
      </div>

      <div className="p-5 relative">
        <div className="relative z-10 space-y-3">
          <h3 className="text-sm font-black mb-2 tracking-widest uppercase text-card-foreground group-hover:text-primary-foreground transition-colors duration-300">
            {product.name}
          </h3>
          <p className="text-lg font-black text-card-foreground group-hover:text-primary-foreground transition-colors duration-300">
            {formatPrice(product.price)}
          </p>
          <p className="text-xs text-muted-foreground group-hover:text-primary-foreground/80 transition-colors duration-300 line-clamp-2 leading-relaxed">
            {product.description}
          </p>

          <div className="pt-3 border-t-2 border-border group-hover:border-primary-foreground/30 transition-colors duration-300">
            <div className="flex justify-between items-center">
              <p className="text-[10px] tracking-widest font-bold uppercase text-muted-foreground group-hover:text-primary-foreground/70 transition-colors duration-300">
                {product.colors.length} colors • {product.sizes.length} sizes
              </p>
              <div className="flex gap-1.5">
                {product.colors.map((color) => (
                  <button
                    key={color}
                    onClick={(e) => {
                      e.stopPropagation();
                      setSelectedColor(color);
                    }}
                    className={`w-4 h-4 rounded-full border-2 transition-all ${
                      selectedColor === color
                        ? "ring-2 ring-offset-1 ring-primary scale-125"
                        : "hover:scale-110"
                    }`}
                    style={{ backgroundColor: color.toLowerCase() }}
                    title={color}
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
