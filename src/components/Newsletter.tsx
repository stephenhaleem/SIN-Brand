
import { useState, useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

gsap.registerPlugin(ScrollTrigger);

const Newsletter = () => {
  const [email, setEmail] = useState("");
  const { toast } = useToast();
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (sectionRef.current) {
      gsap.fromTo(sectionRef.current,
        { opacity: 0, y: 100, scale: 0.9 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 70%",
            end: "bottom 30%",
            toggleActions: "play none none reverse"
          }
        }
      );
    }
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      toast({
        title: "Welcome to the Rebellion!",
        description: "You've joined our exclusive underground network.",
      });
      setEmail("");
    }
  };

  return (
    <section ref={sectionRef} className="relative z-10 py-32 px-6 bg-gradient-to-r from-red-950 via-black to-red-950 text-white">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-red-900/20 to-transparent"></div>
      <div className="absolute inset-0" style={{
        backgroundImage: `radial-gradient(circle at 50% 50%, rgba(255,0,0,0.1) 0%, transparent 50%)`,
      }}></div>
      
      <div className="max-w-3xl mx-auto text-center relative z-10">
        <div className="mb-8">
          <h3 className="text-6xl font-bold mb-6 tracking-wider bg-gradient-to-r from-white via-red-400 to-white bg-clip-text text-transparent">
            JOIN THE UNDERGROUND
          </h3>
          <div className="w-32 h-1 bg-gradient-to-r from-red-600 to-red-400 mx-auto mb-8"></div>
        </div>
        
        <p className="text-2xl mb-12 text-gray-300 leading-relaxed">
          Be the first to know about new drops, exclusive collections, and secret releases. 
          The revolution starts with you.
        </p>
        
        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-6 max-w-lg mx-auto">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your rebel email"
            required
            className="flex-1 px-6 py-4 bg-gradient-to-r from-gray-900 to-black text-white border-2 border-red-600 focus:outline-none focus:ring-2 focus:ring-red-400 focus:border-red-400 placeholder-gray-400 text-lg"
          />
          <Button
            type="submit"
            className="bg-gradient-to-r from-red-600 to-red-800 text-white hover:from-red-700 hover:to-red-900 border-2 border-red-400 font-bold tracking-wider py-4 px-8 text-lg transform hover:scale-105 transition-all duration-300"
          >
            JOIN REBELLION
          </Button>
        </form>
        
        <p className="text-gray-500 mt-6 text-sm">
          * No spam, just pure rebellion. Unsubscribe anytime.
        </p>
      </div>
    </section>
  );
};

export default Newsletter;
