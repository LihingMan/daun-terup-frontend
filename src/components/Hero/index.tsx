import React, { useState } from 'react';
import {
  HeroContainer,
  HeroBg,
  ImageBg,
  HeroContent,
  HeroH1,
  HeroP,
  HeroBtnWrapper,
  ArrowForward,
  ArrowRight,
} from './HeroElements';
import Image from '../../../assets/landing/cards2.jpg';
import { Button } from '../ButtonElement';

type HeroProps = {
  $primary?: boolean;
  $dark?: boolean;
  fontBig?: boolean;
  big?: boolean;
};

const Hero: React.FC<HeroProps> = ({ $primary, $dark }) => {
  const [hover, setHover] = useState(false);

  const onHover = () => {
    setHover(!hover);
  };

  return (
    <HeroContainer>
      <HeroBg>
        <ImageBg src={Image}></ImageBg>
      </HeroBg>
      <HeroContent>
        <HeroH1>Deez Nuts</HeroH1>
        <HeroP>Deez nuts haha xD</HeroP>
        <HeroBtnWrapper>
          <Button to="games" onMouseEnter={onHover} onMouseLeave={onHover} $primary={true} $dark={true}>
            Get started {hover ? <ArrowForward /> : <ArrowRight />}
          </Button>
        </HeroBtnWrapper>
      </HeroContent>
    </HeroContainer>
  );
};

export default Hero;
