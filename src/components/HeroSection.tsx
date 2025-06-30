
import { useRef, useEffect } from "react";
import { gsap } from "gsap";

const HeroSection = () => {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (heroRef.current) {
      const heroTitle = heroRef.current.querySelector(".hero-title");
      const heroSubtitle = heroRef.current.querySelector(".hero-subtitle");
      const heroDesc = heroRef.current.querySelector(".hero-desc");
      const heroButton = heroRef.current.querySelector(".hero-button");

      gsap.fromTo(
        [heroTitle, heroSubtitle, heroDesc, heroButton],
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.2,
          ease: "power3.out",
          delay: 0.3,
        }
      );
    }
  }, []);

  return (
    <section className="relative min-h-screen bg-gray-100">
      <div className="absolute inset-0 flex items-center pointer-events-none overflow-hidden">
        <div className="whitespace-nowrap text-[80px] md:text-[200px] font-bold text-black/5 tracking-wider">
          SIN ◆ REVENGE ◆ SIN ◆ REVENGE ☺ SIN
        </div>
      </div>

      <div ref={heroRef} className="container mx-auto px-4 md:px-6 py-10 md:py-20 flex flex-col md:flex-row items-center justify-between relative z-10">
        <div className="w-full md:w-1/2 mb-8 md:mb-0 text-center md:text-left">
          <p className="hero-desc font-shadows text-lg md:text-2xl lg:text-5xl mb-6 text-gray-600 leading-relaxed max-w-lg mx-auto md:mx-0">
            Discover a curated selection of timeless designs and modern trends
            crafted to elevate your wardrobe. From statement pieces to
            everyday essentials, find the perfect fit that defines your unique
            style.
          </p>
          <button
            onClick={() =>
              document
                .getElementById("shop")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            className="hero-button bg-black text-white px-6 md:px-8 py-3 flex items-center gap-2 hover:bg-white/90 hover:text-black transition-all duration-300 mx-auto md:mx-0 rounded-lg"
          >
            SHOP <span className="text-lg">→</span>
          </button>
        </div>

        <div className="w-full md:w-1/2">
          <div className="aspect-[3/4] relative w-full max-w-sm md:max-w-md mx-auto">
            <img
              src="/images/ff.png"
              alt="Hero"
              className="w-full h-full object-cover rounded-lg"
            />
            <div className="absolute top-4 left-4 w-6 md:w-8 h-6 md:h-8 border-l-2 border-t-2 border-black"></div>
            <div className="absolute bottom-4 right-4 w-6 md:w-8 h-6 md:h-8 border-r-2 border-b-2 border-black"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
