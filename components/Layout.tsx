import React from "react";
import Link from "next/link";
import styled from "styled-components";
import Header from "@/components/Header";

const Layout: React.FC = ({children}) => {
  return (
    <Root>
      <Header/>
      <div className="content">
        <Container>
          {children}
        </Container>
      </div>
      <footer>
        <Container>
          ©︎ 2021 Lazztech.dev
        </Container>
      </footer>
    </Root>
  )
}

const Root = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  
  .content {
    padding: 80px 0;
    background-color: #edf2f7;
    flex: 1 0 auto;
  }
  
  footer {
    text-align: center;
    padding: 16px 0;
    background-color: #edf2f7;
  }
`

export const Container = styled.div`
  max-width: 994px;
  margin: 0 auto;
  padding: 0 20px;
  width: 100%;
`

const Menu = styled.ul`
`

export default Layout