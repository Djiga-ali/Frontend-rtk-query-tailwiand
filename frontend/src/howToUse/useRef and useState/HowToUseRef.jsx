import React, { useRef } from 'react'

const HowToUseRef = () => {
    const ref = useRef(12);

    const handleClick = () => {
      ref.current += 1
      console.log('Nombre de click : ', ref.current)
    }
    /* ... */
  
    return (    
      <button onClick={handleClick}>
        Click
      </button>
    )
}

export default HowToUseRef