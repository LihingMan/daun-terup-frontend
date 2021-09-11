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

const Navbar = ({ toggle }: any) => {
  return (
    <>
      <Nav>
        <NavbarContainer>
          <NavLogo to="/">daun-terup</NavLogo>
          <MobileIcon onClick={toggle}>
            <MenuOutlined />
          </MobileIcon>
          <NavMenu>
            <NavItem>
              <NavLinks to="about">About</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="games">Games</NavLinks>
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
