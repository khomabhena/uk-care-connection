import React from 'react'
import { Container, Heading } from './MenuIconElements'

const MenuIcon = ({title, toggleSidebar}) => {
  return (
    <Container>
      <span onClick={toggleSidebar} className="material-symbols-outlined">menu</span>
       <Heading>{title}</Heading>
    </Container>
  )
}

export default MenuIcon