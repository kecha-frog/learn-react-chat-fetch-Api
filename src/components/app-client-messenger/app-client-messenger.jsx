import { MessageList } from "@components"
import React from "react"

export class AppClientMessenger extends React.Component {
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
  }

  sendMessage = (author, message) => {
    const { messagesList } = this.state

    if (author === "User2112") {
      this.setState({
        messagesList: [
          ...messagesList,
          {
            user: author,
            text: message,
          },
        ],
        userInput: "",
      })
    } else {
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
  }

  handleNameChange = (event) => {
    this.setState({ userInput: event.target.value })
  }

  addText = () => {
    const inputValue = this.state.userInput

    if (!/^\s*$/.test(inputValue)) {
      this.sendMessage("User2112", inputValue)
      this.setState({ userInput: "" })
    }
  }

  onKeyPressHandler = (event) => {
    if (event.key === "Enter") {
      this.addText()
    }
  }

  componentDidUpdate(props, state) {
    const { messagesList } = this.state
    const lastMessageUser = messagesList[messagesList.length - 1].user

    if (lastMessageUser !== "Robot" && state.messagesList !== messagesList) {
      setTimeout(
        () =>
          this.sendMessage(
            "Robot",
            `Здравствуйте ${lastMessageUser}!  Я робот,  не отвечайте мне.`,
          ),
        1500,
      )
    }
  }

  InputButton = () => {
    return (
      <div>
        <input
          className={"client-messenger__input"}
          onChange={this.handleNameChange}
          onKeyPress={this.onKeyPressHandler}
          value={this.state.userInput}
        />
        <button
          className={"client-messenger__button"}
          type={"button"}
          onClick={this.addText}
        >
          Отправить
        </button>
      </div>
    )
  }

  render() {
    return (
      <>
        <MessageList messagesList={this.state.messagesList} />
        <this.InputButton />
      </>
    )
  }
}
