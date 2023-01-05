import React from 'react'
import { Container, SidebarWrap } from './SidebarElements'

const Sidebar = ({children, isOpen}) => {
  return (
    <Container isOpen={isOpen} className='sidebar'>
      {children}
    </Container>
  )
}

export default Sidebar