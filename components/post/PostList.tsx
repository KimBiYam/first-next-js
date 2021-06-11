import React from "react";
import styled from "styled-components";
import PostItem from "./PostItem";
import { Post } from "../../api";

interface Props {
  posts: Post[];
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
