import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Shield, Truck, Zap, Award } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const features = [
  {
    icon: Shield,
    title: "Premium Quality",
    description: "Crafted from the finest materials for lasting durability",
  },
  {
    icon: Truck,
    title: "Fast Shipping",
    description: "Quick delivery across Nigeria and beyond",
  },
  {
    icon: Zap,
    title: "Bold Designs",
    description: "Unique pieces that make a statement",
  },
  {
    icon: Award,
    title: "Limited Drops",
    description: "Exclusive collections in limited quantities",
  },
];

const FeaturesSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (cardsRef.current) {
      gsap.fromTo(
        cardsRef.current.children,
        { opacity: 0, y: 50, scale: 0.9 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.6,
          stagger: 0.15,
          ease: "power3.out",
          scrollTrigger: {
            trigger: cardsRef.current,
            start: "top 80%",
          },
        }
      );
    }
  }, []);

  return (
    <section ref={sectionRef} className="py-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-shadows text-4xl md:text-6xl font-bold mb-4 tracking-wider">
            WHY SIN REVENGE?
          </h2>
          <div className="w-32 h-1 bg-black mx-auto" />
        </div>

        <div
          ref={cardsRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl border-2 border-black/10 hover:border-black transition-all duration-300 hover:shadow-xl group animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="mb-6">
                <div className="w-16 h-16 bg-black rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform animate-pulse-subtle">
                  <feature.icon className="text-white transition-transform group-hover:rotate-12" size={32} />
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-3">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
