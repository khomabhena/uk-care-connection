import React from 'react'
import { Container, Heading } from './MenuIconElements'

const MenuIcon = ({children, title}) => {
  return (
    <Container>
      {children} <Heading>{title}</Heading>
    </Container>
  )
}

export default MenuIcon