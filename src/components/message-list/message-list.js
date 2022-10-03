import React, { useState, useEffect, useRef, useCallback, useMemo } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { sendMessagesFb, messagesSelector } from "../../store/messages";
import { Message } from "./message";
// import { PropTypes } from "prop-types";
// import { Input, Button } from '@mui/material';
import { Input, SendIcon } from "./styles";
import { InputAdornment } from '@mui/material';
// import { Send } from '@mui/icons-material';
// import { useParams } from "react-router-dom";
// import { useSelector } from "react-redux";


export const MessageList = () => {
  const { roomId } = useParams();

  // const [messageList, setMessageList] = useState({
  //   room1: [{ author: 'User', message: 'test', date: new Date() }]
  // });

  const selector = useMemo(() => messagesSelector(roomId), [roomId])

  const messages = useSelector(selector);

  const [value, setValue] = useState("");

  const dispatch = useDispatch();

  const ref = useRef();

  // const ref2 = useRef(null);

  // console.log("ref", ref2);

  // ref2.current = 'test';

  // useEffect(() => {
  //   console.log("trigger:ref2", ref2.current);
  // },[ref2, ref2.current] ) ;

  // console.log("ref2", ref2.current);


  const send = useCallback((message, author = "User") => {
    // ref2.current=new Date().toString();
    if (message) {
      // setMessageList((state) => ({
      //   ...state,
      //   [roomId]: [
      //     ...(state[roomId] ?? []),
      //     { author, message, date: new Date() },
      //   ],
      // }));
      dispatch(sendMessagesFb({ message, author }, roomId));
      setValue("");

      // console.log("cancel", cancel);
      // cancel();
    }
  }, [roomId, dispatch]);

  const handlePressInput = ({ code }) => {
    if (code === "Enter") {
      send(value);
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
  }, [messages]);

  useEffect(() => {
    // const messages = [];
    const lastMessage = messages[messages.length - 1];
    let timerId = null;

    if (messages.length && lastMessage.author === "User") {
      timerId = setTimeout(() => {
        // setMessageList([
        //   ...messageList,
        //   { author: "Bot", message: "Hello from Bot", date: new Date() },
        // ]);
        send("hello from bot", "Bot")
      }, 1000);

      return () => {
        clearInterval(timerId);
      };
    }
  }, [send, messages]);


  // console.log("ref", ref.current);

  // const messages = messageList[roomId] ?? [];

  return (
    <>
      <div ref={ref}>
        {messages.map((message, index) => (
          <Message message={message} key={index} roomId={roomId} />
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
            {value && <SendIcon onClick={() => send(value)} />}
          </InputAdornment>
        }
      />

      { }
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