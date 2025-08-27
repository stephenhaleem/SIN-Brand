
import PageLayout from '@/components/PageLayout';

const Lookbook = () => {
  const looks = [
    { image: '/images/full1.jpg', title: 'Urban Warrior', season: 'Fall 2024' },
    { image: '/images/full2.jpg', title: 'Street Prophet', season: 'Fall 2024' },
    { image: '/images/full3.jpg', title: 'Rebel Soul', season: 'Winter 2024' },
    { image: '/images/full5.jpg', title: 'Underground King', season: 'Winter 2024' },
    { image: '/images/full6.jpg', title: 'City Ghost', season: 'Spring 2025' },
    { image: '/images/full7.jpg', title: 'Dark Angel', season: 'Spring 2025' }
  ];

  return (
    <PageLayout 
      title="LOOKBOOK" 
      subtitle="Street style inspiration from the underground"
    >
      <div className="grid md:grid-cols-3 gap-6">
        {looks.map((look, index) => (
          <div key={index} className="group cursor-pointer">
            <div className="relative overflow-hidden rounded-lg mb-4">
              <img 
                src={look.image} 
                alt={look.title}
                className="w-full h-96 object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-300"></div>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-bold mb-1">{look.title}</h3>
              <p className="text-gray-600">{look.season}</p>
            </div>
          </div>
        ))}
      </div>
    </PageLayout>
  );
};

export default Lookbook;
