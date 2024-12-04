/* eslint-disable no-unused-vars */
import Search from "./Search";
import ButtonIcon from "./ButtonIcon";
import styled from "styled-components";
import { HiOutlineXMark } from "react-icons/hi2";
import { HiOutlineSearch } from "react-icons/hi";
import { SearchLi as Li } from "./SearchLi";
import useSearchGuests from "../features/guests/useSearchGuests";

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
        <Search.Lists customSearchDataHook={useSearchGuests} render={guest => {
          return (
            <Li key={guest.id}>
              {guest.fullName}
            </Li>
          )
        }} />
      </Search.Input>
    </Search>

  )
}

export default SearchBar
