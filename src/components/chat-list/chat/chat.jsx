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
      maxHeight: "75px",
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

const StyledListItemTextMessage = withStyles(() => ({
  primary: {
    "&": {
      fontSize: "15px",
      wordWrap: "break-word",
      overflow: "hidden",
      textOverflow: "ellipsis",
      display: "-webkit-box",
      WebkitLineClamp: 1,
      WebkitBoxOrient: "vertical",
    },
  },
}))(ListItemText)

export const Chat = (props) => {
  const memoSelectorMessageList = useMemo(() => getMessageList(), [])
  const messageList = useSelector(memoSelectorMessageList)

  const { roomId } = useParams()

  const { title } = props

  const room = `Room #${title}`

  if (messageList[title] !== undefined) {
    const { author, message } =
      messageList[title][messageList[title]?.length - 1]

    return (
      <>
        <Link className={styles.link} to={"/chat/" + title}>
          <StyledListItem button={true} href={"#"} selected={roomId === title}>
            <div className={styles.nameRoomDiv}>
              <StyledListItemTextAuthor primary={room} />
              <StyledListItemTextAuthor primary={author} />
            </div>

            <StyledListItemTextMessage primary={message} />
          </StyledListItem>
        </Link>
      </>
    )
  }
  const noMessage = `No message`

  return (
    <>
      <Link className={styles.link} to={"/chat/" + title}>
        <StyledListItem button={true} href={"#"} selected={roomId === title}>
          <StyledListItemTextAuthor primary={room} />
          <StyledListItemTextMessage primary={noMessage} />
        </StyledListItem>
      </Link>
    </>
  )
}

Chat.propTypes = {
  title: PropTypes.string,
  selected: PropTypes.bool,
}
