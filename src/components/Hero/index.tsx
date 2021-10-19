import React, { useState } from "react";
import {
  HeroContainer,
  HeroBg,
  ImageBg,
  HeroContent,
  HeroH1,
  HeroP,
  HeroBtnWrapper,
} from "./HeroElements";
import Image from "assets/landing/cards2.jpg";
import { Button, ArrowForward, ArrowRight } from "src/components/ButtonElement";

const Hero: React.FC = () => {
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
        <HeroH1>Daun Terup</HeroH1>
        <HeroP>Multiplayer card game platform</HeroP>
        <HeroBtnWrapper>
          <Button
            to="about"
            smooth={true}
            duration={300}
            spy={true}
            onMouseEnter={onHover}
            onMouseLeave={onHover}
            $primary={true}
            $dark={true}
          >
            Get started {hover ? <ArrowForward /> : <ArrowRight />}
          </Button>
        </HeroBtnWrapper>
      </HeroContent>
    </HeroContainer>
  );
};

export default Hero;
