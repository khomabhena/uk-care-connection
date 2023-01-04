import React from 'react'
import { Container, Image, Name } from './NavbarDetailsElements'

const NavbarDetails = ({children, image, name}) => {
  return (
    <Container>
        <Image src={image} />
        <Name>{name}</Name>
        {children}
    </Container>
  )
}

export default NavbarDetails