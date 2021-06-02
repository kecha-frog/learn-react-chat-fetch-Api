import { Message } from "@components"
import { Input, InputAdornment, withStyles } from "@material-ui/core"
import { Send } from "@material-ui/icons"
import {
  changeValueConversations,
  resetValueConversations,
} from "@store/conversations"
import { sendMessages } from "@store/messages"
import PropTypes from "prop-types"
import { useSelector, useDispatch } from "react-redux"
import React from "react"
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
  const { conversationsReducer, messagesReducer, routeReducer } = useSelector(
    (state) => state,
  )

  const dispatch = useDispatch()

  const messagesList = messagesReducer[routeReducer.roomId] || []

  const value =
    conversationsReducer.find(
      (conversation) => conversation.title === routeReducer.roomId,
    )?.value || ""

  const sendMessage = ({ author, message }) => {
    const newMessage = { author, message }

    if (!/^\s*$/.test(message) && author !== "Robot") {
      dispatch(resetValueConversations(routeReducer))
      dispatch(sendMessages(routeReducer, newMessage))
    } else if (!/^\s*$/.test(message)) {
      dispatch(sendMessages(routeReducer, newMessage))
    }
  }

  const onKeyPressHandler = React.useCallback(
    ({ code }) => {
      if (code === "Enter") {
        sendMessage({ author: "User", message: value })
      }
    },
    [sendMessage, value],
  )

  const handleChangeValue = (event) => {
    const {
      target: { value },
    } = event

    dispatch(changeValueConversations(routeReducer, value))
  }

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

MessageList.propTypes = {
  parentAction: PropTypes.object,
  parentState: PropTypes.object,
}

/*React.useEffect(() => {
  if (messagesList[params.roomId] !== undefined) {
    const lastMessageAuthor =
      messagesList[params.roomId][messagesList[params.roomId].length - 1]
        .author

    if (
      lastMessageAuthor !== "Robot" &&
      messagesList[params.roomId] !== SetMessagesList[params.roomId] &&
      messagesList[params.roomId].length !== 1
    ) {
      setTimeout(
        () =>
          SetMessagesList({
            ...messagesList,
            [params.roomId]: [
              ...messagesList[params.roomId],
              {
                author: "Robot",
                message: `Здравствуйте ${lastMessageAuthor}!  Я робот,  не отвечайте мне.`,
              },
            ],
          }),
        500,
      )
    }
  }
}, [messagesList, params.roomId, SetMessagesList])
*/
