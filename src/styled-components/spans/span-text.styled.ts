import styled from "styled-components";

export const SpanTextStyled = styled.div`
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border-radius: 3px;
  /* Color the border and text with theme.main */
  color: ${(props) => props.color};
  border: 2px solid ${(props) => props.color};
`;

SpanTextStyled.defaultProps = {
  color: "#59DE12",
};
