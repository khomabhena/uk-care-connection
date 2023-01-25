import React from 'react'
import { Button } from './ButtonElements'

const MyButton = ({children, handleClick, disabled, isRed}) => {
  return (
    <Button onClick={handleClick} isRed={isRed} disabled={disabled}>
      {children}
    </Button>
  )
}

export default MyButton