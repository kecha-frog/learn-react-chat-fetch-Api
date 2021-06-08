import {
  GET_GISTS_FAILURE,
  GET_GISTS_CHANGE_VALUE,
  GET_GISTS_START,
  GET_GISTS_SUCCESS,
} from "@store/gists/type"

export const initialState = {
  gists: [],
  err: null,
  pending: false,
  value: "",
}

export const gistsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_GISTS_START:
      return {
        ...state,
        pending: true,
      }
    case GET_GISTS_SUCCESS:
      return {
        ...state,
        gists: action.payload,
        pending: false,
      }
    case GET_GISTS_FAILURE:
      return {
        ...state,
        pending: false,
        error: action.payload,
      }
    case GET_GISTS_CHANGE_VALUE:
      return {
        ...state,
        value: action.payload,
      }
    default:
      return state
  }
}
