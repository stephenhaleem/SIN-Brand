
import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ShoppingBag } from "lucide-react";
import Navigation from "./Navigation";
import MobileMenu from "./MobileMenu";
import { useCart } from "@/contexts/CartContext";

interface HeaderProps {
  onCartOpen: () => void;
}

const Header = ({ onCartOpen }: HeaderProps) => {
  const { totalItems } = useCart();
  const headerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (headerRef.current) {
      gsap.fromTo(
        headerRef.current,
        { opacity: 0, y: -50 },
        { opacity: 1, y: 0, duration: 1, ease: "power3.out" }
      );
    }
  }, []);

  return (
    <header
      ref={headerRef}
      className="relative p-4 md:p-6 flex justify-between items-center border-b-2 border-black bg-white z-50"
    >
      <div className="flex items-center gap-2 md:gap-4">
        <div className="w-8 h-8 md:w-12 md:h-12 bg-black text-white flex items-center justify-center rounded-lg">
          <span className="font-bold text-sm md:text-xl">R</span>
        </div>
        <h1 className="text-2xl md:text-4xl font-normal tracking-wider text-black">
          SIN
        </h1>
      </div>

      <Navigation />

      <div className="flex items-center gap-4 md:gap-6">
        <MobileMenu />
        <button
          onClick={onCartOpen}
          className="relative p-2 border-2 border-black hover:bg-black hover:text-white transition-all duration-300 rounded-md"
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
  );
};

export default Header;
