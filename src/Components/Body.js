import { RestarentCard } from "./RestarentCard"

export const Body = ({ resObj }) => {
  return (
    <div className="body">
      <div className="search">
        <input />
        <button>Search</button>
      </div>
      <div className="res-container">
        {resObj.map((resObz) => {
          return <RestarentCard resObj={resObz} key={resObz.id} />
        })}
      </div>
    </div>
  )
}
