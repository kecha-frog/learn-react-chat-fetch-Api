import { Message } from "@components"
import { Input, InputAdornment, withStyles } from "@material-ui/core"
import { Send } from "@material-ui/icons"
import {
  changeValueConversations,
  getChatList,
  resetValueConversations,
} from "@store/conversations"
import { getMessageList, sendMessages } from "@store/messages"
import { useSelector, useDispatch } from "react-redux"
import { useParams } from "react-router-dom"
import React, { useEffect, useCallback, useMemo } from "react"
import styles from "./message-list.module.css"

const StyledInput = withStyles(() => ({
  root: {
    "&": {
      padding: "5px",
      borderTopStyle: "groove",
    },
  },
}))(Input)

let setTimeoutOn = true // Cделал для ответа робота чтоб много раз не отправлял повторно когда setTimeout скапливается в стеке, его надо в редукс переносить ?

getMessageList()

export const MessageList = () => {
  const memoSelectorMessageList = useMemo(() => getMessageList(), [])
  const MessageList = useSelector(memoSelectorMessageList)
  const memoSelectorChatList = useMemo(() => getChatList(), [])
  const ChatList = useSelector(memoSelectorChatList)

  const { roomId } = useParams()

  const messages = MessageList[roomId] || []

  const dispatch = useDispatch()

  const sendMessage = useCallback(
    ({ author, message }) => {
      const newMessage = { author, message }

      if (!/^\s*$/.test(message) && author !== "Robot") {
        dispatch(sendMessages(roomId, newMessage))
        dispatch(resetValueConversations(roomId))
      } else if (!/^\s*$/.test(message)) {
        dispatch(sendMessages(roomId, newMessage))
      }
    },
    [dispatch, roomId],
  )

  useEffect(() => {
    if (MessageList[roomId] !== undefined) {
      const lastMessageAuthor =
        MessageList[roomId][MessageList[roomId].length - 1].author

      if (
        lastMessageAuthor !== "Robot" &&
        MessageList[roomId].length !== 1 &&
        setTimeoutOn
      ) {
        setTimeoutOn = !setTimeoutOn
        setTimeout(() => {
          sendMessage({
            author: "Robot",
            message: `Здравствуйте ${lastMessageAuthor}!  Я робот,  не отвечайте мне.`,
          })
          setTimeoutOn = !setTimeoutOn
        }, 500)
      }
    }
  }, [MessageList, roomId, sendMessage])

  const value =
    ChatList.find((conversation) => conversation.title === roomId)?.value || ""

  const onKeyPressHandler = React.useCallback(
    ({ code }) => {
      if (code === "Enter") {
        sendMessage({ author: "User", message: value })
      }
    },
    [sendMessage, value],
  )

  const handleChangeValue = useCallback(
    (event) => {
      const {
        target: { value },
      } = event

      dispatch(changeValueConversations(roomId, value))
    },
    [dispatch, roomId],
  )

  const InputButton = React.useCallback(() => {
    return (
      <>
        <StyledInput
          autoFocus={true}
          placeholder={"Введите сообщение"}
          onChange={handleChangeValue}
          onKeyPress={onKeyPressHandler}
          value={value}
          fullWidth={true}
          endAdornment={
            <InputAdornment position={"end"}>
              {value && (
                <Send
                  className={styles.icon}
                  type={"button"}
                  onClick={() =>
                    sendMessage({ author: "User", message: value })
                  }
                  fontSize={"small"}
                />
              )}
            </InputAdornment>
          }
        />
      </>
    )
  }, [handleChangeValue, onKeyPressHandler, sendMessage, value])

  return (
    <div className={styles.messagesListBox}>
      <ul className={styles.messagesList}>
        {messages.map((message, index) => (
          <Message messages={message} key={index} />
        ))}
      </ul>
      <InputButton />
    </div>
  )
}
