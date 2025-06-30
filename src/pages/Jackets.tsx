
import PageLayout from '@/components/PageLayout';

const Jackets = () => {
  const jackets = [
    {
      name: 'Grunge Jacket',
      price: '₦65,000',
      image: '/images/ff.jpg',
      description: 'Distressed jacket with authentic grunge appeal'
    },
    {
      name: 'Street Bomber',
      price: '₦58,000',
      image: '/images/full6.jpg',
      description: 'Classic bomber with modern streetwear twist'
    },
    {
      name: 'Urban Denim',
      price: '₦52,000',
      image: '/images/full7.jpg',
      description: 'Raw denim jacket with custom patches'
    }
  ];

  return (
    <PageLayout 
      title="JACKETS" 
      subtitle="Outerwear that makes a statement"
    >
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {jackets.map((jacket, index) => (
          <div key={index} className="group cursor-pointer">
            <div className="relative overflow-hidden rounded-lg mb-4">
              <img 
                src={jacket.image} 
                alt={jacket.name}
                className="w-full h-96 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute top-4 right-4 bg-black text-white px-3 py-1 rounded-full text-sm font-bold">
                {jacket.price}
              </div>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2">{jacket.name}</h3>
              <p className="text-gray-600">{jacket.description}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-16 bg-black text-white p-8 rounded-lg">
        <h2 className="text-3xl font-bold text-center mb-8">Jacket Features</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Construction</h3>
            <ul className="space-y-2">
              <li>• Premium materials for longevity</li>
              <li>• Reinforced stress points</li>
              <li>• YKK zippers and hardware</li>
              <li>• Custom SIN branding details</li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Design Philosophy</h3>
            <ul className="space-y-2">
              <li>• Functional streetwear aesthetics</li>
              <li>• Versatile styling options</li>
              <li>• Weather-resistant treatments</li>
              <li>• Limited production runs</li>
            </ul>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default Jackets;
