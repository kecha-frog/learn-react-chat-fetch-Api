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
    selected: PropTypes.bool,
    handleListItemClick: PropTypes.func,
    index: PropTypes.number,
  }

  render() {
    const { title, handleListItemClick, selected, index } = this.props
    console.log(selected)
    return (
      <StyledListItem
        onClick={(event) => handleListItemClick(event, index)}
        button={true}
        href={"#"}
        selected={selected}
      >
        <ListItemText primary={title} />
      </StyledListItem>
    )
  }
}
