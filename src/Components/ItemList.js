import React from "react"
import SubItem from "./SubItem"

function ItemList({ itemCards }) {
  console.log(itemCards)
  return (
    <div>
      {itemCards.map((c) => {
        console.log("each item each card", c)
        return <SubItem items={c.card.info} />
      })}
    </div>
  )
}

export default ItemList
