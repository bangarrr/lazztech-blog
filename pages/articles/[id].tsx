import React from "react";
import {client} from "@/libs/client";
import dayjs from "dayjs";
import styled from "styled-components";
import cheerio from "cheerio";
import hljs from "highlight.js"
import 'highlight.js/styles/hybrid.css';
import { ArticleType, ArticleListType } from "@/types/api";
import Tag from "@/components/Tag";
import {AiOutlineClockCircle} from "react-icons/ai";
import {GetStaticPropsContext} from "next";
import Meta from "@/components/Meta";
import TagList from "@/components/TagList";

type Props = {
  article: ArticleType;
}

const Article: React.FC<Props> = ({article}) => {
  return (
    <Main>
      <Meta title={article.title}/>
      <div className="clock">
        <AiOutlineClockCircle/>
        {dayjs(article.publishedAt).format('YYYY/MM/DD')}
      </div>
      <h1 className="title">{article.title}</h1>
      <TagList tags={article.category}/>
      <div
        dangerouslySetInnerHTML={{
          __html: `${article.body}`,
        }}
        className="body"
      >
      </div>
    </Main>
  )
}

export default Article

export const getStaticPaths = async () => {
  const data: ArticleListType = await client.get({endpoint: "articles"})

  const paths = data.contents.map((content) => `/articles/${content.id}`)
  return {paths, fallback: false};
}

export const getStaticProps = async (context: any) => {
  const id = context.params?.id;

  const data: ArticleType = await client.get({endpoint: "articles", contentId: id})

  const $ = cheerio.load(data.body);
  $('pre code').each((_, elm) => {
    const result = hljs.highlightAuto($(elm).text());
    $(elm).html(result.value);
    $(elm).addClass('hljs');
  })

  return {
    props: {
      article: {...data, body: $.html()},
    }
  }
}

const Main = styled.div`
  background-color: #FFF;
  border-radius: 10px;
  padding: 32px;
  
  .title {
    font-size: 32px;
    margin-bottom: 8px;
    font-weight: 600;
  }
  
  .clock {
    display: flex;
    align-items: center;
    color: ${props => props.theme.colors.text.secondary};
  }
  
  .body {
    margin-top: 40px;
    
    a {
      color: ${props => props.theme.colors.primary};
    }
    
    ul {
      padding: 1rem 0 1rem 1rem;
    }
    
    li {
      list-style: disc inside;
    }
    
    code:not(.hljs) {
      border: 1px solid #ddd;
      background-color: #fff;
      color: #ff357f;
      margin: 0 2px;
      padding: 2px;
    }
    
    img {
      margin: 20px 0;
      width: 100%;
    }
  }
`