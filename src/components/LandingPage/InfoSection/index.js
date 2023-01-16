import React from 'react'
import { Button } from '../ButtonElement'
import { BtnWrap, Column1, Column2, Heading, Img, ImgWrap, InfoContainer, InfoRow, InfoWrapper, Subtitle, TextWrapper, TopLine } from './InfoElements'

const InfoSection = ({lightBg, id, imgStart, topLine, lightText, 
    headline, darkText, description, buttonLabel, img, dark, primary, lightTextDesc}) => {
  return (
    <>
        <InfoContainer lightBg={lightBg} id={id}>
            <InfoWrapper>
                <InfoRow imgStart={imgStart}>
                    <Column1>
                        <TextWrapper>
                            <TopLine lightText={lightText}>{topLine}</TopLine>
                            <Heading lightText={lightText}>{headline}</Heading>
                            <Subtitle lightTextDesc={lightTextDesc}>{description}</Subtitle>
                            <BtnWrap>
                                <Button 
                                smooth={true} 
                                duration={500} 
                                spy={true} 
                                exact="true" 
                                offset={-80} 
                                primary={primary ? 1 : 0}
                                dark={dark ? 1 : 0} 
                                to='home'>{buttonLabel}</Button>
                            </BtnWrap>
                        </TextWrapper>
                    </Column1>
                    <Column2>
                        <ImgWrap>
                            <Img src={img} />
                        </ImgWrap>
                    </Column2>
                </InfoRow>
            </InfoWrapper>
        </InfoContainer>
    </>
  )
}

export default InfoSection