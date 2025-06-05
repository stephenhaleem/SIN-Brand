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
    // Header animation
    if (headerRef.current) {
      gsap.fromTo(headerRef.current, 
        { opacity: 0, y: -50 },
        { opacity: 1, y: 0, duration: 1, ease: "power3.out" }
      );
    }

    // Hero section animation
    if (heroRef.current) {
      const heroTitle = heroRef.current.querySelector('.hero-title');
      const heroSubtitle = heroRef.current.querySelector('.hero-subtitle');
      const heroDesc = heroRef.current.querySelector('.hero-desc');
      const heroButton = heroRef.current.querySelector('.hero-button');

      gsap.fromTo([heroTitle, heroSubtitle, heroDesc, heroButton],
        { opacity: 0, y: 50 },
        { 
          opacity: 1, 
          y: 0, 
          duration: 0.8, 
          stagger: 0.2, 
          ease: "power3.out",
          delay: 0.3
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

    // Products grid animation
    if (productsRef.current) {
      const productCards = productsRef.current.querySelectorAll('.product-card');
      gsap.fromTo(productCards,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.1,
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
    <div className="min-h-screen bg-white text-black">
      {/* Header */}
      <header ref={headerRef} className="p-6 flex justify-between items-center border-b-2 border-black bg-white">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 bg-black text-white flex items-center justify-center rounded-lg">
            <span className="font-bold text-xl">R</span>
          </div>
          <h1 className="text-4xl font-bold tracking-wider text-black">
            Rock County
          </h1>
        </div>
        <div className="flex items-center gap-6">
          <nav className="hidden md:flex gap-8">
            <a href="#" className="font-medium hover:text-gray-600 transition-all duration-300">
              Home
            </a>
            <a href="#shop" className="font-medium hover:text-gray-600 transition-all duration-300">
              Shop
            </a>
            <a href="#gallery" className="font-medium hover:text-gray-600 transition-all duration-300">
              Gallery
            </a>
          </nav>
          <button
            onClick={() => setIsCartOpen(true)}
            className="relative p-3 border-2 border-black hover:bg-black hover:text-white transition-all duration-300 rounded-lg"
          >
            <span className="text-sm font-bold tracking-wider">CART ({totalItems})</span>
            {totalItems > 0 && (
              <span className="absolute -top-2 -right-2 w-6 h-6 bg-black text-white rounded-full flex items-center justify-center text-xs font-bold">
                {totalItems}
              </span>
            )}
          </button>
        </div>
      </header>

      {/* Scrolling Marquee */}
      <div ref={marqueeRef} className="py-4 bg-black text-white overflow-hidden">
        <div className="marquee-text whitespace-nowrap text-2xl font-bold tracking-wider">
          ★ ROCK COUNTY ★ AUTHENTIC STREETWEAR ★ ROCK COUNTY ★ AUTHENTIC STREETWEAR ★
        </div>
      </div>

      {/* Hero Section */}
      <section ref={heroRef} className="py-20 px-6 text-center bg-white">
        <h2 className="hero-title text-8xl md:text-9xl font-bold mb-4 tracking-wider text-black">
          ROCK
        </h2>
        <p className="hero-subtitle text-3xl md:text-4xl font-light tracking-widest mb-8 text-gray-600">
          COUNTY REBELLION
        </p>
        <p className="hero-desc text-gray-700 max-w-3xl mx-auto mb-12 text-xl leading-relaxed">
          Embrace the darkness. Channel your inner rebel with our exclusive collection of streetwear 
          that speaks to the soul of the underground.
        </p>
        <button 
          onClick={() => document.getElementById('shop')?.scrollIntoView({ behavior: 'smooth' })}
          className="hero-button bg-black text-white px-12 py-4 hover:bg-gray-800 transition-all duration-300 font-bold tracking-wider text-xl rounded-lg"
        >
          SHOP NOW →
        </button>
      </section>

      {/* Products Grid */}
      <section id="shop" ref={productsRef} className="py-20 px-6 bg-gray-50">
        <div className="text-center mb-16">
          <h3 className="text-6xl font-bold mb-4 tracking-wider text-black">
            COLLECTION
          </h3>
          <div className="w-32 h-1 bg-black mx-auto mb-8"></div>
          <p className="text-center text-gray-600 mb-16 text-xl max-w-2xl mx-auto">
            Handpicked pieces forged in the spirit of rebellion. Each item carries the essence of streetwear.
          </p>
        </div>
        
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

      {/* Gallery Section */}
      <div id="gallery">
        <Gallery />
      </div>

      {/* Newsletter Section */}
      <Newsletter />

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
