import React, { useState } from "react"
import SubItem from "./SubItem"

function ItemList({ itemCards }) {
  console.log(itemCards)
  return (
    <div>
      {itemCards.map((c, i) => (
        <SubItem items={c.card.info} key={i} />
      ))}
    </div>
  )
}

export default ItemList
