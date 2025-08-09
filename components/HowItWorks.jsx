'use client'
import React, { useState } from "react";
import Card from "./Card";


const howItwWorksSteps = [
  {
    id: 1,
    image: "https://dummyjson.com/image/150",
    alt: "Login",
    title: "Login",
    description: "Login to your user profile, or create a new account.",
  },
  {
    id: 2,
    image: "https://dummyjson.com/image/150",
    alt: "Pick a braai place",
    title: "Choose a braai place",
    description: "Choose a braai place near you.",
  },
  {
    id: 3,
    image: "https://dummyjson.com/image/150",
    alt: "Create a new order",
    title: "Create Order",
    description:
      "Create a new order by selecting the quantity that fits your cravings.",
  },
//   {
//     id: 4,
//     image: "https://dummyjson.com/image/150",
//     alt: "Pay online",
//     title: "Pay online",
//     description:
//       "Choosing one of the porpular credit card, complete the payment of your order online.",
//   },
  {
    id: 5,
    image: "https://dummyjson.com/image/150",
    alt: "Status tracking",
    title: "Track the status",
    description:
      "Track the status of your order, from submitted, accepted, in-progress and complete",
  },
  {
    id: 6,
    image: "https://dummyjson.com/image/150",
    alt: "Collect the order",
    title: "Collect the order",
    description:
      "When the status is 'complete', come and collect your order."
  },
  {
    id: 7,
    image: "https://dummyjson.com/image/150",
    alt: "Rate the transaction",
    title: "Rate the transaction",
    description:
      "Give us a rating of your shopping experience.",
  },
];

export default function HowItWorks() {
  return (
    <div className="mt-4">
      <h1 className="text-center text-2xl font-light tracking-wide text-balance text-indigo-800 sm:text-4xl mt-4">
        How does it work?
      </h1>
      <h6 className="hidden sm:block text-center text-sm text-gray-500">
        <span className="italic mr-1">"Well! thank you for asking</span>
        😄"
      </h6>
      <section className="flex justify-center mt-2 p-4">
        <div className="w-full grid grid-col-1 sm:grid-cols-3 gap-4 justify-center">
          {howItwWorksSteps.map((step) => {
            return (
              <Card
                alt={step.alt}
                description={step.description}
                number={step.id}
                key={step.id}
                src={step.image}
                title={step.title}
              />
            );
          })}
        </div>
      </section>

      {/* 1. Login
                2. Choose a braai place
                3. create your order
                4. Pay Online
                4. Track the status of your order
                5. Collect the order
                6. Rate the transaction
           */}
    </div>
  );
}
