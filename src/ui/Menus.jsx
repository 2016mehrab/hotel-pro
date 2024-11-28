/* eslint-disable react/prop-types */
import { createContext, useContext, useState } from "react";
import { createPortal } from "react-dom";
import { HiEllipsisVertical } from "react-icons/hi2";
import styled from "styled-components";
import useCloseModal from "../hooks/useCloseModal";

const Menu = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

const StyledToggle = styled.button`
  background: none;
  border: none;
  padding: 0.4rem;
  border-radius: var(--border-radius-sm);
  transform: translateX(0.8rem);
  transition: all 0.2s;

  &:hover {
    background-color: var(--color-grey-100);
  }

  & svg {
    width: 2.4rem;
    height: 2.4rem;
    color: var(--color-grey-700);
  }
`;

const StyledList = styled.ul`
  position: fixed;

  background-color: var(--color-grey-0);
  box-shadow: var(--shadow-md);
  border-radius: var(--border-radius-md);

  right: ${(props) => props.position.x}px;
  top: ${(props) => props.position.y}px;
`;

const StyledButton = styled.button`
  width: 100%;
  text-align: left;
  background: none;
  border: none;
  padding: 1.2em 2.4em;
  font-size: 1.4rem;
  transition: all 0.2s;

  display: flex;
  align-items: center;
  gap: 1.6rem;

  &:hover {
    background-color: var(--color-grey-50);
  }

  & svg {
    width: 1.6rem;
    height: 1.6rem;
    color: var(--color-grey-400);
    transition: all 0.3s;
  }
`;
const MenusContext = createContext();
export default function Menus({ children }) {
  const [menuId, setMenuId] = useState("");
  const [position, setPosition] = useState(null);
  const close = () => setMenuId("");
  const open = setMenuId;

  return (
    <MenusContext.Provider
      value={{ menuId, close, open, position, setPosition }}
    >
      {children}
    </MenusContext.Provider>
  );
}
function Button({ children, icon, onClick }) {
  const { close } = useContext(MenusContext);
  function handleClick() {
    onClick?.();
    close();
  }
  return (
    <li>
      <StyledButton onClick={handleClick}>
        {icon}
        <span>{children}</span>
      </StyledButton>
    </li>
  );
}
function Toggle({ id }) {
  const { menuId, close, open, setPosition } = useContext(MenusContext);
  function handleClick(e) {
    const rect = e.target.closest("button").getBoundingClientRect();
    // console.log('window.innderwidth', window.innerWidth);
    // console.log('button width', rect.width);
    // console.log('x-coor', rect.x);
    setPosition({
      x: window.innerWidth - rect.width - rect.x,
      y: rect.y + rect.height + 8,
    });
    menuId === "" || menuId !== id ? open(id) : close();
  }
  return (
    <StyledToggle onClick={handleClick}>
      <HiEllipsisVertical />
    </StyledToggle>
  );
}

function List({ id, children }) {
  const { menuId, position, close } = useContext(MenusContext);
  const ref = useCloseModal(id, menuId, close);
  if (menuId !== id) return null;
  return createPortal(
    <StyledList position={position} ref={ref} tabIndex={-1}>{children}</StyledList>,
    document.body
  );
}

Menus.Menu = Menu;
Menus.Toggle = Toggle;
Menus.List = List;
Menus.Button = Button;
