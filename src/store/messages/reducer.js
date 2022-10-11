import { nanoid } from "nanoid";
import {
  SEND_MESSAGE,
  DELETE_MESSAGE,
  GET_MESSAGES_START,
  GET_MESSAGES_SUCCESS,
  GET_MESSAGES_ERROR
} from "./types";


export const initialState = {
  messages: {
    room1: [
      { author: 'User', message: 'test', date: new Date(), id: nanoid() },
      { author: 'Bot', message: 'test', date: new Date(), id: nanoid() },
    ],
  },
  // messages:{

  // }
  error: null,
  pending: false,
}

export const messagesReducer = (state = initialState, action ={}) => {
  switch (action.type) {
    case SEND_MESSAGE:
      return {
        ...state,
        messages: {
          ...state.messages,
          [action.payload.roomId]: [
            ...(state.messages[action.payload.roomId] ?? []),
            // { ...action.payload.message, id: nanoid(), data: new Date() },
            action.payload.message,
          ],
        },
      };

    case DELETE_MESSAGE:
      return {
        ...state,
        messages: {
          ...state.messages,
          [action.payload.roomId]: state.messages[action.payload.roomId].filter(
            message => message.id !== action.payload.messageId
          ),
        },
      };

    case GET_MESSAGES_START:
      return { ...state, pending: true, error: null };
    case GET_MESSAGES_SUCCESS:
      return { ...state, pending: false, messages: action.payload };
    case GET_MESSAGES_ERROR:
      return { ...state, pending: false, error: action.payload };

    default:
      return state;
  }
}