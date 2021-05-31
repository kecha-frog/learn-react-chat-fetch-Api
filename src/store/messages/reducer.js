import { SEND_MESSAGES, ADD_ROOM_MESSAGES } from "@store/messages/type"

const initialState = {
  room1: [
    { author: "User", message: "Привет !" },
    { author: "Robot", message: "Ау !" },
  ],
  room2: [{ author: "User", message: "Привет room2!" }],
}

export function messagesReducer(state = initialState, action) {
  switch (action.type) {
    case SEND_MESSAGES:
      return {
        ...state,
        [action.roomId]: [...(state[action.roomId] || []), action.newMessage],
      }
    case ADD_ROOM_MESSAGES:
      console.log()
      return {
        ...state,
        [`room${++Object.keys(state).length}`]: [
          {
            author: "User",
            message: `Привет room${++Object.keys(state).length}!`,
          },
        ],
      }
    default:
      return state
  }
}
