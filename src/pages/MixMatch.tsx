
import PageLayout from '@/components/PageLayout';

const MixMatch = () => {
  const outfits = [
    {
      title: 'Urban Explorer',
      pieces: ['Hoodie', 'Cargo Pants', 'Sneakers', 'Cap'],
      image: '/images/full1.jpg',
      description: 'Perfect for city adventures'
    },
    {
      title: 'Street Sophisticated',
      pieces: ['Jacket', 'Fitted Tee', 'Dark Jeans', 'Boots'],
      image: '/images/full2.jpg',
      description: 'Elevated streetwear for any occasion'
    },
    {
      title: 'Casual Rebel',
      pieces: ['Graphic Tee', 'Shorts', 'High-tops', 'Chain'],
      image: '/images/full3.jpg',
      description: 'Effortless everyday style'
    }
  ];

  return (
    <PageLayout 
      title="MIX & MATCH" 
      subtitle="Create endless combinations with our versatile pieces"
    >
      <div className="mb-16">
        <h2 className="text-3xl font-bold text-center mb-8">Signature Combinations</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {outfits.map((outfit, index) => (
            <div key={index} className="text-center">
              <img 
                src={outfit.image} 
                alt={outfit.title}
                className="w-full h-80 object-cover rounded-lg mb-4"
              />
              <h3 className="text-xl font-bold mb-2">{outfit.title}</h3>
              <p className="text-gray-600 mb-4">{outfit.description}</p>
              <div className="space-y-1 text-sm">
                {outfit.pieces.map((piece, pieceIndex) => (
                  <div key={pieceIndex} className="bg-gray-100 py-1 px-3 rounded-full inline-block mr-2">
                    {piece}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-gray-100 p-8 rounded-lg mb-16">
        <h2 className="text-3xl font-bold text-center mb-8">Mix & Match Matrix</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-center">
            <thead>
              <tr className="border-b-2 border-black">
                <th className="p-4 font-bold">TOP</th>
                <th className="p-4 font-bold">BOTTOM</th>
                <th className="p-4 font-bold">OUTER</th>
                <th className="p-4 font-bold">STYLE</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-gray-300">
                <td className="p-4">Graphic Tee</td>
                <td className="p-4">Skinny Jeans</td>
                <td className="p-4">Bomber Jacket</td>
                <td className="p-4 font-bold">Classic Street</td>
              </tr>
              <tr className="border-b border-gray-300">
                <td className="p-4">Hoodie</td>
                <td className="p-4">Cargo Pants</td>
                <td className="p-4">Denim Jacket</td>
                <td className="p-4 font-bold">Urban Explorer</td>
              </tr>
              <tr className="border-b border-gray-300">
                <td className="p-4">Tank Top</td>
                <td className="p-4">Shorts</td>
                <td className="p-4">Light Shirt</td>
                <td className="p-4 font-bold">Summer Rebel</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div className="text-center">
        <h2 className="text-3xl font-bold mb-6">Create Your Own</h2>
        <p className="text-xl text-gray-700 mb-8">
          Use our virtual styling tool to experiment with different combinations
        </p>
        <button className="bg-black text-white px-8 py-3 rounded-lg hover:bg-gray-800 transition-colors">
          Try Virtual Styler
        </button>
      </div>
    </PageLayout>
  );
};

export default MixMatch;
