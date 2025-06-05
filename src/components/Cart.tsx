
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
          { x: "100%" },
          { x: "0%", duration: 0.4, ease: "power3.out" }
        );
      } else {
        gsap.to(cartRef.current, {
          x: "100%",
          duration: 0.3,
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
        <div className="flex justify-between items-center p-6 border-b-2 border-black">
          <h2 className="text-2xl font-bold tracking-wider text-black">
            CART ({cartItems.length})
          </h2>
          <button
            onClick={onClose}
            className="p-3 hover:bg-black hover:text-white transition-all duration-300 border-2 border-black rounded-lg"
          >
            <X size={20} />
          </button>
        </div>

        {/* Cart Items */}
        <div className="flex-1 overflow-y-auto p-6">
          {cartItems.length === 0 ? (
            <div className="text-center py-16">
              <div className="w-24 h-24 mx-auto mb-6 border-2 border-black border-dashed rounded-lg flex items-center justify-center">
                <span className="text-gray-400 text-2xl">🛒</span>
              </div>
              <p className="text-gray-600 text-lg mb-4">Your cart is empty</p>
              <p className="text-gray-500 text-sm">Add some items to get started</p>
            </div>
          ) : (
            <div className="space-y-6">
              {cartItems.map((item) => (
                <div key={item.id} className="border-b border-gray-200 pb-6">
                  <div className="flex gap-4">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-20 h-20 object-cover border-2 border-black rounded-lg"
                    />
                    <div className="flex-1">
                      <h3 className="font-bold text-sm tracking-wider text-black">{item.name}</h3>
                      <p className="text-sm text-gray-600 mt-1">
                        {item.color} • {item.size}
                      </p>
                      <p className="font-bold mt-2 text-black">{formatPrice(item.price)}</p>
                    </div>
                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="p-2 hover:bg-black hover:text-white transition-all duration-300 border border-black self-start rounded-lg"
                    >
                      <X size={16} />
                    </button>
                  </div>
                  
                  <div className="flex items-center justify-between mt-4">
                    <div className="flex items-center gap-3">
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        className="p-2 border border-black hover:bg-black hover:text-white transition-all duration-300 rounded-lg"
                      >
                        <Minus size={16} />
                      </button>
                      <span className="font-bold text-black w-8 text-center">{item.quantity}</span>
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        className="p-2 border border-black hover:bg-black hover:text-white transition-all duration-300 rounded-lg"
                      >
                        <Plus size={16} />
                      </button>
                    </div>
                    <p className="font-bold text-black">{formatPrice(item.price * item.quantity)}</p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer */}
        {cartItems.length > 0 && (
          <div className="border-t-2 border-black p-6 space-y-4 bg-white">
            <div className="space-y-3">
              <div className="flex justify-between text-lg text-black">
                <span>Subtotal:</span>
                <span className="font-bold">{formatPrice(totalPrice)}</span>
              </div>
              <p className="text-sm text-gray-600">Taxes and shipping calculated at checkout.</p>
            </div>
            <div className="flex justify-between items-center text-2xl font-bold border-t border-gray-200 pt-4">
              <span className="text-black">TOTAL:</span>
              <span className="text-black">{formatPrice(totalPrice)}</span>
            </div>
            <Button
              onClick={handleCheckout}
              className="w-full bg-black text-white hover:bg-gray-800 border-2 border-black font-bold tracking-wider py-4 rounded-lg"
            >
              PROCEED TO CHECKOUT
            </Button>
            <Button
              variant="outline"
              onClick={onClose}
              className="w-full border-2 border-black text-black hover:bg-black hover:text-white font-bold tracking-wider py-3 bg-transparent rounded-lg"
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
