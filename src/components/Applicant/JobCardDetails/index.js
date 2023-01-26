import React from 'react'
import MyButton from '../../Button'
import { BottomTitle, CompanyName, Heading, JobDetailsWrapper, Text, Title, TitleWrap, TopContainer, TopTitle, TopWrap, UpperWrap } from './JobCardDetailsElements'

const JobCardDetails = ({children, data, applicationStatus}) => {
    // const duties = "Certified Nursing Assistants help perform critical tasks that ensure patients are well-cared for and safe during their hospital stay. Checking vital signs, keeping patients clean, and other duties like this are extremely important for patient care and satisfaction."

  return (
    <JobDetailsWrapper >
        {/* <ButtonBack>Back to Jobs</ButtonBack> */}
        <UpperWrap>
            <TitleWrap>
                <Title>{data?.title || '...'}</Title>
                <CompanyName>{data?.company || '...'}</CompanyName>
            </TitleWrap>
            {applicationStatus && <MyButton isRed={applicationStatus === 'Rejected'}>Status: {applicationStatus || '...'}</MyButton>}
        </UpperWrap>
        <TopContainer>
            <TopWrap>
                <TopTitle>Experience</TopTitle>
                <BottomTitle>{data?.experience || '...'}</BottomTitle>
            </TopWrap>
            <TopWrap>
                <TopTitle>Employment Type</TopTitle>
                <BottomTitle>{data?.type || '...'}</BottomTitle>
            </TopWrap>
            <TopWrap>
                <TopTitle>Location</TopTitle>
                <BottomTitle>{data?.country || '...'}</BottomTitle>
            </TopWrap>
            <TopWrap>
                <TopTitle>Salary per Month</TopTitle>
                <BottomTitle>${data?.salary || '...'}</BottomTitle>
            </TopWrap>
        </TopContainer>
        <Heading>Job Description</Heading>
        <Text>{data?.description || '...'}</Text>
        <Heading>Responsibilities</Heading>
        <Text>{data?.responsibilities || '...'}</Text>
        <Heading>Qualification</Heading>
        <Text>{data?.qualifications || '...'}</Text>
        <Heading>Skills &amp; Experience</Heading>
        <Text>{data?.skills || '...'}</Text>
        {/* <ApplyButton onClick={() => handleClick(data?.jobUid, data?.email)}>{status || 'Apply for this Job'}</ApplyButton> */}
        {children}
    </JobDetailsWrapper>
  )
}

export default JobCardDetails