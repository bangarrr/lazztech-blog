import React from "react";
import styled from "styled-components";
import Header from "@/components/Header";
import BaseContentBox from "@/components/BaseContentBox";
import Footer from "@/components/Footer";

const Layout: React.FC = ({children}) => {
  return (
    <Root>
      <Header/>
      <main>
        <BaseContentBox>
          {children}
        </BaseContentBox>
      </main>
      <Footer/>
    </Root>
  )
}

const Root = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  
  main {
    padding: 80px 0;
    background-color: #edf2f7;
    flex: 1 0 auto;
  }
`

export default Layout