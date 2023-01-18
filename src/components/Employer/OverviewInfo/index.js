import React from 'react'
import { Container, ContactContainer, ContactTitle, ContactWrap, HorizontalLine, IconWrap, Name, SocialMediaWrap, Text, Title } from './OverviewInfoElements'
import { FaFacebook } from 'react-icons/fa'
import { FiTwitter, FiPhoneCall } from 'react-icons/fi'

const OverviewInfo = ({children}) => {
  return (
    <Container>
      <Name className='info-company'>...</Name>
            {/* <Profession className='info-established-top'></Profession> */}
            <SocialMediaWrap>
              <IconWrap><FaFacebook /></IconWrap>
              <IconWrap><FiTwitter /></IconWrap>
              {/* <IconWrap><FaWhatsapp /></IconWrap> */}
              <IconWrap><FiPhoneCall /></IconWrap>
            </SocialMediaWrap>
    
            <HorizontalLine />
    
            <ContactContainer>
              <Title>Profile Overview</Title>
              <ContactWrap>
                <ContactTitle>Owner Name</ContactTitle>
                <Text className='info-name'>...</Text>
              </ContactWrap>
              <ContactWrap>
                <ContactTitle>Employees</ContactTitle>
                <Text className='info-employees'>...</Text>
              </ContactWrap>
              <ContactWrap>
                <ContactTitle>Location</ContactTitle>
                <Text className='info-country'>...</Text>
              </ContactWrap>
              <ContactWrap>
                <ContactTitle>Website</ContactTitle>
                <Text className='info-website'>...</Text>
              </ContactWrap>
              <ContactWrap>
                {/* <ContactTitle>Established</ContactTitle>
                <Text className='info-established'></Text> */}
              </ContactWrap>
            </ContactContainer>
    </Container>
  )
}

export default OverviewInfo