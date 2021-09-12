import React from 'react';

import {
  Nav,
  NavbarContainer,
  NavLogo,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLinks,
  NavBtn,
  NavBtnLink,
} from './NavbarElements';
import { MenuOutlined } from '@ant-design/icons';
import { animateScroll as scroll } from 'react-scroll';

interface NavbarProps {
  toggle: any;
}

const Navbar: React.FC<NavbarProps> = ({ toggle }) => {
  const toggleHome = () => {
    scroll.scrollToTop({ duration: 300 });
  };

  return (
    <>
      <Nav>
        <NavbarContainer>
          <NavLogo to="/" onClick={toggleHome}>
            daun-terup
          </NavLogo>
          <MobileIcon onClick={toggle}>
            <MenuOutlined />
          </MobileIcon>
          <NavMenu>
            <NavItem>
              <NavLinks to="about" smooth={true} duration={300} spy={true}>
                About
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="games" smooth={true} duration={300} spy={true}>
                Games
              </NavLinks>
            </NavItem>
          </NavMenu>
          {/* <NavBtn>
            <NavBtnLink to="/signin">Sign In</NavBtnLink>
          </NavBtn> */}
        </NavbarContainer>
      </Nav>
    </>
  );
};

export default Navbar;
