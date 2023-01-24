import React from 'react'
import { Text, Title } from '../OverviewInfo/OverviewInfoElements'
import { Container } from './OverviewAboutElements'

const OverviewAbout = ({data}) => {
  const about = "I am a dedicated and compassionate individual who strives to provide the best care I possibly can to patients. I'm excited by the prospect of working for a highly recognized long-term care facility like Crane & Jenkins, and I believe that my patient care skills make me a natural fit for this position."
  
  return (
    <Container>
      <Title>About</Title>
          <Text className='overview-about'>{data?.intro || about}</Text>
    </Container>
  )
}

export default OverviewAbout