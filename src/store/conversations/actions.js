import {
  RESET_VALUE_CONVERSATIONS,
  CHANGE_VALUE_CONVERSATIONS,
  ADD_ROOM_CONVERSATIONS,
} from "@store/conversations/type"

export const resetValueConversations = (params) => {
  return { type: RESET_VALUE_CONVERSATIONS, roomId: params.roomId }
}

export const changeValueConversations = (params, value) => {
  return { type: CHANGE_VALUE_CONVERSATIONS, roomId: params.roomId, value }
}

export const addRoomConversations = () => {
  return { type: ADD_ROOM_CONVERSATIONS }
}
