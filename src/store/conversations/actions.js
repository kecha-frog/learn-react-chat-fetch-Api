import {
  RESET_VALUE_CONVERSATIONS,
  CHANGE_VALUE_CONVERSATIONS,
  ADD_ROOM_CONVERSATIONS,
} from "@store/conversations/type"

export const resetValueConversations = (payload) => {
  return { type: RESET_VALUE_CONVERSATIONS, roomId: payload.roomId }
}

export const changeValueConversations = (payload) => {
  return {
    type: CHANGE_VALUE_CONVERSATIONS,
    roomId: payload.roomId,
    value: payload.value,
  }
}

export const addRoomConversations = (payload) => {
  return { type: ADD_ROOM_CONVERSATIONS, nameRoom: payload.nameRoom }
}
