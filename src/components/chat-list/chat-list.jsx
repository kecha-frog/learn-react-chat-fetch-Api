import { Chat } from "@components"
import { List } from "@material-ui/core"
import { addRoomConversations } from "@store/conversations"
import { addRoomMessages } from "@store/messages"
import { useSelector, useDispatch } from "react-redux"
import React, { useCallback } from "react"
import styles from "./chat-list.module.css"

const selector = () => {
  return (state) => state
}

export const ChatList = () => {
  const memoSelector = useCallback((state) => selector()(state), [])

  const [selectedIndex, setSelectedIndex] = React.useState(0)

  const { conversationsReducer } = useSelector(memoSelector)

  const dispatch = useDispatch()

  const addRoom = () => {
    dispatch(addRoomConversations())
    dispatch(addRoomMessages())
  }

  const handleListItemClick = (event, index) => {
    setSelectedIndex(index)
  }

  return (
    <List
      aria-label="contacts"
      className={styles.chat_list}
      disablePadding={true}
    >
      {conversationsReducer.map((conversation, index) => (
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
