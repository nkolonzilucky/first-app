import React from 'react'
import Card from './Card';
import ChefCard from './ChefCard';

const chefs = [
  {
    id: 1,
    image: "https://dummyjson.com/image/150",
    names: "Funny Nonesi",
    experience: 7,
    shopName: "Town 2",
  },
  {
    id: 2,
    image: "https://dummyjson.com/image/150",
    names: "Funny Nonesi",
    experience: 7,
    shopName: "Town 2",
  },
  {
    id: 3,
    image: "https://dummyjson.com/image/150",
    names: "Funny Nonesi",
    experience: 7,
    shopName: "Town 2",
  },
];

export default function MeetTheChefs() {
  return (
    <div className="w-full">
      <h1 className="text-center text-2xl font-light tracking-wide text-balance text-indigo-800 sm:text-4xl mt-9">
        Meet the Chefs
      </h1>
      <section className="flex justify-center mt-10 w-full overflow-clip">
        <div className="grid grid-cols-1 md:grid-cols-3 sm:gap-8 md:gap-16">
          {chefs.map((chef) => {
            return (
              <ChefCard
                key={chef.id}
                shopName={chef.shopName}
                alt={chef.alt}
                src={chef.image}
                number={chef.id}
                names={chef.names}
              />
            );
          })}
        </div>
      </section>
    </div>
  );
}
