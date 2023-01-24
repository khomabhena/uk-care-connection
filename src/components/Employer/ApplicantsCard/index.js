import React from 'react'
import { Container, ContainerRight, Heading, HorizontalLine, Image, SubHeading, Wrap } from './ApplicantsCardElements'
import person from '../../../images/person.jpg'

const ApplicantsCard = ({data, active, handleClick}) => {
  return (
    <Container onClick={handleClick} active={active}>
        <Wrap active={active}>
            <Image src={data?.profileUrl || person} />
            <Container>
                <ContainerRight active={active}>
                    <Heading>{data?.firstName + " " + data?.lastName || 'Emily Burner'}</Heading>
                    <SubHeading>{data?.email || 'emailadd@host.com'}</SubHeading>
                    <SubHeading>{data?.profession || 'Nurse Aid'}</SubHeading>
                    <SubHeading>{data?.country || 'Zimbabwe'}</SubHeading>
                </ContainerRight>
                <HorizontalLine />
            </Container>
        </Wrap>
    </Container>
  )
}

export default ApplicantsCard