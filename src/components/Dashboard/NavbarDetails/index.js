import React from 'react'
import { Container, Image, Name } from './NavbarDetailsElements'
import person from '../../../images/person.jpg'

const NavbarDetails = ({children, image, name}) => {
  return (
    <Container>
        <Image src={person} />
        <Name>Emily Burner</Name>
        {children}
    </Container>
  )
}

export default NavbarDetails