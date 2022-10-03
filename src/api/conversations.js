import { get, child, ref, set, remove } from "firebase/database";
import { database } from "./firebase";

export const getConversationsApi = () => {
  return get(child(ref(database, "conversations")))
};

export const createConversationsApi = (conversation) => {
  return set(
    child(ref(database), `conversations/${conversation}`),
    conversation
  );
};

export const removeConversationsApi = (conversation) => {
  return remove(child(ref(database), `conversations/${conversation}`));
};

