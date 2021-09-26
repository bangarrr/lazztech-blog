import React from "react";
import NextLink from "next/link";

type Props = {
  href: string;
}

const Link: React.FC<Props> = ({href, children}) => {
  return (
    <NextLink href={href}>
      <a>{children}</a>
    </NextLink>
  )
}

export default Link;
