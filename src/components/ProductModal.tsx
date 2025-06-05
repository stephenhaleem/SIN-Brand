
import { useState, useRef, useEffect } from "react";
import { gsap } from "gsap";
import { X, Plus, Minus } from "lucide-react";
import { Product } from "@/types/product";
import { useCart } from "@/hooks/useCart";
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
        { scale: 0.8, opacity: 0 },
        { scale: 1, opacity: 1, duration: 0.4, ease: "power3.out" }
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
      title: "Added to cart!",
      description: `${product.name} has been added to your cart.`,
    });

    onClose();
  };

  const handleClose = () => {
    if (modalRef.current && contentRef.current) {
      gsap.to(contentRef.current, {
        scale: 0.8,
        opacity: 0,
        duration: 0.3,
        ease: "power3.in"
      });
      gsap.to(modalRef.current, {
        opacity: 0,
        duration: 0.3,
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
      className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4"
      onClick={handleClose}
    >
      <div
        ref={contentRef}
        className="bg-white border-2 border-black max-w-4xl w-full max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex justify-between items-center p-6 border-b border-black">
          <h2 className="text-2xl font-bold tracking-wider">{product.name}</h2>
          <button
            onClick={handleClose}
            className="p-2 hover:bg-black hover:text-white transition-colors border border-black"
          >
            <X size={20} />
          </button>
        </div>

        <div className="grid md:grid-cols-2 gap-8 p-6">
          {/* Images */}
          <div className="space-y-4">
            <div className="aspect-square border border-black overflow-hidden">
              <img
                src={product.images[selectedImage]}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex gap-2">
              {product.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`w-20 h-20 border-2 overflow-hidden ${
                    selectedImage === index ? "border-black" : "border-gray-300"
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

          {/* Product Details */}
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-bold mb-2">{formatPrice(product.price)}</h3>
              <p className="text-gray-600">{product.description}</p>
            </div>

            {/* Color Selection */}
            <div>
              <h4 className="font-bold mb-3 tracking-wider">COLOR *</h4>
              <div className="flex gap-2">
                {product.colors.map((color) => (
                  <button
                    key={color}
                    onClick={() => setSelectedColor(color)}
                    className={`px-4 py-2 border text-sm font-medium tracking-wider ${
                      selectedColor === color
                        ? "bg-black text-white border-black"
                        : "bg-white text-black border-black hover:bg-black hover:text-white"
                    } transition-colors`}
                  >
                    {color}
                  </button>
                ))}
              </div>
            </div>

            {/* Size Selection */}
            <div>
              <h4 className="font-bold mb-3 tracking-wider">SIZE *</h4>
              <div className="flex gap-2 flex-wrap">
                {product.sizes.map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`px-4 py-2 border text-sm font-medium tracking-wider ${
                      selectedSize === size
                        ? "bg-black text-white border-black"
                        : "bg-white text-black border-black hover:bg-black hover:text-white"
                    } transition-colors`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div>
              <h4 className="font-bold mb-3 tracking-wider">QUANTITY *</h4>
              <div className="flex items-center gap-4">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="p-2 border border-black hover:bg-black hover:text-white transition-colors"
                >
                  <Minus size={16} />
                </button>
                <span className="font-bold text-lg w-8 text-center">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="p-2 border border-black hover:bg-black hover:text-white transition-colors"
                >
                  <Plus size={16} />
                </button>
              </div>
            </div>

            {/* Add to Cart */}
            <Button
              onClick={handleAddToCart}
              className="w-full bg-black text-white hover:bg-gray-800 border-2 border-black font-bold tracking-wider py-4"
            >
              Add to Cart
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductModal;
