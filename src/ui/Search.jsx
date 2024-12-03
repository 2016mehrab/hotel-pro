/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import styled from "styled-components"
import { cloneElement, createContext, useContext, useEffect, useRef, useState } from "react";
import { useSearchParams } from "react-router-dom";
import useSearchGuests from "../features/guests/useSearchGuests";

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
const Ul = styled.ul`
  list-style: none;
  letter-spacing: 2px;
  color:var(--color-grey-600) ;
  max-height: 30rem;
  overflow-y: scroll;
  border: 1px solid white;
  scrollbar-color: var(--color-grey-600) var(--color-brand-600) ;
  scrollbar-width:auto;
  position:absolute;
  border-radius: var(--border-radius-sm);
  left:0;
width:${props => props.$inputWidth !== 0 ? `${props.$inputWidth}px ` : `15rem`};
top: 100%;

& > *{
  border-bottom: 1px solid white;

}
& > *:last-child{
  border-bottom:none;

}
`
const Li = styled.li`
  background-color:var(--color-grey-0);
  padding: 1em 1.5rem;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.14);
  text-transform: capitalize;
  display: flex;
  justify-content: space-between;
  border-radius: var(--border-radius-sm);
`;

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

function Lists() {
  const { data: results, isLoading } = useSearchGuests();
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
          results.map(guest => {
            return (
              <Li key={guest.id}>
                {guest.fullName}
              </Li>
            )
          }
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
