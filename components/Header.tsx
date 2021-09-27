import styled from "styled-components";
import Link from "@/components/Link"
import {Flex} from "reflexbox";
import React from "react";
import BaseContentBox from "@/components/BaseContentBox";

const Header = () => {
  const menuItems = [
    {name: "post", href: "/"},
    {name: "about", href: "/about"}
  ]

  return (
    <StyledHeader>
      <BaseContentBox>
        <Flex alignItems="center" justifyContent="space-between">
          <Link href="/">
            <h2 className="title">Lazztech.dev</h2>
          </Link>
          <ul className="menu">
            {menuItems.map((item) => (
              <Link href={item.href} key={item.name}>
                <li>{item.name}</li>
              </Link>
            ))}
          </ul>
        </Flex>
      </BaseContentBox>
    </StyledHeader>
  )
}

const StyledHeader = styled.header`
  padding: 20px 0;
    .menu {
      display: flex;
      
      a:not(:first-child) {
        margin-left: 20px;
      }
    }
  
  a:hover {
    text-decoration: none;
  }
`

export default Header;