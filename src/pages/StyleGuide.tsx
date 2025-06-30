
import PageLayout from '@/components/PageLayout';

const StyleGuide = () => {
  return (
    <PageLayout 
      title="STYLE GUIDE" 
      subtitle="Master the art of streetwear styling"
    >
      <div className="space-y-16">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-6">The SIN Aesthetic</h2>
            <p className="text-gray-700 text-lg mb-4">
              Our style philosophy is built on three pillars: authenticity, rebellion, 
              and functionality. Every piece should tell your story while giving you 
              the confidence to take on the world.
            </p>
            <ul className="space-y-2 text-gray-700">
              <li>• Layering is key to versatile streetwear</li>
              <li>• Mix textures and materials for depth</li>
              <li>• Statement pieces should be balanced</li>
              <li>• Comfort never compromises style</li>
            </ul>
          </div>
          <img 
            src="/images/full1.jpg" 
            alt="Style Guide"
            className="w-full h-80 object-cover rounded-lg"
          />
        </div>

        <div className="bg-black text-white p-8 rounded-lg">
          <h2 className="text-3xl font-bold text-center mb-8">Essential Styling Tips</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <h3 className="text-xl font-bold mb-4">LAYERING</h3>
              <p>Build depth with different textures and lengths</p>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-bold mb-4">PROPORTIONS</h3>
              <p>Balance oversized pieces with fitted elements</p>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-bold mb-4">ACCESSORIES</h3>
              <p>Add personality with carefully chosen details</p>
            </div>
          </div>
        </div>

        <div>
          <h2 className="text-3xl font-bold text-center mb-8">Style Categories</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="p-6 border-2 border-black rounded-lg">
              <h3 className="text-2xl font-bold mb-4">MINIMALIST REBEL</h3>
              <p className="text-gray-700 mb-4">
                Clean lines with subtle rebellious details. Perfect for those who 
                prefer understated streetwear with edge.
              </p>
              <div className="text-sm text-gray-600">
                Key pieces: Classic tees, slim-fit jeans, minimal accessories
              </div>
            </div>
            <div className="p-6 border-2 border-black rounded-lg">
              <h3 className="text-2xl font-bold mb-4">MAXIMUM IMPACT</h3>
              <p className="text-gray-700 mb-4">
                Bold graphics, layered textures, statement accessories. 
                For those who want their style to be seen and heard.
              </p>
              <div className="text-sm text-gray-600">
                Key pieces: Graphic hoodies, distressed jackets, bold accessories
              </div>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default StyleGuide;
