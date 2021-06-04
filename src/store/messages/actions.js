import { SEND_MESSAGES } from "@store/messages/type"

export const sendMessages = (payload) => {
  return {
    type: SEND_MESSAGES,
    roomId: payload.roomId,
    newMessage: payload.newMessage,
  }
}
