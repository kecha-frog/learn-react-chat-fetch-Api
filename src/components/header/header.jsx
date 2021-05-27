import PropTypes from "prop-types"
import { Link, Switch, Route } from "react-router-dom"
import React from "react"
import styles from "./header.module.css"

export class Header extends React.Component {
  Profile = () => {
    return <h1>Home</h1>
  }

  static propTypes = {
    parentParams: PropTypes.object,
  }

  render() {
    const { parentParams } = this.props

    return (
      <>
        <Switch>
          <Route path="/profile" render={this.Profile} />
        </Switch>
        <header className={styles.header}>
          <h3 className={styles.text}>{parentParams.roomId.toUpperCase()}</h3>
          <Link to="/profile">Profile</Link>
        </header>
      </>
    )
  }
}
