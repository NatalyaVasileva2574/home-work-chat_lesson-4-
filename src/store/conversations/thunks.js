import {
  getConversationsStart,
  getConversationsSuccess,
  getConversationsError,
  createConversationsStart,
  createConversationsSuccess,
  createConversationsError,
  removeConversationsStart,
  removeConversationsSuccess,
  removeConversationsError
} from "./actions";

export const getConversations = () => async (dispatch, _, api) => {
 const conversations = [];

  try {
    dispatch(getConversationsStart())
   
    const snapshot = await api.getConversationsApi();

    snapshot.forEach((snap) => {
      conversations.push(snap.val());
    });

    dispatch(getConversationsSuccess(conversations))
  } catch (e) {
    dispatch(getConversationsError(e))
  }
};

export const createConversationByName = (conversation) => async (dispatch, _, api) => {
//  const conversations = [];

  try {
    dispatch(createConversationsStart())
   
    await api.createConversationsApi(conversation);
    
    dispatch(createConversationsSuccess(conversation))
  } catch (e) {
    dispatch(createConversationsError(e))
  }
};

export const removeConversationByName = (conversation) => async (dispatch, _, api) => {
//  const conversations = [];

  try {
    dispatch(removeConversationsStart())
   
    await api.removeConversationsApi(conversation);
    
    dispatch(removeConversationsSuccess(conversation))
  } catch (e) {
    dispatch(removeConversationsError(e))
  }
};







// const foo = async () => {
//   const snapshot = await getConversationsApi();

//   const conversations=[]

//   snapshot.forEach((snap)=>{
//     conversations.push(snap.val)
//   })

//   console.log("conversations", conversations)
// }

