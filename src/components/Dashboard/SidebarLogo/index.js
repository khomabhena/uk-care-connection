import React from 'react'
import { Logo } from './SidebarLogoElements'
import logo from '../../../images/ukcare-logo-heart.png'

const SidebarLogo = ({isOpen}) => {
  return (
    <Logo isOpen={isOpen} src={logo} />
  )
}

export default SidebarLogo