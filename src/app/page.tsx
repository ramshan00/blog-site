import React from "react";
import { latest } from "../data/latestData";
import Link from "next/link";
import Image from "next/image";

const HomePage = () => {
  return (
    <div>
      {/* Banner Section */}
      <div className="relative w-full h-screen">
        <video
          className="absolute inset-0 w-full h-full object-cover"
          autoPlay
          muted
          loop
        >
          <source src="banner.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-transparent flex items-center justify-center">
          <div className="text-black text-center">
            <h1 className="text-5xl  italic mb-4">
              All About GENOCIDE in <span className="text-red-800">GAZA</span>
            </h1>
            <button className="px-8 py-4 bg-red-600 text-white rounded-lg hover:red-700">
              Latest Update
            </button>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="relative z-10 p-8 bg-gray-100">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {latest.map((last) => (
            <div
              key={last.id}
              className="block border rounded-lg shadow-md hover:shadow-lg transition-all overflow-hidden bg-white p-[10px]"
            >
              <Link href={`/latest/${last.id}`}>
                <div>
                  <Image
                    src={last.image}
                    alt={last.title}
                    width={300}
                    height={200}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-4">
                    <h2 className="text-xl font-semibold mb-2">{last.title}</h2>
                    <p className="text-gray-500">By {last.author}</p>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomePage;
