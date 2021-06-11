import { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from "next";
import Link from "next/link";
import React from "react";
import styled from "styled-components";
import { getPost, getPosts, Post } from "../../api";
import Layout from "../../components/common/Layout";
import PostDetail from "../../components/post/PostDeatil";

interface Props {
  post: Post;
}

function PostDetailPage({ post }: Props) {
  return (
    <Layout title="게시글">
      <Link href="/">
        <BackToHome>홈으로 돌아가기</BackToHome>
      </Link>
      <Divier />
      <PostDetail post={post} />
    </Layout>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const posts: Post[] = await getPosts();

  const paths = posts.map((post) => ({
    params: { id: String(post.id) },
  }));

  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async ({
  params,
}: GetStaticPropsContext) => {
  const { id } = params;
  const post: Post = await getPost(id as string);
  return { props: { post } };
};

const BackToHome = styled.a`
  color: #2f5fd1;
  cursor: pointer;
  display: block;
`;

const Divier = styled.div`
  height: 1px;
  border-bottom: 1px solid #eeeeee;
  margin: 24px 0;
`;

export default PostDetailPage;
