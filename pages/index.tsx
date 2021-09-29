import React, {useState} from "react";
import dayjs from "dayjs";
import styled from "styled-components";
import Link from "@/components/Link";
import {client} from "@/libs/client"
import InfiniteScroll from "react-infinite-scroller";
import {VscLoading} from "react-icons/vsc";
import {ArticleListType, ArticleType} from "@/types/api";

type Props = {
  articles: ArticleType[];
}

const Home: React.FC<Props> = ({articles}) => {
  const itemsPerScroll = 10;
  const [hasMore, setHasMore] = useState(true);
  const [items, setItems] = useState<ArticleType[]>(articles.slice(0, itemsPerScroll))

  const loadMore = (page: number) => {
    const startIdx = page * itemsPerScroll;
    const endIdx = startIdx + itemsPerScroll;
    setTimeout(() => {
      setItems(items.concat(articles.slice(startIdx, endIdx)))
      if (endIdx > articles.length) setHasMore(false);
    }, 500)
  }

  return (
    <div>
      <InfiniteScroll
        pageStart={0}
        initialLoad={false}
        loadMore={loadMore}
        hasMore={hasMore}
        loader={<Loader key="loader"><Loading/></Loader>}
      >
        {
          <ul>
            {items.map((item) => (
              <Item key={item.id}>
                <div className="published-date">{dayjs(item.publishedAt).format('YYYY/MM/DD')}</div>
                <Link href={`/articles/${item.id}`}>
                  <span className="title">{item.title}</span>
                </Link>
              </Item>
            ))}
          </ul>
        }
      </InfiniteScroll>
    </div>
  )
}

export default Home;

export const getStaticProps = async () => {
  let articles: ArticleType[] = [];
  const limit = 10;
  let offset = 0;

  while (true) {
    const data: ArticleListType = await client.get(
      {
        endpoint: "articles",
        queries: {limit: limit, offset: offset}
      }
    );

    if (data.contents.length === 0) break;

    articles = articles.concat(data.contents);
    offset += limit;
  }

  return {
    props: {
      articles: articles
    }
  }
}

const Loader = styled.div`
  display: flex;
  justify-content: center;
`

const Loading = styled(VscLoading)`
  width: 30px;
  height: 30px;
  
  animation: fa-spin 1s infinite linear;

  @keyframes fa-spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(359deg);
    }
  }
`

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