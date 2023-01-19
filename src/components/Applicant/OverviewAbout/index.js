import React from 'react'
import { Text, SubTitle, Title } from '../OverviewInfo/OverviewInfoElements'
import { Container, EducationContainer, EducationDetailsWrap, EducationWrap, Language, Letter, LetterWrap, SkillsContainer, SkillsWrap } from './OverviewAboutElements'

const OverviewAbout = ({data}) => {
  const about = "I am a dedicated and compassionate individual who strives to provide the best care I possibly can to patients. I'm excited by the prospect of working for a highly recognized long-term care facility like Crane & Jenkins, and I believe that my patient care skills make me a natural fit for this position."
  
  const dataObj = []
  return (
    <Container>
      <Title>About</Title>
          <Text className='overview-intro'>{data?.intro || about}</Text>
          
          <EducationContainer>
          <Title>Education</Title>
              {
                data?.qualifications.map((item, index) => {
                  return (
                      <EducationWrap key={index}>
                        <LetterWrap>
                            <Letter>{item.degree.charAt(0)}</Letter>
                        </LetterWrap>
                        <EducationDetailsWrap>
                          <SubTitle>{item.degree}</SubTitle>
                          <Text>{item.institution} - ({item.yearStart.substring(0, 4)} - {item.yearEnd.substring(0, 4)})</Text>
                          <Text>{item.intro}</Text>
                        </EducationDetailsWrap>
                      </EducationWrap>
                  )
                }) ||
                  <EducationWrap>
                    <LetterWrap>
                        <Letter>N</Letter>
                    </LetterWrap>
                    <EducationDetailsWrap>
                      <SubTitle>Nursing</SubTitle>
                      <Text>Midlands State University - (2011 - 2014)</Text>
                      <Text>{about}</Text>
                    </EducationDetailsWrap>
                  </EducationWrap>
              }
          </EducationContainer>

          <Title>Experiences</Title>
          <EducationContainer>
            {
              data?.experience.map((item, index) => {
                  return (
                    <EducationWrap key={index}>          
                      <LetterWrap>
                          <Letter>{item.title.charAt(0)}</Letter>
                      </LetterWrap>
                      <EducationDetailsWrap>
                        <SubTitle>{item.title}</SubTitle>
                        <Text>{item.company} - ({item.yearStart.substring(0, 4)} -{item.yearEnd.substring(0, 4)})</Text>
                        <Text>{item.intro}</Text>
                      </EducationDetailsWrap>
                    </EducationWrap>
                  )
              }) || 
                <EducationWrap>
                  <LetterWrap>
                          <Letter>N</Letter>
                      </LetterWrap>
                      <EducationDetailsWrap>
                        <SubTitle>Nursing Assistant</SubTitle>
                        <Text>Collin Saunders Hospital - (2015 -2022)</Text>
                        <Text>{about}</Text>
                      </EducationDetailsWrap>
                </EducationWrap>
            }
          </EducationContainer>

          <Title>Spoken Languages</Title>
          <SkillsContainer>
            {
              data?.languages.map((item, index) => {
                return (
                  <SkillsWrap key={index}>
                    <Language className='overview-languages'>{item}</Language>
                  </SkillsWrap>
                )
              }) || 
                <SkillsWrap>
                  <Language className='overview-languages'>English</Language>
                </SkillsWrap>
            }
          </SkillsContainer>
    </Container>
  )
}

export default OverviewAbout