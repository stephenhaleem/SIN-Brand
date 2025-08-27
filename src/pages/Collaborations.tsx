
import PageLayout from '@/components/PageLayout';

const Collaborations = () => {
  return (
    <PageLayout 
      title="COLLABORATIONS" 
      subtitle="Exclusive partnerships with artists and creators"
    >
      <div className="space-y-16">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-4">SIN × UNDERGROUND ARTISTS</h2>
            <p className="text-gray-700 text-lg mb-6">
              We partner with emerging street artists to create limited pieces that 
              blur the line between fashion and art. Each collaboration tells a unique 
              story and supports the underground art scene.
            </p>
            <div className="bg-black text-white p-4 rounded-lg">
              <h3 className="font-bold mb-2">Current Collaboration</h3>
              <p>Street Prophets Collection - Available Now</p>
            </div>
          </div>
          <img 
            src="/images/full5.jpg" 
            alt="Artist Collaboration"
            className="w-full h-80 object-cover rounded-lg"
          />
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center">
            <img 
              src="/images/full6.jpg" 
              alt="Collab 1"
              className="w-full h-64 object-cover rounded-lg mb-4"
            />
            <h3 className="text-xl font-bold mb-2">ARTIST SERIES #01</h3>
            <p className="text-gray-600">Underground graffiti meets high fashion</p>
          </div>
          <div className="text-center">
            <img 
              src="/images/full7.jpg" 
              alt="Collab 2"
              className="w-full h-64 object-cover rounded-lg mb-4"
            />
            <h3 className="text-xl font-bold mb-2">MUSIC COLLECTIVE</h3>
            <p className="text-gray-600">Streetwear inspired by underground beats</p>
          </div>
          <div className="text-center">
            <img 
              src="/images/full2.jpg" 
              alt="Collab 3"
              className="w-full h-64 object-cover rounded-lg mb-4"
            />
            <h3 className="text-xl font-bold mb-2">PHOTOGRAPHER SERIES</h3>
            <p className="text-gray-600">Urban photography meets wearable art</p>
          </div>
        </div>

        <div className="bg-gray-100 p-8 rounded-lg text-center">
          <h2 className="text-3xl font-bold mb-6">Want to Collaborate?</h2>
          <p className="text-xl text-gray-700 mb-6">
            We're always looking for authentic artists who share our vision
          </p>
          <button className="bg-black text-white px-8 py-3 rounded-lg hover:bg-gray-800 transition-colors">
            Submit Your Portfolio
          </button>
        </div>
      </div>
    </PageLayout>
  );
};

export default Collaborations;
