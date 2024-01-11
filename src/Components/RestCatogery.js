import React, { useState } from "react"
import ItemList from "./ItemList"

function RestCatogery({ catogery }) {
  const [clicked, setClicked] = useState(true)

  {
    console.log("Inside the Each category in Current Restarant", catogery)
  }

  return (
    <div>
      {/* Accordian */}
      <div className="cursor-pointer shadow-lg bg-emerald-200 rounded-lg my-10 p-4">
        <div
          onClick={() => {
            setClicked(!clicked)
          }}
          className="p-3 rounded-lg bg-orange-500 text-white flex justify-between "
        >
          <span className="font-extrabold text-xl  ">
            {catogery.title} ({catogery.itemCards.length})
          </span>
          <span className="text-left text-2xl">
            {clicked ? (
              <div>
                <span className="text-xl ">Collapse ⬆️</span>
              </div>
            ) : (
              <div>
                <span className="text-xl  ">Expand 🔽</span>
              </div>
            )}
          </span>
        </div>
        {/* Item List */}
        {clicked ? <ItemList itemCards={catogery.itemCards} /> : ""}
      </div>
    </div>
  )
}

export default RestCatogery
