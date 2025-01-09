import React from "react";
import { latest } from "../../../data/latestData";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";

// Props type for dynamic route
interface Props {
  params: { id: string }; // Matches the dynamic route `[id]`
}

const LatestDetails = async ({ params }: Props) => {
  // Access id from params
  const id = params?.id;

  // Handle cases where id might not be properly defined
  if (!id) return notFound();

  // Find the matching item in the dataset
  const last = latest.find((item) => item.id === id);

  // Return 404 page if no matching item is found
  if (!last) return notFound();

  return (
    <div className="p-8 max-w-4xl mx-auto">
      {/* Item Details */}
      <h1 className="text-4xl font-bold mb-6">{last.title}</h1>
      <div className="rounded-lg p-2">
        <Image
          src={last.image}
          alt={`Cover of ${last.title}`}
          width={800}
          height={400}
          className="w-full h-72 object-cover rounded mb-6 transition-transform transform duration-300 hover:opacity-60"
        />
      </div>
      <div className="text-center mt-8">
        <p className="text-lg text-gray-800 mb-4">
          <span className="font-semibold">Publisher:</span> {last.author}
        </p>
        <p className="text-lg text-gray-800 mb-4">
          <span className="font-semibold">Genre:</span> {last.genre}
        </p>
        <p className="text-lg text-gray-800 mb-4">
          <span className="font-semibold">Published Year:</span>{" "}
          {last.publishYear}
        </p>
        <p className="text-gray-700 leading-relaxed mb-6">
          <span className="font-semibold text-gray-800">Description:</span>{" "}
          {last.description}
        </p>
      </div>

      {/* Back to Home Button */}
      <Link
        href="/"
        className="text-[#1D3557] hover:underline font-medium text-lg"
      >
        ← Back to Home
      </Link>
    </div>
  );
};

export default LatestDetails;
