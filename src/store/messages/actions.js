import { ADD_ROOM_MESSAGES, SEND_MESSAGES } from "@store/messages/type"

export const sendMessages = (roomId, newMessage) => {
  return { type: SEND_MESSAGES, roomId, newMessage }
}

export const addRoomMessages = (nameRoom) => {
  return { type: ADD_ROOM_MESSAGES, nameRoom }
}
