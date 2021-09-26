import styled from "styled-components";
import Link from "@/components/Link"
import React from "react";
import {Container} from "@/components/Layout";

const Header = () => {
  const menuItems = [
    {name: "post", href: "/"},
    {name: "about", href: "/about"}
  ]

  return (
    <Wrapper>
      <Container className="header-list">
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
      </Container>
    </Wrapper>
  )
}

const Wrapper = styled.header`
  padding: 20px 0;
  
  .header-list {
    display: flex;
    justify-content: space-between;
    align-items: center;
    
    .menu {
      display: flex;
      
      a:not(:first-child) {
        margin-left: 20px;
      }
    }
  }
`

export default Header;