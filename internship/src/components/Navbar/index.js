import React from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import logo from '../../images/logo.png';
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink
} from './NavbarElements';

const Navbar = () => {
  return (
    <>
      <Nav>
        <NavLink to='/'>
          <img src={logo} style={{width:150 ,height:90}} />
        </NavLink>
        <Bars />
        <NavMenu>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <NavLink to='/contact-us' activeStyle>
            
            <FontAwesomeIcon icon="phone"/>&nbsp;
            022-2436 2258
          </NavLink>
          <NavLink to='/contact-us' activeStyle>
            <FontAwesomeIcon icon="envelope-open-text"/>&nbsp;
            info@smartcontrols.com
          </NavLink>
          {/* Second Nav */}
          {/* <NavBtnLink to='/sign-in'>Sign In</NavBtnLink> */}
        </NavMenu>
        <NavBtn>
          <NavBtnLink to='/signin'>GET ESTIMATE</NavBtnLink>
        </NavBtn>
      </Nav>
    </>
  );
};

export default Navbar;
