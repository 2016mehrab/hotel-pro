/* eslint-disable react/prop-types */
import styled from "styled-components";

const StyledSelect = styled.select`
  font-size: 1.4rem;
  padding: 0.3em 0.7em;
  border: 1px solid
    ${(props) =>
      props.type === "white"
        ? "var(--color-grey-100)"
        : "var(--color-grey-300)"};
  border-radius: var(--border-radius-sm);
  background-color: var(--color-grey-0);
  font-weight: 500;
  box-shadow: var(--shadow-sm);
`;


const Select = ({options,value, onChange,...rest}) => {
  return (
    <StyledSelect {...rest} onChange={onChange} value={value}>{options.map(option=>{
      return (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      )
    })}</StyledSelect>

  )
}

export default Select