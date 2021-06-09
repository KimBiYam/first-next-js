import { GetStaticProps } from "next";
import React from "react";

import { getPosts, PostType } from "../api";
import Layout from "../components/common/Layout";
import PostList from "../components/post/PostList";

interface Props {
  posts: PostType[];
}

function Home({ posts }: Props) {
  return (
    <Layout title="홈">
      <PostList posts={posts} />
    </Layout>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const posts: PostType[] = await getPosts();
  return { props: { posts } };
};

export default Home;
