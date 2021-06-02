import { ListItem, ListItemText, withStyles } from "@material-ui/core"
import PropTypes from "prop-types"
import { Link } from "react-router-dom"
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

export const Chat = (props) => {
  const { title, selected } = props

  return (
    <>
      <Link className={styles.link} to={"/chat/" + title}>
        <StyledListItem button={true} href={"#"} selected={selected}>
          <ListItemText primary={title} />
        </StyledListItem>
      </Link>
    </>
  )
}

Chat.propTypes = {
  title: PropTypes.string,
  selected: PropTypes.bool,
}
