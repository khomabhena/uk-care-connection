import React from 'react'
import { Container, ButtonWrap, Input, InputContainer, InputLabel, InputWrap, TextArea, Title, UpdateButton, UpdateForm } from './QualificationFormElements'

const QualificationForm = () => {
  return (
    <Container>
        <UpdateForm>
            <InputContainer>
                <InputWrap>
                    <InputLabel>Degree Name</InputLabel>
                    <Input className='q-degree' placeholder='Enter degree name' />
                </InputWrap>
                <InputWrap>
                    <InputLabel>Institution</InputLabel>
                    <Input className='q-institution' placeholder='Enter name of your Institution' />
                </InputWrap>
            </InputContainer>
            <InputContainer>
                <InputWrap>
                    <InputLabel>Year Start</InputLabel>
                    <Input className='q-yearStart' type='date' placeholder='Nurse, Nurse Aid, Adult Care or Hospice Care?' />
                </InputWrap>
                <InputWrap>
                    <InputLabel>Year End</InputLabel>
                    <Input className='q-yearEnd' type='date' placeholder='Enter your country' />
                </InputWrap>
            </InputContainer>
            
            <Title>Accomplishments</Title>
            <InputLabel>Brief Overview</InputLabel>
            <TextArea className='q-intro' placeholder='Write a short paragraph stating your accomplishments' rows='6' />

            <ButtonWrap>
                <UpdateButton className="applicant-update" type='submit'>Update</UpdateButton>
            </ButtonWrap>
           
        </UpdateForm>
    </Container>
  )
}

export default QualificationForm