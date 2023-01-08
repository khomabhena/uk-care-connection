import React from 'react'
import { Container, SubHeading } from '../Experience/ExperienceElements'

const Experience = ({children}) => {
  return (
    <Container>
        <SubHeading>Update your Experience</SubHeading>
        {children}
    </Container>
  )
}

export default Experience