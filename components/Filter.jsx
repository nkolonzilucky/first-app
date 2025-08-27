import React from 'react'

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
]
export default function Filter() {
  return (
     <form>
          <h1 className="text-xl font-medium mb-4">Filter</h1>
          
          {filterOptions.map((filterOption) => {
              return (
                  <div className='flex gap-3'>
                      <input name={filterOption.name}
                          id={filterOption.id}
                          value={filterOption.value}
                          type='checkbox'
                          />
                          <label>{filterOption.value}</label>
                  </div>
              )
          })}
    </form>
  )
}
