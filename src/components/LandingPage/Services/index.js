import React from 'react'
import { ServicesCard, ServicesContainer, ServicesH1, ServicesH2, ServicesIcon, ServicesIconWrap, ServicesP, ServicesWrapper } from './ServicesElements'
import Icon1 from '../../images/svg-injured.svg'
import Icon2 from '../../images/svg-nurse.svg'
import Icon3 from '../../images/svg-gran.svg'

const Services = () => {
  return (
    <ServicesContainer id="services">
        <ServicesH1>Our Services</ServicesH1>
            <ServicesWrapper>
                <ServicesCard>
                    <ServicesIconWrap><ServicesIcon src={Icon1} /></ServicesIconWrap>
                    <ServicesH2>Nurse/Nurse Aid</ServicesH2>
                    <ServicesP>We assist individuals with physical disabilities, mental impairments, and other health care needs.</ServicesP>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIconWrap><ServicesIcon src={Icon2} /></ServicesIconWrap>
                    <ServicesH2>Adult Care</ServicesH2>
                    <ServicesP>We provide adults with transitional care and short-term rehabilitation following hospital discharge</ServicesP>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIconWrap><ServicesIcon src={Icon3} /></ServicesIconWrap>
                    <ServicesH2>Hospice Care</ServicesH2>
                    <ServicesP>We prioritizes comfort and quality of life by reducing pain and suffering</ServicesP>
                </ServicesCard>
            </ServicesWrapper>
    </ServicesContainer>
  )
}

export default Services