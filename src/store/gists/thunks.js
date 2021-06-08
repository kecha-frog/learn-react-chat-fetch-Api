import {
  getGistsFailure,
  getGistsRequest,
  getGistsSuccess,
} from "@store/gists/action"

const API_URL_PUBLIC = "https://api.github.com/gists/public?page20&per_page=5"
const API_URL_SEARCH_GIST = (name) =>
  `https://api.github.com/users/${name}/gists`

export const getAllGists = () => async (dispatch) => {
  dispatch(getGistsRequest())

  try {
    const res = await fetch(API_URL_PUBLIC)

    if (!res.ok) {
      throw new Error(`Request failed with status ${res.status}`)
    }
    const result = await res.json()

    dispatch(getGistsSuccess(result))
  } catch (err) {
    dispatch(getGistsFailure(err.message))
  }
}

export const getAllGistsByUserName = (value, ref) => async (dispatch) => {
  if (value !== "") {
    dispatch(getGistsRequest())

    const isCurrentQuery = value === ref

    try {
      const res = await fetch(API_URL_SEARCH_GIST(value))
      const result = await res.json()

      console.log(value)
      console.log(ref)

      if (res.ok && isCurrentQuery) {
        if (result.length !== 0) {
          dispatch(getGistsSuccess(result))
        } else {
          dispatch(getGistsSuccess([{ description: "У юзера нет гистов!" }]))
        }
      } else {
        dispatch(getGistsSuccess([{ description: "Такого юзера нет!" }]))
      }
    } catch (err) {
      dispatch(getGistsFailure(err.message))
    }
  }
}

/*export const getAllGistsByUserName = (value) => async (dispatch) => {
  if (value !== "") {
    dispatch(getGistsRequest())
    try {
      const res = await fetch(API_URL_SEARCH_GIST(value))

      if (!res.ok) {
        throw new Error(`Request failed with status ${res.status}`)
      }

      const result = await res.json()
      dispatch(getGistsSuccess(result))
    } catch (err) {
      dispatch(getGistsFailure(err.message))
    }
  }
}*/
