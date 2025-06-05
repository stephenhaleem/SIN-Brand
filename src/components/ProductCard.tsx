
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
          ease: "power2.out"
        });
        if (imageRef.current) {
          gsap.to(imageRef.current, {
            scale: 1.2,
            duration: 0.6,
            ease: "power2.out"
          });
        }
        if (overlayRef.current) {
          gsap.to(overlayRef.current, {
            opacity: 1,
            duration: 0.3
          });
        }
      };

      const handleMouseLeave = () => {
        gsap.to(cardRef.current, {
          scale: 1,
          rotateY: 0,
          z: 0,
          duration: 0.4,
          ease: "power2.out"
        });
        if (imageRef.current) {
          gsap.to(imageRef.current, {
            scale: 1,
            duration: 0.6,
            ease: "power2.out"
          });
        }
        if (overlayRef.current) {
          gsap.to(overlayRef.current, {
            opacity: 0,
            duration: 0.3
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
      className="product-card cursor-pointer border-2 border-red-600 bg-gradient-to-br from-gray-900 via-black to-red-950/30 hover:from-red-950 hover:via-gray-900 hover:to-black transition-all duration-700 group shadow-2xl transform perspective-1000 backdrop-blur-sm"
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="aspect-square overflow-hidden relative">
        <img
          ref={imageRef}
          src={product.images[0]}
          alt={product.name}
          className="w-full h-full object-cover"
        />
        {/* Overlay with grunge effect */}
        <div 
          ref={overlayRef}
          className="absolute inset-0 bg-gradient-to-t from-red-900/80 via-transparent to-black/30 opacity-0 transition-opacity duration-300"
        />
        {/* Animated corner elements */}
        <div className="absolute top-2 left-2 w-6 h-6 border-l-2 border-t-2 border-red-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        <div className="absolute top-2 right-2 w-6 h-6 border-r-2 border-t-2 border-red-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        <div className="absolute bottom-2 left-2 w-6 h-6 border-l-2 border-b-2 border-red-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        <div className="absolute bottom-2 right-2 w-6 h-6 border-r-2 border-b-2 border-red-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </div>
      
      <div className="p-6 relative">
        {/* Background glow effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-red-900/20 via-transparent to-red-900/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        
        <div className="relative z-10">
          <h3 className="text-xl font-bold mb-3 tracking-wider text-white group-hover:text-red-300 transition-colors duration-300">
            {product.name}
          </h3>
          <p className="text-2xl font-bold mb-3 text-red-400 group-hover:text-red-300">{formatPrice(product.price)}</p>
          <p className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors duration-300 mb-4">
            {product.description}
          </p>
          
          <div className="mt-6 pt-4 border-t border-red-900/50 group-hover:border-red-600/50 transition-colors duration-300">
            <div className="flex justify-between items-center">
              <p className="text-xs tracking-wide font-medium text-gray-500 group-hover:text-gray-400">
                {product.colors.length} colors • {product.sizes.length} sizes
              </p>
              <div className="flex gap-1">
                {product.colors.slice(0, 2).map((color, index) => (
                  <div
                    key={index}
                    className={`w-3 h-3 rounded-full border border-gray-600 ${
                      color === 'Black' ? 'bg-black' : color === 'White' ? 'bg-white' : 'bg-gray-500'
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
