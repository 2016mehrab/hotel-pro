/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import styled from "styled-components"
import SearchLists from "./SearchLists";
import ButtonIcon from "./ButtonIcon";
import { HiOutlineSearch } from "react-icons/hi";
import { HiOutlineXMark } from "react-icons/hi2";

const Input = styled.input.attrs({ type: 'search' })`
  background-color: var(--color-grey-0);
  color: var(--color-grey-600);
  font-size: 1.4rem;
  letter-spacing: 3px;
  padding-inline: 0.3em;
  padding-block: 1px;
  border:none;
  box-shadow: var(--shadow-sm);
  width:100%;
  transition: 0.5s;
  &:focus{
    outline: 2px solid var(--color-brand-600);
    outline-offset: -1px;
  }
`
const SearchButtonIcon = styled(ButtonIcon)`
  background-color:var(--color-grey-600);
  border-radius:0;

  & svg{
    color:var(--color-grey-400);
  }
  & svg:hover{
    color:var(--color-brand-600);
  }
`

const Wrapper = styled.div`
position:relative;
`;
const InputWrapper = styled.div`
border-radius:var(--border-radius-sm);
display:flex;
align-items:center;
`;
const Search = ({ onClick, value, onChange, placeholder, reset }) => {
  return (
    <Wrapper>
      <InputWrapper >
        <Input
          value={value} onChange={onChange} placeholder={value ? "" : placeholder} />
        {value !== "" ?
          (
            <SearchButtonIcon onClick={reset}>
              <HiOutlineXMark />
            </SearchButtonIcon>
          ) :

          (
            <SearchButtonIcon type="submit" onClick={onClick}>
              <HiOutlineSearch />
            </SearchButtonIcon >

          )
        }
      </InputWrapper>
      <SearchLists />
    </Wrapper>
  )
}

export default Search
