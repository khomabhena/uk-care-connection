import React from 'react'
import { SubHeading, HorizontalLine, JobWrapper, Heading, HorizontalWrap } from './ApplicationsCardElements'

const ApplicationsCard = ({title, selected, children}) => {
  return (
    <JobWrapper selected={selected}>
        <HorizontalWrap>
            <Heading>{title || 'Assistant Nurse Aid'}</Heading>
            <SubHeading></SubHeading>
        </HorizontalWrap>
        <HorizontalLine />
        {children}
    </JobWrapper>
  )
}

export default ApplicationsCard