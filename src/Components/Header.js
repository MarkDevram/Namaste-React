import { CDNImgLink } from "../utils/Constants"

export const Header = () => {
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
        </ul>
      </div>
    </div>
  )
}
