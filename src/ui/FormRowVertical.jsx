/* eslint-disable react/prop-types */
import styled, { css } from "styled-components";

const StyledFormRowVeritcal = styled.div`
  display: grid;
  align-items: center;
  grid-template-columns: 15rem 1fr ;
  ${(props) => props?.error && css`
  grid - template - columns: 15rem 1fr 1.2fr;
`}
  gap: 0.8rem;
  padding: 1.2em 0;

`;

const Label = styled.label`
  font-weight: 500;
`;

const Error = styled.span`
  font-size: 1.4rem;
  color: var(--color-red-700);
`;
const FormRowVertical = ({ error, label, children }) => {
  return (
    <StyledFormRowVeritcal error={error}>
      {label && <Label htmlFor={children.props.id}>{label}</Label>}
      {children}
      {error && <Error>{error}</Error>}
    </StyledFormRowVeritcal>
  );
};

FormRowVertical.defaultProps = {
  error: false,
}
export default FormRowVertical;
