
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
import { ShoppingBag } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const products: Product[] = [
  {
    id: "1",
    name: "Villain Shorts",
    price: 39000,
    images: ["/images/tee1.jpg"],
    colors: ["Black", "White"],
    sizes: ["S", "M", "L", "XL"],
    description: "Premium streetwear shorts with skull graphic",
  },
  {
    id: "2",
    name: "Skull Cap",
    price: 12000,
    images: ["/images/tee2.jpg"],
    colors: ["Black", "White"],
    sizes: ["One Size"],
    description: "Classic skull cap with embroidered logo",
  },
  {
    id: "3",
    name: "Skull Tee (Black)",
    price: 29000,
    images: ["/images/tee3.jpg"],
    colors: ["Black", "White"],
    sizes: ["S", "M", "L", "XL", "XXL"],
    description: "Bold skull graphic tee with grunge aesthetics",
  },
  {
    id: "4",
    name: "Rock Tee (Black)",
    price: 25000,
    images: ["/images/tee4.jpg"],
    colors: ["Black", "White"],
    sizes: ["S", "M", "L", "XL"],
    description: "Statement rock tee with edgy design",
  },
  {
    id: "5",
    name: "County Hoodie",
    price: 45000,
    images: ["/images/full1.jpg"],
    colors: ["Black", "Gray"],
    sizes: ["S", "M", "L", "XL", "XXL"],
    description: "Premium hoodie with county branding",
  },
  {
    id: "6",
    name: "Grunge Jacket",
    price: 65000,
    images: ["/images/ff.jpg"],
    colors: ["Black", "Charcoal"],
    sizes: ["S", "M", "L", "XL"],
    description: "Distressed jacket with authentic grunge appeal",
  },
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
      gsap.fromTo(
        headerRef.current,
        { opacity: 0, y: -50 },
        { opacity: 1, y: 0, duration: 1, ease: "power3.out" }
      );
    }

    // Hero section animation
    if (heroRef.current) {
      const heroTitle = heroRef.current.querySelector(".hero-title");
      const heroSubtitle = heroRef.current.querySelector(".hero-subtitle");
      const heroDesc = heroRef.current.querySelector(".hero-desc");
      const heroButton = heroRef.current.querySelector(".hero-button");

      gsap.fromTo(
        [heroTitle, heroSubtitle, heroDesc, heroButton],
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.2,
          ease: "power3.out",
          delay: 0.3,
        }
      );
    }

    // Marquee animation
    if (marqueeRef.current) {
      const marqueeText = marqueeRef.current.querySelector(".marquee-text");
      if (marqueeText) {
        gsap.set(marqueeText, { x: "100%" });
        gsap.to(marqueeText, {
          x: "-100%",
          duration: 20,
          ease: "none",
          repeat: -1,
        });
      }
    }

    // Products grid animation
    if (productsRef.current) {
      const productCards =
        productsRef.current.querySelectorAll(".product-card");
      gsap.fromTo(
        productCards,
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
            toggleActions: "play none none reverse",
          },
        }
      );
    }

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <div className="min-h-screen bg-white text-black">
      {/* Header */}
      <header
        ref={headerRef}
        className="p-4 md:p-6 flex justify-between items-center border-b-2 border-black bg-white"
      >
        <div className="flex items-center gap-2 md:gap-4">
          <div className="w-8 h-8 md:w-12 md:h-12 bg-black text-white flex items-center justify-center rounded-lg">
            <span className="font-bold text-sm md:text-xl">R</span>
          </div>
          <h1 className="text-2xl md:text-4xl font-normal tracking-wider text-black">
            SIN
          </h1>
        </div>
        <div className="flex items-center gap-4 md:gap-6">
          <nav className="hidden md:flex gap-8">
            <a
              href="#"
              className="font-medium hover:text-gray-600 transition-all duration-300"
            >
              Home
            </a>
            <a
              href="#shop"
              className="font-medium hover:text-gray-600 transition-all duration-300"
            >
              Shop
            </a>
            <a
              href="#gallery"
              className="font-medium hover:text-gray-600 transition-all duration-300"
            >
              Gallery
            </a>
          </nav>
          <button
            onClick={() => setIsCartOpen(true)}
            className="relative p-2 border-2 border-black hover:bg-black hover:text-white transition-all duration-300 rounded-lg"
          >
            <ShoppingBag size={16} className="md:w-5 md:h-5" />
            {totalItems > 0 && (
              <span className="absolute -top-2 -right-2 w-4 h-4 md:w-5 md:h-5 bg-black text-white text-xs font-bold rounded-full flex items-center justify-center">
                {totalItems}
              </span>
            )}
          </button>
        </div>
      </header>

      {/* Scrolling Marquee */}
      <div
        ref={marqueeRef}
        className="py-2 md:py-4 bg-black text-white overflow-hidden"
      >
        <div className="marquee-text whitespace-nowrap text-lg md:text-2xl font-bold tracking-wider">
          ★ SIN ★ REVENGE ★ SIN ★ REVENGE ★ SIN ★ REVENGE ★ SIN ★ ★ SIN ★
          REVENGE ★ SIN ★ REVENGE ★ SIN ★ REVENGE ★ SIN ★ ★ SIN ★ REVENGE ★ SIN
          ★ REVENGE ★ SIN ★ REVENGE ★ SIN ★ ★ SIN ★ REVENGE ★ SIN ★ REVENGE ★
          SIN ★ REVENGE ★ SIN ★
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative min-h-screen bg-gray-100">
        {/* Marquee Text Overlay */}
        <div className="absolute inset-0 flex items-center pointer-events-none overflow-hidden">
          <div className="whitespace-nowrap text-[80px] md:text-[200px] font-bold text-black/5 tracking-wider">
            SIN ◆ REVENGE ◆ SIN ◆ REVENGE ☺ SIN
          </div>
        </div>

        <div className="container mx-auto px-4 md:px-6 py-10 md:py-20 flex flex-col md:flex-row items-center justify-between relative z-10">
          {/* Text Content */}
          <div className="w-full md:w-1/2 mb-8 md:mb-0 text-center md:text-left">
            <p className="font-shadows text-lg md:text-2xl lg:text-5xl mb-6 text-gray-600 leading-relaxed max-w-lg mx-auto md:mx-0">
              Discover a curated selection of timeless designs and modern trends
              crafted to elevate your wardrobe. From statement pieces to
              everyday essentials, find the perfect fit that defines your unique
              style.
            </p>
            <button
              onClick={() =>
                document
                  .getElementById("shop")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="bg-black text-white px-6 md:px-8 py-3 flex items-center gap-2 hover:bg-white/90 hover:text-black transition-all duration-300 mx-auto md:mx-0 rounded-lg"
            >
              SHOP <span className="text-lg">→</span>
            </button>
          </div>

          {/* Hero Image */}
          <div className="w-full md:w-1/2">
            <div className="aspect-[3/4] relative w-full max-w-sm md:max-w-md mx-auto">
              <img
                src="/images/ff.png"
                alt="Hero"
                className="w-full h-full object-cover rounded-lg"
              />
              {/* Decorative Corner */}
              <div className="absolute top-4 left-4 w-6 md:w-8 h-6 md:h-8 border-l-2 border-t-2 border-black"></div>
              <div className="absolute bottom-4 right-4 w-6 md:w-8 h-6 md:h-8 border-r-2 border-b-2 border-black"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section id="shop" ref={productsRef} className="py-10 md:py-20 px-4 md:px-6 bg-gray-50">
        <div className="text-center mb-8 md:mb-16">
          <h3 className="font-shadows text-2xl md:text-3xl font-bold mb-4 tracking-wider text-black">
            COLLECTION
          </h3>
          <div className="w-24 md:w-32 h-1 bg-black mx-auto mb-6 md:mb-8"></div>
          <p className="text-center text-gray-600 mb-8 md:mb-16 text-lg md:text-xl max-w-2xl mx-auto px-4">
            Handpicked pieces forged in the spirit of rebellion. Each item
            carries the essence of streetwear.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-7xl mx-auto justify-items-center">
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
