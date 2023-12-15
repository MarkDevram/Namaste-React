import { useState } from "react"
import { CDNImgLink } from "../utils/Constants"
import { Link } from "react-router-dom"
import useOnlinStatus from "../utils/useOnlinStatus"

export const Header = () => {
  const [btnClicked, setBtnCliked] = useState(false)
  const statusValue = useOnlinStatus()
  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={CDNImgLink} />
      </div>
      <div className="nav-items">
        <ul>
          <li className="onlineStatus">
            {statusValue ? "Online🟢" : "Offline🔴"}
          </li>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About us</Link>
          </li>
          <li>
            <Link to="/contact">Contact us</Link>
          </li>
          <li>
            <Link to="/restaurents/grocery">Grocery</Link>
          </li>
          <li>Cart</li>

          <button
            className="login-btn"
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
