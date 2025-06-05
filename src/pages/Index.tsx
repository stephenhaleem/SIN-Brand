
import { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ProductCard from "@/components/ProductCard";
import Cart from "@/components/Cart";
import ProductModal from "@/components/ProductModal";
import { Product } from "@/types/product";
import { CartItem, useCart } from "@/hooks/useCart";

gsap.registerPlugin(ScrollTrigger);

const products: Product[] = [
  {
    id: "1",
    name: "Oversized Tee",
    price: 45,
    images: [
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=500",
      "https://images.unsplash.com/photo-1583743814966-8936f37f8c2b?w=500"
    ],
    colors: ["Black", "White", "Gray"],
    sizes: ["S", "M", "L", "XL"],
    description: "Comfortable oversized cotton tee with a modern fit"
  },
  {
    id: "2",
    name: "Vintage Jeans",
    price: 85,
    images: [
      "https://images.unsplash.com/photo-1542272604-787c3835535d?w=500",
      "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=500"
    ],
    colors: ["Blue", "Black", "Indigo"],
    sizes: ["28", "30", "32", "34", "36"],
    description: "Classic vintage-style denim with distressed details"
  },
  {
    id: "3",
    name: "Urban Hoodie",
    price: 75,
    images: [
      "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=500",
      "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=500"
    ],
    colors: ["Black", "Gray", "White"],
    sizes: ["S", "M", "L", "XL", "XXL"],
    description: "Premium cotton hoodie with urban street style"
  },
  {
    id: "4",
    name: "Minimal Jacket",
    price: 120,
    images: [
      "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=500",
      "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=500"
    ],
    colors: ["Black", "Charcoal"],
    sizes: ["S", "M", "L", "XL"],
    description: "Sleek minimal jacket for modern wardrobes"
  },
  {
    id: "5",
    name: "Cargo Pants",
    price: 95,
    images: [
      "https://images.unsplash.com/photo-1473966968600-fa801b869a1a?w=500",
      "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=500"
    ],
    colors: ["Black", "Olive", "Gray"],
    sizes: ["28", "30", "32", "34", "36"],
    description: "Utility-inspired cargo pants with multiple pockets"
  },
  {
    id: "6",
    name: "Graphic Tank",
    price: 35,
    images: [
      "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?w=500",
      "https://images.unsplash.com/photo-1622445275576-721325763afe?w=500"
    ],
    colors: ["Black", "White"],
    sizes: ["S", "M", "L", "XL"],
    description: "Bold graphic tank top with artistic design"
  }
];

const Index = () => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const { cartItems } = useCart();
  const headerRef = useRef<HTMLDivElement>(null);
  const productsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Header animation
    if (headerRef.current) {
      gsap.fromTo(headerRef.current, 
        { opacity: 0, y: -50 },
        { opacity: 1, y: 0, duration: 1, ease: "power3.out" }
      );
    }

    // Products grid animation
    if (productsRef.current) {
      const productCards = productsRef.current.querySelectorAll('.product-card');
      gsap.fromTo(productCards,
        { opacity: 0, y: 50, scale: 0.9 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.8,
          stagger: 0.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: productsRef.current,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse"
          }
        }
      );
    }

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div className="min-h-screen bg-white text-black relative overflow-x-hidden">
      {/* Grunge texture overlay */}
      <div className="fixed inset-0 pointer-events-none opacity-5 z-0">
        <div className="w-full h-full bg-black" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='1' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.8'/%3E%3C/svg%3E")`,
          backgroundSize: '100px 100px'
        }} />
      </div>

      {/* Header */}
      <header ref={headerRef} className="relative z-10 p-6 flex justify-between items-center border-b border-black">
        <h1 className="text-3xl font-bold tracking-wider">URBAN.CO</h1>
        <button
          onClick={() => setIsCartOpen(true)}
          className="relative p-2 hover:bg-black hover:text-white transition-colors duration-300 border border-black"
        >
          <span className="text-sm font-medium">CART ({totalItems})</span>
        </button>
      </header>

      {/* Hero Section */}
      <section className="relative z-10 py-20 px-6 text-center border-b border-black">
        <h2 className="text-6xl md:text-8xl font-bold mb-4 tracking-wider">
          MINIMAL
        </h2>
        <p className="text-xl md:text-2xl font-light tracking-widest">
          STREETWEAR COLLECTION
        </p>
      </section>

      {/* Products Grid */}
      <section ref={productsRef} className="relative z-10 py-20 px-6">
        <h3 className="text-4xl font-bold text-center mb-16 tracking-wider">
          CATALOGUE
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onClick={() => setSelectedProduct(product)}
            />
          ))}
        </div>
      </section>

      {/* Cart Sidebar */}
      <Cart isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />

      {/* Product Modal */}
      {selectedProduct && (
        <ProductModal
          product={selectedProduct}
          onClose={() => setSelectedProduct(null)}
        />
      )}
    </div>
  );
};

export default Index;
