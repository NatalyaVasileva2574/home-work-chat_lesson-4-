import { createStore, combineReducers } from "redux";
import { counterReducer } from "./counter";
import { profileReducer } from "./profile";
import { conversationsReduser } from "./conversations";
import { messagesReducer } from "./messages";

export const store = createStore(
  combineReducers({
    counter: counterReducer,
    profile: profileReducer,
    conversations: conversationsReduser,
    messages: messagesReducer,
  }));