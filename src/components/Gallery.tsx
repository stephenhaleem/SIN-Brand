
const Gallery = () => {
  const galleryImages = [
    "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=800",
    "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800",
    "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?w=800",
    "https://images.unsplash.com/photo-1529374255404-311a2a4f1fd9?w=800",
    "https://images.unsplash.com/photo-1584464491033-06628f3a6b7b?w=800",
    "https://images.unsplash.com/photo-1566479179817-c75b51b6c728?w=800"
  ];

  return (
    <section className="py-20 px-6 bg-white">
      <div className="text-center mb-16">
        <h3 className="text-6xl font-bold mb-4 tracking-wider text-black">
          GALLERY
        </h3>
        <div className="w-32 h-1 bg-black mx-auto mb-8"></div>
        <p className="text-gray-600 text-xl max-w-2xl mx-auto">
          A showcase of our streetwear in action. Every frame tells a story.
        </p>
      </div>
      
      <div className="grid grid-cols-2 gap-4 max-w-4xl mx-auto">
        {galleryImages.map((image, index) => (
          <div
            key={index}
            className="aspect-square overflow-hidden border-2 border-black rounded-lg bg-gray-100"
          >
            <img
              src={image}
              alt={`Gallery ${index + 1}`}
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Gallery;
