import Image from "next/image";
import React from "react";

export default function ChefCard({
  src = "https://dummyjson.com/image/150",
  alt = "default",
  number = 0,
  names = "Default",
  experience = "default",
  shopName,
}) {
  return (
    <div className="bg-linear-to-tr from-indigo-300 via-indigo-200 to-indigo-100 rounded-xl flex flex-col shadow-lg shadow-indigo-500 items-center h-64 min-h-fit sm:h-64 w-fit p-6 m-2">
      <Image
        width={150}
        height={150}
        className="mt-6 ring-8 ring-indigo-800 rounded-xl object-contain w-full"
        src={src}
        alt={alt}
      />

      <div className="px-6 py-4 sm:w-52 text-center">
        <div className="font-bold text-xl mb-2">
          {/* <span className="text-indigo-800 block font-light mr-0.5 text-2xl">
            {number}.
          </span> */}
          <span className="text-indigo-900 font-semibold text-2xl sm:text-2xl">
            {names}
          </span>
        </div>
        <p className="text-gray-900 text-xl sm:text-lg h-24">{shopName}</p>
      </div>
    </div>
  );
}
