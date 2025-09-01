"use client";
import React from "react";

const sortOptions = [
  {
    id: "price",
    name: "sort",
    value: "Price",
  },
  {
    id: "popularity",
    name: "sort",
    value: "Popularity",
  },
  {
    id: "newest",
    name: "sort",
    value: "Newest",
  },
  {
    id: "rating",
    name: "sort",
    value: "Rating",
  },
];

export default function Sort({ selectedSort, setSelectedSort }) {
  return (
    <div>
      <h1 className="text-xl font-medium">Sort</h1>
      {sortOptions.map((sortOption) => {
        return (
          <div className="flex flex-col gap-2" key={sortOption.id}>
            <button
              onClick={() => {
                setSelectedSort(sortOption.value);
              }}
              className="text-left"
            >
              {sortOption.value}
            </button>
          </div>
        );
      })}
    </div>
  );
}
