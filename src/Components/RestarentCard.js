import { restarentCloudinarImg } from "../utils/Constants"

export const RestarentCard = ({ resObj }) => {
  console.log("______inside RestarentCard _____")
  console.log("Rendered Restarent is", resObj)

  const { name, cuisines, avgRating, costForTwo } = resObj

  const eta = resObj.sla.deliveryTime

  return (
    <>
      <div className="  hover:bg-emerald-200  hover:shadow-2xl ml-[45px] border-[5px] border-red-700 mb-[40px] p-4 h-auto w-[250px] justify-center rounded-lg bg-emerald-100">
        <img
          className="object-cover w-[650px] rounded-lg h-[200px]"
          alt="res-logo"
          src={`${restarentCloudinarImg}${resObj.cloudinaryImageId}`}
        />
        <h3 className="text-xl font-bold">{name}</h3>
        <h4>{cuisines.join(", ")}</h4>
        <h4>{avgRating} ⭐</h4>
        <h4>{costForTwo}</h4>
        <h4>{eta} Mins ⌚</h4>
      </div>
    </>
  )
}

//HOC
export const RestarentCardWithPromoted = (RestarentCard) => {
  return (props) => {
    return (
      <div>
        <label className="font-bold absolute p-2 m-2 text-white  bg-black text-sm rounded-lg">
          ⭐⭐⭐⭐ Top Rated
        </label>
        <RestarentCard {...props} />
      </div>
    )
  }
}
