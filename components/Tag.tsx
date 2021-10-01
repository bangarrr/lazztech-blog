import styled from "styled-components";

const Button = styled.button`
  border-radius: 4px;
  border: none;
  display: inline-block;
  padding: 4px 8px;
  color: ${props => props.theme.colors.contrast};
  background-color: ${props => props.theme.colors.primary};
  cursor: pointer;
`

export default Button;