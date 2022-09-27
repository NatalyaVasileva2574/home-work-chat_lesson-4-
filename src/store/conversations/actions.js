import { CREATE_CONVERSATION, DELETE_CONVERSATION } from "./types";

// // export const increment = () => {
// //   return { type: INCREMENT };
// // }
// // export const decrement = () => {
// //   return { type: DECREMENT };
// // }

export const createConversation = (conversation) => ({
  type: CREATE_CONVERSATION,
  payload: conversation,
});

export const deleteConversation = (conversation) => ({
  type: DELETE_CONVERSATION,
  payload: conversation,
});