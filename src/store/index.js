import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { getPublicApi } from "../api/gists";
import { counterReducer } from "./counter";
import { profileReducer } from "./profile";
import { conversationsReduser } from "./conversations";
import { messagesReducer } from "./messages";
import { gistsReducer } from "./gists";
import { logger, timeScheduler, botMessage } from "./middlewares";

const api = { getPublicApi };

const persistConfig = {
  key: 'gbchat',
  storage,
  whitelist: ["profile"],
}

const persistedReduser = persistReducer(
  persistConfig,

  combineReducers({
    counter: counterReducer,
    profile: profileReducer,
    conversations: conversationsReduser,
    messages: messagesReducer,
    gists: gistsReducer,
  }),

);


export const store = createStore(
  persistedReduser,
  compose(
    applyMiddleware(
      logger,
      timeScheduler,
      botMessage,
      thunk.withExtraArgument(api),
      ),
    window.__REDUX_DEVTOOLS_EXTENSION__
      ? window.__REDUX_DEVTOOLS_EXTENSION__()
      : (args) => args
  )
);

export const persistor = persistStore(store);