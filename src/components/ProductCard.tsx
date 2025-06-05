
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

  useEffect(() => {
    if (cardRef.current) {
      const handleMouseEnter = () => {
        gsap.to(cardRef.current, {
          scale: 1.02,
          duration: 0.3,
          ease: "power2.out"
        });
        if (imageRef.current) {
          gsap.to(imageRef.current, {
            scale: 1.1,
            duration: 0.5,
            ease: "power2.out"
          });
        }
      };

      const handleMouseLeave = () => {
        gsap.to(cardRef.current, {
          scale: 1,
          duration: 0.3,
          ease: "power2.out"
        });
        if (imageRef.current) {
          gsap.to(imageRef.current, {
            scale: 1,
            duration: 0.5,
            ease: "power2.out"
          });
        }
      };

      cardRef.current.addEventListener('mouseenter', handleMouseEnter);
      cardRef.current.addEventListener('mouseleave', handleMouseLeave);

      return () => {
        if (cardRef.current) {
          cardRef.current.removeEventListener('mouseenter', handleMouseEnter);
          cardRef.current.removeEventListener('mouseleave', handleMouseLeave);
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
      className="product-card cursor-pointer border-2 border-black bg-white hover:bg-black hover:text-white transition-colors duration-500 group shadow-lg"
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="aspect-square overflow-hidden">
        <img
          ref={imageRef}
          src={product.images[0]}
          alt={product.name}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2 tracking-wider">
          {product.name}
        </h3>
        <p className="text-lg font-bold mb-2">{formatPrice(product.price)}</p>
        <p className="text-sm opacity-70 group-hover:opacity-90 transition-opacity">
          {product.description}
        </p>
        <div className="mt-4 pt-4 border-t border-gray-200 group-hover:border-gray-600">
          <p className="text-xs tracking-wide font-medium">
            Available in {product.colors.length} colors • {product.sizes.length} sizes
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
