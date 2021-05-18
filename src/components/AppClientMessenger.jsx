import { MessageField } from "@components/MessageField"
import React, { createRef } from "react"

export class AppClientMessenger extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      messagesList: props.messagesList,
    }
    this.inputValue = createRef()
  }

  updateMessage = () => {
    setTimeout(
      () => this.setState({ messagesList: this.props.messagesList }),
      500,
    )
  }

  addText = () => {
    if (!/^\s*$/.test(this.inputValue.current.value)) {
      this.props.messagesList.push({
        user: "User2112",
        text: this.inputValue.current.value,
      })
      this.updateMessage()
    }
  }

  componentDidUpdate() {
    if (
      this.state.messagesList[this.state.messagesList.length - 1].user !==
      "Robot"
    ) {
      this.props.messagesList.push({
        user: "Robot",
        text: `Здравствуйте ${
          this.state.messagesList[this.state.messagesList.length - 1].user
        }!  Я робот,  не отвечайте мне.`,
      })
      this.updateMessage()
    }
  }

  InputButton = () => {
    return (
      <div>
        <input
          className={"client-messenger__input"}
          ref={this.inputValue}
          type="text"
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
        <MessageField messagesList={this.state.messagesList} />
        <this.InputButton />
      </>
    )
  }
}
