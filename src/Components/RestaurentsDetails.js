import React from "react"
import { useParams } from "react-router-dom"
import useRestaurentMenu from "../utils/useRestaurentMenu"
import ShimmerComp from "../Components/ShimmerComp"
import RestCatogery from "./RestCatogery"
// import { restarentCloudinarImg } from "../utils/Constants.js"

function RestaurentsDetails() {
  console.clear()

  //this will used to get the id of res
  const { resId } = useParams()

  console.log("Clicked Restaurent Id is", resId)

  const resInfo = useRestaurentMenu(resId)

  console.log(resInfo)

  const categories =
    resInfo?.data?.cards[2].groupedCard.cardGroupMap.REGULAR.cards.filter(
      (eachCard) => {
        return (
          eachCard.card?.card?.["@type"] ===
          "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
        )
      }
    )

  //
  const name = resInfo?.data?.cards[0].card.card.info.name
  const cussins = resInfo?.data?.cards[0].card?.card?.info?.cuisines.join(",")
  const distance = resInfo?.data?.cards[0].card?.card?.info?.feeDetails.message
  const totalRatings = resInfo?.data?.cards[0].card?.card?.info?.totalRatings
  const avgRating = resInfo?.data?.cards[0].card?.card?.info?.avgRating
  //

  if (resInfo == null) {
    return <ShimmerComp />
  }
  return (
    <div className="w-full h-[750px]">
      <div className="relative left-[400px]  content-center  h-[300px w-[800px] mt-10 text-2xl font-semibold  ">
        {/* restarant banner */}
        <div className="p-2 flex justify-between border-[2px] border-black ">
          <div>
            <h4 className="text-left font-extrabold">{name}</h4>
            <p className="text-sm mt-3">{cussins}</p>
            <p className="text-sm">🚴{distance}</p>
          </div>
          <div className="ml-[400px]">
            {/* rating */}
            <p className="w-18 p-1 text-center bg-green-700 text-white mt-2 text-sm rounded-sm font-extrabold">
              {avgRating}⭐
            </p>
            <p className="mt-2 text-sm text-right">{totalRatings}+ Ratings</p>
          </div>
        </div>
      </div>

      <div className="relative left-[400px] h-[300px] content-center  h-[300px w-[800px] mt-10 font-semibold">
        {/* Accordian */}
        {categories.map((eachCatogery, i) => {
          return <RestCatogery catogery={eachCatogery.card.card} key={i} />
        })}
      </div>
    </div>
  )
}

export default RestaurentsDetails
