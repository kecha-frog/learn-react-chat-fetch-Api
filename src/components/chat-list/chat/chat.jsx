import { ListItem, ListItemText, withStyles } from "@material-ui/core"
import { getMessageList } from "@store/messages"
import PropTypes from "prop-types"

import { useSelector } from "react-redux"
import { Link, useParams } from "react-router-dom"
import React, { useMemo } from "react"
import styles from "./chat.module.css"

const StyledListItem = withStyles(() => ({
  root: {
    "&": {
      border: "1px groove",
      borderRightStyle: "none",
      display: "block",
    },
  },
}))(ListItem)

const StyledListItemTextAuthor = withStyles(() => ({
  primary: {
    "&": {
      fontSize: "15px",
      color: "#28A4E3",
    },
  },
}))(ListItemText)

export const Chat = (props) => {
  const memoSelectorMessageList = useMemo(() => getMessageList(), [])
  const MessageList = useSelector(memoSelectorMessageList)

  const { roomId } = useParams()

  const { title } = props
  const { author, message } = MessageList[title][MessageList[title].length - 1]

  return (
    <>
      <Link className={styles.link} to={"/chat/" + title}>
        <StyledListItem button={true} href={"#"} selected={roomId === title}>
          <StyledListItemTextAuthor primary={author} />
          <ListItemText primary={message} />
        </StyledListItem>
      </Link>
    </>
  )
}

Chat.propTypes = {
  title: PropTypes.string,
  selected: PropTypes.bool,
}
