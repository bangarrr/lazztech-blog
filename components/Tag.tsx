import styled from "styled-components";

const Tag = styled.button`
  border-radius: 4px;
  border: none;
  display: inline-block;
  padding: 4px 8px;
  color: ${props => props.theme.colors.contrast};
  background-color: ${props => props.theme.colors.primary};
  cursor: pointer;
  font-size: 12px;
`

export default Tag;