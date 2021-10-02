import React from "react";
import Tag from "@/components/Tag";
import {Flex} from "reflexbox";
import styled from "styled-components";

type Props = {
  tags: string[];
}

const TagList: React.FC<Props> = ({tags}) => {
  return (
    <Wrapper alignItems="center">
      {tags.map((tag) => {
        return <Tag className="tag" key={tag}>{tag}</Tag>
      })}
    </Wrapper>
  )
}

export default TagList;

const Wrapper = styled(Flex)`
  .tag:not(:first-child) {
    margin-left: 4px;
  }
`