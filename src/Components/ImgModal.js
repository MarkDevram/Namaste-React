import React from "react"

const restarentCloudinarImg = "https://res.cloudinary.com/swiggy/image/upload/"

function ImgModal({ imgID, onClose, name, description, price }) {
  return (
    <div
      style={{ backgroundColor: "rgba(0, 0, 0, 0.9)" }}
      className="h-auto fixed left-0 top-0 right-0 p-[100px] animate-zoom"
    >
      <span className="close" onClick={onClose}>
        &times;
      </span>
      <div className="w-[400px] m-auto  bg-white p-5 rounded">
        <img
          className="rounded object-cover"
          alt="dish logo"
          src={`${restarentCloudinarImg}${imgID}`}
        />
        <div className="flex justify-between my-4">
          <div className="font-normal">
            <p className="font-bold">{name}</p>
            <p>₹{price / 100}</p>
            <p>{description}</p>
          </div>
          <div>
            <button className="font-semibold bg-emerald-500 text-white p-1  rounded-sm">
              Add
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ImgModal
