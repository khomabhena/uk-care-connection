import React from 'react'
import { Container, SubHeading } from './ApplicationsElements'

const Applications = ({children}) => {
  return (
    <Container>
        <SubHeading>Your Applications</SubHeading>
        <SubHeading>Application Details</SubHeading>
        {children}
    </Container>
  )
}

export default Applications