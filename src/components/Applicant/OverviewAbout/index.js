import React from 'react'
import { Text, SubTitle, Title } from '../OverviewInfo/OverviewInfoElements'
import { Container, EducationContainer, EducationDetailsWrap, EducationWrap, Language, Letter, LetterWrap, SkillsContainer, SkillsWrap } from './OverviewAboutElements'

const OverviewAbout = ({children}) => {
  const dataObj = []
  return (
    <Container>
      <Title>About</Title>
          <Text className='overview-intro'></Text>

          
          <EducationContainer>
          <Title>Education</Title>
              {
                
                dataObj['qualifications']?.map((item, index) => {
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
                })
              }
          </EducationContainer>

          <Title>Experiences</Title>
          <EducationContainer>
            {
              dataObj['experience']?.map((item, index) => {
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
              })
            }
          </EducationContainer>

          <Title>Spoken Languages</Title>
          <SkillsContainer>
            {
              dataObj['languages']?.map((item, index) => {
                return (
                  <SkillsWrap key={index}>
                    <Language className='overview-languages'>{item}</Language>
                  </SkillsWrap>
                )
              })
            }
          </SkillsContainer>
    </Container>
  )
}

export default OverviewAbout