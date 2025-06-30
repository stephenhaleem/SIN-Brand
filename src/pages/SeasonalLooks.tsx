
import PageLayout from '@/components/PageLayout';

const SeasonalLooks = () => {
  const seasons = [
    {
      season: 'Spring',
      theme: 'Urban Awakening',
      colors: ['Fresh Green', 'Sky Blue', 'Pure White'],
      pieces: ['Light Jackets', 'Breathable Tees', 'Casual Sneakers'],
      image: '/images/full1.jpg'
    },
    {
      season: 'Summer',
      theme: 'Street Heat',
      colors: ['Electric Yellow', 'Hot Pink', 'Deep Black'],
      pieces: ['Tank Tops', 'Shorts', 'Minimal Accessories'],
      image: '/images/full2.jpg'
    },
    {
      season: 'Fall',
      theme: 'Rebel Season',
      colors: ['Burnt Orange', 'Deep Red', 'Military Green'],
      pieces: ['Hoodies', 'Layered Looks', 'Statement Boots'],
      image: '/images/full3.jpg'
    },
    {
      season: 'Winter',
      theme: 'Underground Warmth',
      colors: ['Charcoal Gray', 'Midnight Black', 'Steel Blue'],
      pieces: ['Heavy Jackets', 'Warm Hoodies', 'Insulated Gear'],
      image: '/images/full5.jpg'
    }
  ];

  return (
    <PageLayout 
      title="SEASONAL LOOKS" 
      subtitle="Style that adapts to every season"
    >
      <div className="space-y-16">
        {seasons.map((season, index) => (
          <div key={index} className="grid md:grid-cols-2 gap-8 items-center">
            <div className={index % 2 === 1 ? 'md:order-2' : ''}>
              <img 
                src={season.image} 
                alt={`${season.season} Collection`}
                className="w-full h-80 object-cover rounded-lg"
              />
            </div>
            <div className={index % 2 === 1 ? 'md:order-1' : ''}>
              <h2 className="text-3xl font-bold mb-4">{season.season.toUpperCase()}</h2>
              <h3 className="text-xl text-gray-600 mb-6">{season.theme}</h3>
              
              <div className="mb-6">
                <h4 className="font-bold mb-2">Season Colors:</h4>
                <div className="flex gap-2">
                  {season.colors.map((color, colorIndex) => (
                    <span key={colorIndex} className="bg-gray-100 px-3 py-1 rounded-full text-sm">
                      {color}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="font-bold mb-2">Key Pieces:</h4>
                <ul className="space-y-1">
                  {season.pieces.map((piece, pieceIndex) => (
                    <li key={pieceIndex} className="text-gray-700">• {piece}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-16 bg-black text-white p-8 rounded-lg text-center">
        <h2 className="text-3xl font-bold mb-6">Year-Round Essentials</h2>
        <p className="text-xl mb-8">
          These core pieces work in every season with the right styling
        </p>
        <div className="grid md:grid-cols-4 gap-4">
          <div className="bg-white/10 p-4 rounded-lg">
            <h3 className="font-bold">Basic Tees</h3>
          </div>
          <div className="bg-white/10 p-4 rounded-lg">
            <h3 className="font-bold">Classic Jeans</h3>
          </div>
          <div className="bg-white/10 p-4 rounded-lg">
            <h3 className="font-bold">Versatile Hoodies</h3>
          </div>
          <div className="bg-white/10 p-4 rounded-lg">
            <h3 className="font-bold">Statement Sneakers</h3>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default SeasonalLooks;
