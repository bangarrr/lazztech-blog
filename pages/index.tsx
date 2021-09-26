import dayjs from "dayjs";
import styled from "styled-components";
import Link from "next/link";
import {client} from "@/libs/client"

export default function Home({articles}) {
  return (
    <div>
      <ul>
        {articles.map((item) => (
          <Item key={item.id}>
            <div className="published-date">{dayjs(item.publishedAt).format('YYYY/MM/DD')}</div>
            <Link href={`/articles/${item.id}`}>
              <a className="title">{item.title}</a>
            </Link>
          </Item>
        ))}
      </ul>
    </div>
  )
}

export const getStaticProps = async () => {
  const data = await client.get({endpoint: "articles"});

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