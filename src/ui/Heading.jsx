import styled, { css } from "styled-components";

const size = {
  h1: css`
    font-size: 2rem;
  `,
  h2: css`
    font-size: 1.5rem;
    color: aquamarine
  `
}
const Heading = styled.h1`
  font-weight: 600;
  ${props=>size[props.as]}
`;
export default Heading;
