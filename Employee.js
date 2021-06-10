import React from "react"
import "./item.css"

const Employee = (props) => {
  const { id, name, img, price } = props

  return (
    <>
      <div className="item">
        <div className="item-img">
          <img src={img} alt="food/drink"></img>
        </div>
        <div className="item-info">
          <div className="item-about">
            <h3>{name}</h3>
            <p>{price.toFixed(2)}$</p>
          </div>
          <div className="item-description">
            <p></p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Employee
