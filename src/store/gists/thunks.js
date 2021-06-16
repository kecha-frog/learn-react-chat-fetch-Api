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
  } catch (error) {
    dispatch(getGistsFailure(error.message))
  }
}

export const getAllGistsByUserName =
  (value, ref) => async (dispatch, _, request) => {
    if (value !== "") {
      dispatch(getGistsRequest())

      const isCurrentQuery = value === ref

      try {
        const res = await request.get(API_URL_SEARCH_GIST(value))

        if (res.status && isCurrentQuery && res.data.length !== 0) {
          dispatch(getGistsSuccess(res.data))
        } else if (res.data.length === 0) {
          dispatch(getGistsFailure("У юзера нет гистов!"))
        }
      } catch (error) {
        if (error.data.message === "Not Found") {
          dispatch(getGistsFailure("Такого юзера нет"))
        } else {
          dispatch(getGistsFailure(error.data.message))
        }
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
    } catch (error) {
      dispatch(getGistsFailure(error.message))
    }
  }
}*/
