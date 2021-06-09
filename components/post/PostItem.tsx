import Link from "next/link";
import React from "react";
import styled from "styled-components";

import { PostType } from "../../api";

interface Props {
  post: PostType;
}

export function PostItem({ post }: Props) {
  return (
    <Link href={`/posts/${post.id}`}>
      <Container>{post.title}</Container>
    </Link>
  );
}

export default PostItem;

const Container = styled.div`
  width: 100%;
  border: 1px solid #eeeeee;
  padding: 32px;
  cursor: pointer;
`;
