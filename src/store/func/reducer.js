import { ADD_FUNC } from "@store/func/type"

const initialState = {}

export function funcReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_FUNC:
      return { ...state, [action.nameFunc]: action.func }

    default:
      return state
  }
}
