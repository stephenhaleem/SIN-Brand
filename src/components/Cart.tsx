
import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { X, Plus, Minus } from "lucide-react";
import { useCart } from "@/hooks/useCart";
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
          { x: "100%" },
          { x: "0%", duration: 0.4, ease: "power3.out" }
        );
      } else {
        gsap.to(cartRef.current, {
          x: "100%",
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

  if (!isOpen) return null;

  return (
    <>
      {/* Overlay */}
      <div
        className="fixed inset-0 bg-black bg-opacity-50 z-40"
        onClick={onClose}
      />
      
      {/* Cart Sidebar */}
      <div
        ref={cartRef}
        className="fixed top-0 right-0 h-full w-full max-w-md bg-white border-l-2 border-black z-50 flex flex-col"
      >
        {/* Header */}
        <div className="flex justify-between items-center p-6 border-b border-black">
          <h2 className="text-2xl font-bold tracking-wider">CART</h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-black hover:text-white transition-colors border border-black"
          >
            <X size={20} />
          </button>
        </div>

        {/* Cart Items */}
        <div className="flex-1 overflow-y-auto p-6">
          {cartItems.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">Your cart is empty</p>
            </div>
          ) : (
            <div className="space-y-6">
              {cartItems.map((item) => (
                <div key={item.id} className="border-b border-gray-200 pb-6">
                  <div className="flex gap-4">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-20 h-20 object-cover border border-black"
                    />
                    <div className="flex-1">
                      <h3 className="font-bold text-sm tracking-wider">{item.name}</h3>
                      <p className="text-sm text-gray-600 mt-1">
                        {item.color} • {item.size}
                      </p>
                      <p className="font-bold mt-2">${item.price}</p>
                    </div>
                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="p-1 hover:bg-black hover:text-white transition-colors border border-black self-start"
                    >
                      <X size={16} />
                    </button>
                  </div>
                  
                  <div className="flex items-center justify-between mt-4">
                    <div className="flex items-center gap-3">
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        className="p-1 border border-black hover:bg-black hover:text-white transition-colors"
                      >
                        <Minus size={16} />
                      </button>
                      <span className="font-bold w-8 text-center">{item.quantity}</span>
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        className="p-1 border border-black hover:bg-black hover:text-white transition-colors"
                      >
                        <Plus size={16} />
                      </button>
                    </div>
                    <p className="font-bold">${(item.price * item.quantity).toFixed(2)}</p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer */}
        {cartItems.length > 0 && (
          <div className="border-t border-black p-6 space-y-4">
            <div className="flex justify-between items-center text-xl font-bold">
              <span>TOTAL:</span>
              <span>${totalPrice.toFixed(2)}</span>
            </div>
            <Button
              onClick={handleCheckout}
              className="w-full bg-black text-white hover:bg-white hover:text-black border-2 border-black font-bold tracking-wider py-4"
            >
              CHECKOUT
            </Button>
          </div>
        )}
      </div>
    </>
  );
};

export default Cart;
