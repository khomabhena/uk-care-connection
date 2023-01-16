import React, { useEffect, useState } from 'react'
import {FaBars} from 'react-icons/fa'
import { MobileIcon, Nav, NavbarContainer, NavBtn, NavBtnLink, NavItem, NavLinks, NavLogo, NavMenu } from './NavbarElements'
import { IconContext } from 'react-icons/lib'
import { animateScroll as scroll } from 'react-scroll'
import logo from '../../images/logo-big.PNG'

const Navbar = ({ toggle }) => {

    const [scrollNav, setScrollNav] = useState(false)

    const changeNav = () => {
        if (window.scrollY >= 80) {
            setScrollNav(true)
        } else {
            setScrollNav(false)
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', changeNav)
    }, [])

    const toogleHome = () => {
        scroll.scrollToTop()
    }
    
  return (
    <>
    <IconContext.Provider value={{color: '#000'}}>        
    <Nav scrollNav={scrollNav}>
            <NavbarContainer>
                <NavLogo scrollNav={scrollNav} to="/" onClick={toogleHome} src={logo} />
                <MobileIcon onClick={toggle}><FaBars /></MobileIcon>
                <NavMenu>
                    <NavItem>
                        <NavLinks to="about"
                        smooth={true}
                        duration={500} spy={true} exact='true' offset={-80}
                        >About</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to="discover"
                        smooth={true}
                        duration={500} spy={true} exact='true' offset={-80}
                        >Log In</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to="services"
                        smooth={true}
                        duration={500} spy={true} exact='true' offset={-80}
                        >Services</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to="signup"
                        smooth={true}
                        duration={500} spy={true} exact='true' offset={-80}
                        >Sign Up</NavLinks>
                    </NavItem>
                </NavMenu>
                <NavBtn>
                    <NavBtnLink to="/employer-signUp">Hire Care Workers</NavBtnLink>
                </NavBtn>
            </NavbarContainer>
        </Nav>
    </IconContext.Provider>
    </>
  )
}

export default Navbar