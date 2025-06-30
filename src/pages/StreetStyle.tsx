
import PageLayout from '@/components/PageLayout';

const StreetStyle = () => {
  return (
    <PageLayout 
      title="STREET STYLE" 
      subtitle="Real people, real style, real streets"
    >
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
        {[1, 2, 3, 4, 5, 6, 7, 2, 3].map((item, index) => (
          <div key={index} className="group cursor-pointer">
            <div className="relative overflow-hidden rounded-lg">
              <img 
                src={`/images/full${item}.jpg`} 
                alt={`Street Style ${index + 1}`}
                className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-300"></div>
              <div className="absolute bottom-4 left-4 text-white">
                <p className="text-sm font-medium">@streetstyle_user{index + 1}</p>
                <p className="text-xs opacity-75">Lagos, Nigeria</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-gray-100 p-8 rounded-lg text-center">
        <h2 className="text-3xl font-bold mb-6">Share Your Style</h2>
        <p className="text-xl text-gray-700 mb-6">
          Tag us @sin_streetwear and use #SINStyle to be featured
        </p>
        <div className="flex justify-center gap-4">
          <button className="bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition-colors">
            Submit Photo
          </button>
          <button className="border-2 border-black text-black px-6 py-3 rounded-lg hover:bg-black hover:text-white transition-colors">
            Style Guidelines
          </button>
        </div>
      </div>
    </PageLayout>
  );
};

export default StreetStyle;
