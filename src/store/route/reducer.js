import { ADD_PARAMS } from "@store/route/type"

const initialState = {}

export function routeReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_PARAMS:
      return (state = action.params)

    default:
      return state
  }
}
