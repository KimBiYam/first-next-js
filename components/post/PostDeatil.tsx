import React from "react";
import styled from "styled-components";

import { Post } from "../../api";

interface Props {
  post: Post;
}

function PostDetail({ post }: Props) {
  return (
    <Container>
      <Title>{post.title}</Title>
      <Content>{post.body}</Content>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
`;

const Title = styled.h1`
  color: #222222;
  font-size: 18px;
  font-weight: bold;
`;

const Content = styled.p`
  font-size: 14px;
  color: #222222;
`;

export default PostDetail;
