import { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Search, ShoppingBag, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import ProductCard from "@/components/ProductCard";
import ProductModal from "@/components/ProductModal";
import Cart from "@/components/Cart";
import { Product } from "@/types/product";
import { useCart } from "@/contexts/CartContext";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

gsap.registerPlugin(ScrollTrigger);

const allProducts: Product[] = [
  {
    id: "1",
    name: "Villain Shorts",
    price: 39000,
    images: ["/images/tee1.jpg"],
    colors: ["Black", "White"],
    sizes: ["S", "M", "L", "XL"],
    description: "Premium streetwear shorts with skull graphic",
    category: "shorts",
  },
  {
    id: "2",
    name: "Skull Cap",
    price: 12000,
    images: ["/images/tee2.jpg"],
    colors: ["Black", "White"],
    sizes: ["One Size"],
    description: "Classic skull cap with embroidered logo",
    category: "accessories",
  },
  {
    id: "3",
    name: "Skull Tee (Black)",
    price: 29000,
    images: ["/images/tee3.jpg"],
    colors: ["Black", "White"],
    sizes: ["S", "M", "L", "XL", "XXL"],
    description: "Bold skull graphic tee with grunge aesthetics",
    category: "shirts",
  },
  {
    id: "4",
    name: "Rock Tee (Black)",
    price: 25000,
    images: ["/images/tee4.jpg"],
    colors: ["Black", "White"],
    sizes: ["S", "M", "L", "XL"],
    description: "Statement rock tee with edgy design",
    category: "shirts",
  },
  {
    id: "5",
    name: "County Hoodie",
    price: 45000,
    images: ["/images/full1.jpg"],
    colors: ["Black", "Gray"],
    sizes: ["S", "M", "L", "XL", "XXL"],
    description: "Premium hoodie with county branding",
    category: "hoodies",
  },
  {
    id: "6",
    name: "Grunge Jacket",
    price: 65000,
    images: ["/images/ff.jpg"],
    colors: ["Black", "Charcoal"],
    sizes: ["S", "M", "L", "XL"],
    description: "Distressed jacket with authentic grunge appeal",
    category: "jackets",
  },
  {
    id: "7",
    name: "Street Joggers",
    price: 35000,
    images: ["/images/full2.jpg"],
    colors: ["Black", "Gray", "Navy"],
    sizes: ["S", "M", "L", "XL"],
    description: "Comfortable joggers for street style",
    category: "pants",
  },
  {
    id: "8",
    name: "Urban Cargo Pants",
    price: 42000,
    images: ["/images/full3.jpg"],
    colors: ["Black", "Olive", "Khaki"],
    sizes: ["S", "M", "L", "XL", "XXL"],
    description: "Tactical-inspired cargo pants with multiple pockets",
    category: "pants",
  },
  {
    id: "9",
    name: "Rebel Tank Top",
    price: 22000,
    images: ["/images/full5.jpg"],
    colors: ["Black", "White", "Gray"],
    sizes: ["S", "M", "L", "XL"],
    description: "Minimal tank top with attitude",
    category: "shirts",
  },
  {
    id: "10",
    name: "Gothic Hoodie",
    price: 48000,
    images: ["/images/full6.jpg"],
    colors: ["Black", "Burgundy"],
    sizes: ["S", "M", "L", "XL", "XXL"],
    description: "Dark aesthetic hoodie with gothic elements",
    category: "hoodies",
  },
  {
    id: "11",
    name: "Ripped Jeans",
    price: 38000,
    images: ["/images/full7.jpg"],
    colors: ["Black", "Blue", "Gray"],
    sizes: ["28", "30", "32", "34", "36"],
    description: "Distressed denim with authentic wear",
    category: "pants",
  },
  {
    id: "12",
    name: "Oversized Tee",
    price: 26000,
    images: ["/images/gsgs.png"],
    colors: ["Black", "White", "Gray"],
    sizes: ["S", "M", "L", "XL", "XXL"],
    description: "Relaxed fit tee with minimalist design",
    category: "shirts",
  },
];

const Collections = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const { totalItems } = useCart();
  const headerRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  const categories = [
    { value: "all", label: "All Items" },
    { value: "shirts", label: "Shirts & Tees" },
    { value: "pants", label: "Pants & Jeans" },
    { value: "hoodies", label: "Hoodies" },
    { value: "jackets", label: "Jackets" },
    { value: "shorts", label: "Shorts" },
    { value: "accessories", label: "Accessories" },
  ];

  const filteredProducts = allProducts.filter((product) => {
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         product.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         product.category?.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "all" || product.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  useEffect(() => {
    // Header animation
    if (headerRef.current) {
      gsap.fromTo(
        headerRef.current,
        { opacity: 0, y: -50 },
        { opacity: 1, y: 0, duration: 1, ease: "power3.out" }
      );
    }

    // Grid animation
    if (gridRef.current) {
      const productCards = gridRef.current.querySelectorAll(".product-card");
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
            trigger: gridRef.current,
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
  }, [filteredProducts]);

  return (
    <div className="min-h-screen bg-white text-black">
      {/* Header */}
      <header
        ref={headerRef}
        className="p-4 md:p-6 flex justify-between items-center border-b-2 border-black bg-white sticky top-0 z-50"
      >
        <div className="flex items-center gap-2 md:gap-4">
          <Link to="/" className="flex items-center gap-2 hover:opacity-70 transition-opacity">
            <ArrowLeft size={20} />
            <span className="text-sm md:text-base">Back</span>
          </Link>
          <div className="w-8 h-8 md:w-12 md:h-12 bg-black text-white flex items-center justify-center rounded-lg">
            <span className="font-bold text-sm md:text-xl">R</span>
          </div>
          <h1 className="text-2xl md:text-4xl font-normal tracking-wider text-black">
            SIN
          </h1>
        </div>
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
      </header>

      {/* Page Title & Filters */}
      <section className="py-8 md:py-12 px-4 md:px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-3xl md:text-5xl font-bold mb-4 tracking-wider text-black">
              FULL COLLECTION
            </h1>
            <div className="w-32 h-1 bg-black mx-auto mb-6"></div>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Explore our complete range of streetwear essentials
            </p>
          </div>

          {/* Search and Filter Controls */}
          <div className="flex flex-col md:flex-row gap-4 mb-8 max-w-4xl mx-auto">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
              <Input
                type="text"
                placeholder="Search products..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 h-12 border-2 border-black/10 focus:border-black transition-colors"
              />
            </div>
            <Select value={selectedCategory} onValueChange={setSelectedCategory}>
              <SelectTrigger className="w-full md:w-[200px] h-12 border-2 border-black/10 focus:border-black">
                <SelectValue placeholder="Category" />
              </SelectTrigger>
              <SelectContent>
                {categories.map((category) => (
                  <SelectItem key={category.value} value={category.value}>
                    {category.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {/* Results Count */}
          <div className="text-center mb-8">
            <p className="text-gray-600">
              Showing {filteredProducts.length} of {allProducts.length} products
            </p>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section ref={gridRef} className="py-10 md:py-20 px-4 md:px-6">
        <div className="max-w-7xl mx-auto">
          {filteredProducts.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8 justify-items-center">
              {filteredProducts.map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  onClick={() => setSelectedProduct(product)}
                />
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <h3 className="text-2xl font-bold mb-4 text-gray-400">No products found</h3>
              <p className="text-gray-500 mb-8">Try adjusting your search or filter criteria</p>
              <Button 
                onClick={() => {
                  setSearchTerm("");
                  setSelectedCategory("all");
                }}
                variant="outline"
                className="border-black hover:bg-black hover:text-white"
              >
                Clear Filters
              </Button>
            </div>
          )}
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

export default Collections;