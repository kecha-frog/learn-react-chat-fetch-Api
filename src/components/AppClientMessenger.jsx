import { MessageField } from "@components/MessageField"
import React, { createRef } from "react"

export class AppClientMessenger extends React.Component {
  constructor(props) {
    super(props)
    this.array = props.messagesList
    this.state = {
      messagesList: this.array,
    }
    this.inputValue = createRef()
  }

  addText = () => {
    if (!/^\s*$/.test(this.inputValue.current.value)) {
      this.setState({
        messagesList: [
          ...this.state.messagesList,
          {
            user: "User2112",
            text: this.inputValue.current.value,
          },
        ],
      })
    }
    console.log(this.array)
  }

  componentDidUpdate() {
    if (
      this.state.messagesList[this.state.messagesList.length - 1].user !==
      "Robot"
    ) {
      setTimeout(
        () =>
          this.setState({
            messagesList: [
              ...this.state.messagesList,
              {
                user: "Robot",
                text: `Здравствуйте ${
                  this.state.messagesList[this.state.messagesList.length - 1]
                    .user
                }!  Я робот,  не отвечайте мне.`,
              },
            ],
          }),
        1500,
      )
      setTimeout(() => console.log(this.array), 5000)
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
