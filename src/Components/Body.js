import { RestarentCard, RestarentCardWithPromoted } from "./RestarentCard"
import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import useOnlinStatus from "../utils/useOnlinStatus"
import { API_Url } from "../utils/Constants"
import ShimmerComp from "./ShimmerComp"

export const Body = () => {
  //Restaurent Object
  const [resObj, setResObj] = useState([])

  //filtered Restaurent's
  const [flteredRestaurent, setFilterdRestaurent] = useState([])

  //search string state
  const [searchString, setSearchString] = useState("")

  const PromotedRestarent = RestarentCardWithPromoted(RestarentCard)
  useEffect(() => {
    fetchFun()
  }, [])

  const fetchFun = async () => {
    const response = await fetch(API_Url)
    const json = await response.json()
    console.log("Json", json)
    const restaurentObj =
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    console.log("Fethed the restarent list are", restaurentObj)
    const dataRes = restaurentObj?.map((obj) => {
      return obj.info
    })
    setResObj(dataRes)
    setFilterdRestaurent(dataRes)
  }

  //onLineStatus
  const onlineStatus = useOnlinStatus()
  if (onlineStatus === false) {
    console.log(onlineStatus)
    return (
      <h1 style={{ textAlign: "center" }}>
        You are not connected to the Internet
      </h1>
    )
  }
  //handling the search functionality
  const handleSearch = () => {
    const searchedRestaurent = resObj.filter((obj) => {
      return obj?.name.toLowerCase().includes(searchString)
    })

    setFilterdRestaurent(searchedRestaurent)
  }

  //conditional Rendering if resObj contains nothing ,
  if (resObj?.length === 0) {
    return <ShimmerComp />
  }

  //else condition, excecuted only when the resObj has some values
  return (
    <div className=" py-4 body bg-gradient-to-r from-green-400 to-blue-500">
      {/* Searching the Restarent based on Name */}
      <div className="relative left-[10px]">
        <input
          className="text-sm border-[4px] border-cyan-600 rounded-md mx-9"
          onChange={(e) => {
            setSearchString(e.target.value)
            handleSearch()
            if (e.target.value.length === 0) {
              setFilterdRestaurent(resObj)
            }
            // }
          }}
          placeholder="Search your favorite restaurent"
        />
        <button
          className="bg-neutral-900 text-emerald-50 p-1 rounded-md shadow-slate-400"
          onClick={() => {
            handleSearch()
          }}
          onMouseMove={() => {
            setResObj(resObj)
          }}
        >
          Search
        </button>
      </div>
      {/* Filtering the Top reated Restaurents */}
      <div className="m-5">
        <button
          onClick={() => {
            let filteredObj = resObj?.filter((obj) => obj.avgRating >= 4.5)
            setFilterdRestaurent(filteredObj)
          }}
          className="text-white colorborder font-bold rounded-md px-4 py-2.5 text-lg relative left-[30px]"
        >
          High Rated Restarents
        </button>
      </div>

      {/* Displaying Restaurent Object */}
      <div className="flex flex-wrap">
        {flteredRestaurent?.map((eachObj, i) => (
          <Link to={"/restaurents/" + eachObj?.id} key={i}>
            {eachObj.avgRating >= 4.3 ? (
              <PromotedRestarent resObj={eachObj} />
            ) : (
              <RestarentCard resObj={eachObj} />
            )}
          </Link>
        ))}
      </div>
    </div>
  )
}
