import React from 'react'
import { Container, SidebarWrap } from './SidebarElements'

const Sidebar = ({children}) => {
  return (
    <Container className='sidebar'>
      {children}
    </Container>
  )
}

export default Sidebar