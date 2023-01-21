import React from 'react'
import { ButtonWrap, Container, Form, Input, InputContainer, InputLabel, InputWrap, Option, Select, TextArea, UpdateButton } from './PostJobElements'

const PostJob = ({postJob}) => {

  return (
    <Container>
        <Form>
            <InputContainer>
                <InputWrap>
                      <InputLabel>Job Title</InputLabel>
                      <Input type='text' className='input-job-title' placeholder="What's the job title" />
                </InputWrap>
                <InputWrap>
                    <InputLabel>Expected Salary per Month</InputLabel>
                    <Input className='job-salary' placeholder='Enter the expected salary per month' />
                </InputWrap>
            </InputContainer>
            <InputContainer>
                <InputWrap>
                      <InputLabel>Location</InputLabel>
                      <Input className='job-country' placeholder='Where is the job located?' />
                </InputWrap>
                <InputWrap>
                    <InputLabel>Job Type</InputLabel>
                    {/* <Input className='profession' placeholder='Nurse, Nurse Aid, Adult Care' /> */}
                    <Select className='job-profession' name='job-profession'>
                    <Option value='None' disabled defaultValue>Select job type</Option>
                    <Option value='Nurse'>Nurse</Option>
                    <Option value='Nurse Aid'>Nurse Aid</Option>
                    <Option value='Adult Care'>Adult Care</Option>
                    <Option value='Hospice Care'>Hospice Care</Option>
                </Select>
                </InputWrap>
            </InputContainer>
            <InputContainer>
                <InputWrap>
                    <InputLabel>Experience</InputLabel>
                    <Select className='job-experience' name='job-experience'>
                        <Option value='None' disabled defaultValue>Select experience required</Option>
                        <Option value='At most 1 year'>At most 1 Year</Option>
                        <Option value='Less than 5 years'>Less than 5 Years</Option>
                        <Option value='More than 5 years'>More than 5 years</Option>
                        <Option value='More than 10 years'>More than 10 years</Option>
                    </Select>
                </InputWrap>
                <InputWrap>
                    <InputLabel>Employment Type</InputLabel>
                    <Select className='job-type' name='job-type'>
                        <Option value='None' disabled defaultValue>Select employment type</Option>
                        <Option value='Contract'>Contract</Option>
                        <Option value='Part-time'>Part-time</Option>
                        <Option value='Fulltime'>Fulltime</Option>
                    </Select>
                </InputWrap>
            </InputContainer>
            
            <InputLabel>Job Description</InputLabel>
            <TextArea className='job-description' placeholder='Write a short paragraph describing the job' rows='6' />
              
            
            <InputLabel>Responsibilities</InputLabel>
            <TextArea className='job-responsibilities' placeholder='Describe the job responsibilities' rows='5' />
              
            
            <InputLabel>Required Qualifications</InputLabel>
            <TextArea className='job-qualifications' placeholder='Required qualifications for the job' rows='5' />
              
            
            <InputLabel>Skills</InputLabel>
            <TextArea className='job-skills' placeholder='Required skills for the job' rows='5' />
              
            
            <ButtonWrap>
                <UpdateButton onClick={postJob}>Update</UpdateButton>
            </ButtonWrap>
        </Form>
    </Container>
  )
}

export default PostJob