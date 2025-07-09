import { useRef, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Plane, useTexture } from '@react-three/drei';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import * as THREE from 'three';

gsap.registerPlugin(ScrollTrigger);

interface ImagePlaneProps {
  position: [number, number, number];
  image: string;
  index: number;
}

function ImagePlane({ position, image, index }: ImagePlaneProps) {
  const mesh = useRef<THREE.Mesh>(null);
  const texture = useTexture(image);
  
  useFrame((state) => {
    if (mesh.current) {
      const scrollY = window.scrollY;
      mesh.current.rotation.y = Math.sin(state.clock.elapsedTime + index) * 0.1;
      mesh.current.position.z = Math.sin(scrollY * 0.001 + index) * 0.5;
    }
  });

  return (
    <Plane ref={mesh} position={position} args={[2, 1.5]}>
      <meshStandardMaterial map={texture} transparent opacity={0.8} />
    </Plane>
  );
}

const EnhancedGallery = () => {
  const galleryRef = useRef<HTMLDivElement>(null);

  const leftImages = [
    "/images/full2.jpg",
    "/images/full3.jpg",
    "/images/full5.jpg",
  ];

  const rightImages = [
    "/images/full6.jpg",
    "/images/full7.jpg",
    "/images/full2.jpg",
  ];

  useEffect(() => {
    if (galleryRef.current) {
      const images = galleryRef.current.querySelectorAll('.gallery-image');
      
      gsap.fromTo(
        images,
        { opacity: 0, y: 100, scale: 0.8 },
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
            toggleActions: "play none none reverse",
          },
        }
      );
    }

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <section ref={galleryRef} className="py-20 px-6 bg-white text-black relative">
      <div className="absolute inset-0 opacity-10">
        <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 10, 10]} />
          {leftImages.map((image, index) => (
            <ImagePlane 
              key={`left-${index}`}
              position={[-3, index * 2 - 2, 0]} 
              image={image} 
              index={index}
            />
          ))}
          {rightImages.map((image, index) => (
            <ImagePlane 
              key={`right-${index}`}
              position={[3, index * 2 - 2, 0]} 
              image={image} 
              index={index + 3}
            />
          ))}
        </Canvas>
      </div>

      <div className="text-center mb-16 relative z-10">
        <h3 className="text-3xl font-bold mb-4 tracking-wider text-black font-shadows">
          GALLERY
        </h3>
        <div className="w-32 h-1 bg-black mx-auto mb-8"></div>
        <p className="text-gray-600 text-xl max-w-2xl mx-auto font-hubot">
          Authentic streetwear moments captured in their element.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-2 max-w-[2000px] mx-auto relative z-10">
        {/* Left Column */}
        <div className="space-y-2">
          {leftImages.map((image, index) => (
            <div key={`left-${index}`} className="gallery-image aspect-video overflow-hidden">
              <img
                src={image}
                alt={`Gallery ${index + 1}`}
                className="w-full h-full object-cover filter contrast-125 saturate-50 hover:scale-105 transition-transform duration-300"
              />
            </div>
          ))}
        </div>

        {/* Right Column */}
        <div className="space-y-2">
          {rightImages.map((image, index) => (
            <div
              key={`right-${index}`}
              className="gallery-image aspect-video overflow-hidden"
            >
              <img
                src={image}
                alt={`Gallery ${index + 4}`}
                className="w-full h-full object-cover filter brightness-110 contrast-125 hover:scale-105 transition-transform duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EnhancedGallery;