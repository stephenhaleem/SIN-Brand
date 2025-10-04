import { useState } from "react";
import Header from "@/components/Header";
import Marquee from "@/components/Marquee";
import HeroSection from "@/components/HeroSection";
import ProductsSection from "@/components/ProductsSection";
import BrandStory from "@/components/BrandStory";
import FeaturesSection from "@/components/FeaturesSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import Cart from "@/components/Cart";
import ProductModal from "@/components/ProductModal";
import Gallery from "@/components/Gallery";
import Footer from "@/components/Footer";
import { Product } from "@/types/product";
import { products } from "@/data/products";

const Index = () => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header onCartOpen={() => setIsCartOpen(true)} />
      <main className="pt-20">
        <HeroSection />
        <Marquee />
        <ProductsSection products={products} />
        <BrandStory />
        <FeaturesSection />
        <div id="gallery">
          <Gallery />
        </div>
        <TestimonialsSection />
      </main>
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
