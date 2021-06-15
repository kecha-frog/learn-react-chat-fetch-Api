import {
  INPUT_PROFILE,
  TOGGLE_PROFILE_CHECKBOX,
  UPDATE_USER_NAME,
} from "@store/profile/types"

const initialState = {
  value: "",
  isToggle: false,
  name: "Ke4a",
}

const createReducer = (initialState, handlers) => {
  return function reducer(state = initialState, action) {
    if (handlers.hasOwnProperty(action.type)) {
      return handlers[action.type](state, action)
    }

    return state
  }
}

export const profileReducer = createReducer(initialState, {
  [INPUT_PROFILE]: (state, actions) => ({ ...state, value: actions.payload }),
  [TOGGLE_PROFILE_CHECKBOX]: (state) => ({
    ...state,
    isToggle: !state.isToggle,
  }),
  [UPDATE_USER_NAME]: (state) => ({ ...state, name: state.value }),
})
