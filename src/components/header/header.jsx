import { Link, Switch, Route } from "react-router-dom"
import React from "react"
import styles from "./header.module.css"

export class Header extends React.Component {
  Profile = () => {
    return <h1>Home</h1>
  }

  render() {
    return (
      <>
        <Switch>
          <Route path="/profile" render={this.Profile} />
        </Switch>
        <header className={styles.header}>
          <Link to="/profile">Profile</Link>
        </header>
      </>
    )
  }
}
