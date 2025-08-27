
import PageLayout from '@/components/PageLayout';

const Artists = () => {
  const artists = [
    { name: 'GHOST', specialty: 'Graffiti Artist', location: 'Lagos', image: '/images/full1.jpg' },
    { name: 'REBEL_SOUL', specialty: 'Digital Artist', location: 'Abuja', image: '/images/full2.jpg' },
    { name: 'STREET_KING', specialty: 'Photographer', location: 'Port Harcourt', image: '/images/full3.jpg' }
  ];

  return (
    <PageLayout 
      title="ARTISTS" 
      subtitle="The creative minds behind our culture"
    >
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
        {artists.map((artist, index) => (
          <div key={index} className="text-center">
            <div className="relative mb-6">
              <img 
                src={artist.image} 
                alt={artist.name}
                className="w-full h-80 object-cover rounded-lg"
              />
              <div className="absolute inset-0 bg-black/40 rounded-lg"></div>
              <div className="absolute bottom-4 left-4 text-white">
                <h3 className="text-2xl font-bold">{artist.name}</h3>
                <p className="text-lg">{artist.specialty}</p>
                <p className="text-sm opacity-75">{artist.location}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-black text-white p-8 rounded-lg mb-16">
        <h2 className="text-3xl font-bold text-center mb-8">Artist Spotlight</h2>
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h3 className="text-2xl font-bold mb-4">This Month: GHOST</h3>
            <p className="text-lg mb-4">
              A mysterious graffiti artist whose work has transformed Lagos walls into 
              canvases of rebellion. GHOST's collaboration with SIN brings street art 
              to wearable form.
            </p>
            <p className="mb-6">
              "Fashion is just another wall to paint on. With SIN, I can reach people 
              who might never see my street work."
            </p>
            <button className="bg-white text-black px-6 py-2 rounded-lg hover:bg-gray-200 transition-colors">
              View Collaboration
            </button>
          </div>
          <img 
            src="/images/ff.jpg" 
            alt="Ghost's Work"
            className="w-full h-80 object-cover rounded-lg"
          />
        </div>
      </div>

      <div className="text-center">
        <h2 className="text-3xl font-bold mb-6">Join Our Community</h2>
        <p className="text-xl text-gray-700 mb-8 max-w-2xl mx-auto">
          We're always looking for fresh talent to join our network of artists, 
          designers, and cultural creators.
        </p>
        <button className="bg-black text-white px-8 py-3 rounded-lg hover:bg-gray-800 transition-colors">
          Apply to Join
        </button>
      </div>
    </PageLayout>
  );
};

export default Artists;
