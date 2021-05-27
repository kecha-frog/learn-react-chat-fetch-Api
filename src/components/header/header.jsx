import { withStyles } from "@material-ui/core"
import PropTypes from "prop-types"
import { Link, Switch, Route } from "react-router-dom"
import React from "react"
import styles from "./header.module.css"

const StyledLink = withStyles(() => ({
  root: {
    "&": {
      display: "block",
    },
  },
}))(Link)

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
          <h3>{parentParams.roomId.toUpperCase()}</h3>
          <StyledLink to="/profile">Profile</StyledLink>
        </header>
      </>
    )
  }
}
