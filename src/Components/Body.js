import { RestarentCard } from "./RestarentCard"

export const Body = ({ resObj, setResObj }) => {
  return (
    <div className="body">
      {/* <div className="search">
        <input />
        <button>Search</button>
      </div> */}
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
      <div className="res-container">
        {resObj.map((resObz) => {
          return <RestarentCard resObj={resObz} key={resObz.id} />
        })}
      </div>
    </div>
  )
}
