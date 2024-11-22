import styled, { css } from "styled-components";

const size = {
  h1: css`
    font-size: 2.5rem;
  `,
  h2: css`
    font-size: 2rem;
    font-weight: 500;

  `,
  h3: css`
    font-size: 1.8rem;
  `
}
const Heading = styled.h1`
  font-weight: 600;
  line-height:1.4;
  ${props => size[props.as]}
`;
export default Heading;
