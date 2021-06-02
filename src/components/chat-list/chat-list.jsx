import { Chat } from "@components"
import { List } from "@material-ui/core"
import { addRoomConversations, getChatList } from "@store/conversations"
import { addRoomMessages } from "@store/messages"
import { useSelector, useDispatch } from "react-redux"
import { useParams } from "react-router-dom"
import React, { useMemo } from "react"
import styles from "./chat-list.module.css"

export const ChatList = () => {
  const memoSelector = useMemo(() => getChatList(), [])

  const { roomId } = useParams()

  const chatList = useSelector(memoSelector)

  const dispatch = useDispatch()

  const addRoom = () => {
    dispatch(addRoomConversations())
    dispatch(addRoomMessages())
  }

  return (
    <List
      aria-label="contacts"
      className={styles.chat_list}
      disablePadding={true}
    >
      {chatList.map((conversation, index) => (
        <Chat
          title={conversation.title}
          key={index}
          selected={roomId === conversation.title}
        />
      ))}
      <li>
        <button onClick={addRoom}>Добавить</button>
      </li>
    </List>
  )
}
