import React, { useState, useEffect, useRef, useCallback } from "react";
import { Message } from "./message";
// import { PropTypes } from "prop-types";
// import { Input, Button } from '@mui/material';
import { Input, SendIcon } from "./styles";
import { InputAdornment } from '@mui/material';
// import { Send } from '@mui/icons-material';
import { useParams } from "react-router-dom";


export const MessageList = () => {
  const [messageList, setMessageList] = useState({
    room1: [{ author: 'User', message: 'test', date: new Date() }]
  });

  const [value, setValue] = useState("");

  const { roomId } = useParams();

  const ref = useRef();

  // const ref2 = useRef(null);

  // console.log("ref", ref2);

  // ref2.current = 'test';

  // useEffect(() => {
  //   console.log("trigger:ref2", ref2.current);
  // },[ref2, ref2.current] ) ;

  // console.log("ref2", ref2.current);


  const sendMessage = useCallback((message, author = "User") => {
    // ref2.current=new Date().toString();
    if (message) {
      setMessageList((state) => ({
        ...state,
        [roomId]: [
          ...(state[roomId] ?? []),
          { author, message, date: new Date() },
        ],
      }));
      setValue("");
    }
  }, [roomId]);

  const handlePressInput = ({ code }) => {
    if (code === "Enter") {
      sendMessage(value);
    }
  };

  useEffect(() => {
    if (ref.current) {
      // ref.current.scrollTo(0, ref.current.scrollHeight);
      ref.current.scrollTo({
        top: ref.current.scrollHeight,
        left: 0,
        behavior: 'smooth'
      })
    }
  }, [messageList]);

  useEffect(() => {
    const messages = messageList[roomId] ?? [];
    const lastMessage = messages[messages.length - 1];
    let timerId = null;

    if (messages.length && lastMessage.author === "User") {
      timerId = setTimeout(() => {
        // setMessageList([
        //   ...messageList,
        //   { author: "Bot", message: "Hello from Bot", date: new Date() },
        // ]);
        sendMessage("hello from bot", "Bot")
      }, 1000);

      return () => {
        clearInterval(timerId);
      };
    }
  }, [messageList, roomId, sendMessage]);

  // console.log("ref", ref.current);

  const messages = messageList[roomId] ?? [];

  return (
    <>
      <div ref={ref}>
        {messages.map((message, index) => (
          <Message message={message} key={index} />
        ))}
      </div>

      <Input
        autoFocus
        fullWidth
        placeholder="Введите сообщение..."
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onKeyPress={handlePressInput}
        endAdornment={
          <InputAdornment position="end">
            {value && <SendIcon onClick={sendMessage} />}
          </InputAdornment>
        }
      />

      {/* <Button variant="contained" onClick={sendMessage}>send</Button> */}
    </>
  );
};

// MessageList.propTypes ={
//   message: PropTypes.string.isRequired,
//   o1: PropTypes.shape({
//     s1:PropTypes.string.isRequired,
//   }).isRequired,
//   a: PropTypes.arrayOf(
//     PropTypes.shape({
//       s1: PropTypes.string.isRequired,
//     }).isRequired
//   ),
// };