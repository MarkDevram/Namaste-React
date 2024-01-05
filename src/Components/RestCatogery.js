import React, { useState } from "react"
import ItemList from "./ItemList"

function RestCatogery({ catogery }) {
  const [clicked, setClicked] = useState(true)

  {
    console.log("Inside the Each category", catogery)
  }
  return (
    <div>
      {/* Accordian */}
      <div className="cursor-pointer shadow-lg bg-emerald-200 my-10 p-4">
        <div className="flex justify-between">
          <span className="font-extrabold text-xl">
            {catogery.title} ({catogery.itemCards.length})
          </span>
          <span
            onClick={() => {
              setClicked(!clicked)
            }}
            className="text-left text-2xl"
          >
            {clicked ? "⬆️" : "🔽"}
          </span>
        </div>
        {/* Item List */}
        {clicked ? <ItemList itemCards={catogery.itemCards} /> : ""}
      </div>
    </div>
  )
}

export default RestCatogery
