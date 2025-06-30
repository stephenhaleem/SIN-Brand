
import PageLayout from '@/components/PageLayout';

const Accessories = () => {
  const accessories = [
    {
      name: 'Skull Cap',
      price: '₦12,000',
      image: '/images/tee2.jpg',
      description: 'Classic skull cap with embroidered logo'
    },
    {
      name: 'Chain Necklace',
      price: '₦18,000',
      image: '/images/tee1.jpg',
      description: 'Heavy chain with SIN pendant'
    },
    {
      name: 'Street Bag',
      price: '₦35,000',
      image: '/images/tee3.jpg',
      description: 'Tactical-inspired crossbody bag'
    },
    {
      name: 'Logo Patches',
      price: '₦5,000',
      image: '/images/tee4.jpg',
      description: 'Iron-on patches for customization'
    }
  ];

  return (
    <PageLayout 
      title="ACCESSORIES" 
      subtitle="Complete your streetwear arsenal"
    >
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {accessories.map((accessory, index) => (
          <div key={index} className="group cursor-pointer">
            <div className="relative overflow-hidden rounded-lg mb-4">
              <img 
                src={accessory.image} 
                alt={accessory.name}
                className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute top-4 right-4 bg-black text-white px-3 py-1 rounded-full text-sm font-bold">
                {accessory.price}
              </div>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-2">{accessory.name}</h3>
              <p className="text-gray-600 text-sm">{accessory.description}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-16">
        <h2 className="text-3xl font-bold text-center mb-8">Accessory Categories</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center p-6 border border-gray-200 rounded-lg">
            <h3 className="text-xl font-bold mb-4">HEADWEAR</h3>
            <p className="text-gray-700">Caps, beanies, and headbands to complete your look</p>
          </div>
          <div className="text-center p-6 border border-gray-200 rounded-lg">
            <h3 className="text-xl font-bold mb-4">JEWELRY</h3>
            <p className="text-gray-700">Chains, rings, and pendants with street attitude</p>
          </div>
          <div className="text-center p-6 border border-gray-200 rounded-lg">
            <h3 className="text-xl font-bold mb-4">BAGS</h3>
            <p className="text-gray-700">Functional carry gear for urban adventures</p>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default Accessories;
