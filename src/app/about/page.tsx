"use client"
import Image from 'next/image';

const About = () => {
  return (
    <div className="bg-gray-50 text-gray-800 py-12">
      <div className="container mx-auto px-6 lg:px-20 mt-28">
        <header className="text-center mb-8">
          <h1 className="text-4xl font-bold mb-4 text-gray-900">
            About Us
          </h1>
          <p className="text-lg text-gray-600">
            A platform to spread awareness and educate about the history and ongoing implications of genocide worldwide.
          </p>
        </header>

        <div className="flex flex-col lg:flex-row items-center gap-10">
          {/* Image Section */}
          <div className="lg:w-1/2">
            <Image
              src="/images/about.jpg"
              alt="Awareness and Action"
              width={500}
              height={300}
              className="rounded-lg shadow-md"
            />
          </div>

          {/* Text Content */}
          <div className="lg:w-1/2">
            <h2 className="text-2xl font-semibold mb-4">
              Our Mission
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus interdum, tortor at auctor dictum, libero urna sagittis est, non consectetur metus lacus vitae erat. Nulla facilisi.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              Fusce feugiat purus nec justo interdum, vitae venenatis lectus convallis. Integer mollis diam vitae urna tempor vehicula. Cras dictum est vitae mauris varius fermentum.
            </p>

            <h2 className="text-2xl font-semibold mb-4">
              Our Vision
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Quisque feugiat augue eget risus ultrices, sed posuere sapien porttitor. Mauris rhoncus orci id quam viverra, ut ultricies dolor vulputate. Curabitur tristique libero eu turpis gravida facilisis.
            </p>
          </div>
        </div>

        
      </div>
    </div>
  );
};

export default About;
