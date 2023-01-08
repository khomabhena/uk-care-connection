import React from 'react'
import { Container } from '../JobDetails/JobDetailsElements'

const JobDetails = ({children}) => {
  return (
    <Container>
      {children}
    </Container>
  )
}

export default JobDetails