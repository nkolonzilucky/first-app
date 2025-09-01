import React from 'react'
import MyButton from './MyButton';
import Image from 'next/image';

export default function DishCard({
  name,
  src,
  description,
  price,
  buttonLabel,
  dietaryCartegory,
}) {
  return (
    <div className="flex flex-col border-2 p-4 rounded-2xl gap-2 items-center max-w-3xs">
      <div className="flex justify-center">
        <Image
          alt={name}
          src={src}
          width={300}
          height={300}
          className="size-36 rounded-2xl"
        />
      </div>
      <h2 className="font-medium text-lg">{name}</h2>
      <p className="text-sm text-center">{description}</p>
      <div className="flex justify-between gap-2 w-full">
        <p className="font-medium text-lg">{price}</p>
        <p className="font-medium border-2 px-2 rounded-2xl border-gray-400 bg-gray-300 text-sm ">
          {dietaryCartegory.toLowerCase()}
        </p>
      </div>
      <MyButton label={buttonLabel} />
    </div>
  );
}
