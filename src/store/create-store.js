import { request } from "@app/api"
import { logger, robotResponse } from "@store/middleware"
import { persistStore, persistReducer } from "redux-persist"
import storage from "redux-persist/lib/storage"
import thunk from "redux-thunk"
import { createStore, combineReducers, applyMiddleware, compose } from "redux"
import { conversationsReducer } from "./conversations"
import { gistsReducer } from "./gists"
import { messagesReducer } from "./messages"
import { profileReducer } from "./profile"

const persistReducers = persistReducer(
  {
    key: "root",
    storage,
    blacklist: ["gistsReducer"],
  },
  combineReducers({
    conversationsReducer,
    messagesReducer,
    gistsReducer,
    profileReducer,
  }),
)

export const store = createStore(
  persistReducers,
  compose(
    applyMiddleware(thunk.withExtraArgument(request), logger, robotResponse),
    window.__REDUX_DEVTOOLS_EXTENSION__
      ? window.__REDUX_DEVTOOLS_EXTENSION__()
      : (args) => args,
  ),
)

export const persistor = persistStore(store)
