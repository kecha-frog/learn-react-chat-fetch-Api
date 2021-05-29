import PropTypes from "prop-types"
import { Link, Switch, Route } from "react-router-dom"
import React from "react"
import styles from "./header.module.css"

export const Header = (params) => {
  const Profile = () => {
    return <h1>Home</h1>
  }

  return (
    <>
      <Switch>
        <Route path="/profile" render={() => <Profile>Home</Profile>} />
      </Switch>
      <header className={styles.header}>
        <h3 className={styles.text}>{params.roomId}</h3>
        <Link to="/profile">Profile</Link>
      </header>
    </>
  )
}

Header.propTypes = {
  params: PropTypes.func,
}
