import React from 'react'
import { Container, SubHeading } from './ApplicationsElements'

const Applications = ({title1, title2, children}) => {
  return (
    <Container>
        <SubHeading>{title1 || 'Your Applications'}</SubHeading>
        <SubHeading>{title2 || 'Application Details'}</SubHeading>
        {children}
    </Container>
  )
}

export default Applications