import React from 'react'
import { Container } from './NavbarElements'

const Navbar = ({children}) => {
  return (
    <Container>
        {children}
    </Container>
  )
}

export default Navbar