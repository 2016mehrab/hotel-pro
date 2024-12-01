/* eslint-disable no-unused-vars */
import { useSearchParams } from "react-router-dom";
import Search from "./Search";
import ButtonIcon from "./ButtonIcon";
import { useState } from "react";
import styled from "styled-components";
import { HiOutlineXMark } from "react-icons/hi2";
import { HiOutlineSearch } from "react-icons/hi";

const Form = styled.form`
display:flex;
justify-content: space-between;
align-items:center;
gap: 0.3rem;
`
const SearchBar = () => {

  return (
    <Search >
      <Search.Input placeholder="search guests" >
        <Search.SearchIcon>
          <ButtonIcon>
            <HiOutlineSearch />
          </ButtonIcon>
        </Search.SearchIcon>
        <Search.CloseIcon>
          <ButtonIcon>
            <HiOutlineXMark />
          </ButtonIcon>
        </Search.CloseIcon>
        <Search.Lists />
      </Search.Input>
    </Search>

  )
}

export default SearchBar
