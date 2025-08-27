
import PageLayout from '@/components/PageLayout';

const LatestDrop = () => {
  return (
    <PageLayout 
      title="LATEST DROP" 
      subtitle="Fresh from the underground - available now"
    >
      <div className="mb-12 bg-black text-white p-8 rounded-lg text-center">
        <h2 className="text-3xl font-bold mb-4">WINTER REBELLION 2024</h2>
        <p className="text-xl mb-6">Limited quantities available - when it's gone, it's gone</p>
        <div className="text-sm opacity-75">Drop Date: December 15, 2024</div>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {[1, 2, 3, 4, 5, 6].map((item) => (
          <div key={item} className="group cursor-pointer">
            <div className="relative overflow-hidden rounded-lg mb-4">
              <img 
                src={`/images/full${item}.jpg`} 
                alt={`Latest Drop Item ${item}`}
                className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute top-4 right-4 bg-red-600 text-white px-3 py-1 rounded-full text-sm font-bold">
                NEW
              </div>
              <div className="absolute top-4 left-4 bg-black text-white px-3 py-1 rounded-full text-sm font-bold">
                LIMITED
              </div>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2">Winter Piece #{item}</h3>
              <p className="text-gray-600">Exclusive winter collection design</p>
            </div>
          </div>
        ))}
      </div>
    </PageLayout>
  );
};

export default LatestDrop;
