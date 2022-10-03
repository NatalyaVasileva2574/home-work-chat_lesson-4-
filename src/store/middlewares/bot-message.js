import { sendMessage, SEND_MESSAGE } from "../messages";

export const botMessage = (store) => (next) => (action) => {

  // console.log("bot", r, r2);

  // const result = next(action);
  // console.log("result", result);

  if (
    action.type === SEND_MESSAGE &&
    action.payload.message.author === "User"
  ) {
    setTimeout(() => {
      store.dispatch(
        sendMessage(action.payload.roomId, {
          autor: "Bot",
          message: "hello from middleware",
        })
      );
    }, 500)
  }

  // return result;
  return next(action);
};