import { ListItem, ListItemText, withStyles } from "@material-ui/core"
import PropTypes from "prop-types"
import React from "react"
import styles from "./chat.module.css"

const StyledListItem = withStyles(() => ({
  root: {
    "&": {
      border: "1px groove",
      borderRightStyle: "none",
    },
  },
}))(ListItem)

export class Chat extends React.Component {
  static propTypes = {
    title: PropTypes.string,
    selected: PropTypes.number,
    handleListItemClick: PropTypes.func,
  }

  render() {
    const { title, handleListItemClick, selected } = this.props
    return (
      <StyledListItem button={true} href={"#"}>
        <ListItemText primary={title} />
      </StyledListItem>
    )
  }
}
