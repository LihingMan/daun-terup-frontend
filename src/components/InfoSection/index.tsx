import React, { useState } from "react";
import { Button, ArrowForward, ArrowRight } from "src/components/ButtonElement";
import {
  InfoContainer,
  InfoWrapper,
  InfoRow,
  Column1,
  Column2,
  TextWrapper,
  TopLine,
  Heading,
  Subtitle,
  BtnWrap,
  ImgWrap,
  Img,
} from "./InfoElements";
import { IInfoSectionObj } from "./data";

const InfoSection: React.FC<IInfoSectionObj> = ({
  id,
  lightBg,
  lightText,
  lightTextDesc,
  topLine,
  headline,
  description,
  buttonLabel,
  imgStart,
  img,
  alt,
  dark,
  primary,
  darkText,
}) => {
  const [hover, setHover] = useState(false);

  const onHover = () => {
    setHover(!hover);
  };

  return (
    <InfoContainer $lightBg={lightBg} id={id}>
      <InfoWrapper>
        <InfoRow $imgStart={imgStart}>
          <Column1>
            <TextWrapper>
              <TopLine>{topLine}</TopLine>
              <Heading $lightText={lightText}>{headline}</Heading>
              <Subtitle $darkText={darkText}>{description}</Subtitle>
              <BtnWrap>
                <Button
                  to="games"
                  smooth={true}
                  onMouseEnter={onHover}
                  onMouseLeave={onHover}
                  duration={300}
                  spy={true}
                  $dark={dark}
                  $primary={primary}
                >
                  {buttonLabel} {hover ? <ArrowForward /> : <ArrowRight />}
                </Button>
              </BtnWrap>
            </TextWrapper>
          </Column1>
          <Column2>
            <ImgWrap>
              <Img src={img} alt={alt} />
            </ImgWrap>
          </Column2>
        </InfoRow>
      </InfoWrapper>
    </InfoContainer>
  );
};

export default InfoSection;
