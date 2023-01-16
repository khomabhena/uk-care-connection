import React, { useState } from 'react'
import { ArrowForward, ArrowRight, BlobImg, HeroButton } from './HeroElements2'
import { Hero2BtnWrapper, Hero2H1, Hero2H2, Hero2P, HeroImg, HeroSection2Container, TextContent } from './HeroElements2';
import img from '../../../images/svg-medical-care.svg'
import blob from '../../../images/blob2.png'

const HeroSection = () => {
    const [hover, setHover] = useState(false);

    const onHover = () => {
        setHover(!hover)
    }


  return (
    <HeroSection2Container id='home'>
        <TextContent>
            <Hero2H1 primary='true'>Hire The Best</Hero2H1>
            <Hero2H1 primary='true'>Care Givers</Hero2H1>
            <Hero2H2 primary='true'></Hero2H2>
            <Hero2P>Join a network of the world's best care givers &amp; get full-time, long-term care giving jobs with better compensation and career growth.</Hero2P>
            <Hero2BtnWrapper>
                <HeroButton to="/signin" 
                onMouseEnter={onHover} 
                onMouseLeave={onHover}
                primary='true'
                dark='true'>
                    Apply for jobs {hover ? <ArrowForward /> : <ArrowRight />}
                </HeroButton>
            </Hero2BtnWrapper>
        </TextContent>
        {/* <Hero2Gradient /> */}
        <BlobImg src={blob} />
        <HeroImg src={img} />
    </HeroSection2Container>
  )
}

export default HeroSection