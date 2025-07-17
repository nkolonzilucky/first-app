import * as React from "react";
import Image from "next/image";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export function MyCarousel() {
  const steps = [
    {
      id: 0,
      step: 1,
      image: "https://dummyjson.com/image/200x300",
      sub_title: "Sign-up or login",
      instruction:
        "Using a web browser of your choice, create a new account via the sign-up button, or login using an existing user account via the login button.",
    },
    {
      id: 1,
      step: 2,
      image: "https://dummyjson.com/image/200x300",
      sub_title: "Pick a resturant",
      instruction:
        "Select your location, and based on that, select one of the available umbengo resturants.",
    },
    {
      id: 2,
      step: 3,
      image: "https://dummyjson.com/image/200x300",
      sub_title: "Complete your order",
      instruction:
        "From the menu of the resturant, select the item and the quantity you are craving. The order will be presented along with the total amount.Do not forget to provide us with your name.",
    },
    {
      id: 3,
      step: 4,
      image: "https://dummyjson.com/image/200x300",
      sub_title: "Monitor the status and collect when it is done",
      instruction:
        "You will now be able to track the status of your order. Once it has been completed, you can visit the resturant for collections.",
    },
  ];

  return (
    <Carousel
      opts={{
        align: "start",
      }}
      className="w-full max-w-4xl bg-amber-300"
    >
      <CarouselContent>
        {steps.map((step) => (
          <CarouselItem className={"md:basis-1/2 lg:basis-1/4"} key={step.id}>
            <div className="p-1 min-h-8">
              <Card>
                <CardContent className="flex flex-col aspect-square items-center justify-center p-6">
                  <h1 className="font-bold">Step {step.step}</h1>
                  <Image
                    src={step.image}
                    width={200}
                    height={300}
                    alt="Steps"
                    className="max-w-fit max-h-fit my-3"
                  />
                  <span className="text-xs font-sm text-center">
                    {step.instruction}
                  </span>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
