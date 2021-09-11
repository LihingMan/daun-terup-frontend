import React from 'react';
import { HeroContainer, HeroBg, ImageBg } from './HeroElements';
// import Image from '../../../assets/landing';

const Hero = () => {
  return (
    <HeroContainer>
      <HeroBg>
        <ImageBg src="../../../assets/landing/papaya.png"></ImageBg>
      </HeroBg>
    </HeroContainer>
  );
};

export default Hero;
