import { List } from "@mui/material";
import { useState } from "react";
import { Link, useParams } from "react-router-dom";
// import { useCallback, useState } from "react";
import { Chat } from "./chat";


//ДЗ переделать

export const ChatList = () => {
  const [chatList] = useState(["room1", "room2", "room3"]);
  // const [selectedRoom, setSeledRoom] = useState("room1")
  const { roomId } = useParams()

  // const handleListItemClick = useCallback((room) => {
  //   setSeledRoom(room);
  // }, []);

  return <List component="nav">
    {chatList.map((chat) => (
      <Link key={chat} to={`/chat/${chat}`}>
        <Chat
          title={chat}
          selected={chat === roomId}
        // handleListItemClick={handleListItemClick}
        />
      </Link>
    ))}
  </List>;
}