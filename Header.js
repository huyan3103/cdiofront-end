import React from "react"
import cart from "../asserts/shopping-cart.svg"
import "./header.css"

const Header = () => {
  return (
    <div className="header">
      <div className="branch-name">
        <h2>Helper Web</h2>
      </div>
      <div className="header-item">
        <div className="link">
          <ul>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Menu</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </ul>
        </div>
        <img src={cart}></img>
      </div>
    </div>
  )
}

export default Header
