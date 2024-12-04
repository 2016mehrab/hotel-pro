import styled from "styled-components"

export const SearchUl = styled.ul`
  list-style: none;
  letter-spacing: 2px;
  color:var(--color-grey-600) ;
  max-height: 30rem;
  overflow-y: scroll;
  border: 1px solid var(--color-grey-600) ;
  scrollbar-color: var(--color-grey-600) var(--color-brand-600) ;
  scrollbar-width:auto;
  position:absolute;
  border-radius: var(--border-radius-sm);
  left:0;
  width:${props => props.$inputWidth !== 0 ? `${props.$inputWidth}px ` : `15rem`};
  top: 100%;

& > *{
  border-bottom: 1px solid var(--color-grey-600) ;

}
& > *:last-child{
  border-bottom:none;

}
`
