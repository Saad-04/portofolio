import React from 'react'
import { Typewriter } from 'react-simple-typewriter'

function Typewriters({words}) {
  return (
    <Typewriter
            words={words}
            loop={true}
            cursor
            cursorStyle='|'
            typeSpeed={100}
            deleteSpeed={100}
            delaySpeed={1000}
          />
  )
}

export default Typewriters