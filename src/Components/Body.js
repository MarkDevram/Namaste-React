import { RestarentCard } from "./RestarentCard"
import { useState, useEffect } from "react"
import { resObjFromFile } from "../utils/RestarentObject"
import ShimmerComp from "./ShimmerComp"
import { Link } from "react-router-dom"

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
      "https://corsproxy.io/?https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.956924&lng=77.701127&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"

    const response = await fetch(API_Url)
    const json = await response.json()
    console.log(json)
    const restaurentObj =
      json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants

    const dataRes = restaurentObj?.map((obj) => {
      return obj.info
    })
    console.log(dataRes)
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
            let filteredObj = resObj?.filter((obj) => obj.avgRating >= 4.5)
            setFilterdRestaurent(filteredObj)
          }}
        >
          Top Rated Restarents
        </button>
      </div>

      {/* Displaying Restaurent Object */}
      <div className="res-container">
        {flteredRestaurent?.map((eachObj, i) => (
          <Link to={"/restaurents/" + eachObj.id}>
            <RestarentCard resObj={eachObj} />
          </Link>
        ))}
      </div>
    </div>
  )
}
