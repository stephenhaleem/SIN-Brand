import { useState, useRef, useEffect } from "react";
import { gsap } from "gsap";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useCart } from "@/contexts/CartContext";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useNavigate } from "react-router-dom";
import { countries } from "@/lib/countries";

const checkoutSchema = z.object({
  firstName: z.string().min(2, "First name must be at least 2 characters"),
  lastName: z.string().min(2, "Last name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(10, "Phone number must be at least 10 digits"),
  address: z.string().min(5, "Address must be at least 5 characters"),
  city: z.string().min(2, "City must be at least 2 characters"),
  state: z.string().min(2, "State must be at least 2 characters"),
  country: z.string().min(2, "Please select a country"),
  zipCode: z.string().min(3, "ZIP code must be at least 3 characters"),
  promoCode: z.string().optional(),
});

type CheckoutFormData = z.infer<typeof checkoutSchema>;

const Checkout = () => {
  const { cartItems, totalPrice, clearCart } = useCart();
  const navigate = useNavigate();
  const pageRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLDivElement>(null);
  const [promoApplied, setPromoApplied] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<CheckoutFormData>({
    resolver: zodResolver(checkoutSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      address: "",
      city: "",
      state: "",
      country: "",
      zipCode: "",
    },
  });

  useEffect(() => {
    if (cartItems.length === 0) {
      navigate("/");
      return;
    }

    gsap.fromTo(
      pageRef.current,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" }
    );

    if (formRef.current) {
      gsap.fromTo(
        formRef.current.querySelectorAll(".form-item"),
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.1,
          ease: "power2.out",
          delay: 0.3,
        }
      );
    }
  }, [cartItems.length, navigate]);

  const formatPrice = (price: number) => `₦${price.toLocaleString()}`;

  const onSubmit = (data: CheckoutFormData) => {
    setIsSubmitting(true);
    
    const orderId = `RC${Date.now().toString().slice(-6)}`;

    const orderSummary = `
 *SIN REVENGE ORDER CONFIRMATION*

 *Order ID:* ${orderId}

 *Customer Details:*
Name: ${data.firstName} ${data.lastName}
Email: ${data.email}
Phone: ${data.phone}

 *Shipping Address:*
${data.address}
${data.city}, ${data.state} ${data.zipCode}
${data.country}

 *Order Items:*
${cartItems
  .map(
    (item) =>
      `${item.name} (${item.color}, ${item.size}) x${
        item.quantity
      } - ${formatPrice(item.price * item.quantity)}`
  )
  .join("\n")}

💰 *Total: ${formatPrice(totalPrice)}*
    `;

    const phoneNumber = "+2348106771807";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      orderSummary
    )}`;

    // Simulate processing delay
    setTimeout(() => {
      clearCart();
      window.open(whatsappUrl, "_blank");
      navigate("/");
    }, 1500);
  };

  return (
    <div
      ref={pageRef}
      className="min-h-screen bg-gradient-to-br from-white to-gray-50 text-black px-6 py-10 relative"
    >
      {/* SUBMITTING OVERLAY */}
      {isSubmitting && (
        <div className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center">
          <div className="bg-white rounded-2xl p-8 flex flex-col items-center gap-4 shadow-2xl">
            <div className="w-16 h-16 border-4 border-black/20 border-t-black rounded-full animate-spin" />
            <p className="text-black font-semibold text-lg">Processing your order...</p>
          </div>
        </div>
      )}
      {/* Marquee Background */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden opacity-[0.02]">
        <div className="whitespace-nowrap text-[180px] font-extrabold tracking-widest animate-marquee">
          SIN ◆ REVENGE ◆ SIN ◆ REVENGE ◆ SIN ◆ REVENGE
        </div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-10">
          <button
            onClick={() => navigate("/")}
            className="font-shadows text-lg font-semibold tracking-wide rounded-md px-4 py-2 hover:bg-gray-100 transition"
          >
            ← Continue Shopping
          </button>
          <h1 className="font-shadows text-4xl md:text-5xl font-bold tracking-widest">
            Checkout
          </h1>
        </div>

        <div className="grid lg:grid-cols-2 gap-10">
          {/* Order Summary */}
          <div className="bg-white border border-gray-200 shadow-xl rounded-2xl p-8">
            <h2 className="text-xl font-bold mb-6 tracking-wider text-gray-900">
              Order Summary
            </h2>
            <div className="space-y-6 mb-6">
              {cartItems.map((item) => (
                <div
                  key={item.id}
                  className="flex justify-between items-center border-b border-gray-100 pb-4"
                >
                  <div className="flex gap-4">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-16 h-16 object-cover border border-gray-300 rounded-lg"
                    />
                    <div>
                      <h3 className="font-semibold text-sm">{item.name}</h3>
                      <p className="text-xs text-gray-500">
                        {item.color} • {item.size}
                      </p>
                      <p className="text-xs text-gray-600">
                        Qty: {item.quantity}
                      </p>
                    </div>
                  </div>
                  <p className="font-bold text-gray-800">
                    {formatPrice(item.price * item.quantity)}
                  </p>
                </div>
              ))}
            </div>

            {/* Promo Code */}
            <div className="border-t pt-4">
              <div className="flex gap-2 mb-4">
                <Input
                  placeholder="Enter promo code"
                  className="rounded-lg border-gray-300 focus:ring-2 focus:ring-black"
                  {...form.register("promoCode")}
                />
                <Button
                  type="button"
                  onClick={() => setPromoApplied(true)}
                  className="bg-black text-white rounded-lg hover:bg-gray-800 transition"
                >
                  Apply
                </Button>
              </div>
              {promoApplied && (
                <p className="text-sm text-green-600 mb-4">
                  ✅ Promo code applied successfully!
                </p>
              )}
              <div className="flex justify-between items-center text-lg font-semibold">
                <span>Total:</span>
                <span className="text-xl font-bold">
                  {formatPrice(totalPrice)}
                </span>
              </div>
            </div>
          </div>

          {/* Shipping Form */}
          <div
            ref={formRef}
            className="bg-white border border-gray-200 shadow-xl rounded-2xl p-8"
          >
            <h2 className="text-xl font-bold mb-6 tracking-wider text-gray-900">
              Shipping Details
            </h2>

            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-6"
              >
                <div className="grid grid-cols-2 gap-4">
                  <FormField
                    control={form.control}
                    name="firstName"
                    render={({ field }) => (
                      <FormItem className="form-item">
                        <FormLabel>First Name</FormLabel>
                        <FormControl>
                          <Input
                            {...field}
                            className="rounded-lg border-gray-300"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="lastName"
                    render={({ field }) => (
                      <FormItem className="form-item">
                        <FormLabel>Last Name</FormLabel>
                        <FormControl>
                          <Input
                            {...field}
                            className="rounded-lg border-gray-300"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem className="form-item">
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input
                          {...field}
                          type="email"
                          className="rounded-lg border-gray-300"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="phone"
                  render={({ field }) => (
                    <FormItem className="form-item">
                      <FormLabel>Phone</FormLabel>
                      <FormControl>
                        <Input
                          {...field}
                          className="rounded-lg border-gray-300"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="address"
                  render={({ field }) => (
                    <FormItem className="form-item">
                      <FormLabel>Address</FormLabel>
                      <FormControl>
                        <Input
                          {...field}
                          className="rounded-lg border-gray-300"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <div className="grid grid-cols-2 gap-4">
                  <FormField
                    control={form.control}
                    name="city"
                    render={({ field }) => (
                      <FormItem className="form-item">
                        <FormLabel>City</FormLabel>
                        <FormControl>
                          <Input
                            {...field}
                            className="rounded-lg border-gray-300"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="state"
                    render={({ field }) => (
                      <FormItem className="form-item">
                        <FormLabel>State</FormLabel>
                        <FormControl>
                          <Input
                            {...field}
                            className="rounded-lg border-gray-300"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <FormField
                    control={form.control}
                    name="country"
                    render={({ field }) => (
                      <FormItem className="form-item">
                        <FormLabel>Country</FormLabel>
                        <FormControl>
                          <select
                            {...field}
                            className="w-full border rounded-lg border-gray-300 p-2 bg-white focus:ring-2 focus:ring-black"
                          >
                            <option value="">Select Country</option>
                            {countries.map((country) => (
                              <option key={country.code} value={country.code}>
                                {country.name}
                              </option>
                            ))}
                          </select>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="zipCode"
                    render={({ field }) => (
                      <FormItem className="form-item">
                        <FormLabel>ZIP Code</FormLabel>
                        <FormControl>
                          <Input
                            {...field}
                            className="rounded-lg border-gray-300"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-black text-white rounded-lg py-4 text-lg font-semibold hover:bg-gray-800 transition disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? "Processing..." : "Proceed to Order"}
                </Button>
              </form>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
