import {
  RESET_VALUE_CONVERSATIONS,
  CHANGE_VALUE_CONVERSATIONS,
  ADD_ROOM_CONVERSATIONS,
} from "@store/conversations/type"

const initialState = [
  { title: "room1", value: "" },
  { title: "room2", value: "" },
]

const createReducer = (initialState, handlers) => {
  return function reducer(state = initialState, action) {
    if (handlers.hasOwnProperty(action.type)) {
      return handlers[action.type](state, action)
    }

    return state
  }
}

export const conversationsReducer = createReducer(initialState, {
  [RESET_VALUE_CONVERSATIONS]: (state, action) =>
    state.map((conversation) => {
      if (action.roomId === conversation.title) {
        return { ...conversation, value: "" }
      }

      return conversation
    }),
  [CHANGE_VALUE_CONVERSATIONS]: (state, action) =>
    state.map((conversation) => {
      if (action.roomId === conversation.title) {
        return { ...conversation, value: action.value }
      }

      return conversation
    }),
  [ADD_ROOM_CONVERSATIONS]: (state) => [
    ...state,
    { title: `room${++state.length}`, value: "" },
  ],
})

/*
export function conversationsReducer(state = initialState, action) {
  switch (action.type) {
    case RESET_VALUE_CONVERSATIONS:
      return state.map((conversation) => {
        if (action.roomId === conversation.title) {
          return { ...conversation, value: "" }
        }

        return conversation
      })
    case CHANGE_VALUE_CONVERSATIONS:
      return state.map((conversation) => {
        if (action.roomId === conversation.title) {
          return { ...conversation, value: action.value }
        }

        return conversation
      })
    case ADD_ROOM_CONVERSATIONS:
      return [...state, { title: `room${++state.length}`, value: "" }]
    default:
      return state
  }
}
*/
