import React from 'react'
import { Button } from './ButtonElements'

const MyButton = ({children, isRed}) => {
  return (
    <Button isRed={isRed}>
      {children}
    </Button>
  )
}

export default MyButton