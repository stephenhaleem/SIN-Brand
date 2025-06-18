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
import { countries } from "@/lib/countries"; // You'll need to create this file

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

    if (pageRef.current) {
      gsap.fromTo(
        pageRef.current,
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" }
      );
    }

    if (formRef.current) {
      const formElements = formRef.current.querySelectorAll(".form-item");
      gsap.fromTo(
        formElements,
        { opacity: 0, x: -30 },
        {
          opacity: 1,
          x: 0,
          duration: 0.6,
          stagger: 0.1,
          ease: "power3.out",
          delay: 0.3,
        }
      );
    }
  }, [cartItems.length, navigate]);

  const formatPrice = (price: number) => {
    return `₦${price.toLocaleString()}`;
  };

  const onSubmit = (data: CheckoutFormData) => {
    // Generate order ID
    const orderId = `RC${Date.now().toString().slice(-6)}`;

    // Create order summary
    const orderItems = cartItems
      .map(
        (item) =>
          `${item.name} (${item.color}, ${item.size}) x${
            item.quantity
          } - ${formatPrice(item.price * item.quantity)}`
      )
      .join("\n");

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
${orderItems}

💰 *Total: ${formatPrice(totalPrice)}*

    `;

    // Create WhatsApp link
    const phoneNumber = "+2348106771807"; // Replace with actual business WhatsApp number
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      orderSummary
    )}`;

    // Clear cart and redirect to WhatsApp
    clearCart();
    window.open(whatsappUrl, "_blank");
    navigate("/");
  };

  return (
    <div
      ref={pageRef}
      className="min-h-screen bg-white text-black p-6 relative overflow-hidden"
    >
      {/* Marquee Text Overlay */}
      <div className="absolute inset-0 flex items-center pointer-events-none overflow-hidden opacity-[0.03]">
        <div className="whitespace-nowrap text-[200px] font-bold tracking-wider animate-marquee">
          SIN ◆ REVENGE ◆ SIN ◆ REVENGE ◆ SIN ◆ REVENGE ◆ SIN ◆ REVENGE
        </div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-12">
          <button
            onClick={() => navigate("/")}
            className="font-shadows text-2xl font-bold tracking-wider rounded-lg px-4 py-2"
          >
            ← SIN
          </button>
          <h1 className="font-shadows text-4xl font-bold tracking-wider">
            CHECKOUT
          </h1>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Order Summary */}
          <div className="border-2 border-black p-8 rounded-lg">
            <h2 className="font-shadows text-2xl font-bold mb-6 tracking-wider">
              ORDER SUMMARY
            </h2>
            <div className="space-y-4 mb-6">
              {cartItems.map((item) => (
                <div
                  key={item.id}
                  className="flex justify-between items-center border-b border-gray-200 pb-4"
                >
                  <div className="flex gap-4">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-16 h-16 object-cover border border-black rounded-md"
                    />
                    <div>
                      <h3 className="font-bold text-sm">{item.name}</h3>
                      <p className="text-sm text-gray-600">
                        {item.color} • {item.size}
                      </p>
                      <p className="text-sm">Qty: {item.quantity}</p>
                    </div>
                  </div>
                  <p className="font-bold">
                    {formatPrice(item.price * item.quantity)}
                  </p>
                </div>
              ))}
            </div>

            {/* Promo Code Section */}
            <div className="border-t-2 border-black pt-4 mt-4">
              <div className="flex gap-2 mb-4">
                <Input
                  placeholder="Enter promo code"
                  className="border-black rounded-md uppercase"
                  {...form.register("promoCode")}
                />
                <Button
                  type="button"
                  onClick={() => setPromoApplied(true)}
                  className="bg-black text-white hover:bg-gray-800 px-4"
                >
                  Apply
                </Button>
              </div>
              {promoApplied && (
                <p className="text-sm text-green-600 mb-4">
                  Promo code applied successfully!
                </p>
              )}
              <div className="flex justify-between items-center text-xl font-bold">
                <span>TOTAL:</span>
                <span>{formatPrice(totalPrice)}</span>
              </div>
            </div>
          </div>

          {/* Checkout Form */}
          <div
            ref={formRef}
            className="border-2 border-black p-8 rounded-lg backdrop-blur-sm relative"
          >
            <h2 className="font-shadows text-2xl font-bold mb-6 tracking-wider">
              SHIPPING DETAILS
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
                        <FormLabel className="font-bold tracking-wider">
                          FIRST NAME
                        </FormLabel>
                        <FormControl>
                          <Input
                            {...field}
                            className="border-black rounded-md"
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
                        <FormLabel className="font-bold tracking-wider">
                          LAST NAME
                        </FormLabel>
                        <FormControl>
                          <Input
                            {...field}
                            className="border-black rounded-md"
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
                      <FormLabel className="font-bold tracking-wider">
                        EMAIL
                      </FormLabel>
                      <FormControl>
                        <Input
                          {...field}
                          type="email"
                          className="border-black rounded-md"
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
                      <FormLabel className="font-bold tracking-wider">
                        PHONE
                      </FormLabel>
                      <FormControl>
                        <Input {...field} className="border-black rounded-md" />
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
                      <FormLabel className="font-bold tracking-wider">
                        ADDRESS
                      </FormLabel>
                      <FormControl>
                        <Input {...field} className="border-black rounded-md" />
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
                        <FormLabel className="font-bold tracking-wider">
                          CITY
                        </FormLabel>
                        <FormControl>
                          <Input
                            {...field}
                            className="border-black rounded-md"
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
                        <FormLabel className="font-bold tracking-wider">
                          STATE
                        </FormLabel>
                        <FormControl>
                          <Input
                            {...field}
                            className="border-black rounded-md"
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
                        <FormLabel className="font-bold tracking-wider">
                          COUNTRY
                        </FormLabel>
                        <FormControl>
                          <select
                            {...field}
                            className="w-full border-2 border-black rounded-md p-2 bg-white"
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
                </div>

                <Button
                  type="submit"
                  className="w-full bg-black text-white hover:bg-white hover:text-black border-2 border-black font-bold tracking-wider py-4 text-lg rounded-lg"
                >
                  PROCEED TO ORDER
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
