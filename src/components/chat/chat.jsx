import { ListItem, ListItemText } from "@material-ui/core"
import PropTypes from "prop-types"
import React from "react"

export class Chat extends React.Component {
  static propTypes = {
    title: PropTypes.string,
    selected: PropTypes.number,
    handleListItemClick: PropTypes.func,
  }

  render() {
    const { title, handleListItemClick, selected } = this.props
    return (
      <ListItem button={true} href={"#"}>
        <ListItemText primary={title} />
      </ListItem>
    )
  }
}
