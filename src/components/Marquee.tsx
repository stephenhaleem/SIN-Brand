
import { useRef, useEffect } from "react";
import { gsap } from "gsap";

const Marquee = () => {
  const marqueeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (marqueeRef.current) {
      const marqueeText = marqueeRef.current.querySelector(".marquee-text");
      if (marqueeText) {
        gsap.set(marqueeText, { x: "100%" });
        gsap.to(marqueeText, {
          x: "-100%",
          duration: 20,
          ease: "none",
          repeat: -1,
        });
      }
    }
  }, []);

  return (
    <div
      ref={marqueeRef}
      className="py-2 md:py-4 bg-foreground text-background overflow-hidden relative z-20"
    >
      <div className="marquee-text whitespace-nowrap text-lg md:text-2xl font-bold tracking-wider">
        ★ SIN ★ REVENGE ★ SIN ★ REVENGE ★ SIN ★ REVENGE ★ SIN ★ ★ SIN ★
        REVENGE ★ SIN ★ REVENGE ★ SIN ★ REVENGE ★ SIN ★ ★ SIN ★ REVENGE ★ SIN
        ★ REVENGE ★ SIN ★ REVENGE ★ SIN ★ ★ SIN ★ REVENGE ★ SIN ★ REVENGE ★
        SIN ★ REVENGE ★ SIN ★
      </div>
    </div>
  );
};

export default Marquee;
