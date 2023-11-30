import { restarentCloudinarImg } from "../utils/Constants"

export const RestarentCard = ({ resObj }) => {
  // console.log(resObj)
  const { name, cuisines, avgRating, costForTwo } = resObj
  // console.log(name, cuisines, avgRating, costForTwo)

  const syleObj = {
    backgroundColor: "lightGreen",
  }

  return (
    <div className="Res-card" style={syleObj}>
      <img
        className="resLogo"
        alt="res-logo"
        src={`${restarentCloudinarImg}${resObj.cloudinaryImageId}`}
      />
      <h3>{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{avgRating} ⭐</h4>
      <h4>{costForTwo}</h4>
      <h4>{15} Mins ⌚</h4>
    </div>
  )
}
