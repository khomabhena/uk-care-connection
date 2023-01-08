import React from 'react'
import { Container, SubHeading } from './QualificationsElements'

const Qualifications = ({children}) => {
  return (
    <Container>
        <SubHeading>Add your qualifications</SubHeading>
        {children}
    </Container>
  )
}

export default Qualifications