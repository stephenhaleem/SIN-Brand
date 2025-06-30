
import PageLayout from '@/components/PageLayout';

const Hoodies = () => {
  const hoodies = [
    {
      name: 'County Hoodie',
      price: '₦45,000',
      image: '/images/full1.jpg',
      description: 'Premium hoodie with county branding'
    },
    {
      name: 'Rebel Hoodie',
      price: '₦42,000',
      image: '/images/full2.jpg',
      description: 'Oversized fit with street graphics'
    },
    {
      name: 'Underground Hoodie',
      price: '₦48,000',
      image: '/images/full3.jpg',
      description: 'Limited edition underground series'
    }
  ];

  return (
    <PageLayout 
      title="HOODIES" 
      subtitle="Premium comfort meets street rebellion"
    >
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {hoodies.map((hoodie, index) => (
          <div key={index} className="group cursor-pointer">
            <div className="relative overflow-hidden rounded-lg mb-4">
              <img 
                src={hoodie.image} 
                alt={hoodie.name}
                className="w-full h-96 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute top-4 right-4 bg-black text-white px-3 py-1 rounded-full text-sm font-bold">
                {hoodie.price}
              </div>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2">{hoodie.name}</h3>
              <p className="text-gray-600">{hoodie.description}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-16 text-center">
        <h2 className="text-3xl font-bold mb-6">Why Choose SIN Hoodies?</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="p-6 border-2 border-black rounded-lg">
            <h3 className="text-xl font-bold mb-4">PREMIUM FABRIC</h3>
            <p className="text-gray-700">Heavy-weight cotton blend for durability and warmth</p>
          </div>
          <div className="p-6 border-2 border-black rounded-lg">
            <h3 className="text-xl font-bold mb-4">PERFECT FIT</h3>
            <p className="text-gray-700">Designed for the streetwear silhouette you want</p>
          </div>
          <div className="p-6 border-2 border-black rounded-lg">
            <h3 className="text-xl font-bold mb-4">UNIQUE DESIGNS</h3>
            <p className="text-gray-700">Exclusive graphics you won't find anywhere else</p>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default Hoodies;
