import React from 'react'
import { Container } from './ContainerElements'

const DashboardContainer = ({children}) => {
  return (
    <Container>
        {children}
        <div style={{backgroundColor: 'red'}}>Sidebar</div>
        <div style={{backgroundColor: 'green'}} >Main COontent</div>
    </Container>
  )
}

export default DashboardContainer