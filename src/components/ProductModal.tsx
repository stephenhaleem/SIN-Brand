
import { useState, useRef, useEffect } from "react";
import { gsap } from "gsap";
import { X, Plus, Minus } from "lucide-react";
import { Product } from "@/types/product";
import { useCart } from "@/contexts/CartContext";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

interface ProductModalProps {
  product: Product;
  onClose: () => void;
}

const ProductModal = ({ product, onClose }: ProductModalProps) => {
  const [selectedColor, setSelectedColor] = useState(product.colors[0]);
  const [selectedSize, setSelectedSize] = useState(product.sizes[0]);
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const { addToCart } = useCart();
  const { toast } = useToast();
  
  const modalRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (modalRef.current && contentRef.current) {
      gsap.fromTo(modalRef.current,
        { opacity: 0 },
        { opacity: 1, duration: 0.3 }
      );
      gsap.fromTo(contentRef.current,
        { scale: 0.8, opacity: 0, rotateY: -45 },
        { scale: 1, opacity: 1, rotateY: 0, duration: 0.6, ease: "power3.out" }
      );
    }
  }, []);

  const handleAddToCart = () => {
    console.log('Adding to cart:', {
      productId: product.id,
      name: product.name,
      price: product.price,
      image: product.images[selectedImage],
      color: selectedColor,
      size: selectedSize,
      quantity,
    });

    addToCart({
      productId: product.id,
      name: product.name,
      price: product.price,
      image: product.images[selectedImage],
      color: selectedColor,
      size: selectedSize,
      quantity,
    });

    toast({
      title: "Added to rebellion!",
      description: `${product.name} has been added to your cart.`,
    });

    onClose();
  };

  const handleClose = () => {
    if (modalRef.current && contentRef.current) {
      gsap.to(contentRef.current, {
        scale: 0.8,
        opacity: 0,
        rotateY: 45,
        duration: 0.4,
        ease: "power3.in"
      });
      gsap.to(modalRef.current, {
        opacity: 0,
        duration: 0.3,
        delay: 0.2,
        onComplete: onClose
      });
    }
  };

  const formatPrice = (price: number) => {
    return `₦${price.toLocaleString()}`;
  };

  return (
    <div
      ref={modalRef}
      className="fixed inset-0 bg-black bg-opacity-80 z-50 flex items-center justify-center p-4 backdrop-blur-sm"
      onClick={handleClose}
    >
      <div
        ref={contentRef}
        className="bg-gradient-to-br from-gray-900 via-black to-red-950/30 border-2 border-red-600 max-w-6xl w-full max-h-[90vh] overflow-y-auto shadow-2xl backdrop-blur-lg"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Enhanced Header */}
        <div className="flex justify-between items-center p-8 border-b-2 border-red-600 bg-gradient-to-r from-black via-red-950/50 to-black">
          <h2 className="text-3xl font-bold tracking-wider text-white">{product.name}</h2>
          <button
            onClick={handleClose}
            className="p-3 hover:bg-red-600 hover:text-white transition-all duration-300 border-2 border-red-600 bg-red-950/30 backdrop-blur-sm transform hover:scale-110 hover:rotate-90"
          >
            <X size={24} />
          </button>
        </div>

        <div className="grid md:grid-cols-2 gap-12 p-8">
          {/* Enhanced Images */}
          <div className="space-y-6">
            <div className="aspect-square border-2 border-red-600 overflow-hidden relative bg-gradient-to-br from-gray-900 to-black">
              <img
                src={product.images[selectedImage]}
                alt={product.name}
                className="w-full h-full object-cover"
              />
              {/* Image overlay effects */}
              <div className="absolute inset-0 bg-gradient-to-t from-red-900/20 via-transparent to-black/20"></div>
              <div className="absolute top-4 left-4 w-8 h-8 border-l-2 border-t-2 border-red-400"></div>
              <div className="absolute top-4 right-4 w-8 h-8 border-r-2 border-t-2 border-red-400"></div>
              <div className="absolute bottom-4 left-4 w-8 h-8 border-l-2 border-b-2 border-red-400"></div>
              <div className="absolute bottom-4 right-4 w-8 h-8 border-r-2 border-b-2 border-red-400"></div>
            </div>
            <div className="flex gap-3">
              {product.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`w-24 h-24 border-2 overflow-hidden transition-all duration-300 transform hover:scale-105 ${
                    selectedImage === index 
                      ? "border-red-400 shadow-lg shadow-red-400/50" 
                      : "border-gray-600 hover:border-red-600"
                  }`}
                >
                  <img
                    src={image}
                    alt={`${product.name} ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Enhanced Product Details */}
          <div className="space-y-8">
            <div className="bg-gradient-to-r from-red-950/30 to-transparent p-6 border-l-4 border-red-600">
              <h3 className="text-3xl font-bold mb-4 text-red-400">{formatPrice(product.price)}</h3>
              <p className="text-gray-300 text-lg leading-relaxed">{product.description}</p>
            </div>

            {/* Enhanced Color Selection */}
            <div>
              <h4 className="font-bold mb-4 tracking-wider text-xl text-white">COLOR *</h4>
              <div className="flex gap-3">
                {product.colors.map((color) => (
                  <button
                    key={color}
                    onClick={() => setSelectedColor(color)}
                    className={`px-6 py-3 border-2 text-sm font-bold tracking-wider transition-all duration-300 transform hover:scale-105 ${
                      selectedColor === color
                        ? "bg-red-600 text-white border-red-400 shadow-lg shadow-red-600/50"
                        : "bg-transparent text-white border-red-600 hover:bg-red-950/50 hover:border-red-400"
                    }`}
                  >
                    {color}
                  </button>
                ))}
              </div>
            </div>

            {/* Enhanced Size Selection */}
            <div>
              <h4 className="font-bold mb-4 tracking-wider text-xl text-white">SIZE *</h4>
              <div className="flex gap-3 flex-wrap">
                {product.sizes.map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`px-6 py-3 border-2 text-sm font-bold tracking-wider transition-all duration-300 transform hover:scale-105 ${
                      selectedSize === size
                        ? "bg-red-600 text-white border-red-400 shadow-lg shadow-red-600/50"
                        : "bg-transparent text-white border-red-600 hover:bg-red-950/50 hover:border-red-400"
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Enhanced Quantity */}
            <div>
              <h4 className="font-bold mb-4 tracking-wider text-xl text-white">QUANTITY *</h4>
              <div className="flex items-center gap-6">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="p-3 border-2 border-red-600 hover:bg-red-600 hover:text-white transition-all duration-300 transform hover:scale-110"
                >
                  <Minus size={18} />
                </button>
                <span className="font-bold text-2xl w-12 text-center text-white">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="p-3 border-2 border-red-600 hover:bg-red-600 hover:text-white transition-all duration-300 transform hover:scale-110"
                >
                  <Plus size={18} />
                </button>
              </div>
            </div>

            {/* Enhanced Add to Cart */}
            <Button
              onClick={handleAddToCart}
              className="w-full bg-gradient-to-r from-red-600 to-red-800 text-white hover:from-red-700 hover:to-red-900 border-2 border-red-400 font-bold tracking-wider py-6 text-xl transform hover:scale-105 transition-all duration-300 shadow-lg shadow-red-600/30"
            >
              JOIN THE REBELLION
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductModal;
