import { useState, createContext, useContext } from "react";

export const Notification = ({ message, type }) => {
  if (message === "") {
    return null;
  }

  const config = true
    ? {
        className: `notification ${type === "success" ? "success" : "error"}`,
      }
    : {};

  return <div {...config}>{message}</div>;
};

const NotificationContext = createContext();

const NotificationProvider = ({ children }) => {
  const [message, setMessage] = useState("");
  const [type, setType] = useState("success");

  const setNotification = (ty, msg) => {
    setMessage(msg);
    setType(ty);
    setTimeout(() => {
      setMessage("");
    }, 3000);
    if (message === "") {
      return null;
    }
  };
  return (
    <NotificationContext.Provider value={{ setNotification }}>
      <Notification message={message} type={type} />
      {children}
    </NotificationContext.Provider>
  );
};

export { NotificationProvider };

export default NotificationContext;

// export const Notification = ({ message, type }) => {
//   // if (message === "") {
//   //   return null;
//   // }

//   const config = true
//     ? {
//         className: ` ${type === "success" ? "success" : "error"}`,
//       }
//     : {};

//   return <div {...config}>{message}</div>;
// };

// const NotificationContext = createContext();

// export const NotificationProvider = ({ children }) => {
//   const [message, setMessage] = useState("ghjh");
//   const [type, setType] = useState("success");

//   const setNotification = (ty, msg) => {
//     setMessage(msg);
//     setType(ty);
//     setTimeout(() => {
//       setMessage("");
//     }, 3000);

//     return (
//       <NotificationContext.Provider value={{ setNotification }}>
//         <Notification message={message} type={type} />
//         {children}
//       </NotificationContext.Provider>
//     );
//   };
// };

// export const useNotification = () => {
//   return useContext(NotificationContext);
// };
