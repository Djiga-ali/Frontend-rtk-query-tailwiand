import React, { useRef, useState } from 'react'
import myAudio from "./audio/audio.mp3"

const HowToUseRefInInputAudio = () => {
  const [isPlaying, setIsPlaying] = useState(false)
  const audioRef = useRef(null)

  const handlePlayingStateClick = () => {
    if (isPlaying) {
      audioRef.current.pause();      
    } else {
      audioRef.current.play();      
    }
    setIsPlaying(!isPlaying)      
  }
  
  return (
    <>
      <audio ref={audioRef} src={myAudio} className="hidden" controls />
      { isPlaying ? (
        <button onClick={handlePlayingStateClick}>Pause</button>
      ) : (
        <button onClick={handlePlayingStateClick}>Play</button>
      )}
    </>
  )
}

export default HowToUseRefInInputAudio