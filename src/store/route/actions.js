import { ROUTE_PARAMS } from "@store/route/type"

export const routeParams = (params) => {
  return { type: ROUTE_PARAMS, params }
}
