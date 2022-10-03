import { List } from "@mui/material";
// import { useState } from "react";
import { useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, useParams, useNavigate } from "react-router-dom";
// import { useCallback, useState } from "react";
import {
  // deleteConversation,
  createConversationByName as createConversation,
  conversationsSelector,
  removeConversationByName
} from "../../store/conversations";
import { Chat } from "./chat";



export const ChatList = () => {
  // const [chatList] = useState(["room1", "room2", "room3"]);
  // const [selectedRoom, setSeledRoom] = useState("room1")

  const conversations = useSelector(conversationsSelector);

  const dispatch = useDispatch();

  const navigate = useNavigate();

  const { roomId } = useParams();

  // const handleListItemClick = useCallback((room) => {
  //   setSeledRoom(room);
  // }, []);

  const deleteConversationByName = useCallback(
    (name, e) => {
      e.preventDefault();
      dispatch(removeConversationByName(name));
      navigate("/chat");
      // setTimeout(() => navigate("/chat"));
    }, [dispatch, navigate]
  );

  const createConversationByName = () => {
    const name = prompt("Введите имя");
    const isValidName = !conversations.includes(name);

    if (name && isValidName) {
      dispatch(createConversation(name));
    } else {
      alert("Не валидное имя");
    }
  };

  return <List component="nav">
    <button onClick={createConversationByName}>create</button>
    {conversations.map((chat) => (
      <Link key={chat} to={`/chat/${chat}`}>
        <Chat
          title={chat}
          selected={chat === roomId}
          // handleListItemClick={handleListItemClick}
          deleteConversationByName={deleteConversationByName}
        />
      </Link>
    ))}
  </List>;
}

