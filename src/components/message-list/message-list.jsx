import { Message } from "@components"
import { Input, InputAdornment, withStyles } from "@material-ui/core"
import { Send } from "@material-ui/icons"
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

export class MessageList extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      messagesList: [
        {
          author: "User2112",
          message: "Вы кто ?",
        },
        {
          author: "Robot",
          message: "Я робот",
        },
      ],
      value: "",
    }
    this.test = createRef() //TODO УБРАТЬ
  }

  sendMessage = (author, message) => {
    const { messagesList } = this.state

    if (author === "Robot") {
      this.setState({
        messagesList: [
          ...messagesList,
          {
            author: author,
            message: message,
          },
        ],
      })
    } else {
      console.log("!!")
      this.setState({
        messagesList: [
          ...messagesList,
          {
            author: author,
            message: message,
          },
        ],
        value: "",
      })
    }
  }

  componentDidUpdate = (props, state) => {
    const { messagesList } = this.state
    const lastMessageUser = messagesList[messagesList.length - 1].author

    if (lastMessageUser !== "Robot" && state.messagesList !== messagesList) {
      setTimeout(
        () =>
          this.sendMessage(
            "Robot",
            `Здравствуйте ${lastMessageUser}!  Я робот,  не отвечайте мне.`,
          ),
        500,
      )
    }
  }

  addText = () => {
    const { value } = this.state

    if (!/^\s*$/.test(value)) {
      this.sendMessage("User2112", value)
    }
  }

  onKeyPressHandler = ({ code }) => {
    if (code === "Enter") {
      this.addText()
    }
  }

  InputButton = () => {
    const { value } = this.state
    return (
      <div>
        <StyledInput
          placeholder={"Введите сообщение"}
          onChange={this.handleNameChange}
          onKeyPress={this.onKeyPressHandler}
          value={value}
          fullWidth={true}
          endAdornment={
            <InputAdornment position={"end"}>
              {value && (
                <Send
                  className={styles.icon}
                  type={"button"}
                  onClick={this.addText}
                  fontSize={"small"}
                />
              )}
            </InputAdornment>
          }
        />
      </div>
    )
  }

  handleNameChange = (event) => {
    this.setState({ value: event.target.value })
  }

  render() {
    const { messagesList } = this.state
    return (
      <div className={styles.messagesListBox}>
        <div className={styles.messagesList}>
          {messagesList.map((message, index) => (
            <Message message={message} key={index} />
          ))}
        </div>
        <this.InputButton />
      </div>
    )
  }
}
