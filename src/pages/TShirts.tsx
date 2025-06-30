
import PageLayout from '@/components/PageLayout';

const TShirts = () => {
  const tshirts = [
    {
      name: 'Skull Tee (Black)',
      price: '₦29,000',
      image: '/images/tee3.jpg',
      description: 'Bold skull graphic with grunge aesthetics'
    },
    {
      name: 'Rock Tee (Black)',
      price: '₦25,000',
      image: '/images/tee4.jpg',
      description: 'Statement rock tee with edgy design'
    },
    {
      name: 'Classic Logo Tee',
      price: '₦22,000',
      image: '/images/tee1.jpg',
      description: 'Essential streetwear with SIN branding'
    },
    {
      name: 'Underground Tee',
      price: '₦27,000',
      image: '/images/tee2.jpg',
      description: 'Raw street art inspired design'
    }
  ];

  return (
    <PageLayout 
      title="T-SHIRTS" 
      subtitle="Essential streetwear for the urban warrior"
    >
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {tshirts.map((tshirt, index) => (
          <div key={index} className="group cursor-pointer">
            <div className="relative overflow-hidden rounded-lg mb-4">
              <img 
                src={tshirt.image} 
                alt={tshirt.name}
                className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute top-4 right-4 bg-black text-white px-3 py-1 rounded-full text-sm font-bold">
                {tshirt.price}
              </div>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2">{tshirt.name}</h3>
              <p className="text-gray-600">{tshirt.description}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-16 bg-gray-100 p-8 rounded-lg">
        <h2 className="text-3xl font-bold text-center mb-6">T-Shirt Details</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Materials & Fit</h3>
            <ul className="space-y-2 text-gray-700">
              <li>• 100% premium cotton construction</li>
              <li>• Pre-shrunk for consistent sizing</li>
              <li>• Reinforced shoulder seams</li>
              <li>• Relaxed streetwear fit</li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Care Instructions</h3>
            <ul className="space-y-2 text-gray-700">
              <li>• Machine wash cold with like colors</li>
              <li>• Turn inside out before washing</li>
              <li>• Tumble dry low heat</li>
              <li>• Do not iron directly on graphics</li>
            </ul>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default TShirts;
