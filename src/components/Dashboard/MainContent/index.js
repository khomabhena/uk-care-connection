import React from 'react'
import { Container } from './MainContentElements'

const MainContent = ({children, isOpen}) => {
  return (
    <Container isOpen={isOpen} className='main-content'>
      {children}
    </Container>
  )
}

export default MainContent