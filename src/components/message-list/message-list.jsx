import { Message } from "@components"
import { Input, InputAdornment, withStyles } from "@material-ui/core"
import { Send } from "@material-ui/icons"
import PropTypes from "prop-types"
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

export class MessageList extends React.Component {
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
        <div className={styles.messagesList}>
          {messagesList.map((message, index) => (
            <Message messages={message} key={index} />
          ))}
        </div>
        <this.InputButton />
      </div>
    )
  }
}
