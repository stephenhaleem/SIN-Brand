
import PageLayout from '@/components/PageLayout';

const BrandStory = () => {
  return (
    <PageLayout 
      title="BRAND STORY" 
      subtitle="Born from rebellion, forged in authenticity"
    >
      <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
        <div>
          <img 
            src="/images/ff.jpg" 
            alt="Brand Origins" 
            className="w-full h-96 object-cover rounded-lg"
          />
        </div>
        <div className="space-y-6">
          <h2 className="text-3xl font-bold text-black">The Beginning</h2>
          <p className="text-gray-700 text-lg leading-relaxed">
            SIN was born on the streets, where raw expression meets uncompromising style. 
            Founded by rebels who refused to conform, we've built more than a brand—we've 
            created a movement that celebrates individuality and authentic streetwear culture.
          </p>
          <p className="text-gray-700 text-lg leading-relaxed">
            Every piece tells a story of resistance, creativity, and the relentless pursuit 
            of artistic freedom. From our first sketches to global recognition, we remain 
            true to our underground roots.
          </p>
        </div>
      </div>

      <div className="bg-gray-100 p-8 rounded-lg mb-16">
        <h2 className="text-3xl font-bold text-center mb-8">Our Values</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center">
            <h3 className="text-xl font-bold mb-4">AUTHENTICITY</h3>
            <p className="text-gray-700">Real stories, real people, real culture</p>
          </div>
          <div className="text-center">
            <h3 className="text-xl font-bold mb-4">REBELLION</h3>
            <p className="text-gray-700">Challenging norms, breaking boundaries</p>
          </div>
          <div className="text-center">
            <h3 className="text-xl font-bold mb-4">COMMUNITY</h3>
            <p className="text-gray-700">United by passion, strengthened by diversity</p>
          </div>
        </div>
      </div>

      <div className="text-center">
        <h2 className="text-3xl font-bold mb-6">The Future</h2>
        <p className="text-xl text-gray-700 max-w-3xl mx-auto">
          As we continue to evolve, our commitment remains unwavering: to create 
          pieces that empower self-expression and celebrate the underground culture 
          that shapes tomorrow's mainstream.
        </p>
      </div>
    </PageLayout>
  );
};

export default BrandStory;
