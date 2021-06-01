import { ROUTE_PARAMS } from "@store/route/type"

const initialState = {}

const createReducer = (initialState, handlers) => {
  return function reducer(state = initialState, action) {
    if (handlers.hasOwnProperty(action.type)) {
      return handlers[action.type](state, action)
    }

    return state
  }
}

export const routeReducer = createReducer(initialState, {
  [ROUTE_PARAMS]: (state, action) => (state = action.params),
})

/*export function routeReducer(state = initialState, action) {
  switch (action.type) {
    case ROUTE_PARAMS:
      return (state = action.params)

    default:
      return state
  }
}*/
