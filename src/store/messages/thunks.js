import {
  sendMessage,
  getMessagesStart,
  getMessagesSuccess,
  getMessagesError,
} from "./actions";

export const sendMessageWithBot = (roomId, message) => (dispatch) => {
  dispatch(sendMessage(roomId, message));

  if (message.author === "User") {
    setTimeout(() => {
      dispatch(
        sendMessage(roomId, { author: "Bot", message: "hello from thunk" })
      )
    }, 1500)
  }
};

// const normalizeData = async () => {
//   const messages = {}

//   const snapshot = await getMessagesApi()

//   snapshot.forEach((snap) => {
//     messages[snap.key] = Object.values(snap.val())
//   });

//   console.log("messages", messages)
// };

export const getMessages = () => async (dispatch, _, api) => {
  const messages = {};

  try {
    dispatch(getMessagesStart())

    const snapshot = await api.getMessagesApi();


    snapshot.forEach((snap) => {
      messages[snap.key] = Object.values(snap.val())
    });

    dispatch(getMessagesSuccess(messages));
  } catch (e) {
    dispatch(getMessagesError(e))
  }
};

export const sendMessagesFb = (messages, roomId) => async (dispatch, _, api) => {
  // const messages = {};

  try {
    // dispatch(getMessagesStart())

    const newMessage = await api.createMessageApi(messages, roomId);

    dispatch(sendMessageWithBot(roomId, newMessage));

    // snapshot.forEach((snap) => {
    //   messages[snap.key] = Object.values(snap.val())
    // });

    // dispatch(getMessagesSuccess(messages));
  } catch (e) {
    // dispatch(getMessagesError(e))
  }
};