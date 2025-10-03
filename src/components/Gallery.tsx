import { useState, useEffect } from "react";
import { Download, ChevronLeft, ChevronRight, X } from "lucide-react";

const Gallery = () => {
  const leftImages = [
    "/images/DSCF3448.jpg",
    "/images/DSCF3689-2.jpg",
    "/images/DSCF3517.jpg",
    "/images/DSCF3553.jpg",
  ];

  const rightImages = [
    "/images/DSCF3680-2.jpg",
    "/images/IMG_8607.JPG",
    "/images/IMG_8629.JPG",
    "/images/Ade.mp4", // video file
  ];

  const allMedia = [...leftImages, ...rightImages];

  const [currentIndex, setCurrentIndex] = useState<number | null>(null);

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (currentIndex !== null) {
        if (e.key === "ArrowRight") {
          setCurrentIndex((prev) =>
            prev !== null ? (prev + 1) % allMedia.length : prev
          );
        }
        if (e.key === "ArrowLeft") {
          setCurrentIndex((prev) =>
            prev !== null
              ? (prev - 1 + allMedia.length) % allMedia.length
              : prev
          );
        }
        if (e.key === "Escape") {
          setCurrentIndex(null);
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [currentIndex, allMedia.length]);

  // Helper: check if file is video
  const isVideo = (file: string) => file.endsWith(".mp4");

  return (
    <section className="py-20 px-6 bg-white text-black">
      {/* Section Title */}
      <div className="text-center mb-16">
        <h3 className="text-4xl font-bold mb-4 tracking-wider text-black font-shadows">
          GALLERY
        </h3>
        <div className="w-20 h-1 bg-black mx-auto mb-8 rounded-full"></div>
        <p className="text-gray-600 text-xl max-w-2xl mx-auto font-hubot">
          Authentic streetwear moments captured in their element.
        </p>
      </div>

      {/* Gallery Grid */}
      <div className="grid md:grid-cols-2 gap-4 max-w-[1600px] mx-auto">
        {allMedia.map((file, index) => (
          <div
            key={index}
            className="aspect-video overflow-hidden rounded-xl shadow-lg relative group cursor-pointer"
            onClick={() => setCurrentIndex(index)}
          >
            {isVideo(file) ? (
              <div className="relative w-full h-full bg-black">
                <video
                  src={file}
                  muted
                  playsInline
                  className="w-full h-full object-cover"
                  preload="metadata"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center">
                    <div className="w-0 h-0 border-l-[20px] border-l-black border-t-[12px] border-t-transparent border-b-[12px] border-b-transparent ml-1" />
                  </div>
                </div>
              </div>
            ) : (
              <img
                src={file}
                alt={`Gallery ${index + 1}`}
                className="w-full h-full object-cover transform group-hover:scale-110 transition duration-500"
              />
            )}
            {/* Overlay on Hover */}
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition flex items-center justify-center gap-3">
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setCurrentIndex(index);
                }}
                className="px-4 py-2 bg-white text-black font-semibold text-sm rounded-lg shadow hover:bg-gray-200 transition"
              >
                View
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Modal / Lightbox */}
      {currentIndex !== null && (
        <div
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={() => setCurrentIndex(null)}
        >
          {/* Close Button */}
          <button
            className="absolute top-6 right-6 text-white hover:text-gray-300"
            onClick={(e) => {
              e.stopPropagation();
              setCurrentIndex(null);
            }}
          >
            <X size={32} />
          </button>

          {/* Left Arrow */}
          <button
            className="absolute left-6 text-white hover:text-gray-300"
            onClick={(e) => {
              e.stopPropagation();
              setCurrentIndex((prev) =>
                prev !== null
                  ? (prev - 1 + allMedia.length) % allMedia.length
                  : prev
              );
            }}
          >
            <ChevronLeft size={40} />
          </button>

          {/* Content */}
          {isVideo(allMedia[currentIndex]) ? (
            <video
              src={allMedia[currentIndex]}
              controls
              autoPlay
              className="max-h-[90vh] max-w-[90vw] rounded-lg shadow-2xl"
            />
          ) : (
            <img
              src={allMedia[currentIndex]}
              alt="Selected"
              className="max-h-[90vh] max-w-[90vw] object-contain rounded-lg shadow-2xl"
            />
          )}

          {/* Right Arrow */}
          <button
            className="absolute right-6 text-white hover:text-gray-300"
            onClick={(e) => {
              e.stopPropagation();
              setCurrentIndex((prev) =>
                prev !== null ? (prev + 1) % allMedia.length : prev
              );
            }}
          >
            <ChevronRight size={40} />
          </button>

          {/* Download Button */}
          <a
            href={allMedia[currentIndex]}
            download
            onClick={(e) => e.stopPropagation()}
            className="absolute bottom-10 right-10 px-5 py-3 bg-white text-black font-bold rounded-lg shadow-lg flex items-center gap-2 hover:bg-gray-200 transition"
          >
            <Download size={18} /> Download
          </a>
        </div>
      )}
    </section>
  );
};

export default Gallery;
