// import { createStore, combineReducers, applyMiddleware, compose } from "redux";
// import thunk from "redux-thunk";
// import { persistStore, persistReducer } from "redux-persist";
// import storage from "redux-persist/lib/storage";
// import { getPublicApi, searchGistsByNameApi } from "../api/gists";
// import {
//   createConversationsApi,
//   getConversationsApi,
//   removeConversationsApi,
// } from "../api/conversations";
// import {
//   createMessagesApi,
//   getMessagesApi,
// } from "../api/messages";
// import { counterReducer } from "./counter";
// import { profileReducer } from "./profile";
// import { conversationsReduser } from "./conversations";
// import { messagesReducer } from "./messages";
// import { gistsReducer } from "./gists";
// import { logger, timeScheduler, botMessage } from "./middlewares";

// // const foo = async () => {
// //   const snapshot = await getConversationsApi();

// //   const conversations = []

// //   snapshot.forEach((snap) => {
// //     conversations.push(snap.val())
// //   })

// //   console.log("conversations", conversations)
// // }

// // foo();

// // setTimeout(() => {
// //   createConversationsApi("room1");
// //   createConversationsApi("room2");
// //   createConversationsApi("room3");
// //   console.log("createConversationsApi");
// // }, 0);


// const api = {
//   getPublicApi,
//   searchGistsByNameApi,
//   createConversationsApi,
//   getConversationsApi,
//   removeConversationsApi,
//   createMessagesApi,
//   getMessagesApi,
// };

// setTimeout(() => {
//   createMessagesApi({ author: 'User', message: 'test', date: new Date(), id: 1 }, "room1")
//   createMessagesApi({ author: 'User', message: 'test2', date: new Date(), id: 2 }, "room2")
//   createMessagesApi({ author: 'User', message: 'test3', date: new Date(), id: 3 }, "room2")
// }, 5000)

// const persistConfig = {
//   key: 'gbchat',
//   storage,
//   whitelist: ["profile"],
// }

// const persistedReduser = persistReducer(
//   persistConfig,

//   combineReducers({
//     counter: counterReducer,
//     profile: profileReducer,
//     conversations: conversationsReduser,
//     messages: messagesReducer,
//     gists: gistsReducer,
//   }),

// );


// export const store = createStore(
//   persistedReduser,
//   compose(
//     applyMiddleware(
//       logger,
//       timeScheduler,
//       botMessage,
//       thunk.withExtraArgument(api),
//     ),
//     window.__REDUX_DEVTOOLS_EXTENSION__
//       ? window.__REDUX_DEVTOOLS_EXTENSION__()
//       : (args) => args
//   )
// );

// export const persistor = persistStore(store);

import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // defaults to localStorage for web
import { getPublicApi, searchGistsByNameApi } from "../api/gists";
import {
  // createConversationApi,
  getConversationsApi,
  // removeConversationApi,
} from "../api/conversations";
import { getMessagesApi, createMessageApi } from "../api/messages";
import { counterReducer } from "./counter";
import { profileReducer } from "./profile";
import { conversationsReducer } from "./conversations";
import { messagesReducer } from "./messages";
import { gistsReducer } from "./gists";
import { logger, timeScheduler, botMessage } from "./middlewares";

const api = {
  getPublicApi,
  searchGistsByNameApi,
  // createConversationApi,
  getConversationsApi,
  // removeConversationApi,
  getMessagesApi,
  // createMessageApi,
};

const persistConfig = {
  key: "gbchat",
  storage,
  whitelist: ["profile"],
};

const persistedReducer = persistReducer(
  persistConfig,
  combineReducers({
    counter: counterReducer,
    profile: profileReducer,
    conversations: conversationsReducer,
    messages: messagesReducer,
    gists: gistsReducer,
  })
);

export const store = createStore(
  persistedReducer,
  compose(
    applyMiddleware(
      logger,
      timeScheduler,
      botMessage,
      thunk.withExtraArgument(api)
    ),
    window.__REDUX_DEVTOOLS_EXTENSION__
      ? window.__REDUX_DEVTOOLS_EXTENSION__()
      : (args) => args
  )
);

export const persistor = persistStore(store);