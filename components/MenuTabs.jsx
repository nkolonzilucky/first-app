"use client";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import DishCard from "./DishCard";
import Filter from "./Filter";
import React, { useState } from "react";
import Sort from "./Sort";

const dishCetergoryTabs = [
  {
    id: 0,
    name: "starter",
    title: "Starter",
  },
  {
    id: 1,
    name: "main-dishes",
    title: "Main",
  },
  {
    id: 2,
    name: "desserts",
    title: "Dessert",
  },
  {
    id: 3,
    name: "drinks",
    title: "Drink",
  },
];
export function MenuTabs({ dishes = [] }) {
  const [selectedFilters, setSelectedFilters] = useState([]);
  const [selectedSort, setSelectedSort] = useState();
  console.log(selectedSort);

  const sortedDishes = [...dishes].sort((a, b) => {
    if (selectedSort === "Price") {
      const priceA = a.price.slice(1);
      const priceB = b.price.slice(1);
      return priceA - priceB;
    }
    if (selectedSort === "Popularity") {
      const popA =
        a.popularity.toLowerCase() === "low"
          ? 0
          : a.popularity.toLowerCase() === "medium"
          ? 1
          : 2;
      const popB =
        b.popularity.toLowerCase() === "low"
          ? 0
          : b.popularity.toLowerCase() === "medium"
          ? 1
          : 2;
      return popA - popB;
    }

    if (selectedSort === "Newest") {
      return (
        new Date(a.arrivalDate).getTime() - new Date(b.arrivalDate).getTime()
      );
    }
    if (selectedSort === "Rating") {
      return a.rating - b.rating;
    }
    return 0;
  });

  return (
    <div className="flex w-full flex-col gap-6 items-center justify-center">
      <Tabs defaultValue={dishCetergoryTabs[0].name}>
        <TabsList className={"sm:w-xl md:w-4xl"}>
          {dishCetergoryTabs.map((tab) => {
            return (
              <TabsTrigger value={tab.name} key={tab.id}>
                <span onClick={(e) => setSelectedFilters([])}>{tab.title}</span>
              </TabsTrigger>
            );
          })}
        </TabsList>
        {dishCetergoryTabs.map((tab) => {
          return (
            <TabsContent value={tab.name} className={"flex gap-8"} key={tab.id}>
              <div
                className="min-w-3xl grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2"
                key={tab.title}
              >
                {sortedDishes
                  .filter((dish) => {
                    const matchesCurrentDishCartegory =
                      dish.dishCartegory === tab.title;
                    const matchesSelectedFilter =
                      selectedFilters.length !== 0 &&
                      selectedFilters.includes(dish.dietaryCatergory);

                    if (selectedFilters.length === 0) {
                      return matchesCurrentDishCartegory;
                    } else {
                      return (
                        matchesCurrentDishCartegory && matchesSelectedFilter
                      );
                    }
                  })
                  .map((dish) => {
                    return (
                      <DishCard
                        name={dish.name}
                        description={dish.shortDescription}
                        src={"/braaipic.jpeg"}
                        price={dish.price}
                        dietaryCartegory={dish.dietaryCatergory}
                        buttonLabel={"+ Add to cart"}
                        key={dish.name}
                      />
                    );
                  })}
              </div>
              <div className="flex flex-col gap-8">
                <Filter
                  selectedFilters={selectedFilters}
                  setSelectedFilters={setSelectedFilters}
                />
                <Sort
                  selectedSort={selectedSort}
                  setSelectedSort={setSelectedSort}
                />
              </div>
            </TabsContent>
          );
        })}
      </Tabs>
    </div>
  );
}
