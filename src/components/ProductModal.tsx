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

  useEffect(() => {
    if (isHovered && cardRef.current) {
      gsap.to(cardRef.current, {
        scale: 1.03,
        duration: 0.3,
        ease: "power2.out",
      });
    } else if (cardRef.current) {
      gsap.to(cardRef.current, {
        scale: 1,
        duration: 0.3,
        ease: "power2.out",
      });
    }
  }, [isHovered]);

  return (
    <div
      ref={cardRef}
      className={`relative rounded-xl overflow-hidden shadow-lg transition cursor-pointer ${
        product.available === false
          ? "opacity-60 cursor-not-allowed"
          : "hover:shadow-xl"
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      // 🚫 Block modal opening if product unavailable
      onClick={() => {
        if (product.available === false) return;
        onClick();
      }}
    >
      {/* Unavailable badge */}
      {product.available === false && (
        <span className="absolute top-2 left-2 bg-red-600 text-white text-xs font-bold px-2 py-1 rounded-md z-10">
          Unavailable
        </span>
      )}

      {/* Product Image */}
      <img
        src={product.images[0]}
        alt={product.name}
        className="w-full h-64 object-cover"
      />

      {/* Product Info */}
      <div className="p-4 bg-white">
        <h3 className="text-lg font-semibold">{product.name}</h3>
        <p className="text-gray-600 text-sm">{product.description}</p>
        <p className="mt-2 font-bold text-gray-900">
          {product.price > 0 ? `₦${product.price.toLocaleString()}` : "—"}
        </p>
      </div>
    </div>
  );
};

export default ProductCard;
