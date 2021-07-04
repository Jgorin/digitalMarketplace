import React from "react"
import {destroyUserSession} from "./Fetches/UserFetches"

const TopBar = (props) => {
  const destroyUserSessionWrapper = async() => {
    const response = await destroyUserSession()
    debugger
  }

  return(
    <section className="topbar">
      <h1>test</h1>
      <a href="/users/sign_in">Sign In</a>
      <button onClick={destroyUserSessionWrapper}>Sign Out</button>
    </section>
  )
}

export default TopBar