/* eslint-disable react/prop-types */
import styled from "styled-components"
import SearchLists from "./SearchLists";

const Input = styled.input.attrs({ type: 'search' })`
  background-color: var(--color-grey-0);
  color: var(--color-grey-600);
  font-size: 1.4rem;
  letter-spacing: 3px;
  border-radius: var(--border-radius-sm);
  padding-inline: 0.3em;
  padding-block: 1px;
  box-shadow: var(--shadow-sm);
  &:focus{
    outline: 2px solid var(--color-brand-600);
    outline-offset: -1px;
  }
`

const Wrapper = styled.div`
outline : 1px solid white;
position:relative;
`;
const Search = ({ value, onChange }) => {

  console.log('value', value);
  return (
    <Wrapper>
      <Input
        value={value} onChange={onChange} placeholder="search guest with nid or name" />
      <SearchLists />
    </Wrapper>
  )
}

export default Search
