import React, { useState } from 'react'
import formValidation from "../../../utils/FormValidation"

const Register = () => {
  const [inputValues, setInputValues] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
  })
  // const [lastname, setLastname] = useState("");
  const [isDisabled, setDisabled] = useState(true);
  const [errors, setErrors] = useState({});



  const handleInput = (e) => {
    const values = { ...inputValues, [e.target.name]: e.target.value };
    setInputValues(values);
  };


  // const handleLastname = (e) => setLastname(e.target.value)


  const onSubmit = (e) => {
    e.preventDefault();
    setErrors(formValidation(inputValues));
    // setErrors(formValidation(lastname));

  };


  return (
    <>
      <div className='max-w-full min-h-[800px]  bg-gray-100 '>
      <form className="max-w-sm mx-auto" onSubmit={onSubmit}>
      {/* <form className="max-w-2xl mx-auto" onSubmit={onSubmit}> */}
      <div className=''>

      <div className=" w-full">
          <label htmlFor="firstname" className='block'> Your name </label>
          <input 
          type="text" 
          id="firstname" 
          name='firstname'
          className={` ${errors && errors.firstname ? " bg-red-50 border border-red-500 text-red-900 placeholder-red-700 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block w-full p-2.5 dark:bg-red-100 dark:border-red-400" : "w-full border border-slate-400 rounded-lg text-sm h-8 p-2 focus:outline-none"}  `} 
            placeholder="Your firstname"
          // value={firstname}
            // onChange={handleLastname}
            onChange={handleInput}
          />
           {errors && errors?.firstname && (
            <p className="text-red-500">{errors?.firstname}</p>
          )}
        
      </div>
      <div className=" w-full">
          <label htmlFor="lastname" className='block'> Your lastname </label>
          <input 
          type="text" 
          id="lastname" 
          name='lastname'
          className={` ${errors && errors.lastname ? " bg-red-50 border border-red-500 text-red-900 placeholder-red-700 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block w-full p-2.5 dark:bg-red-100 dark:border-red-400" : "w-full border border-slate-400 rounded-lg text-sm h-8 p-2 focus:outline-none"}  `} 
            placeholder="Your lastname"
          // value={firstname}
            // onChange={handleLastname}
            onChange={handleInput}
          />
           {errors && errors?.lastname && (
            <p className="text-red-500">{errors?.lastname}</p>
          )}
        
      </div>
      <div className=" w-full">
          <label htmlFor="email" className='block'> Your email </label>
          <input 
          type="email" 
          id="email" 
          name='email'
          className={` ${errors && errors.email ? " bg-red-50 border border-red-500 text-red-900 placeholder-red-700 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block w-full p-2.5 dark:bg-red-100 dark:border-red-400" : "w-full border border-slate-400 rounded-lg text-sm h-8 p-2 focus:outline-none"}  `} 
            placeholder="Your email"
          // value={firstname}
            // onChange={handleLastname}
            onChange={handleInput}
          />
           {errors && errors?.email && (
            <p className="text-red-500">{errors?.email}</p>
          )}
        
      </div>
      <div className=" w-full">
          <label htmlFor="password" className='block'> Your password </label>
          <input 
          type="password" 
          id="password" 
          name='password'
          className={` ${errors && errors.password ? " bg-red-50 border border-red-500 text-red-900 placeholder-red-700 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block w-full p-2.5 dark:bg-red-100 dark:border-red-400" : "w-full border border-slate-400 rounded-lg text-sm h-8 p-2 focus:outline-none"}  `} 
            placeholder="Your password"
          // value={firstname}
            // onChange={handleLastname}
            onChange={handleInput}
          />
           {errors && errors?.password && (
            <p className="text-red-500">{errors?.password}</p>
          )}
        
      </div>
    
      <div className=""></div>
      </div>
      <button
      type='submit'
      className='w-full h-10 bg-gray-700 rounded-lg text-white mt-3'
      // disabled={inputValues.firstname ==="" && isDisabled}
      >
Register
      </button>
      </form>  
      </div>
  
  
    </>
  )
}

export default Register