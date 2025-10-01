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
        gsap.fromTo(
          cartRef.current,
          { x: "100%" },
          { x: "0%", duration: 0.4, ease: "power3.out" }
        );
      } else {
        gsap.to(cartRef.current, {
          x: "100%",
          duration: 0.3,
          ease: "power3.in",
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
      <div className="fixed inset-0 bg-black/80 z-40" onClick={onClose} />

      {/* Cart Sidebar */}
      <div
        ref={cartRef}
        className="fixed top-0 right-0 h-full w-full max-w-md bg-white z-50 flex flex-col shadow-2xl"
      >
        {/* Header */}
        <div className="flex justify-between items-center p-6">
          <h2 className="text-xl font-normal">
            Cart ({cartItems.length} Items)
          </h2>
          <button onClick={onClose} className="hover:opacity-70">
            <X size={24} />
          </button>
        </div>

        {/* Cart Items */}
        <div className="flex-1 overflow-y-auto px-6">
          {cartItems.length === 0 ? (
            <div className="text-center py-16">
              <p className="text-gray-600">Your cart is empty</p>
            </div>
          ) : (
            <div className="space-y-6">
              {cartItems.map((item) => (
                <div
                  key={item.id}
                  className="flex gap-4 py-4 border-t border-gray-200"
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-20 h-20 object-cover bg-gray-50"
                  />
                  <div className="flex-1">
                    <div className="flex justify-between">
                      <div>
                        <h3 className="font-normal">{item.name}</h3>
                        <p className="text-sm text-gray-500 mt-1">
                          Color: {item.color}
                        </p>
                      </div>
                      <button
                        onClick={() => removeFromCart(item.id)}
                        className="text-gray-400 hover:text-black"
                      >
                        <X size={20} />
                      </button>
                    </div>

                    <div className="flex items-center justify-between mt-4">
                      <div className="flex items-center border border-gray-300">
                        <button
                          onClick={() =>
                            updateQuantity(item.id, item.quantity - 1)
                          }
                          className="px-3 py-1 hover:bg-gray-50"
                        >
                          -
                        </button>
                        <span className="px-3 py-1 border-x border-gray-300">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() =>
                            updateQuantity(item.id, item.quantity + 1)
                          }
                          className="px-3 py-1 hover:bg-gray-50"
                        >
                          +
                        </button>
                      </div>
                      <p className="font-normal">
                        {formatPrice(item.price * item.quantity)}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer */}
        {cartItems.length > 0 && (
          <div className="p-6 space-y-4">
            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <span className="text-lg">Subtotal</span>
                <span className="text-lg">{formatPrice(totalPrice)}</span>
              </div>
              <p className="text-sm text-gray-500">
                Taxes and shipping are calculated at checkout.
              </p>
            </div>

            <button
              onClick={handleCheckout}
              className="w-full bg-gray-900 text-white py-4 hover:bg-black"
            >
              Checkout
            </button>

            <button
              onClick={onClose}
              className="w-full border border-gray-300 py-4 hover:bg-gray-50"
            >
              View Cart
            </button>

            <div className="flex justify-center">
              <span className="text-sm flex items-center gap-1 text-gray-500">
                <span className="inline-block">🔒</span> Secure Checkout
              </span>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Cart;
