import { ADD_FUNC } from "@store/func/type"

const initialState = {}

const createReducer = (initialState, handlers) => {
  return function reducer(state = initialState, action) {
    if (handlers.hasOwnProperty(action.type)) {
      return handlers[action.type](state, action)
    }

    return state
  }
}

export const funcReducer = createReducer(initialState, {
  [ADD_FUNC]: (state, action) => ({ ...state, [action.nameFunc]: action.func }),
})

/*
export function funcReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_FUNC:
      return { ...state, [action.nameFunc]: action.func }

    default:
      return state
  }
}
*/
