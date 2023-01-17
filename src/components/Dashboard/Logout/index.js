import React from 'react'
import { Container } from './LogoutElements'

const Logout = ({logout}) => {
  return (
    <Container onClick={logout}>Logout</Container>
  )
}

export default Logout