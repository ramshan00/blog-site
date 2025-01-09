import React from "react";
import { latest } from "../../data/latestData";
import Link from "next/link";
import Image from "next/image";

const BooksPage = () => {
  return (
    <div className="p-8 max-w-6xl mx-auto pb-20">
      <h1 className="mt-28 text-4xl font-bold mb-6 text-center py-7 gap-2 cursor-pointer hover:text-[#f38b8b]">
        Explore Recent Blog
      </h1>

      <div className="grid grid-cols-1 gap-8">
        {latest.map((last) => (
          <div
            key={last.id}
            className="flex flex-col md:flex-row items-center border rounded shadow-md hover:shadow-xl transition-all overflow-hidden"
          >
            <Image
              src={last.image}
              alt={last.title}
              width={150}
              height={150}
              className="w-full md:w-40 h-40 object-cover"
            />
            <div className="p-4 flex-1">
              <h2 className="text-2xl font-semibold mb-2">{last.title}</h2>
              <p className="text-gray-600 mb-4">By {last.author}</p>
              <Link
                href={`/latest/${last.id}`}
                className="text-[#1D3557] hover:underline hover:text-[#F1C40F] font-medium"
              >
                Read More
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BooksPage;
