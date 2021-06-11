import { GetStaticProps } from "next";
import React from "react";

import { getPosts, Post } from "../api";
import Layout from "../components/common/Layout";
import PostList from "../components/post/PostList";

interface Props {
  posts: Post[];
}

function Home({ posts }: Props) {
  return (
    <Layout title="홈">
      <PostList posts={posts} />
    </Layout>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const posts: Post[] = await getPosts();
  return { props: { posts } };
};

export default Home;
