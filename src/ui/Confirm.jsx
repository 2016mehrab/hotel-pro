/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import styled from "styled-components";
import Button from "./Button";
import Heading from "./Heading";

const StyledConfirmationWindow = styled.div`
  width: 40rem;
  display: flex;
  flex-direction: column;
  gap: 1.2rem;

  & p {
    color: var(--color-grey-500);
    margin-bottom: 1.2rem;
  }

  & div {
    display: flex;
    justify-content: flex-end;
    gap: 1.2rem;
  }
`;

function ConfirmationWindow({ onConfirm, disabled, closeModal }) {
  return (
    <StyledConfirmationWindow>
      <Heading as="h3">Confirmation</Heading>
      <p>
        Are you sure?
      </p>
      <div>
        <Button variation="secondary" onClick={closeModal} disabled={disabled}>
          Cancel
        </Button>
        <Button onClick={onConfirm} variation="danger" disabled={disabled}>
          Ok
        </Button>
      </div>
    </StyledConfirmationWindow>
  );
}

export default ConfirmationWindow;
