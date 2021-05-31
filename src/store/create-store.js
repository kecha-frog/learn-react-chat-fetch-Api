import { funcReducer } from "@store/func"
import { routeReducer } from "@store/route"
import { createStore, combineReducers } from "redux"
import { conversationsReducer } from "./conversations"
import { messagesReducer } from "./messages"

const reducers = combineReducers({
  conversationsReducer,
  messagesReducer,
  routeReducer,
  funcReducer,
})

export const store = createStore(reducers)
