// import React from "react";
// import styles from "./index.module.css";

// export const Message = (
//   <div>
//     <p>Message </p>
//   </div>
// );

// const MessageText = ({text}) => {
//   return (
//     <div className={styles.fontSizeText}>
//       <p>text:{text}</p>
//     </div>
//   );
// };

// export const FunctionComponent = ({ from, text, handleClick }) => {
//   return (
//     <div>
//       <h1 className={styles.fontSizeNameFunctionComponent}>from:{from}</h1>
//       <MessageText text={text} title={"function message"} />
//       {/* <p>text:{text}</p> */}
//       {/* кнопка отправляет текст сообщения в консоль: */}
//       <button className={styles.buttonStyleFunctionComponent} onClick={() => handleClick(text)}>send message</button>
//     </div>);
// };

// export class ClassComponent extends React.Component {
//   render() {
//     const { from, text, handleClick } = this.props;
//     return (
//       <div>
//         <h1 className={styles.fontSizeNameClassComponent}>from:{from}</h1>
//         <MessageText text={text} title={"class message"} />
//         {/* <p>text:{text}</p> */}
//         <button className={styles.buttonStyleClassComponent} onClick={() => handleClick(text)}>send message</button>
//       </div>);
//   }
// };