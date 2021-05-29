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

      console.log(messagesList)
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
