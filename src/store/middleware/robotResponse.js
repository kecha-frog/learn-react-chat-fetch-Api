import { sendMessages } from "@store"
import { SEND_MESSAGES } from "@store/messages/type"

let setTimeoutOn = true

export const robotResponse = (store) => (next) => (action) => {
  if (
    action.type === SEND_MESSAGES &&
    action.payload.newMessage.author !== "Robot" &&
    setTimeoutOn
  ) {
    setTimeoutOn = !setTimeoutOn
    setTimeout(() => {
      store.dispatch(
        sendMessages(action.payload.roomId, {
          author: "Robot",
          message: `Здравствуйте ${action.payload.newMessage.author}!  Я робот комнаты #${action.payload.roomId},  не отвечайте мне.`,
        }),
      )
      setTimeoutOn = !setTimeoutOn
    }, 500)
  }
  return next(action)
}
