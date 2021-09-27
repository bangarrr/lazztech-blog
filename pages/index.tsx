import React from "react";
import dayjs from "dayjs";
import styled from "styled-components";
import Link from "@/components/Link";
import {client} from "@/libs/client"
import {ArticleListType, ArticleType} from "@/types/api";

type Props = {
  articles: ArticleType[];
}

const Home: React.FC<Props> = ({articles}) => {
  return (
    <div>
      <ul>
        {articles.map((item) => (
          <Item key={item.id}>
            <div className="published-date">{dayjs(item.publishedAt).format('YYYY/MM/DD')}</div>
            <Link href={`/articles/${item.id}`}>
              <span className="title">{item.title}</span>
            </Link>
          </Item>
        ))}
      </ul>
    </div>
  )
}

export default Home;

export const getStaticProps = async () => {
  const data: ArticleListType = await client.get({endpoint: "articles"});

  return {
    props: {
      articles: data.contents,
    }
  }
}

const Item = styled.li`
  padding: 32px;
  background-color: ${props => props.theme.colors.contrast};
  margin-bottom: 24px;
  border-radius: 16px;
  
  .published-date {
    font-size: 14px;
    color: ${props => props.theme.colors.text.secondary};
  }
  
  .title {
    font-size: 22px;
  }
`