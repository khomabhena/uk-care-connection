import React from 'react'
import { Container, SubHeading } from './JobElements'

const Job = ({title, children}) => {
  return (
    <Container>
        <SubHeading>{title || 'Suggested Jobs'}</SubHeading>
        <SubHeading>Job Full Details</SubHeading>
        {children}
    </Container>
  )
}

export default Job