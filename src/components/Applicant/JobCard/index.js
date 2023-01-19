import React from 'react'
import { ApplyButton, BottomWrap, CompanyName, Container, Date, HorizontalLine, JobDescription, JobType, JobWrapper, Location, Salary, SalaryWrap, Title } from './JobCardElements'

const JobCard = ({data, active, buttonName, handleClick}) => {
    const duties = "Certified Nursing Assistants help perform critical tasks that ensure patients are well-cared for and safe during their hospital stay. Checking vital signs, keeping patients clean, and other duties like this are extremely important for patient care and satisfaction."

  return (
    <Container onClick={handleClick}>
      <JobWrapper active={active}>
          <Title>{data?.title || 'Assistant Nurse Aid'}</Title>
          <CompanyName>UK Care Connections</CompanyName>
          <SalaryWrap>
              <JobType>{data?.profession || 'Nurse Aid'}</JobType>
              <Location>{data?.country || 'London'}</Location>
              <Salary>{data?.salary + "/Month" || '$500/Month'}</Salary>
          </SalaryWrap>
          <JobDescription>{duties}</JobDescription>
          <BottomWrap>
              <Date>{data?.date || '2 days ago'}</Date>
              <ApplyButton>{buttonName || 'More Details'}</ApplyButton>
          </BottomWrap>
      </JobWrapper>
      <HorizontalLine />
    </Container>
  )
}

export default JobCard