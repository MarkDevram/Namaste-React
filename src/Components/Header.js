import { useState } from "react"
import { CDNImgLink } from "../utils/Constants"

export const Header = () => {
  const [btnClicked, setBtnCliked] = useState(false)

  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={CDNImgLink} />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About us</li>
          <li>Contact us</li>
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
