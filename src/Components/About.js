import React from "react"
import User from "./User"
import UserClass from "./UserClass"
function About() {
  return (
    <div>
      <h1>Hello there, Welcome to our about page</h1>
      {/* <User /> */}
      <div className="usercard-container">
        {/* <UserClass /> */}
        <UserClass />
      </div>
    </div>
  )
}

export default About
