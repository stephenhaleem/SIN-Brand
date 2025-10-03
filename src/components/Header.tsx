import { useRef, useEffect, useState } from "react";
import { gsap } from "gsap";
import { ShoppingBag } from "lucide-react";
import { useCart } from "@/contexts/CartContext";

interface HeaderProps {
  onCartOpen: () => void;
}

const Header = ({ onCartOpen }: HeaderProps) => {
  const { totalItems } = useCart();
  const headerRef = useRef<HTMLDivElement>(null);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    if (headerRef.current) {
      gsap.fromTo(
        headerRef.current,
        { opacity: 0, y: -50 },
        { opacity: 1, y: 0, duration: 1, ease: "power3.out" }
      );
    }
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      ref={headerRef}
      className={`fixed top-0 left-0 right-0 p-5 md:p-3 flex justify-between items-center border-b border-border z-50 transition-all duration-300 ${
        isScrolled ? "bg-background/20 backdrop-blur-xl shadow-premium" : ""
      }`}
    >
      <div className="flex items-center gap-2 md:gap-4">
        {/* Replace R and SIN with PNG logo */}
        <img
          src="/images/logo.png" // <- update with the path to your logo file
          alt="Logo"
          className="h-8 md:h-12 w-auto" // keep height responsive, width adjusts automatically
        />
      </div>

      <button
        onClick={onCartOpen}
        className="relative p-2 border-2 border-foreground hover:bg-foreground hover:text-background transition-all duration-300"
      >
        <ShoppingBag size={16} className="md:w-5 md:h-5" />
        {totalItems > 0 && (
          <span className="absolute -top-2 -right-2 w-4 h-4 md:w-5 md:h-5 bg-foreground text-background text-xs font-bold rounded-full flex items-center justify-center">
            {totalItems}
          </span>
        )}
      </button>
    </header>
  );
};

export default Header;
