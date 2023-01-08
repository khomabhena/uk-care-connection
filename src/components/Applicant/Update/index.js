import React from 'react'
import { Container, SubHeading } from './UpdateElements'

const Update = ({children}) => {
  return (
    <Container>
        <SubHeading>Update Personal Details</SubHeading>
        {children}
    </Container>
  )
}

export default Update