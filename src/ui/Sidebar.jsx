/* eslint-disable no-unused-vars */
import React from "react";
import styled from "styled-components";
import Logo from "./Logo";
import MainNav from "./MainNav";

const StyledSidebar = styled.aside`
  border-right: 1px solid var(--color-grey-100);
  padding-inline: 2.4rem;
  padding-block: 3.2rem;
  background-color: var(--color-grey-0);
  grid-row: 1/ -1;
  display: flex;
  flex-direction: column;
  gap:3.2rem;
`;
const Sidebar = () => {
  return (
      <StyledSidebar>
        <Logo />
        <MainNav />
      </StyledSidebar>
  );
};

export default Sidebar;
