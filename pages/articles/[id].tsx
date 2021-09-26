import {client} from "@/libs/client";
import dayjs from "dayjs";
import styled from "styled-components";
import cheerio from "cheerio";
import hljs from "highlight.js"
import 'highlight.js/styles/hybrid.css';
import Button from "@/components/Button";
import {AiOutlineClockCircle} from "react-icons/ai";

const Article = ({article}) => {
  return (
    <Main>
      <div className="clock">
        <AiOutlineClockCircle/>
        {dayjs(article.publishedAt).format('YYYY/MM/DD')}
      </div>
      <h1 className="title">{article.title}</h1>
      <div className="category">
        {article.category.map((cat) => {
          return <Button className="tag">{cat}</Button>
        })}
      </div>
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
  const data = await client.get({endpoint: "articles"})

  const paths = data.contents.map((content) => `/articles/${content.id}`)
  return {paths, fallback: false};
}

export const getStaticProps = async (context) => {
  const id = context.params.id
  const data = await client.get({endpoint: "articles", contentId: id})

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

const Main = styled.main`
  background-color: #FFF;
  border-radius: 10px;
  padding: 24px 32px;
  
  .title {
    font-size: 32px;
    margin-bottom: 8px;
  }
  
  .clock {
    display: flex;
    align-items: center;
    color: ${props => props.theme.colors.text.secondary};
  }
  
  .category {
    .tag:not(:first-child) {
      margin-left: 4px;
    }
  }
  
  .body {
    margin-top: 40px;
    a {
      color: ${props => props.theme.colors.primary};
    }
    
    :not(pre) > code {
      border: 1px solid #ddd;
      background-color: #fff;
      color: #ff357f;
      margin: 0 2px;
    }
  }
`