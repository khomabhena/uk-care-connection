import React from 'react'
import { ApplyButton, BottomTitle, ButtonBack, CompanyName, Heading, JobDetailsWrapper, Text, Title, TopContainer, TopTitle, TopWrap } from './JobCardDetailsElements'

const JobCardDetails = ({data, status}) => {
    const duties = "Certified Nursing Assistants help perform critical tasks that ensure patients are well-cared for and safe during their hospital stay. Checking vital signs, keeping patients clean, and other duties like this are extremely important for patient care and satisfaction."

  return (
    <JobDetailsWrapper >
        <ButtonBack>Back to Jobs</ButtonBack>
        <Title>{data?.title || 'Assistant Nurse Aid'}</Title>
        <CompanyName>Uk Care Connection</CompanyName>
        <TopContainer>
            <TopWrap>
                <TopTitle>Experience</TopTitle>
                <BottomTitle>{data?.experience || 'Minimum 1 Year'}</BottomTitle>
            </TopWrap>
            <TopWrap>
                <TopTitle>Employment Type</TopTitle>
                <BottomTitle>{data?.type || 'Full Time'}</BottomTitle>
            </TopWrap>
            <TopWrap>
                <TopTitle>Location</TopTitle>
                <BottomTitle>{data?.country || 'Bristol'}</BottomTitle>
            </TopWrap>
            <TopWrap>
                <TopTitle>Salary per Month</TopTitle>
                <BottomTitle>{data?.salary || '$1200'}</BottomTitle>
            </TopWrap>
        </TopContainer>
        <Heading>Job Description</Heading>
        <Text>{data?.description || duties}</Text>
        <Heading>Responsibilities</Heading>
        <Text>{data?.responsibilities || duties}</Text>
        <Heading>Qualification</Heading>
        <Text>{data?.qualifications || duties}</Text>
        <Heading>Skills &amp; Experience</Heading>
        <Text>{data?.skills || duties}</Text>
        <ApplyButton>{status || 'Apply for this Job'}</ApplyButton>
    </JobDetailsWrapper>
  )
}

export default JobCardDetails