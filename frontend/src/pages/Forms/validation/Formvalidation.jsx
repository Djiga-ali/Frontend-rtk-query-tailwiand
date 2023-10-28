import React, { useState } from "react";
import { useForm } from "react-hook-form";
import Validation from "./Validation";

const Formvalidation = () => {
  const [values, setValues] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({});

  const handleInput = (e) => {
    const newObj = { ...values, [e.target.name]: e.target.value };
    setValues(newObj);
  };

  const handleValidation = (e) => {
    e.preventDefault();
    setErrors(Validation(values));
  };
  return (
    <>
      <div className="w-96 m-40 text-left">
        <form
          className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
          onSubmit={handleValidation}
        >
          <label className="block text-gray-700 text-sm font-bold mt-3 mb-2">
            First Name
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 textgray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            name="firstName"
            id="firstName"
            placeholder="John"
            onChange={handleInput}
          />
          {errors?.firstName && (
            <p className="text-red-500">{errors?.firstName}</p>
          )}

          <label className="block text-gray-700 text-sm font-bold mt-3 mb-2">
            Last Name
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 textgray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            id="lastName"
            name="lastName"
            placeholder="Doe"
            onChange={handleInput}
          />
          {errors?.lastName && (
            <p className="text-red-500">{errors?.lastName}</p>
          )}

          <label className="block text-gray-700 text-sm font-bold mt-3 mb-2">
            Email
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 textgray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="email"
            id="email"
            name="email"
            placeholder="example@gmail.com"
            onChange={handleInput}
          />
          {errors?.email && <p className="text-red-500">{errors?.email}</p>}

          <label className="block text-gray-700 text-sm font-bold mt-3 mb-2">
            Password
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 textgray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="password"
            id="password"
            name="password"
            placeholder="********"
            onChange={handleInput}
          />
          {errors?.password && (
            <p className="text-red-500">{errors?.password}</p>
          )}

          <button
            type="submit"
            className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mt-3"
          >
            Submit
          </button>
        </form>
      </div>
    </>
  );
};

export default Formvalidation;
