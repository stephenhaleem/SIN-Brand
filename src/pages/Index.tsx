
import { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ProductCard from "@/components/ProductCard";
import Cart from "@/components/Cart";
import ProductModal from "@/components/ProductModal";
import Gallery from "@/components/Gallery";
import Newsletter from "@/components/Newsletter";
import Footer from "@/components/Footer";
import { Product } from "@/types/product";
import { useCart } from "@/contexts/CartContext";

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
  const { totalItems } = useCart();
  const headerRef = useRef<HTMLDivElement>(null);
  const heroRef = useRef<HTMLDivElement>(null);
  const productsRef = useRef<HTMLDivElement>(null);
  const marqueeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Header animation with dramatic entrance
    if (headerRef.current) {
      gsap.fromTo(headerRef.current, 
        { opacity: 0, y: -100, rotateX: -90 },
        { opacity: 1, y: 0, rotateX: 0, duration: 1.2, ease: "power4.out" }
      );
    }

    // Hero section with staggered text animation
    if (heroRef.current) {
      const heroTitle = heroRef.current.querySelector('.hero-title');
      const heroSubtitle = heroRef.current.querySelector('.hero-subtitle');
      const heroDesc = heroRef.current.querySelector('.hero-desc');
      const heroButton = heroRef.current.querySelector('.hero-button');

      gsap.fromTo([heroTitle, heroSubtitle, heroDesc, heroButton],
        { opacity: 0, y: 100, scale: 0.8 },
        { 
          opacity: 1, 
          y: 0, 
          scale: 1, 
          duration: 1, 
          stagger: 0.3, 
          ease: "power3.out",
          delay: 0.5
        }
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

    // Products grid with 3D entrance effect
    if (productsRef.current) {
      const productCards = productsRef.current.querySelectorAll('.product-card');
      gsap.fromTo(productCards,
        { 
          opacity: 0, 
          y: 100, 
          rotateY: -45,
          scale: 0.5 
        },
        {
          opacity: 1,
          y: 0,
          rotateY: 0,
          scale: 1,
          duration: 1,
          stagger: 0.15,
          ease: "power3.out",
          scrollTrigger: {
            trigger: productsRef.current,
            start: "top 70%",
            end: "bottom 30%",
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
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white relative overflow-x-hidden">
      {/* Enhanced grunge texture overlay */}
      <div className="fixed inset-0 pointer-events-none opacity-20 z-0">
        <div className="w-full h-full bg-black" style={{
          backgroundImage: `
            radial-gradient(circle at 25% 25%, #333 1px, transparent 1px),
            radial-gradient(circle at 75% 75%, #444 1px, transparent 1px),
            linear-gradient(45deg, transparent 40%, rgba(255,255,255,0.05) 50%, transparent 60%),
            url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.8'/%3E%3C/svg%3E")
          `,
          backgroundSize: '50px 50px, 80px 80px, 100% 100%, 150px 150px'
        }} />
      </div>

      {/* Animated particles background */}
      <div className="fixed inset-0 pointer-events-none z-0">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full opacity-30 animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 3}s`
            }}
          />
        ))}
      </div>

      {/* Enhanced Header */}
      <header ref={headerRef} className="relative z-10 p-6 flex justify-between items-center border-b-2 border-red-600 bg-gradient-to-r from-black via-gray-900 to-black backdrop-blur-lg">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 bg-red-600 flex items-center justify-center transform rotate-45">
            <span className="text-white font-bold text-xl transform -rotate-45">R</span>
          </div>
          <h1 className="text-4xl font-bold tracking-wider bg-gradient-to-r from-white via-red-400 to-white bg-clip-text text-transparent" 
              style={{ fontFamily: 'serif', textShadow: '0 0 20px rgba(255,255,255,0.5)' }}>
            Rock County
          </h1>
        </div>
        <div className="flex items-center gap-6">
          <nav className="hidden md:flex gap-8">
            <a href="#" className="font-medium hover:text-red-400 transition-all duration-300 hover:scale-110 relative group">
              Home
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-red-600 group-hover:w-full transition-all duration-300"></span>
            </a>
            <a href="#shop" className="font-medium hover:text-red-400 transition-all duration-300 hover:scale-110 relative group">
              Shop
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-red-600 group-hover:w-full transition-all duration-300"></span>
            </a>
            <a href="#gallery" className="font-medium hover:text-red-400 transition-all duration-300 hover:scale-110 relative group">
              Gallery
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-red-600 group-hover:w-full transition-all duration-300"></span>
            </a>
          </nav>
          <button
            onClick={() => setIsCartOpen(true)}
            className="relative p-3 hover:bg-red-600 hover:text-white transition-all duration-300 border-2 border-red-600 bg-gradient-to-r from-transparent to-red-900/20 backdrop-blur-sm transform hover:scale-105 hover:rotate-1"
          >
            <span className="text-sm font-bold tracking-wider">CART ({totalItems})</span>
            {totalItems > 0 && (
              <span className="absolute -top-2 -right-2 w-6 h-6 bg-red-600 text-white rounded-full flex items-center justify-center text-xs font-bold animate-pulse">
                {totalItems}
              </span>
            )}
          </button>
        </div>
      </header>

      {/* Enhanced Scrolling Marquee */}
      <div ref={marqueeRef} className="relative z-10 py-6 bg-gradient-to-r from-red-900 via-red-600 to-red-900 overflow-hidden border-b-2 border-red-400 shadow-2xl">
        <div className="marquee-text whitespace-nowrap text-3xl font-bold tracking-wider text-white" 
             style={{ textShadow: '0 0 10px rgba(0,0,0,0.8)' }}>
          ⚡ YOU ROCK ⚡ UNLEASH YOUR REBELLION ⚡ YOU ROCK ⚡ UNLEASH YOUR REBELLION ⚡ YOU ROCK ⚡
        </div>
      </div>

      {/* Enhanced Hero Section */}
      <section ref={heroRef} className="relative z-10 py-40 px-6 text-center border-b-2 border-gray-700 bg-gradient-to-b from-black via-gray-900 to-red-950/20">
        <div className="absolute inset-0 bg-gradient-to-r from-red-900/10 via-transparent to-red-900/10"></div>
        <div className="relative z-10">
          <h2 className="hero-title text-8xl md:text-9xl font-bold mb-8 tracking-wider bg-gradient-to-r from-white via-red-400 to-white bg-clip-text text-transparent" 
              style={{ 
                fontFamily: 'serif', 
                textShadow: '0 0 50px rgba(255,0,0,0.3)',
                filter: 'drop-shadow(0 0 20px rgba(255,255,255,0.1))'
              }}>
            ROCK
          </h2>
          <p className="hero-subtitle text-3xl md:text-4xl font-light tracking-widest mb-12 text-red-300 opacity-90">
            COUNTY REBELLION
          </p>
          <p className="hero-desc text-gray-300 max-w-3xl mx-auto mb-16 text-xl leading-relaxed bg-black/30 p-8 rounded-lg backdrop-blur-sm border border-red-900/30">
            Embrace the darkness. Channel your inner rebel with our exclusive collection of streetwear 
            that speaks to the soul of the underground. Every piece tells a story of defiance, 
            crafted for those who dare to stand apart from the crowd.
          </p>
          <button 
            onClick={() => document.getElementById('shop')?.scrollIntoView({ behavior: 'smooth' })}
            className="hero-button bg-gradient-to-r from-red-600 to-red-800 text-white px-16 py-6 hover:from-red-700 hover:to-red-900 border-2 border-red-400 transition-all duration-500 font-bold tracking-wider text-xl transform hover:scale-105 hover:rotate-1 shadow-2xl"
          >
            ENTER THE REBELLION →
          </button>
        </div>
      </section>

      {/* Enhanced Products Grid */}
      <section id="shop" ref={productsRef} className="relative z-10 py-32 px-6 bg-gradient-to-b from-red-950/20 to-black">
        <div className="text-center mb-20">
          <h3 className="text-6xl font-bold mb-6 tracking-wider bg-gradient-to-r from-white via-red-400 to-white bg-clip-text text-transparent">
            REBEL COLLECTION
          </h3>
          <div className="w-32 h-1 bg-gradient-to-r from-red-600 to-red-400 mx-auto mb-8"></div>
          <p className="text-center text-gray-400 mb-16 text-xl max-w-2xl mx-auto">
            Handpicked pieces forged in the fires of rebellion. Each item carries the spirit of the underground.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 max-w-7xl mx-auto">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onClick={() => setSelectedProduct(product)}
            />
          ))}
        </div>
      </section>

      {/* Gallery Section */}
      <div id="gallery">
        <Gallery />
      </div>

      {/* Newsletter Section */}
      <Newsletter />

      {/* Enhanced Limited Time Banner */}
      <div className="relative z-10 py-6 bg-gradient-to-r from-red-900 via-red-700 to-red-900 overflow-hidden border-y-2 border-red-400">
        <div className="marquee-text whitespace-nowrap text-xl font-bold tracking-wider text-white">
          🔥 REBELLION SALE ✱ Free Shipping on Orders Over ₦50,000 ✱ LIMITED TIME ✱ REBELLION SALE ✱ Free Shipping on Orders Over ₦50,000 ✱
        </div>
      </div>

      {/* Footer */}
      <Footer />

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
