
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
        { opacity: 0, y: 100, scale: 0.8, rotateY: -45 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          rotateY: 0,
          duration: 1,
          stagger: 0.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: galleryRef.current,
            start: "top 70%",
            end: "bottom 30%",
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
    <section ref={galleryRef} className="relative z-10 py-32 px-6 bg-gradient-to-b from-black via-red-950/20 to-gray-900">
      <div className="text-center mb-20">
        <h3 className="text-6xl font-bold mb-6 tracking-wider bg-gradient-to-r from-white via-red-400 to-white bg-clip-text text-transparent">
          REBELLION GALLERY
        </h3>
        <div className="w-32 h-1 bg-gradient-to-r from-red-600 to-red-400 mx-auto mb-8"></div>
        <p className="text-gray-400 text-xl max-w-2xl mx-auto">
          Witness the revolution in motion. Every frame tells a story of defiance.
        </p>
      </div>
      
      <div className="grid grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {galleryImages.map((image, index) => (
          <div
            key={index}
            className="gallery-image aspect-square overflow-hidden border-2 border-red-600 relative group bg-gradient-to-br from-gray-900 to-black"
          >
            <img
              src={image}
              alt={`Gallery ${index + 1}`}
              className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
            />
            {/* Overlay effects */}
            <div className="absolute inset-0 bg-gradient-to-t from-red-900/60 via-transparent to-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="absolute top-2 left-2 w-6 h-6 border-l-2 border-t-2 border-red-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="absolute top-2 right-2 w-6 h-6 border-r-2 border-t-2 border-red-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="absolute bottom-2 left-2 w-6 h-6 border-l-2 border-b-2 border-red-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="absolute bottom-2 right-2 w-6 h-6 border-r-2 border-b-2 border-red-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Gallery;
