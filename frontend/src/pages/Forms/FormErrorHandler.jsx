import React, { useRef, useState } from "react";
import FormInput from "./FormInput";

const FormErrorHandler = () => {
  // const [username, setUsername] = useState("");
  // const usernameRef = useRef();
  const [values, setValues] = useState({
    username: "",
    email: "",
    birthday: "",
    password: "",
    confirmPassword: "",
    // required: true,
  });
  console.log("values:", values);
  const inputs = [
    {
      id: 1,
      name: "username",
      type: "text",
      placeholder: "Username",
      errorMessage:
        "Username should be 3-16 characters and shouldn't include any special character!",
      label: "Username",
      pattern: "^[A-Za-z0-9]{3,16}$",
      required: true,
    },
    {
      id: 2,
      name: "email",
      type: "email",
      placeholder: "Email",
      errorMessage: "It should be a valid email address!",
      label: "Email",
      pattern: `[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$`,
      required: true,
    },
    {
      id: 3,
      name: "birthday",
      type: "date",
      placeholder: "Birthday",
      label: "Birthday",
    },
    {
      id: 4,
      name: "password",
      type: "password",
      placeholder: "Password",
      errorMessage:
        "Password should be 8-20 characters and include at least 1 letter, 1 number and 1 special character!",
      label: "Password",
      pattern: `^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$`,
      required: true,
    },
    {
      id: 5,
      name: "confirmPassword",
      type: "password",
      placeholder: "Confirm Password",
      errorMessage: "Passwords don't match!",
      label: "Confirm Password",
      pattern: values.password,
      required: true,
    },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  const onChange = (e) => {
    // ici on passe le "e.target.name" à "setValues" pour qu'elle soit la valeur à passer dans le state "values"
    // {...values, ...}:  c'est parce qu'il y a plusieurs valeurs qu'on va passer, on les accepte toutes
    //  [e.target.name]: c'est tableaux va contenir les valeus de name et ces valeus sont celles que le "user" passe dans le formulaire et   qui vont ensuite être passées aux "values"
    // e.target.value: c'est la valeur passée dans le '"input" par le "user"
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  return (
    <div className="flex justify-center items-center h-[100vh]">
      <form onSubmit={handleSubmit} className="group">
        <h1 className="font-bold mb-3 text-center">Register</h1>
        {inputs.map((input) => {
          // {...input}: on passe toutes les valeurs ({input.id}  {input.name} {input.type}  {input.placeholder} {input.label}) de l'input spécifié ci-dessus dans le tableau "inputs"
          // {...input}: {input.id}  {input.name} {input.type}  {input.placeholder} {input.label}
          return (
            <FormInput
              key={input.id}
              {...input}
              value={values[input.name]}
              onChange={onChange}
              className=""
            />
          );
        })}
        {/* https://dev.to/deyemiobaa/adding-custom-validation-to-a-form-with-tailwindcss-1e7d */}
        <button
          type="submit"
          className=" w-60 h-50 bg-blue-800 cursor-pointer mt-3 text-white"
        >
          {/* <button className="group-invalid:pointer-events-none group-invalid:opacity-30 w-60 h-50 bg-blue-800 cursor-pointer mt-3 text-white"> */}
          Submit
        </button>
      </form>
    </div>
  );
};

export default FormErrorHandler;
