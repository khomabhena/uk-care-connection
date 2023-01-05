import React from 'react'
import { Container } from './MenuItemElements'

const MenuItem = ({children}) => {
  return (
    <Container>
        {children}
    </Container>
  )
}

export default MenuItem