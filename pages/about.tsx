import React from "react";
import styled from "styled-components";
import {client} from "@/libs/client";
import {Box, Flex} from "reflexbox"
import {FaTwitterSquare, FaGithub} from "react-icons/fa";
import Link from "@/components/Link";
import {ProfileType} from "@/types/api";
import Meta from "@/components/Meta";

type Props = {
  profile: ProfileType
}

const About: React.FC<Props> = ({profile}) => {
  return (
    <>
      <Meta title="プロフィール"/>
      <Box ml="12px">
        <h1>About</h1>
      </Box>
      <Wrapper>
        <div className="name">{profile.name}</div>
        <img src={`${profile.thumbnail.url}?w=200`} className="thumbnail"/>
        <div dangerouslySetInnerHTML={{__html: `${profile.body}`}}></div>
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

export default About;

export const getStaticProps = async () => {
  const data: ProfileType = await client.get({endpoint: "profile"});

  return {
    props: {
      profile: data
    }
  }
}

const Wrapper = styled.div`
  margin-top: 20px;
  background-color: ${props => props.theme.colors.contrast};
  padding: 40px;
  border-radius: 20px;
  
  .name {
    font-size: 20px;
    font-weight: 500;
  }
  
  .thumbnail {
    margin: 12px 0;
  }
  
  @media screen and (max-width: 540px) {
    .thumbnail {
      width: 100%;
    }
  }
`