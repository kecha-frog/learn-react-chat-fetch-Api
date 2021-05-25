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
          user: "User2112",
          text: "Вы кто ?",
        },
        {
          user: "Robot",
          text: "Я робот",
        },
      ],
      userInput: "",
    }
    this.test = createRef()
  }

  sendMessage = (author, message) => {
    const { messagesList } = this.state

    this.setState({
      messagesList: [
        ...messagesList,
        {
          user: author,
          text: message,
        },
      ],
    })
  }

  componentDidUpdate = (props, state) => {
    const { messagesList } = this.state
    const lastMessageUser = messagesList[messagesList.length - 1].user

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
    const userInput = this.state.userInput

    if (!/^\s*$/.test(userInput)) {
      this.sendMessage("User2112", userInput)
      this.setState({ userInput: "" })
    }
  }

  onKeyPressHandler = ({ code }) => {
    if (code === "Enter") {
      this.addText()
    }
  }

  InputButton = () => {
    const userInput = this.state.userInput
    return (
      <div>
        <StyledInput
          placeholder={"Введите сообщение"}
          onChange={this.handleNameChange}
          onKeyPress={this.onKeyPressHandler}
          value={userInput}
          fullWidth={true}
          endAdornment={
            <InputAdornment position={"end"}>
              {userInput && (
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
    this.setState({ userInput: event.target.value })
  }

  render() {
    const messagesList = this.state.messagesList
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
