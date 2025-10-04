import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const BrandStory = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (headingRef.current && contentRef.current) {
      gsap.fromTo(
        headingRef.current,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: headingRef.current,
            start: "top 80%",
          },
        }
      );

      gsap.fromTo(
        contentRef.current.children,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: contentRef.current,
            start: "top 80%",
          },
        }
      );
    }
  }, []);

  return (
    <section
      ref={sectionRef}
      className="py-24 px-6 bg-gradient-to-b from-black to-gray-900 text-white relative overflow-hidden"
    >
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-white rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-white rounded-full blur-3xl" />
      </div>

      <div className="max-w-5xl mx-auto relative z-10">
        <h2
          ref={headingRef}
          className="font-shadows text-5xl md:text-7xl font-bold text-center mb-16 tracking-wider"
        >
          THE STORY
        </h2>

        <div ref={contentRef} className="space-y-12">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h3 className="text-3xl font-bold">Born from Rebellion</h3>
              <p className="text-gray-300 text-lg leading-relaxed">
                SIN REVENGE isn't just clothing—it's a statement. Founded on the
                principle that fashion should challenge, provoke, and inspire, we
                create pieces for those who refuse to blend in.
              </p>
            </div>
            <div className="aspect-square bg-gradient-to-br from-white/10 to-transparent rounded-2xl animate-float" />
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="aspect-square bg-gradient-to-br from-white/10 to-transparent rounded-2xl order-2 md:order-1 animate-float" style={{ animationDelay: "1s" }} />
            <div className="space-y-6 order-1 md:order-2">
              <h3 className="text-3xl font-bold">Crafted with Purpose</h3>
              <p className="text-gray-300 text-lg leading-relaxed">
                Every piece is meticulously designed and crafted to embody the
                spirit of revenge—not against others, but against conformity,
                mediocrity, and the ordinary.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandStory;
