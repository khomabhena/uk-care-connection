import React from 'react'
import { ButtonWrap, Container, Form, Input, InputContainer, InputLabel, InputWrap, Option, Select, TextArea, UpdateButton } from './PostJobElements'

const PostJob = () => {
  return (
    <Container>
        <Form>
            <InputContainer>
                <InputWrap>
                      <InputLabel>Job Title</InputLabel>
                      <Input className='title' placeholder="What's the job title" />
                </InputWrap>
                <InputWrap>
                    <InputLabel>Expected Salary per Month</InputLabel>
                    <Input className='salary' placeholder='Enter the expected salary per month' />
                </InputWrap>
            </InputContainer>
            <InputContainer>
                <InputWrap>
                      <InputLabel>Location</InputLabel>
                      <Input className='country' placeholder='Where is the job located?' />
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
            
            <InputLabel>Job Description</InputLabel>
            <TextArea className='description' placeholder='Write a short paragraph describing the job' rows='6' />
              
            
            <InputLabel>Responsibilities</InputLabel>
            <TextArea className='responsibilities' placeholder='Describe the job responsibilities' rows='5' />
              
            
            <InputLabel>Required Qualifications</InputLabel>
            <TextArea className='qualifications' placeholder='Required qualifications for the job' rows='5' />
              
            
            <InputLabel>Skills</InputLabel>
            <TextArea className='skills' placeholder='Required skills for the job' rows='5' />
              
            
            <ButtonWrap>
                <UpdateButton type='submit'>Update</UpdateButton>
            </ButtonWrap>
        </Form>
    </Container>
  )
}

export default PostJob