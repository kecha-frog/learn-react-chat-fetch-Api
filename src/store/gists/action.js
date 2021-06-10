import {
  GET_GISTS_CHANGE_VALUE,
  GET_GISTS_FAILURE,
  GET_GISTS_START,
  GET_GISTS_SUCCESS,
} from "@store/gists/type"

export const getGistsRequest = () => ({
  type: GET_GISTS_START,
})

export const getGistsSuccess = (data) => ({
  type: GET_GISTS_SUCCESS,
  payload: data,
})

export const getGistsFailure = (error) => ({
  type: GET_GISTS_FAILURE,
  payload: error,
})

export const getGistsSendValue = (value) => ({
  type: GET_GISTS_CHANGE_VALUE,
  payload: value,
})
