
import PageLayout from '@/components/PageLayout';

const CareInstructions = () => {
  const careGuides = [
    {
      category: 'T-Shirts & Tank Tops',
      instructions: [
        'Wash in cold water (30°C or below)',
        'Turn inside out before washing',
        'Use mild detergent without bleach',
        'Air dry or tumble dry on low heat',
        'Iron on low heat, avoid graphics'
      ],
      tips: 'Pre-treat stains immediately for best results'
    },
    {
      category: 'Hoodies & Sweatshirts',
      instructions: [
        'Wash in cold water with similar colors',
        'Use gentle cycle to preserve shape',
        'Avoid fabric softener (reduces breathability)',
        'Reshape while damp and lay flat to dry',
        'Steam instead of ironing when possible'
      ],
      tips: 'Wash hoodies less frequently to maintain fit'
    },
    {
      category: 'Jackets & Outerwear',
      instructions: [
        'Check care label for specific materials',
        'Spot clean when possible',
        'Professional cleaning recommended',
        'Store on padded hangers',
        'Treat leather/specialty materials separately'
      ],
      tips: 'Proper storage prevents permanent creasing'
    },
    {
      category: 'Accessories',
      instructions: [
        'Hand wash caps and beanies',
        'Spot clean bags and backpacks',
        'Use soft cloth for jewelry',
        'Air dry all accessories',
        'Store in protective cases when possible'
      ],
      tips: 'Regular maintenance extends accessory life'
    }
  ];

  return (
    <PageLayout 
      title="CARE INSTRUCTIONS" 
      subtitle="Keep your SIN pieces looking fresh for years"
    >
      <div className="space-y-12">
        {careGuides.map((guide, index) => (
          <div key={index} className="bg-gray-50 p-8 rounded-lg">
            <h2 className="text-2xl font-bold mb-6">{guide.category}</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-bold mb-4">Care Steps:</h3>
                <ol className="space-y-2">
                  {guide.instructions.map((instruction, instrIndex) => (
                    <li key={instrIndex} className="text-gray-700">
                      {instrIndex + 1}. {instruction}
                    </li>
                  ))}
                </ol>
              </div>
              <div>
                <h3 className="text-lg font-bold mb-4">Pro Tip:</h3>
                <div className="bg-black text-white p-4 rounded-lg">
                  <p>{guide.tips}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-16 text-center">
        <h2 className="text-3xl font-bold mb-8">Universal Care Tips</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="p-6 border-2 border-black rounded-lg">
            <h3 className="font-bold mb-2">WASHING</h3>
            <p className="text-sm text-gray-700">Cold water preserves colors and prevents shrinking</p>
          </div>
          <div className="p-6 border-2 border-black rounded-lg">
            <h3 className="font-bold mb-2">DRYING</h3>
            <p className="text-sm text-gray-700">Air drying maintains fabric integrity and fit</p>
          </div>
          <div className="p-6 border-2 border-black rounded-lg">
            <h3 className="font-bold mb-2">STORAGE</h3>
            <p className="text-sm text-gray-700">Proper folding and hanging prevents damage</p>
          </div>
          <div className="p-6 border-2 border-black rounded-lg">
            <h3 className="font-bold mb-2">STAINS</h3>
            <p className="text-sm text-gray-700">Immediate treatment prevents permanent marks</p>
          </div>
        </div>
      </div>

      <div className="mt-16 bg-black text-white p-8 rounded-lg text-center">
        <h2 className="text-3xl font-bold mb-6">Need Help?</h2>
        <p className="text-xl mb-6">
          Our customer service team can help with specific care questions
        </p>
        <button className="bg-white text-black px-8 py-3 rounded-lg hover:bg-gray-200 transition-colors">
          Contact Support
        </button>
      </div>
    </PageLayout>
  );
};

export default CareInstructions;
