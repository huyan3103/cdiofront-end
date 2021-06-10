import React from "react"
import Employee from "./Employee"
import "./item.css"
import { data } from "./testData"

const Mainer = () => {
  return (
    <div className="menu">
      <div className="menu-item">
        {data.map((item) => {
          return <Employee key={item.id} {...item} />
        })}
      </div>
    </div>
  )
}

export default Mainer
