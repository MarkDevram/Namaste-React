import React, { useEffect, useState } from "react"
import ShimmerComp from "./ShimmerComp"
import { menuAPI_URL } from "../utils/Constants"
import { useParams } from "react-router-dom"
import useRestaurentMenu from "../utils/useRestaurentMenu"

function RestaurentsDetails() {
  const { resId } = useParams()
  console.log(resId)

  const resInfo = useRestaurentMenu(resId)
  console.log(resInfo)

  //conditional rendering
  if (resInfo === null) {
    return <ShimmerComp />
  }

  //data destructuring
  const recommendedFoods =
    resInfo.cards[2]?.groupedCard.cardGroupMap.REGULAR.cards[3].card.card
      ?.itemCards

  const seaFoodstarters =
    resInfo.cards[2]?.groupedCard.cardGroupMap.REGULAR.cards[4].card.card
      ?.itemCards

  const nonVegCurries =
    resInfo.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[5]?.card?.card
      ?.itemCards

  const vegCurries =
    resInfo.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[6]?.card?.card
      ?.itemCards

  const nonVegBiriyani =
    resInfo.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[7]?.card?.card
      ?.itemCards

  console.log(
    resInfo.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[3]?.card?.card
      ?.itemCards[3]?.card?.info
  )

  const {
    id,
    name,
    cloudinaryImageId,
    avgRating,
    costForTwoMessage,
    cuisines,
  } = resInfo.cards[0].card.card.info

  const { deliveryTime } = resInfo.cards[0].card.card.info.sla

  return (
    <div>
      <div className="restaurentHeader">
        <span className="restaurent-name">{name}</span>
        <span className="cuisines">{cuisines.join(",")}</span>
        <span className="deliveryTime">Delivery time ⌛ {deliveryTime}</span>
      </div>

      <h4 className="itemHeader">👇 Items Available Rightnow ✅ </h4>
      <div className="items">
        <div className="recommended-foods eachItem">
          <h3>
            <u>Recommended Foods 😋 ({recommendedFoods.length})</u>
          </h3>
          <ul>
            {recommendedFoods.map((eachInfo) => {
              console.log(eachInfo)
              return (
                <>
                  <li key={eachInfo.card.info.id}>{eachInfo.card.info.name}</li>
                  <pre>{eachInfo.card.info.price / 100} Rs/-</pre>
                </>
              )
            })}
          </ul>
        </div>
        <div className="seaFoodstarters eachItem">
          <h3>
            <u>Menu 1 ({seaFoodstarters.length})</u>
          </h3>
          <ul>
            {seaFoodstarters.map((eachInfo) => {
              console.log(eachInfo)
              return (
                <>
                  <li key={eachInfo.card.info.id}>{eachInfo.card.info.name}</li>
                  <pre>{eachInfo.card.info.price / 100} Rs/-</pre>
                </>
              )
            })}
          </ul>
        </div>
        <div className="nonVegCurries eachItem">
          <h3>
            <u>Menu 2 ({nonVegCurries.length})</u>
          </h3>
          <ul>
            {nonVegCurries.map((eachInfo) => {
              console.log(eachInfo)
              return (
                <>
                  <li key={eachInfo.card.info.id}>{eachInfo.card.info.name}</li>
                  <pre>{eachInfo.card.info.price / 100} Rs/-</pre>
                </>
              )
            })}
          </ul>
        </div>
        <div className="vegCurries eachItem">
          <h3>
            <u>Menu 3 ({vegCurries.length})</u>
          </h3>
          <ul>
            {vegCurries.map((eachInfo) => {
              console.log(eachInfo)
              return (
                <>
                  <li key={eachInfo.card.info.id}>{eachInfo.card.info.name}</li>
                  <pre>{eachInfo.card.info.price / 100} Rs/-</pre>
                </>
              )
            })}
          </ul>
        </div>
        <div className="vegCurries eachItem">
          <h3>
            <u>Menu 4 ({nonVegBiriyani.length})</u>
          </h3>
          <ul>
            {nonVegBiriyani.map((eachInfo) => {
              console.log(eachInfo)
              return (
                <>
                  <li key={eachInfo.card.info.id}>{eachInfo.card.info.name}</li>
                  <pre>{eachInfo.card.info.price / 100} Rs/-</pre>
                </>
              )
            })}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default RestaurentsDetails
