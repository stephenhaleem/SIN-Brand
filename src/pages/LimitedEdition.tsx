
import PageLayout from '@/components/PageLayout';

const LimitedEdition = () => {
  return (
    <PageLayout 
      title="LIMITED EDITION" 
      subtitle="Exclusive pieces for the true collectors"
    >
      <div className="mb-12 text-center">
        <div className="bg-gradient-to-r from-black to-gray-800 text-white p-8 rounded-lg">
          <h2 className="text-4xl font-bold mb-4">COLLECTORS SERIES</h2>
          <p className="text-xl">Numbered pieces, certificate of authenticity included</p>
        </div>
      </div>

      <div className="space-y-16">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <img 
              src="/images/ff.jpg" 
              alt="Limited Edition 001"
              className="w-full h-96 object-cover rounded-lg"
            />
          </div>
          <div>
            <div className="bg-black text-white px-4 py-2 rounded-full inline-block mb-4 text-sm">
              EDITION #001
            </div>
            <h3 className="text-3xl font-bold mb-4">Ghost Protocol Jacket</h3>
            <p className="text-gray-700 text-lg mb-4">
              Hand-distressed leather jacket with custom metalwork. Only 50 pieces worldwide.
            </p>
            <div className="text-2xl font-bold text-black">₦125,000</div>
            <div className="text-sm text-gray-600 mt-2">45/50 remaining</div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="md:order-2">
            <img 
              src="/images/full6.jpg" 
              alt="Limited Edition 002"
              className="w-full h-96 object-cover rounded-lg"
            />
          </div>
          <div className="md:order-1">
            <div className="bg-black text-white px-4 py-2 rounded-full inline-block mb-4 text-sm">
              EDITION #002
            </div>
            <h3 className="text-3xl font-bold mb-4">Underground King Hoodie</h3>
            <p className="text-gray-700 text-lg mb-4">
              Embroidered crown design with gold threading. Limited to 100 pieces.
            </p>
            <div className="text-2xl font-bold text-black">₦85,000</div>
            <div className="text-sm text-gray-600 mt-2">23/100 remaining</div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default LimitedEdition;
