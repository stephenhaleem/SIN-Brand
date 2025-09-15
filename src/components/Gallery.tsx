const Gallery = () => {
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

  return (
    <section className="py-20 px-6 bg-white text-black">
      <div className="text-center mb-16">
        <h3 className="text-3xl font-bold mb-4 tracking-wider text-black font-shadows">
          GALLERY
        </h3>
        <div className="w-32 h-1 bg-white mx-auto mb-8"></div>
        <p className="text-gray-400 text-xl max-w-2xl mx-auto font-hubot">
          Authentic streetwear moments captured in their element.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-2 max-w-[2000px] mx-auto">
        {/* Left Column */}
        <div className="space-y-2">
          {leftImages.map((image, index) => (
            <div key={`left-${index}`} className="aspect-video overflow-hidden">
              <img
                src={image}
                alt={`Gallery ${index + 1}`}
                className="w-full h-full object-cover filter contrast-125 saturate-50"
              />
            </div>
          ))}
        </div>

        {/* Right Column */}
        <div className="space-y-2">
          {rightImages.map((image, index) => (
            <div
              key={`right-${index}`}
              className="aspect-video overflow-hidden"
            >
              <img
                src={image}
                alt={`Gallery ${index + 4}`}
                className="w-full h-full object-cover filter brightness-110 contrast-125"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
