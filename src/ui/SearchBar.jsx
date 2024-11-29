/* eslint-disable no-unused-vars */
import { useSearchParams } from "react-router-dom";
import Search from "./Search";
import ButtonIcon from "./ButtonIcon";
import { useState } from "react";
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

  function handleReset(e) {
    e.preventDefault();
    setSearchValue('')
    searchParams.set('search', searchValue);
    setSearchPrams(searchParams);
    console.log('Search bar cleared');
  }

  return (
    <Form>
      <Search reset={handleReset} placeholder={'search guest'} onChange={handleChange} onClick={handleSubmit} value={searchValue} />
    </Form>

  )
}

export default SearchBar
