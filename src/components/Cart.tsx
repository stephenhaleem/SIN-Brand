
import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { X, Plus, Minus } from "lucide-react";
import { useCart } from "@/contexts/CartContext";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

interface CartProps {
  isOpen: boolean;
  onClose: () => void;
}

const Cart = ({ isOpen, onClose }: CartProps) => {
  const { cartItems, updateQuantity, removeFromCart, totalPrice } = useCart();
  const cartRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (cartRef.current) {
      if (isOpen) {
        gsap.fromTo(cartRef.current,
          { x: "100%", rotateY: -45 },
          { x: "0%", rotateY: 0, duration: 0.5, ease: "power3.out" }
        );
      } else {
        gsap.to(cartRef.current, {
          x: "100%",
          rotateY: 45,
          duration: 0.4,
          ease: "power3.in"
        });
      }
    }
  }, [isOpen]);

  const handleCheckout = () => {
    onClose();
    navigate("/checkout");
  };

  const formatPrice = (price: number) => {
    return `₦${price.toLocaleString()}`;
  };

  if (!isOpen) return null;

  return (
    <>
      {/* Enhanced Overlay */}
      <div
        className="fixed inset-0 bg-black bg-opacity-70 z-40 backdrop-blur-sm"
        onClick={onClose}
      />
      
      {/* Enhanced Cart Sidebar */}
      <div
        ref={cartRef}
        className="fixed top-0 right-0 h-full w-full max-w-md bg-gradient-to-b from-gray-900 via-black to-red-950/30 border-l-2 border-red-600 z-50 flex flex-col shadow-2xl backdrop-blur-lg"
      >
        {/* Enhanced Header */}
        <div className="flex justify-between items-center p-6 border-b-2 border-red-600 bg-gradient-to-r from-black via-red-950/50 to-black">
          <h2 className="text-2xl font-bold tracking-wider text-white">
            REBEL CART ({cartItems.length} Items)
          </h2>
          <button
            onClick={onClose}
            className="p-3 hover:bg-red-600 hover:text-white transition-all duration-300 border-2 border-red-600 bg-red-950/30 transform hover:scale-110 hover:rotate-90"
          >
            <X size={20} />
          </button>
        </div>

        {/* Enhanced Cart Items */}
        <div className="flex-1 overflow-y-auto p-6">
          {cartItems.length === 0 ? (
            <div className="text-center py-16">
              <div className="w-24 h-24 mx-auto mb-6 border-2 border-red-600 border-dashed rounded-full flex items-center justify-center">
                <span className="text-red-400 text-2xl">🛒</span>
              </div>
              <p className="text-gray-400 text-lg mb-4">Your rebellion cart is empty</p>
              <p className="text-gray-500 text-sm">Add some items to start your revolution</p>
            </div>
          ) : (
            <div className="space-y-6">
              {cartItems.map((item) => (
                <div key={item.id} className="border-b border-red-900/50 pb-6 bg-gradient-to-r from-red-950/20 to-transparent p-4 rounded border border-red-900/30">
                  <div className="flex gap-4">
                    <div className="relative">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-20 h-20 object-cover border-2 border-red-600"
                      />
                      <div className="absolute -top-1 -right-1 w-3 h-3 bg-red-600 rounded-full"></div>
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bold text-sm tracking-wider text-white">{item.name}</h3>
                      <p className="text-sm text-red-300 mt-1">
                        {item.color} • {item.size}
                      </p>
                      <p className="font-bold mt-2 text-red-400">{formatPrice(item.price)}</p>
                    </div>
                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="p-2 hover:bg-red-600 hover:text-white transition-all duration-300 border border-red-600 self-start transform hover:scale-110"
                    >
                      <X size={16} />
                    </button>
                  </div>
                  
                  <div className="flex items-center justify-between mt-4">
                    <div className="flex items-center gap-3">
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        className="p-2 border border-red-600 hover:bg-red-600 hover:text-white transition-all duration-300 transform hover:scale-110"
                      >
                        <Minus size={16} />
                      </button>
                      <span className="font-bold text-white w-8 text-center">{item.quantity}</span>
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        className="p-2 border border-red-600 hover:bg-red-600 hover:text-white transition-all duration-300 transform hover:scale-110"
                      >
                        <Plus size={16} />
                      </button>
                    </div>
                    <p className="font-bold text-red-400">{formatPrice(item.price * item.quantity)}</p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Enhanced Footer */}
        {cartItems.length > 0 && (
          <div className="border-t-2 border-red-600 p-6 space-y-4 bg-gradient-to-r from-black via-red-950/30 to-black">
            <div className="space-y-3">
              <div className="flex justify-between text-lg text-white">
                <span>Subtotal:</span>
                <span className="text-red-400">{formatPrice(totalPrice)}</span>
              </div>
              <p className="text-sm text-gray-400">Taxes and shipping calculated at rebellion checkout.</p>
            </div>
            <div className="flex justify-between items-center text-2xl font-bold border-t border-red-900/50 pt-4">
              <span className="text-white">TOTAL:</span>
              <span className="text-red-400">{formatPrice(totalPrice)}</span>
            </div>
            <Button
              onClick={handleCheckout}
              className="w-full bg-gradient-to-r from-red-600 to-red-800 text-white hover:from-red-700 hover:to-red-900 border-2 border-red-400 font-bold tracking-wider py-4 transform hover:scale-105 transition-all duration-300"
            >
              PROCEED TO REBELLION
            </Button>
            <Button
              variant="outline"
              onClick={onClose}
              className="w-full border-2 border-red-600 text-white hover:bg-red-600 hover:text-white font-bold tracking-wider py-3 bg-transparent transform hover:scale-105 transition-all duration-300"
            >
              Continue Shopping
            </Button>
          </div>
        )}
      </div>
    </>
  );
};

export default Cart;
