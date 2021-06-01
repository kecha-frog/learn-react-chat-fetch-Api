import { Message } from "@components"
import { Input, InputAdornment, withStyles } from "@material-ui/core"
import { Send } from "@material-ui/icons"
import {
  changeValueConversations,
  resetValueConversations,
} from "@store/conversations"
import { sendMessages } from "@store/messages"
import { useSelector, useDispatch } from "react-redux"
import React, { useEffect, useCallback } from "react"
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

const selector = () => {
  return (state) => state
}

export const MessageList = () => {
  const memoSelector = useCallback((state) => selector()(state), [])
  const { conversationsReducer, messagesReducer, routeReducer } =
    useSelector(memoSelector)

  const messagesList = messagesReducer[routeReducer.roomId] || []

  const dispatch = useDispatch()

  const sendMessage = useCallback(
    ({ author, message }) => {
      const newMessage = { author, message }

      if (!/^\s*$/.test(message) && author !== "Robot") {
        dispatch(sendMessages(routeReducer, newMessage))
        dispatch(resetValueConversations(routeReducer))
      } else if (!/^\s*$/.test(message)) {
        dispatch(sendMessages(routeReducer, newMessage))
      }
    },
    [dispatch, routeReducer],
  )

  useEffect(() => {
    if (messagesReducer[routeReducer.roomId] !== undefined) {
      const lastMessageAuthor =
        messagesReducer[routeReducer.roomId][
          messagesReducer[routeReducer.roomId].length - 1
        ].author

      if (
        lastMessageAuthor !== "Robot" &&
        messagesReducer[routeReducer.roomId].length !== 1 &&
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
  }, [messagesReducer, routeReducer.roomId, sendMessage])

  const value =
    conversationsReducer.find(
      (conversation) => conversation.title === routeReducer.roomId,
    )?.value || ""

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

      dispatch(changeValueConversations(routeReducer, value))
    },
    [dispatch, routeReducer],
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
        {messagesList.map((message, index) => (
          <Message messages={message} key={index} />
        ))}
      </ul>
      <InputButton />
    </div>
  )
}
