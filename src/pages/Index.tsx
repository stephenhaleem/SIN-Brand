
import { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ProductCard from "@/components/ProductCard";
import Cart from "@/components/Cart";
import ProductModal from "@/components/ProductModal";
import { Product } from "@/types/product";
import { useCart } from "@/hooks/useCart";

gsap.registerPlugin(ScrollTrigger);

const products: Product[] = [
  {
    id: "1",
    name: "Villain Shorts",
    price: 39000,
    images: [
      "https://images.unsplash.com/photo-1591195853828-11db59a44f6b?w=500",
      "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=500"
    ],
    colors: ["Black", "White"],
    sizes: ["S", "M", "L", "XL"],
    description: "Premium streetwear shorts with skull graphic"
  },
  {
    id: "2",
    name: "Skull Cap",
    price: 12000,
    images: [
      "https://images.unsplash.com/photo-1521369909029-2afed882baee?w=500",
      "https://images.unsplash.com/photo-1556306535-38febf6782e7?w=500"
    ],
    colors: ["Black", "White"],
    sizes: ["One Size"],
    description: "Classic skull cap with embroidered logo"
  },
  {
    id: "3",
    name: "Skull Tee (Black)",
    price: 29000,
    images: [
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=500",
      "https://images.unsplash.com/photo-1583743814966-8936f37f8c2b?w=500"
    ],
    colors: ["Black", "White"],
    sizes: ["S", "M", "L", "XL", "XXL"],
    description: "Bold skull graphic tee with grunge aesthetics"
  },
  {
    id: "4",
    name: "Rock Tee (Black)",
    price: 25000,
    images: [
      "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?w=500",
      "https://images.unsplash.com/photo-1622445275576-721325763afe?w=500"
    ],
    colors: ["Black", "White"],
    sizes: ["S", "M", "L", "XL"],
    description: "Statement rock tee with edgy design"
  },
  {
    id: "5",
    name: "County Hoodie",
    price: 45000,
    images: [
      "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=500",
      "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=500"
    ],
    colors: ["Black", "Gray"],
    sizes: ["S", "M", "L", "XL", "XXL"],
    description: "Premium hoodie with county branding"
  },
  {
    id: "6",
    name: "Grunge Jacket",
    price: 65000,
    images: [
      "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=500",
      "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=500"
    ],
    colors: ["Black", "Charcoal"],
    sizes: ["S", "M", "L", "XL"],
    description: "Distressed jacket with authentic grunge appeal"
  }
];

const Index = () => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const { cartItems, totalItems } = useCart();
  const headerRef = useRef<HTMLDivElement>(null);
  const productsRef = useRef<HTMLDivElement>(null);
  const marqueeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Header animation
    if (headerRef.current) {
      gsap.fromTo(headerRef.current, 
        { opacity: 0, y: -50 },
        { opacity: 1, y: 0, duration: 1, ease: "power3.out" }
      );
    }

    // Marquee animation
    if (marqueeRef.current) {
      const marqueeText = marqueeRef.current.querySelector('.marquee-text');
      if (marqueeText) {
        gsap.set(marqueeText, { x: '100%' });
        gsap.to(marqueeText, {
          x: '-100%',
          duration: 20,
          ease: 'none',
          repeat: -1
        });
      }
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
        <h1 className="text-3xl font-bold tracking-wider" style={{ fontFamily: 'serif' }}>
          Rock County
        </h1>
        <div className="flex items-center gap-6">
          <nav className="hidden md:flex gap-6">
            <a href="#" className="font-medium hover:text-gray-600 transition-colors">Home</a>
            <a href="#shop" className="font-medium hover:text-gray-600 transition-colors">Shop</a>
          </nav>
          <button
            onClick={() => setIsCartOpen(true)}
            className="relative p-2 hover:bg-black hover:text-white transition-colors duration-300 border border-black"
          >
            <span className="text-sm font-medium">CART ({totalItems})</span>
          </button>
        </div>
      </header>

      {/* Scrolling Marquee */}
      <div ref={marqueeRef} className="relative z-10 py-4 bg-black text-white overflow-hidden border-b border-black">
        <div className="marquee-text whitespace-nowrap text-2xl font-bold tracking-wider">
          YOU ROCK ♦ YOU ROCK ♦ YOU ROCK ♦ YOU ROCK ♦ YOU ROCK ♦ YOU ROCK ♦
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative z-10 py-20 px-6 text-center border-b border-black">
        <h2 className="text-6xl md:text-8xl font-bold mb-4 tracking-wider" style={{ fontFamily: 'serif' }}>
          ROCK
        </h2>
        <p className="text-xl md:text-2xl font-light tracking-widest mb-8">
          COUNTY COLLECTION
        </p>
        <p className="text-gray-600 max-w-2xl mx-auto mb-8">
          Discover a curated selection of timeless designs and modern trends crafted to elevate your wardrobe. 
          From statement pieces to everyday essentials, find the perfect fit that defines your unique style.
        </p>
        <button 
          onClick={() => document.getElementById('shop')?.scrollIntoView({ behavior: 'smooth' })}
          className="bg-black text-white px-8 py-3 hover:bg-white hover:text-black border border-black transition-colors font-bold tracking-wider"
        >
          SHOP →
        </button>
      </section>

      {/* Products Grid */}
      <section id="shop" ref={productsRef} className="relative z-10 py-20 px-6">
        <h3 className="text-4xl font-bold text-center mb-16 tracking-wider">
          Top Picks
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

      {/* Limited Time Banner */}
      <div className="relative z-10 py-4 bg-black text-white overflow-hidden border-t border-black">
        <div className="marquee-text whitespace-nowrap text-lg font-medium tracking-wider">
          Limited Time ✱ Limited Time ✱ Limited Time ✱ Limited Time ✱ Limited Time ✱
        </div>
      </div>

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
