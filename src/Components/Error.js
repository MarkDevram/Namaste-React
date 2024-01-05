import React from "react"
import { useRouteError } from "react-router-dom"
function Error() {
  return (
    <div>
      <h1 className="m-4 font-bold shadow-2xl p-60 text-3xl bg-red-600 text-white text-center">
        😓 404 Something Went Wrong ! its Our Fault.
      </h1>
    </div>
  )
}

export default Error
