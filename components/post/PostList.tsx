import React from "react";
import styled from "styled-components";

import { PostType } from "../../api";
import { PostItem } from "./PostItem";

interface Props {
  posts: PostType[];
}

export function PostList({ posts }: Props) {
  return (
    <>
      {posts.map((post) => {
        return (
          <PostWrapper key={post.id}>
            <PostItem post={post} />
          </PostWrapper>
        );
      })}
    </>
  );
}

const PostWrapper = styled.div`
  margin-bottom: 12px;
  :last-child {
    margin-bottom: 0;
  }
`;

export default PostList;
