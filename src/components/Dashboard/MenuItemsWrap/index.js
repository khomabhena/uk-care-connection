import React from 'react'
import { Container } from './MenuItemsWrapElements'

const MenuItemsWrap = ({children}) => {
  return (
    <Container>
        {children}
    </Container>
  )
}

export default MenuItemsWrap