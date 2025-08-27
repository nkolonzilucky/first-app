import React from 'react'
import MyButton from './MyButton';
import Image from 'next/image';

export default function DishCard({name, src, description, price, buttonLabel}) {
  return (
    <div className="flex flex-col border-2 p-4 rounded-2xl gap-2">
      <Image
        alt={name}
        src={src}
        width={300}
        height={300}
        className="size-36 rounded-2xl"
      />
      <h2 className="font-medium text-lg">{name}</h2>
      <p className="text-sm">{description}</p>
      <p className="font-medium text-lg">{price}</p>
      <MyButton label={buttonLabel} />
    </div>
  );
}
