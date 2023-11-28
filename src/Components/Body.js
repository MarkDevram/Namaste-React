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
    // resetRestaurentList()
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
            if (!e.target.value) {
              console.log("nope")
              setResObj(resObz)
            } else {
              console.log("yes")
              if (e.target.valu === " ") console.log("Spaces")
              setSearchString(e.target.value)
              handleSearch()
            }
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
