import PropTypes from "prop-types"
import { Link, Switch, Route } from "react-router-dom"
import React from "react"
import styles from "./header.module.css"

export const Header = (props) => {
  const { parentParams } = props

  const Profile = () => {
    return <h1>Home</h1>
  }

  return (
    <>
      <Switch>
        <Route path="/profile" render={Profile} />
      </Switch>
      <header className={styles.header}>
        <h3 className={styles.text}>{parentParams.roomId.toUpperCase()}</h3>
        <Link to="/profile">Profile</Link>
      </header>
    </>
  )
}

Header.propTypes = {
  parentParams: PropTypes.object,
}
