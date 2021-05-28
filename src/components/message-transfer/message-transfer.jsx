import PropTypes from "prop-types"
import React from "react"

export const MessageTransfer = (props) => {
  const [conversations, SetConversations] = React.useState([
    { title: "room1", value: "" },
    { title: "room2", value: "" },
  ])

  const [messagesList, SetMessagesList] = React.useState({
    room1: [
      { author: "User", message: "Привет !" },
      { author: "Robot", message: "Ау !" },
    ],
    room2: [{ author: "User", message: "Привет room2!" }],
  })

  const { children, match } = props
  const { params } = match

  const sendMessage = ({ author, message }) => {
    const newMessage = { author, message }

    if (!/^\s*$/.test(message) && author !== "Robot") {
      SetConversations(
        conversations.map((conversation) => {
          if (params.roomId === conversation.title) {
            return { ...conversation, value: "" }
          }

          return conversation
        }),
      )

      SetMessagesList({
        ...messagesList,
        [params.roomId]: [...(messagesList[params.roomId] || []), newMessage],
      })
    } else if (!/^\s*$/.test(message)) {
      SetMessagesList({
        ...messagesList,
        [params.roomId]: [...(messagesList[params.roomId] || []), newMessage],
      })
    }
  }

  React.useEffect(() => {
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
            sendMessage({
              author: "Robot",
              message: `Здравствуйте ${lastMessageAuthor}!  Я робот,  не отвечайте мне.`,
            }),
          500,
        )
      }
    }
  })

  const handleChangeValue = (event) => {
    const {
      target: { value },
    } = event

    SetConversations(
      conversations.map((conversation) => {
        if (params.roomId === conversation.title) {
          return { ...conversation, value }
        }

        return conversation
      }),
    )
  }

  const addRoom = () => {
    SetConversations([
      ...conversations,
      { title: `room${++conversations.length}`, value: "" },
    ])
    SetMessagesList({
      ...messagesList,
      [`room${conversations.length}`]: [
        { author: "User", message: `Привет room${conversations.length}!` },
      ],
    })
  }

  const state = {
    conversations,
    messagesList: messagesList[params.roomId] || [], // roomId это id текущей комнаты,=
    value:
      conversations.find((conversation) => conversation.title === params.roomId)
        ?.value || "",
  }

  const actions = {
    sendMessage,
    handleChangeValue,
    addRoom,
  }

  // патерн render-prop
  return children(state, actions, params)
}

MessageTransfer.propTypes = {
  match: PropTypes.object,
  children: PropTypes.func,
}

/*export class MessageTransfer extends React.Component {
  state = {
    conversations: [
      { title: "room1", value: "" },
      { title: "room2", value: "" },
    ],
    messagesList: {
      room1: [
        { author: "User", message: "Привет !" },
        { author: "Robot", message: "Ау !" },
      ],
      room2: [{ author: "User", message: "Привет room2!" }],
    },
  }

  static propTypes = {
    match: PropTypes.object,
    children: PropTypes.func,
  }

  sendMessage = ({ author, message }) => {
    const { messagesList, conversations } = this.state
    const { match } = this.props
    const { params } = match

    const newMessage = { author, message }

    if (!/^\s*$/.test(message) && author !== "Robot") {
      this.setState({
        conversations: conversations.map((conversation) => {
          if (params.roomId === conversation.title) {
            return { ...conversation, value: "" }
          }

          return conversation
        }),
        messagesList: {
          ...messagesList,
          [params.roomId]: [...(messagesList[params.roomId] || []), newMessage],
        },
      })
    } else if (!/^\s*$/.test(message)) {
      this.setState({
        messagesList: {
          ...messagesList,
          [params.roomId]: [...(messagesList[params.roomId] || []), newMessage],
        },
      })
    }
  }

  handleChangeValue = (event) => {
    const { match } = this.props
    const { params } = match // :roomId - передаем в Route
    const { conversations } = this.state

    const {
      target: { value },
    } = event

    this.setState({
      conversations: conversations.map((conversation) => {
        if (params.roomId === conversation.title) {
          return { ...conversation, value }
        }

        return conversation
      }),
    })
  }
  componentDidUpdate = (props, state) => {
    const { messagesList } = this.state
    const { match } = this.props
    const { params } = match // :roomId - передаем в Route

    if (messagesList[params.roomId] !== undefined) {
      const lastMessageAuthor =
        messagesList[params.roomId][messagesList[params.roomId].length - 1]
          .author

      if (
        lastMessageAuthor !== "Robot" &&
        state.messagesList[params.roomId] !== messagesList[params.roomId]
      ) {
        setTimeout(
          () =>
            this.sendMessage({
              author: "Robot",
              message: `Здравствуйте ${lastMessageAuthor}!  Я робот,  не отвечайте мне.`,
            }),
          500,
        )
      }
    }
  }

  addRoom = () => {
    const { messagesList, conversations } = this.state

    this.setState({
      conversations: [
        ...conversations,
        { title: `room${++conversations.length}`, value: "" },
      ],
      messagesList: {
        ...messagesList,
        [`room${conversations.length}`]: [
          { author: "User", message: `Привет room${conversations.length}!` },
        ],
      },
    })
  }

  render() {
    const { children, match } = this.props
    const { params } = match

    const { conversations, messagesList } = this.state

    const state = {
      conversations,
      messagesList: messagesList[params.roomId] || [], // roomId это id текущей комнаты,=
      value:
        conversations.find(
          (conversation) => conversation.title === params.roomId,
        )?.value || "",
    }

    const actions = {
      sendMessage: this.sendMessage,
      handleChangeValue: this.handleChangeValue,
      addRoom: this.addRoom,
    }

    // патерн render-prop
    return children(state, actions, params)
  }
}*/
