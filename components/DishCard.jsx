import React from 'react'
import MyButton from './MyButton';
import Image from 'next/image';

export default function DishCard({name, src, description, price, buttonLabel}) {
  return (
      <div className=''>
          <Image alt={name} src={src} width={300} height={300} className='size-36 rounded-2xl' />
          <h2>{ name }</h2>
          <p>{ description }</p>
          <p>{ price }</p>
          <MyButton label={buttonLabel} />
   </div>
  );
}
