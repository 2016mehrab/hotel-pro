/* eslint-disable react/prop-types */
import React from "react";
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


const Select = React.forwardRef(({ options, value, onChange, ...rest }, ref) => {
  return (
    <StyledSelect {...rest} ref={ref} onChange={onChange} value={value}>{options.map(option => {
      return (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      )
    })}</StyledSelect>

  )
})
Select.displayName = 'Select'
export default Select;
