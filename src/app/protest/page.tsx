import { protest } from "../../data/protestData";
import Link from "next/link";
import Image from "next/image";


const formatNameForUrl = (name: string) => {
  return name
    .toLowerCase()
    .replace(/\s+/g, "-")
    .replace(/[^\w-]/g, ""); 
};

const ProtestPage = () => {
  return (
    <div className="max-w-7xl mx-auto p-4 sm:p-6 pb-16">
      <h1 className="text-3xl sm:text-4xl mt-16 sm:mt-28 font-bold text-gray-900 mb-8 hover:text-[#F1c40F] cursor-pointer text-center">
        Genocide in Gaza: Protest Awareness in Different Countries
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {protest.map((recent) => (
          <Link
            key={recent.name || recent.name}
            href={`/recent/${formatNameForUrl(recent.name)}`}
            passHref
          >
            <div className="cursor-pointer">
              <Image
                src={recent.imageUrl}
                alt={`Image of ${recent.name}`}
                width={300}
                height={200}
                className="w-full h-auto rounded-lg shadow-lg transition-opacity duration-300 hover:opacity-80"
              />
              <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mt-4">
                {recent.name}
              </h3>
              <p className="text-sm sm:text-base text-gray-600 mt-2">
                {recent.description}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ProtestPage;
