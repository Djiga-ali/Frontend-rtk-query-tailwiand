import React, { useRef } from 'react'

const HowToUseRefInInput = () => {
    // state
  const inputRef = useRef();

  // comportements
  const handleClick = () => {
    console.log("inputRef.current :", inputRef.current);
    inputRef.current.focus();
  };

  // Rendu
  return (  
    <div className="App">  
      <button onClick={handleClick}>Focus sur input</button>
      <div className="w-full">
        <label htmlFor="input-ref">input</label>
        <input
          ref={inputRef}
          type="text"
          name="input-ref"
          placeholder="input ref"
         />
      </div>
    </div>  
  )  
}

export default HowToUseRefInInput