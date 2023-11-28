import React, { useState } from "react"
import ReactDOM from "react-dom/client"
import { Header } from "./Components/Header"
import { resObj } from "./utils/RestarentObject"
import { Body } from "./Components/Body"
import { useState } from "react"
// const resObj = {
//   id: "427059",
//   name: "KFC",
//   locality: "Ameerpet Metro station",
//   clodinaryId: "f01666ac73626461d7455d9c24005cd4",
//   areaName: "Concourse Level",
//   costForTwo: "₹400 for two",
//   cuisines: ["Burgers", "Biryani", "American", "Snacks", "Fast Food"],
//   avgRating: 3.7,
//   avgRatingString: "3.7",
//   totalRatingsString: "1K+",
//   deliveryTime: 30,
//   isOpen: true,
// }
const resObjects = resObj
const AppLayout = () => {
  const [resObj, setResObj] = useState(resObjects)
  return (
    <div className="app">
      <Header />
      <Body resObj={resObj} setResObj={setResObj} />
    </div>
  )
}
const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<AppLayout />)
