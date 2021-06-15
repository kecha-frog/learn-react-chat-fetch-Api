import { Message } from "@components"
import { Input, InputAdornment, withStyles } from "@material-ui/core"
import { Send } from "@material-ui/icons"
import { getProfile } from "@store"
import {
  changeValueConversations,
  getChatValue,
  resetValueConversations,
} from "@store/conversations"
import { getMessageList, sendMessages } from "@store/messages"
import { useSelector, useDispatch } from "react-redux"
import { useParams } from "react-router-dom"
import React, { useCallback, useMemo } from "react"
import styles from "./message-list.module.css"

const StyledInput = withStyles(() => ({
  root: {
    "&": {
      padding: "5px",
      borderTopStyle: "groove",
    },
  },
}))(Input)

export const MessageList = () => {
  const memoSelectorMessageList = useMemo(() => getMessageList(), [])
  const MessageList = useSelector(memoSelectorMessageList)

  const userNameSelector = useMemo(() => getProfile(), [])
  const { name } = useSelector(userNameSelector)

  const { roomId } = useParams()

  const messages = MessageList[roomId] || []

  const dispatch = useDispatch()

  const sendMessage = useCallback(
    ({ author = name, message }) => {
      const newMessage = { author, message }

      if (!/^\s*$/.test(message) && author !== "Robot") {
        dispatch(sendMessages(roomId, newMessage))
        dispatch(resetValueConversations(roomId))
      } else if (!/^\s*$/.test(message)) {
        dispatch(sendMessages(roomId, newMessage))
      }
    },
    [dispatch, name, roomId],
  )

  const memoSelectorValue = useMemo(() => getChatValue(roomId), [roomId])
  const value = useSelector(memoSelectorValue)

  const onKeyPressHandler = React.useCallback(
    ({ code }) => {
      if (code === "Enter") {
        sendMessage({ message: value })
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
                  onClick={() => sendMessage({ message: value })}
                  fontSize={"small"}
                />
              )}
            </InputAdornment>
          }
        />
      </>
    )
  }, [handleChangeValue, onKeyPressHandler, sendMessage, value])

  if (MessageList[roomId]) {
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
  } else {
    return (
      <>
        <div className={styles.messagesListBox}>
          <h3 className={styles.noMessage}>No message</h3>
          <InputButton />
        </div>
      </>
    )
  }
}
