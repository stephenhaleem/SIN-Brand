
import { useState } from "react";
import Header from "@/components/Header";
import Marquee from "@/components/Marquee";
import HeroSection from "@/components/HeroSection";
import ProductsSection from "@/components/ProductsSection";
import Cart from "@/components/Cart";
import ProductModal from "@/components/ProductModal";
import EnhancedGallery from "@/components/EnhancedGallery";
import Newsletter from "@/components/Newsletter";
import Footer from "@/components/Footer";
import ScrollParticles from "@/components/ScrollParticles";
import { Product } from "@/types/product";
import { products } from "@/data/products";

const Index = () => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  return (
    <div className="min-h-screen bg-white text-black">
      <ScrollParticles />
      <Header onCartOpen={() => setIsCartOpen(true)} />
      <Marquee />
      <HeroSection />
      <ProductsSection 
        products={products} 
        onProductSelect={setSelectedProduct} 
      />
      
      <div id="gallery">
        <EnhancedGallery />
      </div>
      
      <Newsletter />
      <Footer />
      
      <Cart isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
      
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
