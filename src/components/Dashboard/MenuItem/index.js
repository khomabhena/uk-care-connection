import React from 'react'
import { Container, Icon, Name } from './MenuItemElements'

const MenuItem = ({isActive, handleClick, isOpen, key, icon, name}) => {
    const parse = require('html-react-parser')
  return (
    <Container onClick={() => handleClick(name)} isActive={isActive} isOpen={isOpen} key={key}>
        <Icon className='white-icon'>{parse(icon)}</Icon>
        <Name>{name}</Name>
    </Container>
  )
}

export default MenuItem