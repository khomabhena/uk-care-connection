import React from 'react'
import { Container, ContactContainer, ContactTitle, ContactWrap, DocumentContainer, DocumentLeft, DocumentRight, DocumentWrap, HorizontalLine, IconWrap, IconWrapA, IconWrapOutline, Name, Profession, ProfileImage, ProfileImgWrap, SocialMediaWrap, Text, Title } from './OverviewInfoElements'
import { BsDownload } from 'react-icons/bs'
import { FaFacebook, FaWhatsapp } from 'react-icons/fa'
import { FiTwitter, FiPhoneCall } from 'react-icons/fi'
import { HiDocumentText } from 'react-icons/hi'
import Img from '../../../images/person.jpg' 

const OverviewInfo = ({children}) => {
  return (
    <Container>
      <ProfileImgWrap>
              <ProfileImage className='info-profile' src={Img} />
            </ProfileImgWrap>
            <Name className="info-name">Emily Burner</Name>
            <Profession className="info-profession">Hospice Care</Profession>
            <SocialMediaWrap>
              <IconWrap><FaFacebook /></IconWrap>
              <IconWrap><FiTwitter /></IconWrap>
              <IconWrap><FaWhatsapp /></IconWrap>
              <IconWrap><FiPhoneCall /></IconWrap>
            </SocialMediaWrap>
    
            <HorizontalLine />
    
            <DocumentContainer>
              <Title className='info-resume'>Resume</Title>
              <DocumentWrap>
                <DocumentLeft>
                  <IconWrapOutline>
                    <HiDocumentText />
                  </IconWrapOutline>
                  <Text className="info-cv">MyCV.pdf</Text>
                </DocumentLeft>
                <DocumentRight>
                  <IconWrapA className='info-download-resume' download>
                    <IconWrapOutline>
                      <BsDownload />
                    </IconWrapOutline>
                  </IconWrapA>
                </DocumentRight>
              </DocumentWrap>
            </DocumentContainer>
    
            <HorizontalLine />
    
            <ContactContainer>
              <Title>Contacts</Title>
              <ContactWrap>
                <ContactTitle>Email</ContactTitle>
                <Text className="info-email">colwanymab@gmail.com</Text>
              </ContactWrap>
              <ContactWrap>
                <ContactTitle>Phone Number</ContactTitle>
                <Text className="info-phone">+263774876886</Text>
              </ContactWrap>
              <ContactWrap>
                <ContactTitle>Country</ContactTitle>
                <Text className="info-country">Zimbabwe</Text>
              </ContactWrap>
            </ContactContainer>
    </Container>
  )
}

export default OverviewInfo