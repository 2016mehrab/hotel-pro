/* eslint-disable no-unused-vars */
import { useSearchParams } from "react-router-dom";
import Search from "./Search";
import ButtonIcon from "./ButtonIcon";
import { HiOutlineSearch, HiSearch } from "react-icons/hi";
import { useState } from "react";
import useSearchGuests from "../features/guests/useSearchGuests";
import { useQueryClient } from "@tanstack/react-query";
import styled from "styled-components";
import { HiOutlineXMark } from "react-icons/hi2";

const Form = styled.form`
display:flex;
justify-content: space-between;
align-items:center;
gap: 0.3rem;
`
const SearchBar = () => {
  const [searchValue, setSearchValue] = useState('');
  const [searchParams, setSearchPrams] = useSearchParams();
  function handleChange(e) {
    setSearchValue(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    searchParams.set('search', searchValue);
    setSearchPrams(searchParams);
  }

  function handleBlur(e) {
    searchParams.set('search', '');
    setSearchPrams(searchParams);
    console.log('Search bar cleared');
  }

  return (
    <Form onBlur={handleBlur}>
      <Search onChange={handleChange} value={searchValue} />
      <ButtonIcon>
        <HiOutlineXMark />
      </ButtonIcon>
      <ButtonIcon type="submit" onClick={handleSubmit}>
        <HiOutlineSearch />
      </ButtonIcon >

    </Form>

  )
}

export default SearchBar
