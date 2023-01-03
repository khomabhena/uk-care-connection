import React from 'react'
import { Container } from './ContainerElements'

const DashboardContainer = ({children}) => {
  return (
    <Container>
      {children}
    </Container>
  )
}

export default DashboardContainer