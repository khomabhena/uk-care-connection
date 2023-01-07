import React from 'react'
import { Container, SubHeading } from './OverviewElements'

const Overview = ({children}) => {
  return (
    <Container>
        <SubHeading>Details</SubHeading>
        <SubHeading>Overview</SubHeading>
        {children}
    </Container>
  )
}

export default Overview