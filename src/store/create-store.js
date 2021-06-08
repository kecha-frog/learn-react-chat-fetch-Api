import thunk from "redux-thunk"
import { createStore, combineReducers, applyMiddleware, compose } from "redux"
import { conversationsReducer } from "./conversations"
import { gistsReducer } from "./gists"
import { messagesReducer } from "./messages"

const reducers = combineReducers({
  conversationsReducer,
  messagesReducer,
  gistsReducer,
})

export const store = createStore(
  reducers,
  compose(
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ &&
      window.__REDUX_DEVTOOLS_EXTENSION__(),
  ),
)
