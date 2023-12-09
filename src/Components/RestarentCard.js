import { restarentCloudinarImg } from "../utils/Constants"
import { Link } from "react-router-dom"

export const RestarentCard = ({ resObj }) => {
  // console.log(resObj)
  const { name, cuisines, avgRating, costForTwo } = resObj
  const eta = resObj.sla.deliveryTime
  // console.log(name, cuisines, avgRating, costForTwo)

  const syleObj = {
    backgroundColor: "lightGreen",
  }

  return (
    <Link>
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
        <h4>{eta} Mins ⌚</h4>
      </div>
    </Link>
  )
}
