
import PageLayout from '@/components/PageLayout';

const ClassicSeries = () => {
  return (
    <PageLayout 
      title="CLASSIC SERIES" 
      subtitle="Timeless streetwear essentials that never go out of style"
    >
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {[
          { name: 'Original Logo Tee', price: '₦25,000', img: '/images/tee1.jpg' },
          { name: 'Classic Hoodie', price: '₦45,000', img: '/images/full1.jpg' },
          { name: 'Essential Cap', price: '₦15,000', img: '/images/tee2.jpg' },
          { name: 'Basic Shorts', price: '₦30,000', img: '/images/tee3.jpg' },
          { name: 'Core Jacket', price: '₦55,000', img: '/images/full2.jpg' },
          { name: 'Foundation Tee', price: '₦22,000', img: '/images/tee4.jpg' }
        ].map((item, index) => (
          <div key={index} className="group cursor-pointer">
            <div className="relative overflow-hidden rounded-lg mb-4">
              <img 
                src={item.img} 
                alt={item.name}
                className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute top-4 right-4 bg-white text-black px-3 py-1 rounded-full text-sm font-bold">
                {item.price}
              </div>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2">{item.name}</h3>
              <p className="text-gray-600">Essential streetwear piece</p>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-16 bg-gray-100 p-8 rounded-lg">
        <h2 className="text-3xl font-bold text-center mb-8">Why Classic Series?</h2>
        <div className="grid md:grid-cols-3 gap-8 text-center">
          <div>
            <h3 className="text-xl font-bold mb-4">TIMELESS DESIGN</h3>
            <p className="text-gray-700">Clean aesthetics that work with any style</p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">PROVEN QUALITY</h3>
            <p className="text-gray-700">Materials and construction tested over time</p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">VERSATILE WEAR</h3>
            <p className="text-gray-700">Perfect foundation for any streetwear outfit</p>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default ClassicSeries;
