import React from "react"
import { useRouteError } from "react-router-dom"
function Error() {
  const errObj = useRouteError()
  return (
    <div>
      <h1>
        {errObj.status}🐈 {errObj.statusText}!⛔
      </h1>
      <p>{errObj.statusText}</p>
    </div>
  )
}

export default Error
