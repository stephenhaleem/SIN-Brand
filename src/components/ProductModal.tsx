import { useState, useRef, useEffect, useMemo } from "react";
import { gsap } from "gsap";
import { X, Plus, Minus } from "lucide-react";
import { Product } from "@/types/product";
import { useCart } from "@/contexts/CartContext";
import { toast } from "@/components/ui/use-toast";

interface ProductModalProps {
  product: Product;
  onClose: () => void;
}

const ProductModal = ({ product, onClose }: ProductModalProps) => {
  const { addToCart } = useCart();

  const [selectedColor, setSelectedColor] = useState(product.colors[0]);
  const [selectedSize, setSelectedSize] = useState(product.sizes[0]);
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [isLoading, setIsLoading] = useState(true);

  const modalRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);

  const currentImages = useMemo(() => {
    if (product.colorVariants) {
      const variant = product.colorVariants.find(
        (v) => v.color === selectedColor
      );
      return variant ? variant.images : product.images;
    }
    return product.images;
  }, [product, selectedColor]);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    
    // Simulate loading
    const timer = setTimeout(() => setIsLoading(false), 800);
    
    if (modalRef.current && contentRef.current) {
      gsap.fromTo(
        modalRef.current,
        { opacity: 0 },
        { opacity: 1, duration: 0.3 }
      );
      gsap.fromTo(
        contentRef.current,
        { scale: 0.9, opacity: 0, y: 50 },
        { scale: 1, opacity: 1, y: 0, duration: 0.5, ease: "power3.out" }
      );
    }
    return () => {
      document.body.style.overflow = "unset";
      clearTimeout(timer);
    };
  }, []);

  useEffect(() => {
    if (imageRef.current) {
      gsap.fromTo(
        imageRef.current,
        { opacity: 0, scale: 0.95 },
        { opacity: 1, scale: 1, duration: 0.4, ease: "power2.out" }
      );
    }
  }, [selectedColor, selectedImage]);

  const handleClose = () => {
    if (modalRef.current && contentRef.current) {
      gsap.to(contentRef.current, {
        scale: 0.95,
        opacity: 0,
        y: 50,
        duration: 0.4,
        ease: "power3.in",
      });
      gsap.to(modalRef.current, {
        opacity: 0,
        duration: 0.3,
        delay: 0.1,
        onComplete: onClose,
      });
    }
  };

  const handleAddToCart = () => {
    if (product.available === false) {
      toast({
        title: "Unavailable",
        description: "This product is out of stock.",
      });
      return;
    }

    addToCart({
      productId: product.id,
      name: product.name,
      price: product.price,
      image: currentImages[selectedImage],
      color: selectedColor,
      size: selectedSize,
      quantity,
    });

    toast({
      title: "Added to Cart!",
      description: `${product.name} has been added to your cart.`,
    });

    onClose();
  };

  const formatPrice = (price: number) => `₦${price.toLocaleString()}`;
  const isOutOfStock = product.available === false;

  return (
    <div
      ref={modalRef}
      className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center p-4"
      onClick={handleClose}
    >
      <div
        ref={contentRef}
        className="bg-white relative max-w-6xl w-full max-h-[90vh] overflow-y-auto rounded-2xl shadow-2xl p-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* LOADING OVERLAY */}
        {isLoading && (
          <div className="absolute inset-0 bg-white z-50 flex items-center justify-center rounded-2xl">
            <div className="flex flex-col items-center gap-4">
              <div className="w-16 h-16 border-4 border-black/20 border-t-black rounded-full animate-spin" />
              <p className="text-black font-semibold">Loading...</p>
            </div>
          </div>
        )}

        {/* OUT OF STOCK OVERLAY */}
        {isOutOfStock && (
          <div className="absolute inset-0 bg-white/80 backdrop-blur-sm z-50 flex items-center justify-center rounded-2xl">
            <span className="text-4xl font-bold text-red-600 drop-shadow">
              OUT OF STOCK
            </span>
          </div>
        )}

        {/* Header */}
        <div className="flex justify-between items-center mb-8 border-b pb-4">
          <div>
            <button
              onClick={handleClose}
              className="text-sm text-black/60 hover:text-black mb-2 transition-colors"
            >
              ← Back
            </button>
            <h2 className="text-2xl font-bold text-black">{product.name}</h2>
          </div>
          <button
            onClick={handleClose}
            className="p-2 hover:bg-gray-100 rounded-full transition"
          >
            <X size={20} className="text-black/70" />
          </button>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Images */}
          {/* Images */}
          <div className="space-y-4">
            {/* Main Image */}
            <div className="aspect-square bg-gray-100 overflow-hidden relative rounded-xl shadow-md">
              <img
                ref={imageRef}
                src={currentImages[selectedImage]}
                alt={`${product.name} - ${selectedColor}`}
                className="w-full h-full object-cover"
              />
              <div className="absolute top-4 right-4 bg-black/80 text-white px-3 py-1 text-xs font-medium rounded-full">
                {selectedColor}
              </div>
            </div>

            {/* Thumbnails */}
            {currentImages.length > 1 && (
              <div className="flex gap-3 overflow-x-auto">
                {currentImages.map((img, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImage(index)}
                    className={`w-20 h-20 flex-shrink-0 rounded-lg overflow-hidden border-2 transition-all ${
                      selectedImage === index
                        ? "border-black scale-105"
                        : "border-gray-200 hover:border-gray-400"
                    }`}
                  >
                    <img
                      src={img}
                      alt={`${product.name} thumbnail ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Product Details */}
          <div className="space-y-8">
            <div>
              <h3 className="text-3xl font-bold mb-2 text-black">
                {formatPrice(product.price)}
              </h3>
              <p className="text-black/60 leading-relaxed">
                {product.description}
              </p>
            </div>

            {/* Controls */}
            <fieldset disabled={isOutOfStock} className="space-y-6">
              {/* Color */}
              <div>
                <h4 className="font-medium mb-3">Color: {selectedColor} *</h4>
                <div className="flex gap-3">
                  {product.colors.map((color) => (
                    <button
                      key={color}
                      onClick={() => setSelectedColor(color)}
                      className={`w-10 h-10 rounded-full border-2 shadow-sm transition-all ${
                        selectedColor === color
                          ? "ring-2 ring-black scale-110"
                          : "border-gray-300 hover:border-gray-400"
                      }`}
                      style={{ backgroundColor: color.toLowerCase() }}
                      title={color}
                    />
                  ))}
                </div>
              </div>

              {/* Size */}
              <div>
                <h4 className="font-medium mb-3">Size *</h4>
                <select
                  value={selectedSize}
                  onChange={(e) => setSelectedSize(e.target.value)}
                  className="w-full p-3 border border-gray-200 focus:border-black outline-none rounded-lg"
                >
                  {product.sizes.map((size) => (
                    <option key={size} value={size}>
                      {size}
                    </option>
                  ))}
                </select>
              </div>

              {/* Quantity */}
              <div>
                <h4 className="font-medium mb-3">Quantity *</h4>
                <div className="flex items-center border border-gray-200 rounded-lg w-fit overflow-hidden">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="px-4 py-2 hover:bg-gray-50 transition"
                  >
                    <Minus size={16} />
                  </button>
                  <span className="px-6 py-2 border-x border-gray-200 font-medium">
                    {quantity}
                  </span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="px-4 py-2 hover:bg-gray-50 transition"
                  >
                    <Plus size={16} />
                  </button>
                </div>
              </div>
            </fieldset>

            {/* Add to Cart */}
            <button
              onClick={handleAddToCart}
              disabled={isOutOfStock}
              className={`w-full py-4 text-lg font-semibold rounded-xl shadow-md transition ${
                isOutOfStock
                  ? "bg-gray-200 text-gray-500 cursor-not-allowed"
                  : "bg-black text-white hover:bg-black/90"
              }`}
            >
              {isOutOfStock ? "Out of Stock" : "Add to Cart"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductModal;
