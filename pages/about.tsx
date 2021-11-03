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

const metaTitle = "プロフィール"

const About: React.FC<Props> = ({profile}) => {
  return (
    <>
      <Meta title={metaTitle}/>
      <Box ml="12px">
        <h1>About</h1>
      </Box>
      <Wrapper>
        <div className="name">{profile.name}</div>
        <img src={`${profile.thumbnail.url}?w=200`} className="thumbnail"/>
        <div dangerouslySetInnerHTML={{__html: `${profile.body}`}}></div>
        <Box mt="16px">
          {makeSnsLinks(profile)}
        </Box>
      </Wrapper>
    </>
  )
}

export default About;

const makeSnsLinks = (profile: ProfileType) => {
  const snsIcon = (snsType: string) => {
    switch (snsType) {
      case "github":
        return <FaGithub/>
        break
      case "twitter":
        return <FaTwitterSquare/>
        break
      default:
        return ""
    }
  }

  return (
    <>
      {profile.sns_links.map((sns, index) => {
        return (
          <Link href={sns.link} key={sns.link} blank={true}>
            <Flex alignItems="center">
              {snsIcon(sns.type)}
              <Box ml="4px">{sns.link}</Box>
            </Flex>
          </Link>
        );
      })}
    </>
  )
}

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