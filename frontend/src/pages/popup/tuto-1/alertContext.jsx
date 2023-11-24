import { createContext, useEffect, useRef, useState, useContext } from "react";

const AlertContext = createContext();

export const AlertProvider = ({ children }) => {
  // const [alert, setAlert] = useState(null);
  const [type, setType] = useState(null);
  const [openModal, setOpenModal] = useState(false);
  const [openModal2, setOpenModal2] = useState(false);
  const [openModal3, setOpenModal3] = useState(false);

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
      setType(null);
    }, 2000);
  }, [type]);

  const showSuccess = (text) => {
    setType({
      text,
      success: true,
    });
  };
  const showError = (text) => {
    setType({
      text,
      error: true,
    });
  };
  const showInfo = (text) => {
    setType({
      text,
      info: true,
    });
  };
  const showWarning = (text) => {
    setType({
      text,
      warning: true,
    });
  };

  return (
    <AlertContext.Provider
      value={{
        type,
        setType,
        showSuccess,
        showError,
        showInfo,
        showWarning,
        openModal,
        setOpenModal,
        openModal2,
        setOpenModal2,
        openModal3,
        setOpenModal3,
      }}
    >
      {children}
    </AlertContext.Provider>
  );
};

const useToast = () => useContext(AlertContext);

export { useToast, AlertContext };
