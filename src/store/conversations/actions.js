import {
  RESET_VALUE_CONVERSATIONS,
  CHANGE_VALUE_CONVERSATIONS,
  ADD_ROOM_CONVERSATIONS,
} from "@store/conversations/type"

export const resetValueConversations = (roomId) => {
  return { type: RESET_VALUE_CONVERSATIONS, payload: roomId }
}

export const changeValueConversations = (roomId, value) => {
  return {
    type: CHANGE_VALUE_CONVERSATIONS,
    payload: { roomId, value },
  }
}

export const addRoomConversations = (nameRoom) => {
  return { type: ADD_ROOM_CONVERSATIONS, payload: nameRoom }
}
