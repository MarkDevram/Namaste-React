import React from "react"
import { restarentCloudinarImg } from "../utils/Constants"

function SubItem({ items }) {
  console.clear()
  console.log("items", items)

  const name = items.name
  const description = items.description
  const price = items.price
  const imgId = items.imageId

  return (
    <div className="bg-green-100 rounded-md flex justify-between p-6 my-7 font-thin">
      <div className="w-[500px]">
        {/* name of item */}
        <p className="text-xl font-semibold">{name}</p>

        {/* price of item */}
        <p className="mb-2 text-base font-normal">₹{price / 100}</p>

        {/* desc of item */}
        <p>{description}</p>
      </div>
      <div className="">
        {/* image of item */}
        <div className="w-[170px]">
          <img
            className="object-cover rounded-xl w-[130px] h-[130px]"
            alt="dish logo"
            src={`${restarentCloudinarImg}${imgId}`}
          />
        </div>
        <button className="relative text-center text-white font-bold w-[60px] rounded-lg left-8 p-1 bottom-6  bg-green-500">
          Add
        </button>
      </div>
    </div>
  )
}

export default SubItem
