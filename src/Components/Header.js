import { useState } from "react"
import { CDNImgLink } from "../utils/Constants"
import { Link } from "react-router-dom"
import useOnlinStatus from "../utils/useOnlinStatus"

export const Header = () => {
  const [btnClicked, setBtnCliked] = useState(false)
  const statusValue = useOnlinStatus()
  return (
    <div className="shadow-2xl flex border-[7px] border-red-700  justify-between bg-emerald-300  rounded-lg">
      <div className="  w-[90px] h-[100px]  ">
        <img
          className=" flex rounded-full py-1 px-1 ml-4  border-[7px] border-cyan-600 relative left-[175px]"
          src={CDNImgLink}
        />
      </div>
      <div>
        <ul className="flex justify-between p-1 m-4  text-lg font-bold relative right-[100px]">
          <h2 className="  font-mono p-4 ml-4 relative right-[80px] bottom-2 text-[33px] top-[-3px]">
            RameshRestro
          </h2>
          <li className="p-4 ml-4 bg-orange-500 rounded-md text-gray-50 ">
            {statusValue ? "Online🟢" : "Offline🔴"}
          </li>
          <li className="p-4 ml-4 hover:bg-orange-500 hover:rounded-md hover:text-white">
            <Link to="/">Home</Link>
          </li>
          <li className="p-4 ml-4   hover:bg-orange-500 hover:rounded-md hover:text-white">
            <Link to="/about">About us</Link>
          </li>
          <li className="p-4 ml-4   hover:bg-orange-500 hover:rounded-md hover:text-white">
            <Link to="/contact">Contact us</Link>
          </li>
          <li className="p-4 ml-4   hover:bg-orange-500 hover:rounded-md hover:text-white">
            <Link to="/restaurents/grocery">Grocery</Link>
          </li>
          <li className="p-4 ml-4   hover:bg-orange-500 hover:rounded-md hover:text-white">
            Cart
          </li>

          <button
            className="p-4 ml-4 relative top-[1px]"
            onClick={() => {
              setBtnCliked(!btnClicked)
            }}
          >
            {!btnClicked ? "Login" : "Logout"}
          </button>
        </ul>
      </div>
    </div>
  )
}
