
import PageLayout from '@/components/PageLayout';

const BehindTheScenes = () => {
  return (
    <PageLayout 
      title="BEHIND THE SCENES" 
      subtitle="The creative process that brings SIN to life"
    >
      <div className="space-y-16">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-6">Design Process</h2>
            <p className="text-gray-700 text-lg mb-4">
              Every SIN piece begins with a spark of rebellion. Our designers spend weeks 
              on the streets, absorbing the raw energy of urban culture before translating 
              it into wearable art.
            </p>
            <p className="text-gray-700 text-lg">
              From concept sketches to final production, each design undergoes rigorous 
              testing to ensure it meets our standards for both style and durability.
            </p>
          </div>
          <img 
            src="/images/ff.jpg" 
            alt="Design Process" 
            className="w-full h-80 object-cover rounded-lg"
          />
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-center">
          <img 
            src="/images/full6.jpg" 
            alt="Production" 
            className="w-full h-80 object-cover rounded-lg md:order-1"
          />
          <div className="md:order-2">
            <h2 className="text-3xl font-bold mb-6">Production</h2>
            <p className="text-gray-700 text-lg mb-4">
              Working exclusively with ethical manufacturers who share our values, 
              we ensure every piece is crafted with precision and care.
            </p>
            <p className="text-gray-700 text-lg">
              Quality control is paramount—each garment is inspected multiple times 
              before it reaches our community.
            </p>
          </div>
        </div>

        <div className="bg-black text-white p-8 rounded-lg text-center">
          <h2 className="text-3xl font-bold mb-6">Our Team</h2>
          <p className="text-xl mb-6">
            A collective of artists, designers, and rebels united by a common vision
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-lg font-bold mb-2">CREATIVE DIRECTORS</h3>
              <p>Visionaries who shape our aesthetic</p>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-2">STREET SCOUTS</h3>
              <p>Culture hunters finding tomorrow's trends</p>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-2">QUALITY MASTERS</h3>
              <p>Perfectionists ensuring every detail</p>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default BehindTheScenes;
