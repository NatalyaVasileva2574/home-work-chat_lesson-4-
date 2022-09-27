// import React from 'react';
// import React, { useState } from 'react';
// import { FunctionComponent, ClassComponent } from './example'
// import styles from "./index.module.css";

import ReactDOM from 'react-dom/client';
// import { ThemeProvider, createTheme } from '@mui/material';
import { PersistGate } from 'redux-persist/integration/react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
// import { MessageList, Layout, Header, ChatList } from './components';
import { HomePage, ProfilePage, ChatPage, GistsPage } from "./pages";
import { Header } from "./components";
import { CustomThemeProvider } from "./theme-context";
import { store, persistor } from "./store";
import "./global.css";

const root = ReactDOM.createRoot(document.getElementById('root'));

// const App = () => {
//   return <MessageList />;
//   // return <MessageList a={[{s1: 'Hello'}]} />;
//   // return <MessageList message="message" />;
// };

// const theme = createTheme({
//   // palette: {
//   //   primary:{
//   //     main:"#ff0000",
//   //   }
//   // }
// });

root.render(
  <Provider store={store}>
    <PersistGate persistor={persistor}>
      <CustomThemeProvider>
        {/* <ThemeProvider theme={theme}> */}
        <BrowserRouter>
          <Header />

          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/profile" element={<ProfilePage />} />
            <Route path="/chat/*" element={<ChatPage />} />
            <Route path="/gists*" element={<GistsPage />} />
            <Route path="*" element={<h1>404</h1>} />
          </Routes>
        </BrowserRouter>
        {/* </ThemeProvider> */}
      </CustomThemeProvider>
    </PersistGate>
  </Provider>

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





