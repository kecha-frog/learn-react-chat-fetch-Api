import { ADD_ROOM_MESSAGES, SEND_MESSAGES } from "@store/messages/type"

export const sendMessages = (params, newMessage) => {
  return { type: SEND_MESSAGES, roomId: params.roomId, newMessage }
}

export const addRoomMessages = () => {
  return { type: ADD_ROOM_MESSAGES }
}
