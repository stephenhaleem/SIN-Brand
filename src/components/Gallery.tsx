
import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Gallery = () => {
  const galleryRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (galleryRef.current) {
      const images = galleryRef.current.querySelectorAll('.gallery-image');
      
      gsap.fromTo(images,
        { opacity: 0, y: 50, scale: 0.9 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.8,
          stagger: 0.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: galleryRef.current,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse"
          }
        }
      );
    }
  }, []);

  const galleryImages = [
    "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=500",
    "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=500",
    "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?w=500",
    "https://images.unsplash.com/photo-1529374255404-311a2a4f1fd9?w=500",
    "https://images.unsplash.com/photo-1584464491033-06628f3a6b7b?w=500",
    "https://images.unsplash.com/photo-1566479179817-c75b51b6c728?w=500"
  ];

  return (
    <section ref={galleryRef} className="relative z-10 py-20 px-6 bg-gray-50">
      <h3 className="text-4xl font-bold text-center mb-16 tracking-wider">
        Gallery
      </h3>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-6xl mx-auto">
        {galleryImages.map((image, index) => (
          <div
            key={index}
            className="gallery-image aspect-square overflow-hidden border border-black"
          >
            <img
              src={image}
              alt={`Gallery ${index + 1}`}
              className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Gallery;
