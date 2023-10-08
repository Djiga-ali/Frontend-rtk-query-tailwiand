import React, { useRef, useState } from "react";
import FormInput from "../FormInput";

const FormErrorHandler = () => {
  //   const [username, setUsername] = useState("");
  const usernameRef = useRef();

  console.log("re-render");
  const handleSubmit = (e) => {
    // empeche la page ou le formulaire de s'actualiser après submit
    e.preventDefault();
    console.log("usernameRef:", usernameRef);
  };

  return (
    <div className="flex justify-center items-center h-[100vh]">
      <form onSubmit={handleSubmit}>
        {/* with Ref */}
        <FormInput refer={usernameRef} placeholder="Username" />
        {/* with useState */}
        {/* <FormInput placeholder="Username" setUsername={setUsername} /> */}
        <FormInput placeholder="Email" />
        <FormInput placeholder="Full name" />
        <FormInput placeholder="Password" />
        <button>Submit</button>
      </form>
    </div>
  );
};

export default FormErrorHandler;
