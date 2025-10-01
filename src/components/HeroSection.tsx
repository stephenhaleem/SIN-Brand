import { useRef, useEffect } from "react";
import { gsap } from "gsap";

const HeroSection = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (heroRef.current) {
      const heroTitle = heroRef.current.querySelector(".hero-title");
      const heroDesc = heroRef.current.querySelector(".hero-desc");
      const heroButton = heroRef.current.querySelector(".hero-button");

      gsap.fromTo(
        [heroTitle, heroDesc, heroButton].filter(Boolean),
        { opacity: 0, y: 80 },
        {
          opacity: 1,
          y: 0,
          duration: 1.2,
          stagger: 0.15,
          ease: "power4.out",
          delay: 0.5,
        }
      );
    }
  }, []);

  return (
    <section className="relative min-h-screen overflow-hidden bg-background">
      {/* Video Background */}
      <div className="absolute inset-0 w-full h-full">
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="/images/Ade.mp4" type="video/mp4" />
        </video>
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/50"></div>
      </div>

      {/* Animated Text Pattern */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden opacity-10">
        <div className="whitespace-nowrap text-[120px] md:text-[280px] font-black text-white tracking-wider">
          SIN × REVENGE
        </div>
      </div>

      {/* Content */}
      <div
        ref={heroRef}
        className="relative z-10 container mx-auto px-6 md:px-12 min-h-screen flex flex-col justify-center items-start"
      >
        <div className="max-w-4xl space-y-8">
          <h1 className="hero-title text-5xl md:text-7xl lg:text-8xl font-black text-white tracking-tight leading-none">
            STREET
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-white/60">
              CULTURE
            </span>
          </h1>

          <p className="hero-desc text-xl md:text-2xl lg:text-3xl text-white/90 font-light leading-relaxed max-w-2xl border-l-4 border-white pl-6">
            Premium streetwear for those who dare to stand out. Crafted with
            precision, designed for rebellion.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <button
              onClick={() =>
                document
                  .getElementById("shop")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="hero-button group bg-white text-black px-10 py-5 text-lg font-bold tracking-wider hover:bg-black hover:text-white border-2 border-white transition-all duration-500 flex items-center justify-center gap-3 shadow-2xl"
            >
              EXPLORE COLLECTION
              <span className="text-2xl group-hover:translate-x-2 transition-transform duration-300">
                →
              </span>
            </button>

            <button
              onClick={() =>
                document
                  .getElementById("gallery")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="group bg-transparent text-white px-10 py-5 text-lg font-bold tracking-wider hover:bg-white hover:text-black border-2 border-white transition-all duration-500 flex items-center justify-center gap-3"
            >
              VIEW LOOKBOOK
              <span className="text-2xl group-hover:translate-x-2 transition-transform duration-300">
                →
              </span>
            </button>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
          <span className="text-white/60 text-sm font-medium tracking-wider">
            SCROLL
          </span>
          <div className="w-[1px] h-12 bg-gradient-to-b from-white/60 to-transparent"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
