/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import styled from "styled-components"
import { cloneElement, createContext, useContext, useEffect, useRef, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { SearchUl as Ul } from "./SearchUl";
import { SearchLi as Li } from "./SearchLi";

const StyledInput = styled.input.attrs({ type: 'search' })`
  background-color: var(--color-grey-0);
  color: var(--color-grey-600);
  font-size: 1.4rem;
  letter-spacing: 3px;
  padding:0.3em 0.4em;
  border:none;
  box-shadow: var(--shadow-sm);
  width:100%;
  border-radius:var(--border-radius-sm);
  transition: 0.5s;
  &:focus{
    outline: 2px solid var(--color-brand-600);
    outline-offset: -1px;
  }
`

const Form = styled.form`
position:relative;
display:flex;
align-items:center;
`;

const SearchContext = createContext();
const Search = ({ children }) => {

  const inputRef = useRef();
  const [searchValue, setSearchValue] = useState('');
  const [inputDimensions, setInputDimensions] = useState(
    { width: 0, height: 0 }
  )
  const [searchParams, setSearchPrams] = useSearchParams();

  function updateDimensions() {
    setInputDimensions({
      width: inputRef?.current?.clientWidth,
      height: inputRef?.current?.clientHeight,
    })
  }
  useEffect(() => {
    updateDimensions();
    window.addEventListener("resize", updateDimensions);
    return () => {
      window.removeEventListener("resize", updateDimensions);
    };
  }, [inputRef?.current?.clientWidth, inputRef?.current?.clientHeight]);

  const handleChange = (e) => {
    searchParams.delete('search');
    setSearchPrams(searchParams);
    setSearchValue(e.target.value);
  }
  const handleReset = (e) => {
    e.preventDefault();
    setSearchValue('');
    searchParams.delete('search');
    setSearchPrams(searchParams);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    searchParams.set('search', searchValue);
    setSearchPrams(searchParams);
  }

  return (
    <SearchContext.Provider value={{ inputRef, inputDimensions, searchValue, handleChange, handleReset, handleSubmit }}>
      {children}
    </SearchContext.Provider>
  )
}

function Lists({ render, customSearchDataHook }) {
  const { data: results, isLoading } = customSearchDataHook();
  const { searchValue, inputDimensions } = useContext(SearchContext);
  const [searchParams] = useSearchParams();

  if (isLoading || searchParams.get('search') === null || searchValue === '') {
    return null;
  }

  return (
    <Ul
      $inputWidth={inputDimensions.width}
      $inputHeight={
        inputDimensions.height
      }>
      {results?.length > 0 ?
        (
          results.map(
            render
          )
        ) :
        <Li>
          No Match
        </Li>
      }
    </Ul>
  )
}

function Input({ children, placeholder }) {
  const { inputRef, searchValue, handleChange, handleSubmit } = useContext(SearchContext);
  return (
    <Form onSubmit={handleSubmit}>
      <StyledInput ref={inputRef} placeholder={placeholder} value={searchValue} onChange={handleChange} />
      {children}
    </Form>
  )

}
function CloseIcon({ children }) {
  const { searchValue, handleReset } = useContext(SearchContext);
  if (searchValue === '') return null;
  return cloneElement(children, { onClick: handleReset });
}
function SearchIcon({ children }) {
  return cloneElement(children, { type: 'submit' })
}


Search.CloseIcon = CloseIcon;
Search.SearchIcon = SearchIcon;
Search.Input = Input;
Search.Lists = Lists;
export default Search
