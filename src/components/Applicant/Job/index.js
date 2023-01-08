import React from 'react'
import { Container, SubHeading } from './JobElements'

const Job = ({children}) => {
  return (
    <Container>
        <SubHeading>Suggested Jobs</SubHeading>
        <SubHeading>Job Full Details</SubHeading>
        {children}
    </Container>
  )
}

export default Job