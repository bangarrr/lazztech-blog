import React from "react";
import styled from "styled-components";
import {Box, Flex} from "reflexbox"
import {FaTwitterSquare, FaGithub} from "react-icons/fa";
import Link from "@/components/Link";

const About: React.FC = () => {
  return (
    <>
      <Box ml="12px">
        <h1>About</h1>
      </Box>
      <Wrapper>
        <p>
          横浜でフリーランスをしているアラサーWebエンジニアです。Ruby on Rails、Python、Reactあたりをよく触っています。<br/>
          現在はベンチャー系の企業でSaasの開発をしています。(バックエンド、フロントエンド)<br/>
          このブログは業務や個人の開発で得た知見を残していく場所として使っていこうと思います。
        </p>

        <Box mt="16px">
          <Link href="https://twitter.com/im_taihouyo">
            <Flex alignItems="center">
              <FaTwitterSquare/>
              <Box ml="4px">https://twitter.com/im_taihouyo</Box>
            </Flex>
          </Link>
          <Link href="https://github.com/bangarrr">
            <Flex alignItems="center" mt="4px">
              <FaGithub/>
              <Box ml="4px">https://github.com/bangarrr</Box>
            </Flex>
          </Link>
        </Box>
      </Wrapper>
    </>
  )
}

const Wrapper = styled.div`
  margin-top: 20px;
  background-color: ${props => props.theme.colors.contrast};
  padding: 40px;
  border-radius: 20px;
`

export default About;