import { SEND_MESSAGES } from "@store/messages/type"

export const sendMessages = (roomId, newMessage) => {
  return {
    type: SEND_MESSAGES,
    payload: { roomId, newMessage },
  }
}
