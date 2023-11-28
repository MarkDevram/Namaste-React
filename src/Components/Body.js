import { RestarentCard } from "./RestarentCard"
import { useState } from "react"

export const Body = ({ resObz }) => {
  //Restaurent Object
  const [resObj, setResObj] = useState(resObz)

  //Search String State
  const [searchString, setSearchString] = useState("")

  const resetRestaurentList = () => {
    setSearchString("")
    setResObj(resObz)
  }
  const handleSearch = () => {
    const searchedRestaurent = resObj.filter((obj) => {
      return obj.name.toLowerCase().includes(searchString)
    })

    setResObj(searchedRestaurent)
  }
  return (
    <div className="body">
      {/* Searching the Restarent based on Name */}
      <div className="search">
        <input
          value={searchString}
          onChange={(e) => {
            setSearchString(e.target.value)
          }}
          placeholder="Search your favorite restaurent"
        />
        <button
          className="searchBtn"
          onClick={() => {
            handleSearch()
          }}
        >
          Search
        </button>
        <button
          onClick={() => {
            resetRestaurentList()
          }}
        >
          Reset
        </button>
      </div>

      {/* Filtering the Top reated Restaurents */}

      <div className="filter">
        <button
          onClick={() => {
            let filteredObj = resObj.filter((obj) => obj.avgRating >= 4.3)
            setResObj(filteredObj)
          }}
        >
          Top Rated Restarents
        </button>
      </div>

      {/* Displaying Restaurent Object */}
      <div className="res-container">
        {resObj.map((resObz) => {
          return <RestarentCard resObj={resObz} key={resObz.id} />
        })}
      </div>
    </div>
  )
}
