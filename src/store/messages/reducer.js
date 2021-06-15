import { SEND_MESSAGES } from "@store/messages/type"

const initialState = {
  aaJa: [
    { author: "Ke4a", message: "Привет !" },
    { author: "Robot", message: "Ау !" },
  ],
  bF12: [{ author: "Ke4a", message: "Привет room2!" }],
}

const createReducer = (initialState, handlers) => {
  return function reducer(state = initialState, action) {
    if (handlers.hasOwnProperty(action.type)) {
      return handlers[action.type](state, action)
    }

    return state
  }
}

export const messagesReducer = createReducer(initialState, {
  [SEND_MESSAGES]: (state, action) => ({
    ...state,
    [action.payload.roomId]: [
      ...(state[action.payload.roomId] || []),
      action.payload.newMessage,
    ],
  }),
})

/*export function messagesReducer(state = initialState, action) {
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
}*/
