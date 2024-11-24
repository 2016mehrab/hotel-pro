// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react'
import styled from 'styled-components'
import HeaderMenu from './HeaderMenu'
import UserAvatar from "../features/authentication/UserAvatar"

const StyledHeader = styled.header`
  outline: 1px solid black;
  padding-inline: 4.8rem;
  padding-block: 1.2rem;
display:flex;
gap:2.4rem;
align-items:center;
justify-content:flex-end;
background-color: var(--color-grey-0);
  
`
const Header = () => {
  return (
    <StyledHeader>
      <UserAvatar />
      <HeaderMenu />
    </StyledHeader>
  )
}

export default Header
