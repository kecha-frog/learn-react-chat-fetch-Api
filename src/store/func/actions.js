import { ADD_FUNC } from "@store/func/type"

export const addFunc = (nameFunc, func) => {
  return { type: ADD_FUNC, nameFunc, func }
}
