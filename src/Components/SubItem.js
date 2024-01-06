import React, { useState } from "react"
import { restarentCloudinarImg } from "../utils/Constants"
import ImgModal from "./ImgModal"

function SubItem({ items }) {
  //modal
  const [modal, setModal] = useState(false)

  console.clear()
  console.log("items", items)

  const name = items.name
  const description = items.description
  const price = items.price
  const imgId = items.imageId
  const isBestseller = items.isBestseller

  return (
    <div>
      <div className="bg-green-100 rounded-md flex justify-between p-6 my-7 font-thin">
        <div className="w-[500px]">
          {isBestseller ? (
            <span className="text-white text-sm p-1 rounded-sm font-extrabold bg-black">
              ⭐Best Seller
            </span>
          ) : (
            ""
          )}
          {/* name of item */}
          <p className="text-xl font-semibold">{name}</p>

          {/* price of item */}
          <p className="mb-2 text-base font-normal">₹{price / 100}</p>

          {/* desc of item */}
          <p>{description}</p>
        </div>
        <div>
          {/* image of item */}
          <div className="w-[170px]">
            <img
              onClick={() => {
                setModal(true)
              }}
              className="hover:brightness-130 object-cover rounded-xl w-[130px] h-[130px]"
              alt="dish logo"
              src={`${restarentCloudinarImg}${imgId}`}
            />
          </div>
          {/* <button className="relative text-center text-white font-bold w-[60px] rounded-lg left-8 p-1 bottom-6  bg-green-500">
            Add
          </button> */}
          {modal && (
            <ImgModal
              imgID={imgId}
              onClose={() => setModal(false)}
              name={name}
              description={description}
              price={price}
            />
          )}
        </div>
      </div>
    </div>
  )
}

export default SubItem
