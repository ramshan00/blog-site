import { protest } from "../../../data/protestData";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

// Define the type for the dynamic route params
type Props = {
  params: {
    name: string; // This will contain the protestor name from the URL
  };
};

const ProtestDetail = ({ params }: Props) => {
  // Decode the URL-encoded name and replace hyphens with spaces
  let recName = "";
  try {
    recName = decodeURIComponent(params.name.replace(/-/g, " "));
  } catch (error) {
    console.error("Invalid URL encoding:", error);
    return notFound();
  }

  // Find the protestor in the data array
  const recent = protest.find(
    (recent) => recent.name.toLowerCase() === recName.toLowerCase()
  );

  // If the protestor is not found, return a 404 page
  if (!recent) {
    return notFound();
  }

  return (
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-4xl font-semibold text-gray-900 mb-4">{recent.name}</h1>
      <Image
        src={recent.imageUrl || "/fallback-image.jpg"} // Fallback image if URL is invalid or missing
        alt={`Image of ${recent.name}`}
        width={500}
        height={300}
        className="w-full h-auto rounded-lg mb-6"
      />
      <p className="text-lg text-gray-700 mb-4 font-bold">{recent.description}</p>
      <p className="text-lg text-gray-700 mb-6">{recent.content}</p>
      <Link
        href="/protest"
        className="text-[#1D3557] hover:underline font-medium text-lg"
      >
        ← Go Back
      </Link>
    </div>
  );
};

export default ProtestDetail;
