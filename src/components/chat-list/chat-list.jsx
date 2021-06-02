import { Chat } from "@components"
import { List } from "@material-ui/core"
import { addRoomConversations, getChatList } from "@store/conversations"
import { addRoomMessages } from "@store/messages"
import { nanoid } from "nanoid"
import { useSelector, useDispatch } from "react-redux"
import React, { useMemo } from "react"
import styles from "./chat-list.module.css"

export const ChatList = () => {
  const memoSelector = useMemo(() => getChatList(), [])
  const chatList = useSelector(memoSelector)

  const dispatch = useDispatch()

  const addRoom = () => {
    const nameRoom = nanoid(4)

    if (chatList.map((chat) => chat.title !== nameRoom)) {
      dispatch(addRoomConversations(nameRoom))
      dispatch(addRoomMessages(nameRoom))
    }
  }

  return (
    <List
      aria-label="contacts"
      className={styles.chat_list}
      disablePadding={true}
    >
      {chatList.map((conversation, index) => (
        <Chat title={conversation.title} key={index} />
      ))}
      <li>
        <button onClick={addRoom}>Добавить</button>
      </li>
    </List>
  )
}
