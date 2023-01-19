import React from 'react'
import { Container, ContainerRight, Heading, HorizontalLine, Image, SubHeading, Wrap } from './ApplicantsCardElements'
import person from '../../../images/person.jpg'

const ApplicantsCard = ({active, handleClick}) => {
  return (
    <Container onClick={handleClick} active={active}>
        <Wrap active={active}>
            <Image src={person} />
            <Container>
                <ContainerRight active={active}>
                    <Heading>Emily Burner</Heading>
                    <SubHeading>Nurse Aid</SubHeading>
                    <SubHeading>Zimbabwe</SubHeading>
                </ContainerRight>
                <HorizontalLine />
            </Container>
        </Wrap>
    </Container>
  )
}

export default ApplicantsCard