// // import { get, child, ref, set, remove, push } from "firebase/database";
// import { get, child, ref,  push } from "firebase/database";
// import { database } from "./firebase";

// export const getMessagesApi = () => {
//   return get(child(ref(database, "messages")))
// };

// export const createMessegeApi = (message, roomId) => {
//   return push(
//     child(ref(database), `messages/${roomId}`), message);
// };

// export const removeConversationsApi = (conversation) => {
//   return remove(child(ref(database), `conversations/${conversation}`));
// };

// const normalizeData =async()=>{
// const messages ={}

//   const snapshot= await getMessagesApi()

//   snapshot.forEach((snap) => {
//     messages[snap.key] =Object.values(snap.val())
//   });

//   console.log("messages", messages)
// }

// // foo()

// import { get, child, ref, push, remove } from "firebase/database";
import { get, child, ref, push } from "firebase/database";
import { nanoid } from "nanoid";
import { database } from "./firebase";

export const getMessagesApi = () => {
  return get(child(ref(database), "messages"));
};

export const createMessageApi = async (message, roomId) => {
  const newMessage = { ...message, id: nanoid(), date: String(new Date()) };

  await push(child(ref(database), `messages/${roomId}`), newMessage);

  return newMessage;
};


// export const removeMessageApi=(roomId, messageId)=>{
// return remove(child(ref(database), `conversations/${conversation}`))
// }