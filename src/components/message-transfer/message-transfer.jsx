import React from "react"

export class MessageTransfer extends React.Component {
  state = {
    conversations: [
      { title: "room1", value: "room1 test" },
      { title: "room2", value: "room2 test" },
    ],
    messagesList: {
      room1: [{ author: "User", message: "Привет !", date: new Date() }],
      room2: [{ author: "User", message: "Привет room2!", date: new Date() }],
    },
  }

  handleChangeValue = (event) => {
    const { match } = this.props
    const { params } = match // :roomId - передаем в Route

    const {
      target: { value },
    } = event // ивент инпута

    this.setState({
      conversations: this.conversations.map((conversation) => {
        if (params.roomId === conversation.title) {
          return { ...conversation, value }
        }

        return conversation
      }),
    })
  }

  sendMessage = ({ author, message }) => {
    if (!message) {
      return
    }

    const { messagesList } = this.state
    const { match } = this.props
    const { params } = match // :roomId - передаем в Route

    const newMessage = { author, message }

    this.setState({
      messagesList: {
        ...messagesList,
        [params.roomId]: [...(messagesList[params.roomId] || []), newMessage],
      },
    })
  }

  componentDidUpdate() {
    // @TODO пренести ответ бота
  }

  render() {
    const { children, match } = this.props
    const { params } = match

    const { conversations, messagesList } = this.state

    const state = {
      conversations, // их будет использовать ChatList[]
      messagesList: messagesList[params.roomId] || [], // roomId это id текущей комнаты,=
      value:
        conversations.find(
          (conversation) => conversation.title === params.roomId,
        )?.value || "",
    }

    const actions = {
      sendMessage: this.sendMessage,
      handleChangeValue: this.handleChangeValue,
    }

    // патерн render-prop
    return children([state, actions])
  }
}
