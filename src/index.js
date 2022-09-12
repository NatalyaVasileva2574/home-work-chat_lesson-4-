// import React from 'react';
// import React, { useState } from 'react';
// import { FunctionComponent, ClassComponent } from './example'
// import styles from "./index.module.css";

import ReactDOM from 'react-dom/client';
import { ThemeProvider, createTheme } from '@mui/material';
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import { MessageList, Layout, Header, ChatList } from './components';
import { HomePage, ProfilePage, ChatPage } from "./pages";
import { Header } from "./components";
import "./global.css";

const root = ReactDOM.createRoot(document.getElementById('root'));

// const App = () => {
//   return <MessageList />;
//   // return <MessageList a={[{s1: 'Hello'}]} />;
//   // return <MessageList message="message" />;
// };

const theme = createTheme({
  // palette: {
  //   primary:{
  //     main:"#ff0000",
  //   }
  // }
});

root.render(
  <ThemeProvider theme={theme}>
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route
          path="/chat/*"
          element={
            <ChatPage />
          }
        />
        <Route path="*" element={<h1>404</h1>} />
      </Routes>
    </BrowserRouter>
  </ThemeProvider>
);

// root.render(
//   <ThemeProvider theme={theme}>
//     <Layout
//       messages={<MessageList />}
//       header={<Header />}
//       chats={<ChatList />}
//     />
//     {/* <App /> */}
//   </ThemeProvider>
// );





