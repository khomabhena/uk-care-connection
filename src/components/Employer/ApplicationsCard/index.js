import React from 'react'
import { SubHeading, HorizontalLine, JobWrapper, Heading, HorizontalWrap } from './ApplicationsCardElements'

const ApplicationsCard = ({selected, children}) => {
  return (
    <JobWrapper selected={selected}>
        <HorizontalWrap>
            <Heading>Assistant Nurse Aid</Heading>
            <SubHeading>9</SubHeading>
        </HorizontalWrap>
        <HorizontalLine />
        {children}
    </JobWrapper>
  )
}

export default ApplicationsCard