import { Message } from "@components"
import { Input, InputAdornment, withStyles } from "@material-ui/core"
import { Send } from "@material-ui/icons"
import PropTypes from "prop-types"
import React, { createRef } from "react"
import styles from "./message-list.module.css"

const StyledInput = withStyles(() => ({
  root: {
    "&": {
      padding: "5px",
      borderTopStyle: "groove",
    },
  },
}))(Input)

export const MessageList = (props) => {
  const { parentState, parentAction } = props
  const { handleChangeValue, sendMessage } = parentAction
  const { value } = parentState
  const { messagesList } = parentState

  const onKeyPressHandler = ({ code }) => {
    if (code === "Enter") {
      sendMessage({ author: "User", message: value })
    }
  }

  const InputButton = () => {
    return (
      <div>
        <StyledInput
          autoFocus={true}
          placeholder={"Введите сообщение"}
          onChange={(event) => handleChangeValue(event)}
          onKeyPress={onKeyPressHandler}
          value={value}
          fullWidth={true}
          key={"124124124"}
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
      </div>
    )
  }

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

/*export class MessageList extends React.Component {
  static propTypes = {
    parentAction: PropTypes.object,
    parentState: PropTypes.object,
  }

  InputButton = () => {
    const { parentState, parentAction } = this.props

    const value = parentState.value

    const { handleChangeValue, sendMessage } = parentAction

    this.onKeyPressHandler = ({ code }) => {
      if (code === "Enter") {
        sendMessage({ author: "User", message: value })
      }
    }

    return (
      <div>
        <StyledInput
          placeholder={"Введите сообщение"}
          onChange={(event) => handleChangeValue(event)}
          onKeyPress={this.onKeyPressHandler}
          value={value}
          fullWidth={true}
          endAdornment={
            <InputAdornment position={"end"}>
              {value && (
                <Send
                  className={styles.icon}
                  type={"button"}
                  onClick={(message = { author: "User", message: value }) =>
                    sendMessage(message)
                  }
                  fontSize={"small"}
                />
              )}
            </InputAdornment>
          }
        />
      </div>
    )
  }

  render() {
    const { parentState } = this.props
    const messagesList = parentState.messagesList

    return (
      <div className={styles.messagesListBox}>
        <ul className={styles.messagesList}>
          {messagesList.map((message, index) => (
            <Message messages={message} key={index} />
          ))}
        </ul>
        <this.InputButton />
      </div>
    )
  }
}*/
