import React from 'react'
import { Container } from './MainContentElements'

const MainContent = ({children}) => {
  return (
    <Container className='main-content'>
      {children}
    </Container>
  )
}

export default MainContent