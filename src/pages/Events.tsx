
import PageLayout from '@/components/PageLayout';

const Events = () => {
  const upcomingEvents = [
    { name: 'Underground Fashion Week', date: 'Jan 15, 2025', location: 'Lagos', type: 'Fashion Show' },
    { name: 'Street Culture Summit', date: 'Feb 3, 2025', location: 'Abuja', type: 'Conference' },
    { name: 'SIN Pop-up Store', date: 'Feb 20, 2025', location: 'Port Harcourt', type: 'Retail Event' }
  ];

  return (
    <PageLayout 
      title="EVENTS" 
      subtitle="Where street culture comes alive"
    >
      <div className="mb-16">
        <h2 className="text-3xl font-bold mb-8">Upcoming Events</h2>
        <div className="space-y-6">
          {upcomingEvents.map((event, index) => (
            <div key={index} className="border-2 border-black p-6 rounded-lg hover:bg-gray-50 transition-colors">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                <div>
                  <h3 className="text-2xl font-bold mb-2">{event.name}</h3>
                  <p className="text-gray-600 mb-2">{event.type}</p>
                  <p className="text-lg font-medium">{event.location}</p>
                </div>
                <div className="mt-4 md:mt-0 text-right">
                  <div className="text-2xl font-bold text-black">{event.date}</div>
                  <button className="mt-2 bg-black text-white px-6 py-2 rounded-lg hover:bg-gray-800 transition-colors">
                    Learn More
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-12">
        <div>
          <h2 className="text-3xl font-bold mb-6">Fashion Shows</h2>
          <img 
            src="/images/full3.jpg" 
            alt="Fashion Show"
            className="w-full h-64 object-cover rounded-lg mb-4"
          />
          <p className="text-gray-700 text-lg">
            Experience SIN collections in their natural habitat - the underground runway 
            where raw talent meets authentic street culture.
          </p>
        </div>
        <div>
          <h2 className="text-3xl font-bold mb-6">Pop-up Stores</h2>
          <img 
            src="/images/full5.jpg" 
            alt="Pop-up Store"
            className="w-full h-64 object-cover rounded-lg mb-4"
          />
          <p className="text-gray-700 text-lg">
            Limited-time retail experiences in unexpected locations, bringing 
            SIN directly to the streets and communities that inspire us.
          </p>
        </div>
      </div>
    </PageLayout>
  );
};

export default Events;
