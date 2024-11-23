// eslint-disable-next-line no-unused-vars
import React from 'react'
import styled from 'styled-components'
import Logout from '../features/authentication/Logout'

const StyledHeader = styled.header`
  outline: 1px solid black;
  padding-inline: 4.8rem;
  padding-block: 1.2rem;
  
`
const Header = () => {
  return (
    <StyledHeader>
      <Logout />

    </StyledHeader>
  )
}

export default Header
