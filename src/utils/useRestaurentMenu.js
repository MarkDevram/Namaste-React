import { useEffect, useState } from "react"
import { menuAPI_URL } from "./Constants"

const useRestaurentMenu = (resId) => {
  const [resInfo, setResInfo] = useState(null)

  useEffect(() => {
    fetchRestaurentData()
  }, [])

  async function fetchRestaurentData() {
    const data = await fetch(menuAPI_URL + resId)
    const json = await data.json()
    console.log("specific restarent data is (json)", json)
    setResInfo(json)
  }
  return resInfo
}
export default useRestaurentMenu
