import { createContext, useEffect, useRef, useState } from "react";

const AlertContext = createContext();

export const AlertProvider = ({ children }) => {
  const [alert, setAlert] = useState(null);
  //   The useRef Hook allows you to persist values between renders. It can be used to store a mutable value that does not cause a re-render when updated
  // useRef is a React Hook that lets you reference a value that's not needed for rendering. const ref = useRef(initialValue)
  const timerRef = useRef(null);

  //   on donne un delai à notre alert
  useEffect(() => {
    if (timerRef.current) {
      // JavaScript clearTimeout() Method: This method comes under the category of canceling timers and is used to cancel the timeout object created by setTimeout. The setTimeout() method also returns a unique timer id which is passed to clearTimeout to prevent the execution of the functionality registered by setTimeout.
      clearTimeout(timerRef.current);
    }

    // setTimeout() can be used to schedule code execution after a designated amount of milliseconds.
    timerRef.current = setTimeout(() => {
      setAlert(null);
    }, 5000);
  }, [alert]);

  const showAlert = (type, text) => {
    setAlert({
      text,
      type,
    });
  };
  // const showSuccess = (type, text) => {
  //   setAlert({
  //     text,
  //     type: "success",
  //   });
  // };
  return (
    <AlertContext.Provider value={[alert, setAlert, showAlert]}>
      {children}
    </AlertContext.Provider>
  );
};

export default AlertContext;
