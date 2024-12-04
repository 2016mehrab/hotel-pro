/* eslint-disable react/prop-types */
import React, { useState } from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  position: relative;
  width: 100%;
  z-index:10000;
`;

const StyledInput = styled.input`
  font-size: 1.4rem;
  padding: 0.5em;
  border: 1px solid var(--color-grey-300);
  border-radius: var(--border-radius-sm);
  width: 100%;
  background-color: var(--color-grey-0);
  font-weight: 500;
  box-shadow: var(--shadow-sm);
`;

const Dropdown = styled.ul`
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
  max-height: 10rem;
  overflow-y: auto;
  background-color: var(--color-grey-0);
  border: 1px solid var(--color-grey-300);
  border-radius: var(--border-radius-sm);
  box-shadow: var(--shadow-sm);
  z-index: 100000;
  list-style: none;
  margin: 0;
  padding: 0;
`;

const DropdownItem = styled.li`
  padding: 0.5em;
  cursor: pointer;
  &:hover {
    background-color: var(--color-grey-100);
  }
`;

const SearchSelect = React.forwardRef(({ options, placeholder, onChange, ...rest }, ref) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleInputChange = (e) => {
    setSearchTerm(e.target.value);
    setIsDropdownOpen(true); // Open dropdown when typing
  };

  const handleOptionClick = (option) => {
    setSearchTerm(option.label); // Set selected option as input value
    setIsDropdownOpen(false); // Close dropdown
    if (onChange) {
      onChange({ target: { name: rest.name, value: JSON.stringify(option.value) } });
    }
  };

  const filteredOptions = options.filter((option) =>
    option.label.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Wrapper >
      <StyledInput
        type="text"
        placeholder={placeholder || "Type to search..."}
        value={searchTerm}
        onChange={handleInputChange}
        onFocus={() => setIsDropdownOpen(true)} // Open dropdown on focus
        onBlur={() => setTimeout(() => setIsDropdownOpen(false), 200)} // Close dropdown on blur
        {...rest}
        ref={ref}

      />
      {isDropdownOpen && filteredOptions.length > 0 && (
        <Dropdown>
          {filteredOptions.map((option) => (
            <DropdownItem
              key={option.label}
              onClick={() => handleOptionClick(option)}
            >
              {option.label}
            </DropdownItem>
          ))}
        </Dropdown>
      )}
    </Wrapper>
  );
})
SearchSelect.displayName = 'SearchSelect'

export default SearchSelect;
