import { restarentCloudinarImg } from "../utils/Constants"

export const RestarentCard = ({ resObj }) => {
  // console.log(resObj)
  const { name, cuisines, avgRating, costForTwo } = resObj
  const eta = resObj.sla.deliveryTime
  // console.log(name, cuisines, avgRating, costForTwo)

  return (
    <>
      <div className="hover:bg-lime-300 hover:shadow-2xl ml-[45px] border-[5px] border-emerald-500 mb-[40px] p-4 h-[400px] w-[250px] bg-slate-300 justify-center rounded-lg">
        <img
          className="w-[200px] rounded-full h-[200px]"
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
