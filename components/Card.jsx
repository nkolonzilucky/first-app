import Image from "next/image";
import React from "react";

export default function Card({
  src = "https://dummyjson.com/image/150",
  alt = "default",
  number = 0,
  title = "Default",
  description = "default",
}) {
  return (
    <div className="bg-linear-to-tr from-indigo-300 via-indigo-200 to-indigo-100 rounded-xl flex flex-col shadow-lg items-center scale-95 h-40 min-h-fit sm:h-auto">
      {/* <Image
        width={150}
        height={150}
        className="mt-6 ring-8 ring-indigo-800 rounded-xl object-contain"
        src={src}
        alt={alt}
      /> */}

      <div className="px-6 py-4 sm:w-52 text-center">
        <div className="font-bold text-xl mb-2">
          <span className="text-indigo-800 block font-light mr-0.5 text-2xl">
            {number}.
          </span>
          <span className="text-indigo-900 font-light text-2xl sm:text-2xl">
            {title}
          </span>
        </div>
        <p className="text-gray-900 text-xl sm:text-sm">{description}</p>
      </div>
    </div>
  );
}

// <div class="px-6 pt-4 pb-2">
//   <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
//     #photography
//   </span>
//   <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
//     #travel
//   </span>
//   <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
//     #winter
//   </span>
// </div>
