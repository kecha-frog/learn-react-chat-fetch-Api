import { useSelector } from "react-redux"
import { Link, Switch, Route } from "react-router-dom"
import React from "react"
import styles from "./header.module.css"

export const Header = () => {
  const { routeReducer } = useSelector((state) => state)

  const Profile = () => {
    return <h1>Home</h1>
  }

  return (
    <>
      <Switch>
        <Route path="/profile" render={() => <Profile>Home</Profile>} />
      </Switch>
      <header className={styles.header}>
        <h3 className={styles.text}>{routeReducer.roomId}</h3>
        <Link to="/profile">Profile</Link>
      </header>
    </>
  )
}
