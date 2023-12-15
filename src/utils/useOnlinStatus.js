import { useEffect, useState } from "react"

function useOnlinStatus() {
  const [onlineStatus, setOnlineStatus] = useState(true)

  useEffect(() => {
    //when its offline

    window.addEventListener("offline", () => {
      setOnlineStatus(false)
    })

    //when its online
    window.addEventListener("online", () => {
      setOnlineStatus(true)
    })
  }, [])
  //   returing the status

  return onlineStatus
}

export default useOnlinStatus
