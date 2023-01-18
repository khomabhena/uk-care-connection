import React from 'react'
import { ButtonWrap, Container, FileChooser, Form, Input, InputContainer, InputLabel, InputWrap, Option, Select, TextArea, Title, UpdateButton } from './UpdateFormElements'

const UpdateForm = () => {
  return (
    <Container>
        <Form>
            <InputContainer>
                <InputWrap>
                    <InputLabel>Company Name</InputLabel>
                    <Input className='companyName' placeholder='Enter your company name' />
                </InputWrap>
                <InputWrap>
                    <InputLabel>Owner Name</InputLabel>
                    <Input className='name' placeholder='Enter your name' />
                </InputWrap>
            </InputContainer>
            <InputContainer>
                <InputWrap>
                    <InputLabel>Location</InputLabel>
                    <Input className='update-country' placeholder='Where are you located?' />
                </InputWrap>
                <InputWrap>
                    <InputLabel>Employees</InputLabel>
                    {/* <Input className='employees' placeholder='Number of employees' /> */}
                    <Select className='employees' name='employees'>
                        <Option value='None' disabled defaultValue>Select number of Employees</Option>
                        <Option value='1 to 5'>1 to 9</Option>
                        <Option value='5 to 10'>10 to 29</Option>
                        <Option value='10 to 50'>30 to 50</Option>
                        <Option value='Over 50'>Over 50</Option>
                    </Select>
                </InputWrap>
            </InputContainer>
            
            <Title>About</Title>
            <InputLabel>About your company</InputLabel>
            <TextArea className='intro' placeholder='Write a short paragraph introducing your company' rows='6' />

            <InputContainer>
                <InputWrap>
                    <InputLabel>Registration Number</InputLabel>
                    <Input className='registrationNumber' placeholder='Enter your company registration number' />
                </InputWrap>
            </InputContainer>
            <InputLabel>National ID / Passport</InputLabel>
            <FileChooser className='id' type='file' />

            <Title>Social Media</Title>
            <InputContainer>
                <InputWrap>
                    <InputLabel>Twitter</InputLabel>
                    <Input className='twitter' />
                </InputWrap>
                <InputWrap>
                    <InputLabel>Phone Number</InputLabel>
                    <Input className='phone' />
                </InputWrap>
            </InputContainer>
            
            <InputContainer>
                <InputWrap>
                    <InputLabel>Linkedin</InputLabel>
                    <Input className='linkedin' />
                </InputWrap>
                <InputWrap>
                    <InputLabel>Website</InputLabel>
                    <Input className='website' />
                </InputWrap>
            </InputContainer>
            <ButtonWrap>
                <UpdateButton type='submit'>Update</UpdateButton>
            </ButtonWrap>
        </Form>
    </Container>
  )
}

export default UpdateForm