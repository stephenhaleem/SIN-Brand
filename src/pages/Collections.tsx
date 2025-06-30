
import PageLayout from '@/components/PageLayout';
import { Link } from 'react-router-dom';

const Collections = () => {
  const collections = [
    {
      name: 'Latest Drop',
      description: 'Fresh designs straight from the underground',
      image: '/images/full1.jpg',
      link: '/latest'
    },
    {
      name: 'Limited Edition',
      description: 'Exclusive pieces for the true collectors',
      image: '/images/full2.jpg',
      link: '/limited'
    },
    {
      name: 'Classic Series',
      description: 'Timeless streetwear essentials',
      image: '/images/full3.jpg',
      link: '/classic'
    },
    {
      name: 'Collaborations',
      description: 'Artist partnerships and special projects',
      image: '/images/full5.jpg',
      link: '/collabs'
    }
  ];

  return (
    <PageLayout 
      title="COLLECTIONS" 
      subtitle="Curated drops that define street culture"
    >
      <div className="grid md:grid-cols-2 gap-8">
        {collections.map((collection, index) => (
          <Link 
            key={index}
            to={collection.link}
            className="group block"
          >
            <div className="relative overflow-hidden rounded-lg">
              <img 
                src={collection.image} 
                alt={collection.name}
                className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-colors duration-300"></div>
              <div className="absolute bottom-6 left-6 text-white">
                <h3 className="text-2xl font-bold mb-2">{collection.name}</h3>
                <p className="text-lg opacity-90">{collection.description}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </PageLayout>
  );
};

export default Collections;
