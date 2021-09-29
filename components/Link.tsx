import React from "react";
import styled from "styled-components";
import NextLink from "next/link";

type Props = {
  href: string;
  isOriginal?: boolean;
}

const Link: React.FC<Props> = ({href, isOriginal = false, children}) => {
  return (
    <NextLink href={href} passHref>
      <StyledATag isOriginal={isOriginal}>
        {children}
      </StyledATag>
    </NextLink>
  )
}

const StyledATag = styled.a<{isOriginal: boolean}>`
  cursor: pointer;
  color: ${props => props.isOriginal ? props.theme.colors.primary : "inherit"};
`

export default Link;
