import { RestarentCard } from "./RestarentCard"
import { useState, useEffect } from "react"
import { resObjFromFile } from "../utils/RestarentObject"
import ShimmerComp from "./ShimmerComp"

export const Body = () => {
  //Restaurent Object
  const [resObj, setResObj] = useState([])

  //filtered Restaurent's
  const [flteredRestaurent, setFilterdRestaurent] = useState([])

  //search string state
  const [searchString, setSearchString] = useState("")

  useEffect(() => {
    fetchFun()
  }, [])

  const fetchFun = async () => {
    let API_Url =
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.956924&lng=77.701127&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"

    const response = await fetch(API_Url)
    const json = await response.json()
    const restaurentObj =
      json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants

    const dataRes = restaurentObj.map((obj) => {
      return obj.info
    })
    setResObj(dataRes)
    setFilterdRestaurent(dataRes)
  }

  const handleSearch = () => {
    const searchedRestaurent = resObj.filter((obj) => {
      return obj?.name.toLowerCase().includes(searchString)
    })

    setFilterdRestaurent(searchedRestaurent)
  }

  //conditional Rendering
  if (resObj.length === 0) {
    return <ShimmerComp />
  }
  return (
    <div className="body">
      {/* Searching the Restarent based on Name */}
      <div className="search">
        <input
          onChange={(e) => {
            // if (!e.target.value) {
            //   console.log("nope")
            // } else {
            setSearchString(e.target.value)
            handleSearch()
            if (e.target.value.length === 0) {
              setResObj(resObj)
            }
            // }
          }}
          placeholder="Search your favorite restaurent"
        />
        <button
          className="searchBtn"
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

      <div className="filter">
        <button
          onClick={() => {
            let filteredObj = resObj.filter((obj) => obj.avgRating >= 4.5)
            setFilterdRestaurent(filteredObj)
          }}
        >
          Top Rated Restarents
        </button>
      </div>

      {/* Displaying Restaurent Object */}
      <div className="res-container">
        {flteredRestaurent.map((eachObj, i) => {
          return <RestarentCard resObj={eachObj} key={i} />
        })}
      </div>
    </div>
  )
}
