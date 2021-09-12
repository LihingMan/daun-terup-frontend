import React from 'react';
import {
  FooterContainer,
  FooterWrapper,
  FooterLinksContainer,
  FooterLinksWrapper,
  FooterLinkItems,
  FooterLinkTitle,
  FooterLink,
  SocialMedia,
  SocialMediaWrap,
  SocialLogo,
  WebsiteRights,
  SocialIcons,
  SocialIconLink,
} from './FooterElements';
import { animateScroll as scroll } from 'react-scroll';
import { FacebookOutlined, TwitterOutlined, LinkedinOutlined, InstagramOutlined } from '@ant-design/icons';

const Footer: React.FC = () => {
  const toggleHome = () => {
    scroll.scrollToTop({ duration: 300 });
  };

  return (
    <FooterContainer>
      <FooterWrapper>
        <FooterLinksContainer>
          <FooterLinksWrapper>
            <FooterLinkItems>
              <FooterLinkTitle>About Us</FooterLinkTitle>
              <FooterLink to="/serviceTerms">Terms of service</FooterLink>
              <FooterLink to="/privacy">Privacy</FooterLink>
            </FooterLinkItems>
          </FooterLinksWrapper>
        </FooterLinksContainer>
        <SocialMedia>
          <SocialMediaWrap>
            <SocialLogo to="/" onClick={toggleHome}>
              daun-terup
            </SocialLogo>
            <WebsiteRights>daun-terup © {new Date().getFullYear()}</WebsiteRights>
            <SocialIcons>
              <SocialIconLink href="//www.facebook.com" target="_blank" aria-label="Facebook">
                <FacebookOutlined />
              </SocialIconLink>
              <SocialIconLink href="//www.twitter.com" target="_blank" aria-label="Twitter">
                <TwitterOutlined />
              </SocialIconLink>
              <SocialIconLink href="//www.instagram.com" target="_blank" aria-label="Instagram">
                <InstagramOutlined />
              </SocialIconLink>
              <SocialIconLink href="//www.linkedin.com" target="_blank" aria-label="LinkedIn">
                <LinkedinOutlined />
              </SocialIconLink>
            </SocialIcons>
          </SocialMediaWrap>
        </SocialMedia>
      </FooterWrapper>
    </FooterContainer>
  );
};

export default Footer;
