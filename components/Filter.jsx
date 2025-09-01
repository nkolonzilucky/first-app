"use client";
import React from "react";


const filterOptions = [
  {
    id: "Vegan",
    name: "filter",
    value: "Vegan",
  },
  {
    id: "gluten-free",
    name: "filter",
    value: "Gluten-Free",
  },
  {
    id: "halal",
    name: "filter",
    value: "Halal",
  },
  {
    id: "halal2",
    name: "filter",
    value: "Halal2",
  },
];
export default function Filter({ selectedFilters, setSelectedFilters }) {
  return (
    <form>
      <h1 className="text-xl font-medium">Filter</h1>

      {filterOptions.map((filterOption) => {
        return (
          <div className="flex gap-3" key={filterOption.id}>
            <input
              name={filterOption.name}
              id={filterOption.id}
              value={filterOption.value}
              onChange={(e) => {
                if (e.target.checked) {
                  setSelectedFilters([...selectedFilters, e.target.value]);
                } else if (!e.target.checked) {
                  const newFilterList = selectedFilters.filter(
                    (f) => f !== e.target.value
                  );
                  setSelectedFilters(newFilterList);
                }
              }}
              type="checkbox"
            />
            <label>{filterOption.value}</label>
          </div>
        );
      })}
    </form>
  );
}
