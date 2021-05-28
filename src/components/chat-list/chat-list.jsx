import { Chat } from "@components"
import { List } from "@material-ui/core"
import PropTypes from "prop-types"
import React from "react"
import styles from "./chat-list.module.css"

export const ChatList = (props) => {
  const [selectedIndex, setSelectedIndex] = React.useState(0)

  const { conversations } = props.parentState

  const { addRoom } = props.parentAction

  const handleListItemClick = (event, index) => {
    setSelectedIndex(index)
  }

  return (
    <List
      aria-label="contacts"
      className={styles.chat_list}
      disablePadding={true}
    >
      {conversations.map((conversation, index) => (
        <Chat
          handleListItemClick={handleListItemClick}
          title={conversation.title}
          key={index}
          index={index}
          selected={selectedIndex === index}
        />
      ))}
      <li>
        <button onClick={addRoom}>Добавить</button>
      </li>
    </List>
  )
}

ChatList.propTypes = {
  parentState: PropTypes.object,
  parentAction: PropTypes.object,
}
