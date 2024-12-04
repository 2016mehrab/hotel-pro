import styled, { css } from "styled-components";

const alignItems = css`
  align-items: center;
`;
const justifyContent = css`
  justify-content: space-between;
`;
const Row = styled.div`
  display: flex;
  ${(props) =>
    props.type === "verticle" &&
    css`
      flex-direction: column;
      ${alignItems}
      ${justifyContent}
    `}
  ${(props) =>
    props.type === "horizontal" &&
    css`
      flex-direction: row;
      ${justifyContent}
      ${alignItems}
    `}
`;
Row.defaultProps = {
  type: "verticle",
};
export default Row;
