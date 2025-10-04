import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Star } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const testimonials = [
  {
    name: "Chidi A.",
    location: "Lagos",
    rating: 5,
    text: "The quality is insane! Every piece I've gotten from SIN REVENGE has been worth it. The designs are bold and unique.",
  },
  {
    name: "Amaka O.",
    location: "Abuja",
    rating: 5,
    text: "Finally found a brand that matches my energy. These pieces aren't for the faint-hearted and I'm here for it!",
  },
  {
    name: "Tunde B.",
    location: "Port Harcourt",
    rating: 5,
    text: "Been wearing SIN REVENGE for months now. The attention to detail is crazy. Every stitch, every design element is intentional.",
  },
];

const TestimonialsSection = () => {
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (cardsRef.current) {
      gsap.fromTo(
        cardsRef.current.children,
        { opacity: 0, x: -50 },
        {
          opacity: 1,
          x: 0,
          duration: 0.8,
          stagger: 0.2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: cardsRef.current,
            start: "top 80%",
          },
        }
      );
    }
  }, []);

  return (
    <section className="py-24 px-6 bg-black text-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-shadows text-4xl md:text-6xl font-bold mb-4 tracking-wider">
            WHAT THEY SAY
          </h2>
          <div className="w-32 h-1 bg-white mx-auto" />
        </div>

        <div
          ref={cardsRef}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white/5 backdrop-blur-sm p-8 rounded-2xl border border-white/10 hover:border-white/30 transition-all duration-300"
            >
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} size={20} fill="white" className="text-white" />
                ))}
              </div>
              <p className="text-gray-300 mb-6 leading-relaxed italic">
                "{testimonial.text}"
              </p>
              <div className="border-t border-white/20 pt-4">
                <p className="font-bold">{testimonial.name}</p>
                <p className="text-sm text-gray-400">{testimonial.location}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
