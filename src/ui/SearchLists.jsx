/* eslint-disable react/prop-types */
import styled from "styled-components"
import useSearchGuests from "../features/guests/useSearchGuests";

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
  right:0;
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

const SearchLists = () => {
  const { data: results, isLoading } = useSearchGuests();
  if (isLoading) {
    return null;
  }
  return (
    <Ul>
      {results?.length > 0 && (
        results.map(guest => {
          return (
            <Li key={guest.id}>
              {guest.fullName}
            </Li>
          )
        }
        )
      )
      }

    </Ul>
  )
}

export default SearchLists
