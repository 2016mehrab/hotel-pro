/* eslint-disable react/prop-types */
import {
  cloneElement,
  createContext,
  useContext,
  useState,
} from "react";
import { createPortal } from "react-dom";
import styled from "styled-components";
import useCloseModal from "../hooks/useCloseModal";

const Overlay = styled.div`
  outline: 1px solid hotpink;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.8);
  position: fixed;
  inset: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.3s ease-in;
  cursor: pointer;
`;
const StyledModal = styled.div`
  border-radius: 5px;
  background-color: #fff;
  overflow: auto;
  display: grid;
  padding: 1em;
  gap: 1.25rem;
`;
const CloseWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const ModalContext = createContext();

const Modal = ({ children }) => {
  const [modalName, setModalName] = useState("");
  const closeHandler = () => setModalName("");
  const openHandler = setModalName;

  return (
    <ModalContext.Provider value={{ modalName, openHandler, closeHandler }}>
      {children}
    </ModalContext.Provider>
  );
};

const Open = ({ children, requestedWindow}) => {
  const { openHandler } = useContext(ModalContext);
  return cloneElement(children, {
    onClick: () => openHandler(requestedWindow),
  });
};

const Window = ({ children, window, closeIcon }) => {
  const { modalName, closeHandler } = useContext(ModalContext);
  const ref = useCloseModal(window, modalName, closeHandler);

  if (window !== modalName) return null;
  return createPortal(
    <Overlay>
      <StyledModal ref={ref}
      tabIndex={-1}
      >
        {closeIcon ? (
          <CloseWrapper>
            {cloneElement(closeIcon, { onClick: closeHandler })}
          </CloseWrapper>
        ) : (
          <CloseWrapper>
            <button onClick={closeHandler}  style={{ paddingInline: "1em",border:'none' }}>X</button>
          </CloseWrapper>
        )}
        <div>{cloneElement(children,{closeModal:closeHandler})}</div>
      </StyledModal>
    </Overlay>,
    document.body
  );
};
Modal.Window = Window;
Modal.Open = Open;

export default Modal;
