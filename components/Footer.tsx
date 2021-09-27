import React from "react";
import styled from "styled-components";
import BaseContentBox from "@/components/BaseContentBox";

const Footer = () => {
  return (
    <StyledFooter>
      <BaseContentBox>
        <hr className="divider" color="#d3d3d3"/>
        <span>©︎ 2021 Lazztech.dev</span>
      </BaseContentBox>
    </StyledFooter>
  )
}

const StyledFooter = styled.footer`
  text-align: center;
  padding: 16px 0;
  background-color: #edf2f7;
  
  .divider {
    width: 60%;
    margin-bottom: 16px;
    border-width: 1px 0 0 0;
  }
`

export default Footer;