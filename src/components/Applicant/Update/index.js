import React from 'react'
import { Container, SubHeading } from './UpdateElements'

const Update = ({title, children}) => {
  return (
    <Container>
        <SubHeading>{title || 'Update Personal Details'}</SubHeading>
        {children}
    </Container>
  )
}

export default Update