import { ADD_PARAMS } from "@store/route/type"

export const addParams = (params) => {
  return { type: ADD_PARAMS, params }
}
